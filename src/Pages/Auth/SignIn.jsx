import { toast } from "sonner";
import Button from "../../components/Button";
import Input from "../../components/Input";
import PinInput from "../../components/PinInput";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { postSignIn, signOut } from "../../../helpers/backend";
import { useProvider } from "../../../context/ProviderContext";
import ConfirmationAlert from "../../components/ConfirmationAlert";

const SignIn = () => {
  const [userData, setUserData] = useState({
    identifier: "",
    pin: "",
  });
  const [pin, setPin] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { setUser, token } = useProvider();
  const navigate = useNavigate();
  const [isAlertOpen, setIsAlertOpen] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserData({ ...userData, pin: pin });
    try {
      setIsLoading(true);
      const result = await postSignIn(userData);
      if (result.success) {
        toast.success("Sign In Successful");
        localStorage.setItem("token", result.data.token);
        setUser(result.data.user);
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(error.message);
      if(error.message == "User Already Logged in with another device"){
       setIsAlertOpen(true)
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirm = async()=>{
    try {
      const result = await signOut(userData)
      if(result.success){
        toast.success(result.message)
        setIsAlertOpen(false)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(token) navigate("/dashboard")
  },[])

  return (
    <div className="flex flex-col items-center h-[100vh]">
       <ConfirmationAlert
        isOpen={isAlertOpen}
        onConfirm={handleConfirm}
        onCancel={()=>setIsAlertOpen(false)}
        title="Logout from other device?"
        message="User is Already Logged In With Another Device"
        confirmText="Yes, Logout"
        cancelText="No, cancel"
      />
      <h1 className=" text-4xl text-center font-semibold h-12 my-8 ">
        Welcome Back!
      </h1>
      <h1 className=" text-3xl text-center font-semibold h-12 my-8 ">
        Sign In
      </h1>
      <form onSubmit={handleSubmit} className="max-w-md min-w-md space-y-3">
        <div className="flex flex-col gap-2">
          <label className="">Email or Mobile</label>
          <Input
            value={userData.identifier}
            onChange={(e) => {
              setUserData((prev) => ({
                ...prev,
                identifier: e.target.value,
              }));
            }}
            type="text"
            placeholder=""
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-">PIN</label>
          <div className="flex-1">
            <PinInput setValue={setPin} value={pin} />
          </div>
        </div>
        <Button className="mt-4" type="submit" isLoading={isLoading}>
          Sign In
        </Button>
      </form>
      <p className="text-gray-500 mt-4">
        Don&#39;t have an account?{" "}
        <Link to="/sign_up" className="text-blue-500 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
