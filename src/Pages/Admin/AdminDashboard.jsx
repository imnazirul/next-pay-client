import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { getTotalSystemMoney } from "../../../helpers/backend";
import { useProvider } from "../../../context/ProviderContext";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const {user} = useProvider()
  const { data: total } = useQuery({
    queryKey: ["total_money_in_system"],
    queryFn: () => getTotalSystemMoney(),
  });



  return (
    <div className="grid grid-cols-3 gap-8 justify-between mt-8 ">
      <div
        onClick={() => navigate("/balance-request")}
        className="bg-blue-100 border flex-1 max-w-sm py-8 cursor-pointer hover:scale-105 transition-all duration-300 flex justify-center flex-col items-center border-blue-400 rounded-md"
      >
        <img
          src="/money.png"
          className="w-28 h-28 object-contain text-center mx-auto"
        />
        <h1 className="font-medium text-center">Balance Request</h1>
      </div>
      <div
        onClick={() => navigate("/users")}
        className="bg-blue-100 border flex-1 max-w-sm py-8 cursor-pointer hover:scale-105 transition-all duration-300 flex justify-center flex-col items-center border-blue-400 rounded-md"
      >
        <img
          src="/cash-money.png"
          className="w-28 h-28 object-contain text-center mx-auto"
        />
        <h1 className="font-medium text-center">Users</h1>
      </div>
      <div
        onClick={() => navigate("/agents")}
        className="bg-blue-100 border flex-1 max-w-sm py-8 cursor-pointer hover:scale-105 transition-all duration-300 flex justify-center flex-col items-center border-blue-400 rounded-md"
      >
        <img
          src="/transaction.png"
          className="w-28 h-28 object-contain text-center mx-auto"
        />
        <h1 className="font-medium text-center">Agents</h1>
      </div>
      <div
        onClick={() => navigate("/transactions-admin")}
        className="bg-blue-100 border flex-1 max-w-sm py-8 cursor-pointer hover:scale-105 transition-all duration-300 flex justify-center flex-col items-center border-blue-400 rounded-md"
      >
        <img
          src="/transaction.png"
          className="w-28 h-28 object-contain text-center mx-auto"
        />
        <h1 className="font-medium text-center">Transactions</h1>
      </div>
      <div className="bg-blue-100 border flex-1 max-w-sm py-8 cursor-pointer hover:scale-105 transition-all duration-300 flex justify-center flex-col items-center border-blue-400 rounded-md">
      <h1 className="text-2xl text-blue-500">BDT {total?.total}</h1>
        <h1 className="font-medium text-center text-lg">Total Money In System</h1>
      </div>
      <div className="bg-blue-100 border flex-1 max-w-sm py-8 cursor-pointer hover:scale-105 transition-all duration-300 flex justify-center flex-col items-center border-blue-400 rounded-md">
        <h1 className="text-2xl text-blue-500">BDT {user?.balance}</h1>
        <h1 className="font-medium text-center text-lg">Total Income</h1>
      </div>
    </div>
  );
};

export default AdminDashboard;
