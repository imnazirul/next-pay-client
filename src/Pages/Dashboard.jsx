import { useState } from "react";
import { useProvider } from "../../context/ProviderContext";
import Button from "../components/Button";
import { signOutWithToken } from "../../helpers/backend";
import { toast } from "sonner";
import UserDashboard from "./User/UserDashboard";
import AgentDashboard from "./Agent/AgentDashboard";
import AdminDashboard from "./Admin/AdminDashboard";

const Dashboard = () => {
  const { user, setUser, setToken } = useProvider();
  const [isLoading, setIsLoading] = useState(false);
  const [isBalanceShow, setIsBalanceShow] = useState(false);
  const [isBalanceLoading, setIsBalanceLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      const result = await signOutWithToken();
      if (result.success) {
        toast.success(result.message);
        setUser(null);
        localStorage.removeItem("token");
        setToken(null);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSeeBalance = () => {
    setIsBalanceLoading(true);
    setTimeout(() => {
      setIsBalanceShow(true);
      setIsBalanceLoading(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mt-4 bg-blue-50 px-4 py-2 rounded-xl border border-blue-500">
        <div className="bg-blue-500 text-white px-2 py-1 rounded-md">
          <h1 className="font-medium py-1">{user?.name}</h1>
        </div>
        <div className="font-medium text-lg">
          {isBalanceShow ? (
            <p className="text-lg bg-blue-500 font-medium px-6 py-1 w-40 rounded-md text-white text-center">
              Balance: {user?.balance}
            </p>
          ) : (
            <Button
              isLoading={isBalanceLoading}
              onClick={handleSeeBalance}
              className="py-1.5"
            >
              See Balance
            </Button>
          )}
        </div>
        <Button
          className="max-w-40 py-2"
          isLoading={isLoading}
          onClick={handleLogout}
        >
          LogOut
        </Button>
      </div>

      {user?.kind == "USER" && <UserDashboard />}
      {user?.kind == "AGENT" && <AgentDashboard />}
      {user?.kind == "ADMIN" && <AdminDashboard />}
    </div>
  );
};

export default Dashboard;
