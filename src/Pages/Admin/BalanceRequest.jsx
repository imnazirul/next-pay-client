import { useQuery } from "@tanstack/react-query";
import {
  getAllBalanceRequest,
  patchBalanceRequest,
} from "../../../helpers/backend";
import Button from "../../components/Button";
import { useState } from "react";
import { toast } from "sonner";
import ConfirmationAlert from "../../components/ConfirmationAlert";

const BalanceRequest = () => {
  const { data, isPending, refetch } = useQuery({
    queryKey: ["all_balance_requests"],
    queryFn: () => getAllBalanceRequest(),
  });
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  if (isPending) {
    return (
      <div className="flex h-[100vh] justify-center items-center">
        <p className="border-white h-20 w-20 inline-block animate-spin rounded-full border-[3px]  border-t-blue-400" />
      </div>
    );
  }

  const handleUpdateRequest = async (status, id) => {
    try {
      const result = await patchBalanceRequest(id, { status: status });
      if (result?.success) {
        toast.success("Balance Request Updated Successfully");
        refetch()
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleUpdate = () => {};

  return (
    <div className="mt-4">
      <ConfirmationAlert
        isOpen={isAlertOpen}
        onConfirm={handleUpdate}
        onCancel={() => setIsAlertOpen(false)}
        title="Are You Sure?"
        message="You Won't be able to revert this"
        confirmText="Confirm"
        cancelText="Cancel"
      />
      <h1 className="text-2xl font-semibold mb-4">ALL BALANCE REQUESTS</h1>
      {data?.data?.map((request) => (
        <div
          className="flex items-center gap-4 mb-2 justify-between bg-blue-100 p-2 rounded-lg border border-blue-400"
          key={request._id}
        >
          <div className="">
            <p>{request.kind}</p> <p>Amount: {request.amount}</p>
          </div>
          {request.status !== "APPROVED" && request.status !== "DECLINED" ? (
            <div className="flex flex-col gap-1">
              <Button className="bg-green-500 text-white px-2 py-1"
                onClick={() => handleUpdateRequest("APPROVED", request._id)}
              >
                Approve
              </Button>
              <Button 
              className="bg-red-500 text-white px-2 py-1"
                onClick={() => handleUpdateRequest("DECLINED", request._id)}
              >
                Decline
              </Button>
            </div>
          ) : <p className="text-lg font-medium">{request.status}</p>}
        </div>
      ))}
      {!data?.data?.length && (
        <p className="text-xl mt-4 text-center font-medium">
          No Requests Found!
        </p>
      )}
    </div>
  );
};

export default BalanceRequest;
