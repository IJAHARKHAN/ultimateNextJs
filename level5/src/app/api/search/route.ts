import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  let query = await request.nextUrl.searchParams.get('q');
  return NextResponse.json({
    getVal: query
  });
}

// http://localhost:3000/api/search?q=20