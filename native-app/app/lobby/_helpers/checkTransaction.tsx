import { db } from "@/app/_lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function CheckTransaction() {
  const session = await getServerSession(authOptions);
  const transaction = await db.transaction.findFirst({
    where: {
      userId: (session?.user as any)?.id,
    },
  });

  return {
    transaction,
  };
}
