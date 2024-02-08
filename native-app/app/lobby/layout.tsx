import { ReactNode } from "react";
import Header from "./_components/header";

export default function LobbyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
