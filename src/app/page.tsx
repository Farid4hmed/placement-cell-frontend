import Navigation from "@/components/Navigation";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession()

    return (
      <Navigation session={session}>
        <main className="">

        </main>
      </Navigation>
    );


}
