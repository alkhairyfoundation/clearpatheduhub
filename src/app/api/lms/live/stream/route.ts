import { NextRequest } from "next/server";
import { requireRole } from "@/lib/session";
import { getRoster, toRosterPayload } from "@/lib/live/store";
import { subscribe } from "@/lib/live/hub";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const user = await requireRole(["TEACHER", "ADMIN"]);
  const classId = request.nextUrl.searchParams.get("classId") || "";

  const encoder = new TextEncoder();
  const source: UnderlyingSource<Uint8Array> = {
    start(controller) {
      const send = (data: string) => controller.enqueue(encoder.encode(data));

      const roster = getRoster(classId);
      send(
        `event: snapshot\ndata: ${JSON.stringify(roster.map(toRosterPayload))}\n\n`
      );

      const unsubscribe = subscribe(classId, send);
      const keepAlive = setInterval(() => send(`: keep-alive\n\n`), 25_000);
      const cleanup = () => {
        clearInterval(keepAlive);
        unsubscribe();
      };
      (source as unknown as { __cleanup?: () => void }).__cleanup = cleanup;
    },
    cancel() {
      const cleanup = (source as unknown as { __cleanup?: () => void }).__cleanup;
      if (cleanup) cleanup();
    },
  };

  return new Response(new ReadableStream(source), {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
