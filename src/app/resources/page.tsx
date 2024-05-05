import Navigation from "@/components/Navigation";
import Resources from "@/components/resources";
import { getServerSession } from "next-auth";

export default async function Resources() {
  const session = await getServerSession()

    return (
      <Navigation session={session}>
        <main className="">
          <Resources />
        </main>
      </Navigation>
    );


}
