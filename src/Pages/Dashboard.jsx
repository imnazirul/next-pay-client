import { useState } from "react";
import { useProvider } from "../../context/ProviderContext";
import Button from "../components/Button";
import { signOutWithToken } from "../../helpers/backend";
import { toast } from "sonner";

const Dashboard = () => {
  const { user, setUser } = useProvider();
  const [isLoading, setIsLoading] = useState(false);
  const handleLogout = async () => {
    try {
      setIsLoading(true);
      const result = await signOutWithToken();
      if (result.success) {
          toast.success(result.message);
          setUser(null)
          localStorage.removeItem("token");
      }
    } catch (error) {
      toast.error(error.message);
    }finally{
        setIsLoading(false)
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between mt-4">
        <div className="bg-blue-200">
          <h1>{user?.name}</h1>
        </div>
        <Button className="max-w-40" isLoading={isLoading} onClick={handleLogout}>
          LogOut
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
