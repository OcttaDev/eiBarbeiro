import { Plan } from "@prisma/client";

interface PlansProps {
  plan: Plan;
}

export default function Plans({ plan }: PlansProps) {
  return (
    <div className="w-full">
      <h1>{plan.name}</h1>
    </div>
  );
}
