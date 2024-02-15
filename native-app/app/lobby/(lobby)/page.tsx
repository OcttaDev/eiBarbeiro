import CheckTransaction from "../_helpers/checkTransaction";
import About from "../about/page";
import Hall from "../hall/page";

export default async function Lobby() {
  const isPaidPlan = (await CheckTransaction()).transaction;
  return (
    <div className="w-full h-full p-5">{isPaidPlan ? <Hall /> : <About />}</div>
  );
}
