import Navigation from "@/components/Navigation";
import Video from "@/components/video";
import { getServerSession } from "next-auth";

export default async function Resources() {
  const session = await getServerSession()

    return (
      <Navigation session={session}>
        <main className="">
        <Video />
        </main>
      </Navigation>
    );


}
