"use client";
import { Card, CardContent } from "@/app/_components/ui/card";
import Flyers from "@/app/lobby/about/_components/flyers";
import { Plan } from "@prisma/client";
import { CreditCard, QrCode, Wallet2 } from "lucide-react";
import { ChangeEvent, useState } from "react";
import SelectMethodPayment from "./selectMethoPayment";

interface PlansProps {
  plan: Plan;
}

export default function Plans({ plan }: PlansProps) {
  return (
    <div className="flex justify-evenly items-center w-full">
      <SelectMethodPayment />
      <Flyers plan={plan} />
    </div>
  );
}
