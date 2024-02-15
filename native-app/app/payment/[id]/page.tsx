import { db } from "@/app/_lib/prisma";
import Header from "./_components/header";
import Plans from "./_components/plans";

interface PaymentDetails {
  params: {
    id?: string;
  };
}

export default async function Payment({ params }: PaymentDetails) {
  if (!params.id) {
    return null;
  }
  const plan = await db.plan.findUnique({
    where: {
      id: params.id,
    },
  });
  return (
    <>
      <Header />
      <div className="mt-32 px-3 w-full">
        <Plans plan={plan!} />
      </div>
    </>
  );
}
