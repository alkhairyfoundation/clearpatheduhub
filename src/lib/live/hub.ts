type SendFn = (_data: string) => void;

type HubShape = Map<string, Set<SendFn>>;

function getHub(): HubShape {
  const g = globalThis as unknown as { __clearpathLiveHub?: HubShape };
  if (!g.__clearpathLiveHub) g.__clearpathLiveHub = new Map();
  return g.__clearpathLiveHub;
}

/** Subscribes a client to live updates for a class. Returns an unsubscribe fn. */
export function subscribe(classId: string, send: SendFn): () => void {
  const hub = getHub();
  let set = hub.get(classId);
  if (!set) {
    set = new Set();
    hub.set(classId, set);
  }
  set.add(send);
  return () => {
    set.delete(send);
    if (set.size === 0) hub.delete(classId);
  };
}

export function broadcast(classId: string, event: string, payload: unknown) {
  const set = getHub().get(classId);
  if (!set) return;
  const line = `event: ${event}\ndata: ${JSON.stringify(payload)}\n\n`;
  for (const send of set) {
    try {
      send(line);
    } catch {
      // subscriber disconnected
    }
  }
}
