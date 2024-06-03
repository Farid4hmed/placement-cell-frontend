import Navigation from "@/components/Navigation";
import Gpt from "@/components/Gpt";
import { getServerSession } from "next-auth";

export default async function Main() {
  const session = await getServerSession()

    return (
      <Navigation session={session}>
        <main className="">
          <Gpt />
        </main>
      </Navigation>
    );


}
