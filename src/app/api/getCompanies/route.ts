import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET() {
  try {
    const result = await sql`SELECT id, name FROM company`;
    const companies = result.rows;
    return NextResponse.json(companies);
  } catch (error: any) {
    console.error(error);
    return new NextResponse("An error occurred", { status: 500 });
  }
}
