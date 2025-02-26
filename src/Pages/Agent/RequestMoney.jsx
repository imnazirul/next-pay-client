
import { useState } from "react";
import Input from "../../components/Input";
import PinInput from "../../components/PinInput";
import Button from "../../components/Button";
import { toast } from "sonner";
import { postRequestMoney } from "../../../helpers/backend";

const RequestMoney = () => {
    const [transactionData, setTransactionData] = useState({
        amount: "",
        kind: "REQUEST_MONEY",
      });
      const [pin, setPin] = useState("");
      const [isLoading, setIsLoading] = useState(false);
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
          amount: transactionData.amount,
          kind: "REQUEST_MONEY",
        };
        try {
          setIsLoading(true);
          const result = await postRequestMoney(data);
          if (result.success) {
            toast.success("Request Money Successfully Added");
          }
        } catch (error) {
          toast.error(error.message);
        } finally {
          setIsLoading(false);
        }
      };
    return (
        <div className="flex flex-col items-center h-[100vh]">
        <h1 className=" text-4xl text-center font-semibold h-12 my-4">
          Request Money
        </h1>
        <form onSubmit={handleSubmit} className="max-w-md min-w-md space-y-3">
          <div className="flex flex-col gap-2">
            <label className="">Amount</label>
            <Input
              value={transactionData.amount}
              onChange={(e) => {
                setTransactionData((prev) => ({
                  ...prev,
                  amount: e.target.value,
                }));
              }}
              type="number"
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
            Send Request
          </Button>
        </form>
      </div>
    );
};

export default RequestMoney;