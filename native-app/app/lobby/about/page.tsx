import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { db } from "@/app/_lib/prisma";
import { UserRound, UsersRound } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Flyers from "./_components/flyers";

export default async function About() {
  const plans = await db.plan.findMany();

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-2xl font-bold">Assine agora</h1>
      <div className="flex items-center gap-10 mt-32">
        {plans.map((plan) => {
          return <Flyers plan={plan} key={plan.id} />;
        })}
      </div>
    </div>
  );
}
