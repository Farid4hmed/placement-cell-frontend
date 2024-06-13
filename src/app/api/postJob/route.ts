import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const {
      title,
      role,
      about_you,
      things_you_might_do,
      skills,
      company_name,
      salary,
      location,
      job_type,
    } = await request.json();

    if (
      !title ||
      !role ||
      !about_you ||
      !things_you_might_do ||
      !skills ||
      !company_name ||
      !salary ||
      !location ||
      !job_type
    ) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    await sql`INSERT INTO jobs (title, role, about_you, things_you_might_do, skills, company_name, salary, location, job_type) VALUES (${title}, ${role}, ${about_you}, ${things_you_might_do}, ${skills}, ${company_name}, ${salary}, ${location}, ${job_type})`;

    return new NextResponse("Job listing added", { status: 201 });
  } catch (error: any) {
    console.error(error);
    return new NextResponse("An error occurred", { status: 500 });
  }
}
