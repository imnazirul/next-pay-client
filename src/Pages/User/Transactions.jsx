import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "../../../helpers/backend";

const Transactions = () => {
  const { data, isPending } = useQuery({
    queryKey: ["user_transactions"],
    queryFn: () => getTransactions(),
  });

  if (isPending) {
    return (
      <div className="flex h-[100vh] justify-center items-center">
        <p className="border-white h-20 w-20 inline-block animate-spin rounded-full border-[3px]  border-t-blue-400" />
      </div>
    );
  }

  return (
    <div>
      {data?.data?.map((transaction) => (
        <div key={transaction._id}>
          <div className="flex items-center justify-between bg-blue-100 p-2 rounded-lg border border-blue-400">
            <p>{transaction.kind}</p> <p>{transaction.transactionId}</p>
          </div>
          <div>
            <p>Amount: {transaction.amount}</p> <p>Fee: {transaction.fee}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
