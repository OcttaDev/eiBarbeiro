"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/_components/ui/alert-dialog";
import { Avatar, AvatarImage } from "@/app/_components/ui/avatar";
import { Button } from "@/app/_components/ui/button";
import {
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/app/_components/ui/sheet";

import {
  Briefcase,
  HelpCircle,
  LogOutIcon,
  PersonStanding,
  Settings,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MenuItems() {
  const { data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!data?.user) {
      router.push("/");
    }
  }, [data?.user]);

  const handleLogout = () => signOut();
  const handleSwithAccount = () => signIn();

  return (
    <>
      <SheetHeader className="text-left border-b border-solid border-secondary p-5">
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>
      <div className="flex justify-between px-5 py-6 items-center">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={data?.user?.image ?? ""} />
          </Avatar>

          <h2 className="font-bold">{data?.user?.name}</h2>
        </div>

        <Button variant="secondary" size="icon">
          <LogOutIcon onClick={handleLogout} />
        </Button>
      </div>
      <div className="flex flex-col gap-3 px-5 my-6">
        <Button variant="outline" className="justify-start" asChild>
          <Link href="">
            <Settings className="mr-3" />
            setting
          </Link>
        </Button>
        <Button variant="outline" className="justify-start" asChild>
          <Link href="">
            <PersonStanding className="mr-3" />
            your profile
          </Link>
        </Button>
        <Button variant="outline" className="justify-start" asChild>
          <Link href="">
            <Briefcase className="mr-3" />
            barbershop profile
          </Link>
        </Button>
        <Button variant="outline" className="justify-start" asChild>
          <Link href="">
            <HelpCircle className="mr-3" />
            help & faq
          </Link>
        </Button>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Sair ou trocar de conta</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Deseja mesmo sair ou trocar de conta?
              </AlertDialogTitle>
              <AlertDialogDescription>
                Ao continuar esta ação, certifique-se de que memorizou seus
                dados de login, para que não perca os dados da sua barbearia.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex-row justify-between gap-3">
              <AlertDialogCancel className="w-20 mt-0 mr-40 bg-primary">
                Voltar
              </AlertDialogCancel>
              <div className="flex items-center gap-5">
                <AlertDialogAction
                  className="bg-secondary hover:bg-secondary"
                  onClick={handleLogout}
                >
                  sair
                </AlertDialogAction>
                <AlertDialogAction
                  className="bg-secondary hover:bg-secondary"
                  onClick={handleSwithAccount}
                >
                  trocar de conta
                </AlertDialogAction>
              </div>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <h1 className="text-xs text-gray-400 mt-20">
        ₢OcttaDev | eiBarbeiro 1.0.0
      </h1>
    </>
  );
}
