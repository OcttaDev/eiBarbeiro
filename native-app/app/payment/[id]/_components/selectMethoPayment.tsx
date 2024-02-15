"use client";

import { Card, CardContent } from "@/app/_components/ui/card";
import { CreditCard, QrCode, Wallet2 } from "lucide-react";
import { ChangeEvent, useState } from "react";

export default function SelectMethodPayment() {
  const [selectedMethodPayment, setSelectedMethodPayment] = useState("");

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedMethodPayment(event.target.value);
  };
  return (
    <div className="flex flex-col gap-5 w-[40%]">
      <Card>
        <CardContent className="p-3 flex items-center gap-4">
          <input
            type="radio"
            name="paymentOption"
            value="pix"
            checked={selectedMethodPayment === "pix"}
            onChange={(e) => handleOptionChange(e)}
          />
          <span className="bg-primary w-10 h-10 flex items-center justify-center rounded-full">
            <QrCode size={26} />
          </span>
          <div>
            <h1>Pix</h1>
            <p>Aprovação imadiata</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-3 flex items-center gap-4">
          <input
            type="radio"
            name="paymentOption"
            value="credito"
            checked={selectedMethodPayment === "credito"}
            onChange={(e) => handleOptionChange(e)}
          />
          <span className="bg-primary w-10 h-10 flex items-center justify-center rounded-full">
            <CreditCard size={26} />
          </span>
          <div>
            <h1>Pix</h1>
            <p>Aprovação imadiata</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-3 flex items-center gap-4">
          <input
            type="radio"
            name="paymentOption"
            value="debito"
            checked={selectedMethodPayment === "debito"}
            onChange={(e) => handleOptionChange(e)}
          />
          <span className="bg-primary w-10 h-10 flex items-center justify-center rounded-full">
            <Wallet2 size={26} />
          </span>
          <div>
            <h1>Pix</h1>
            <p>Aprovação imadiata</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
