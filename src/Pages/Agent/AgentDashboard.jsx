import { useNavigate } from "react-router";

const AgentDashboard = () => {
    const navigate = useNavigate()
    return (
        <div className="flex gap-8 justify-between mt-8 ">
        <div onClick={()=> navigate("/cash-in")} className="bg-blue-100 border flex-1 max-w-sm py-8 cursor-pointer hover:scale-105 transition-all duration-300 flex justify-center flex-col items-center border-blue-400 rounded-md">
          <img src="/money.png" className="w-28 h-28 object-contain text-center mx-auto" />
          <h1 className="font-medium text-center">Cash In</h1>
        </div>
        <div onClick={()=> navigate("/cash-in")} className="bg-blue-100 border flex-1 max-w-sm py-8 cursor-pointer hover:scale-105 transition-all duration-300 flex justify-center flex-col items-center border-blue-400 rounded-md">
          <img src="/cash-money.png" className="w-28 h-28 object-contain text-center mx-auto" />
          <h1 className="font-medium text-center">Request Money</h1>
        </div>
        <div onClick={()=> navigate("/transactions")} className="bg-blue-100 border flex-1 max-w-sm py-8 cursor-pointer hover:scale-105 transition-all duration-300 flex justify-center flex-col items-center border-blue-400 rounded-md">
          <img src="/transaction.png" className="w-28 h-28 object-contain text-center mx-auto" />
          <h1 className="font-medium text-center">Transactions</h1>
        </div>
      </div>
    );
};

export default AgentDashboard;