import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "ClearPath Edu Hub",
    version: "1.0.0",
    description: "An integrated educational ecosystem — Consciousness, Competence, Character",
    endpoints: {
      contact: "/api/contact",
    },
  });
}
