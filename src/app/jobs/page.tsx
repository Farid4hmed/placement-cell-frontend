import Navigation from "@/components/Navigation";
import { getServerSession } from "next-auth";
import Jobs from "./jobs";

export default async function Home() {
  const session = await getServerSession()

    return (
      <Navigation session={session}>
        <main className="">
        <Jobs />
        </main>
      </Navigation>
    );


}
