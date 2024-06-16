import Navigation from "@/components/Navigation";
import { getServerSession } from "next-auth";
import JobDetails from "./jobsDetails";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function Home({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)

  return (
    <Navigation session={session}>
      <main className="">
        <JobDetails id={params.id} session={session} />
      </main>
    </Navigation>
  );


}
