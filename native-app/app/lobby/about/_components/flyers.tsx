"use client";

import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Plan } from "@prisma/client";
import { UserRound } from "lucide-react";
import { useRouter } from "next/navigation";

interface FlyersProps {
  plan: Plan;
}
export default function Flyers({ plan }: FlyersProps) {
  const router = useRouter();
  const handlePaymentClick = () => {
    router.push(`/payment/${plan.id}`);
  };
  return (
    <>
      <Card className="bg-primary/50" key={plan.id}>
        <CardContent className="flex flex-col justify-center px-3 py-5 gap-3 ">
          <div className="flex justify-center w-full">
            <span className="flex justify-center items-center w-10 h-10 bg-primary rounded-full">
              <UserRound />
            </span>
          </div>
          <div className="flex flex-col gap-2 my-6">
            <h1 className="text-lg text-ellipsis overflow-hidden">
              {plan.name}
            </h1>
            <p className="text-xs max-w-60 text-gray-400">{plan.description}</p>
            <h2 className="mt-5">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(plan.price))}
            </h2>
          </div>
          <Button onClick={handlePaymentClick}>Assinar</Button>
        </CardContent>
      </Card>
    </>
  );
}
