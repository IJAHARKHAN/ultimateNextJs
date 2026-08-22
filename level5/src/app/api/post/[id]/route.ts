import { NextRequest, NextResponse } from "next/server";

interface ParameterDecorator {
  params: {
    id: number
  }
}

export async function GET(request: NextRequest, { params }: ParameterDecorator) {
  const { id } = await params;

  return NextResponse.json({
    postId: id,
    name: "Moon Khan",
    email: "moon.khan@example.com",
    mobile: "123-456-7890"
  });
}

// http://localhost:3000/api/post/20