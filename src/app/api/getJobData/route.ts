import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(request: Request) {
  try {
    //get all jobs from jobs table
    const Jobs = await sql`SELECT 
    jobs.id,
    jobs.title,
    jobs.role,
    jobs.about_you,
    jobs.things_you_might_do,
    jobs.skills,
    jobs.company_name,
    jobs.salary,
    jobs.location,
    jobs.job_type,
    jobs.created_at,
    company.website,
    company.logo
     FROM jobs
    left join company on jobs.company_name = company.name`;

    return new Response(JSON.stringify(Jobs), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

  } catch (error: any) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to get file URL' }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
