import Navigation from "@/components/Navigation";
import { getServerSession } from "next-auth";

export default async function Jobs() {
  const session = await getServerSession()

    return (
      <Navigation session={session}>
        <main className="">

        </main>
      </Navigation>
    );


}
