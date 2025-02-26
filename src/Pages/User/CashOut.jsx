import { useState } from "react";
import Input from "../../components/Input";
import PinInput from "../../components/PinInput";
import Button from "../../components/Button";
import { toast } from "sonner";
import { postTransaction } from "../../../helpers/backend";

const CashOut = () => {

    const [transactionData, setTransactionData] = useState({
        receiver_mobile: "",
        total: "",
        amount: "",
        fee: "",
        pin: "",
        kind: "CASH_OUT",
      });
      const [pin, setPin] = useState("");
      const [isLoading, setIsLoading] = useState(false);
    
    
      const handleSubmit = async () => {
        const fee = Number(((transactionData.amount / 100) * 1.5).toFixed(2))
        const data = {
          receiver_mobile: transactionData.receiver_mobile,
          amount: transactionData.amount,
          fee: fee,
          total: Number(transactionData.amount) + Number(fee),
          pin: pin,
          kind: "CASH_OUT",
        };
        try {
          setIsLoading(true);
          const result = await postTransaction(data);
          if (result.success) {
            toast.success("Cash Out to Agent Successfully");
          }
        } catch (error) {
          toast.error(error.message);
        }
      };
    


    return (
        <div className="flex flex-col items-center h-[100vh]">
        <h1 className=" text-4xl text-center font-semibold h-12 my-4">
          Send Money
        </h1>
        <form onSubmit={handleSubmit} className="max-w-md min-w-md space-y-3">
          <div className="flex flex-col gap-2">
            <label className="">Receiver Mobile Number</label>
            <Input
              value={transactionData.receiver_mobile}
              onChange={(e) => {
                setTransactionData((prev) => ({
                  ...prev,
                  receiver_mobile: e.target.value,
                }));
              }}
              type="text"
              required={true}
            />
          </div>
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
            Send
          </Button>
        </form>
      </div>
    );
};

export default CashOut;