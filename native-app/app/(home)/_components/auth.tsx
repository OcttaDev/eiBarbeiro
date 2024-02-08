"use client";

import { Button } from "@/app/_components/ui/button";
import { Chrome } from "lucide-react";
import { signIn } from "next-auth/react";

export default function Auth() {
  const handleLogin = () => signIn();
  return (
    <div className="flex flex-col gap-3 items-center ">
      <h1 className="text-sm text-center max-w-[600px]">
        Olá, seja bem vindo ao <strong>eiBarbeiro</strong>, para prosseguir
        cadastre-se atraves de uma conta google para manter seus dados
        protegidos.
      </h1>
      <Button
        variant="outline"
        size="icon"
        className="w-80 gap-2"
        onClick={handleLogin}
      >
        <Chrome /> <p>Continuar com o Google</p>
      </Button>
    </div>
  );
}
