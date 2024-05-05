import Navigation from "@/components/Navigation";
import Resources from "@/components/resources";
import { getServerSession } from "next-auth";

export default async function Main() {
  const session = await getServerSession()

    return (
      <Navigation session={session}>
        <main className="">
          <Resources />
        </main>
      </Navigation>
    );


}
