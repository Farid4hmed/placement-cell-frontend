import Navigation from "@/components/Navigation";
import { getServerSession } from "next-auth";
import Jobs from "../alljobs/jobs";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions)

    return (
      <Navigation session={session}>
        <main className="">
        <Jobs session={session}/>
        </main>
      </Navigation>
    );


}
