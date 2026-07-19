import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      name: "Moon Khan",
      email: "khan7oct@gmail.com",
      mobile: 8948184933
    },

    {
      id: 2,
      name: "Ijahar Khan",
      email: "ijahar7oct@gmail.com",
      mobile: 8948184910
    },
  ]);
}

export async function POST(request: NextRequest) {
  let {id, name, email, mobile} = await request.json();
  return NextResponse.json({
    id,
    name,
    email,
    mobile
  });
}

// export async function POST(request: NextRequest) {
//   const body = await request.json();

//   console.log(body);

//   return NextResponse.json(body);
// }