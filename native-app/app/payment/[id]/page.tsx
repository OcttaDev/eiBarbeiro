import Header from "./_components/header";

interface PaymentDetails {
  params: {
    id?: string;
  };
}

export default function Payment({ params }: PaymentDetails) {
  return (
    <>
      <Header />
      <div className="mt-20 px-3">
        <h1>tela de pagamento</h1>
      </div>
    </>
  );
}
