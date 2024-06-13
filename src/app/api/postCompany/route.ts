import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const { name, logo, website } = await request.json();

    if (!name || !logo || !website) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    await sql`INSERT INTO company (name, logo, website) VALUES (${name}, ${logo}, ${website})`;

    return new NextResponse("Company added", { status: 201 });

}
    catch (error: any) {
        console.error(error);
        return new NextResponse("An error occurred", { status: 500 });
    }
}
