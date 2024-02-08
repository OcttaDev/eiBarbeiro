import { Button } from "@/app/_components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/app/_components/ui/sheet";
import {
  BarChart3,
  Home,
  MoreVertical,
  NotebookTabs,
  Scissors,
} from "lucide-react";
import Link from "next/link";
import MenuItems from "./menu-items";
import CheckTransaction from "../_helpers/checkTransaction";

export default async function NavItems() {
  const isPaidPlan = (await CheckTransaction()).transaction;

  return (
    <nav className="flex items-center gap-5">
      {isPaidPlan ? (
        <div className="flex items-center gap-5 mr-10">
          <Button asChild variant="outline" size="icon" className="border-none">
            <Link href="">
              <Home />
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon" className="border-none">
            <Link href="">
              <Scissors />
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon" className="border-none">
            <Link href="">
              <NotebookTabs />
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon" className="border-none">
            <Link href="">
              <BarChart3 />
            </Link>
          </Button>
        </div>
      ) : (
        <Button>Ver planos</Button>
      )}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <MoreVertical />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <MenuItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
}
