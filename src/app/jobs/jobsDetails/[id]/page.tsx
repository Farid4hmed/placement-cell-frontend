import Navigation from "@/components/Navigation";
import { getServerSession } from "next-auth";
import JobDetails from "./jobsDetails";

export default async function Home({ params }: { params: { id: string } }) {
  const session = await getServerSession()

  return (
    <Navigation session={session}>
      <main className="">
        <JobDetails id={params.id} />
      </main>
    </Navigation>
  );


}
