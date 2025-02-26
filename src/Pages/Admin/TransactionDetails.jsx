import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getTransaction } from "../../../helpers/backend";

const TransactionDetails = () => {
  const { id } = useParams();
  console.log(id)
  const { data, isPending } = useQuery({
    queryKey: ["transaction_details", id],
    queryFn: () => getTransaction(id),
  });

  if (isPending) {
    <div className="flex h-[100vh] justify-center items-center">
      <p className="border-white h-20 w-20 inline-block animate-spin rounded-full border-[3px]  border-t-blue-400" />
    </div>;
  }

  console.log(data)

  return <div
  className="flex cursor-pointer justify-center items-stretch mt-8 gap-4 flex-col mb-2  bg-blue-100 p-2 rounded-lg border border-blue-400"
>
    <div className=" border-b">
        <h1 className="text-xl font-semibold text-center">{data?.data?.kind.split("_").join(" ")}</h1>
    </div>
  <div className="flex justify-between flex-1 items-center gap-4">
    <p className="text-lg font-medium flex-1">TOTAL: {data?.data?.total}</p> <p className="text-lg flex-1 font-medium">{data?.data?.transactionId}</p>
  </div>
  <div className="flex justify-between flex-1 items-center gap-4">
    <p className="text-lg flex-1 font-medium">Amount: {data?.data?.amount}</p> <p className="text-lg flex-1 font-medium">Fee: {data?.data?.fee}</p>
  </div>
  <div className="flex justify-between flex-1 items-center gap-4">
    <p className="text-lg flex-1 font-medium">FROM: {data?.from?.name}</p> <p className="text-lg flex-1 font-medium">TO: {data?.to?.name}</p>
  </div>
  <div className="flex justify-between flex-1 items-center gap-4">
    <p className="text-lg flex-1 font-medium">FROM: {data?.from?.mobile}</p> <p className="text-lg flex-1 font-medium">TO: {data?.to?.mobile}</p>
  </div>
  <div className="flex justify-between flex-1 items-center gap-4">
    <p className="text-lg flex-1 font-medium">FROM: {data?.from?.email}</p> <p className="text-lg flex-1 font-medium">TO: {data?.to?.email}</p>
  </div>

</div>;
};

export default TransactionDetails;
