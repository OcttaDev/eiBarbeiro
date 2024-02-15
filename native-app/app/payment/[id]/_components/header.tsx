"use client";
import { Button } from "@/app/_components/ui/button";
import { ArrowLeftFromLine, StepBack } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleBackAbout = () => {
    router.push("/lobby");
  };
  return (
    <div className="w-full h-10 p-3">
      <Button variant="outline" size="icon" onClick={handleBackAbout}>
        <ArrowLeftFromLine />
      </Button>
    </div>
  );
}
