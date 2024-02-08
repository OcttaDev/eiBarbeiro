import { Avatar, AvatarImage } from "@/app/_components/ui/avatar";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import NavItems from "./nav-items";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex justify-between items-center w-full h-16 border-b-secondary border-b-2 px-3">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={session?.user?.image ?? ""} />
        </Avatar>
        <h1>{session?.user?.name}</h1>
      </div>
      <NavItems />
    </div>
  );
}
