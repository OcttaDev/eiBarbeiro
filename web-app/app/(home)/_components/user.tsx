"use client";

import { useSession } from "next-auth/react";

const User = () => {
  const { data } = useSession();
  return (
    <h2 className="text-xl font-bold">
      {data?.user ? `Olá, ${data.user.name}` : "Olá, faça login"}
    </h2>
  );
};

export default User;
