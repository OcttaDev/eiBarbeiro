import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { db } from "@/app/_lib/prisma";
import { UserRound, UsersRound } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default async function About() {
  const plans = await db.plan.findMany();

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-2xl font-bold">Assine agora</h1>
      <div className="flex items-center gap-10 mt-32">
        {plans.map((plan) => {
          return (
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
                  <p className="text-xs max-w-60 text-gray-400">
                    {plan.description}
                  </p>
                  <h2 className="mt-5">
                    {Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(Number(plan.price))}
                  </h2>
                </div>
                <Button>Assinar</Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
