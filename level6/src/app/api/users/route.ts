import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson for SSG" },
    { id: 4, name: "Jully Handson for ISR" }
  ]);
  
}
