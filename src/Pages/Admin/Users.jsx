import { useQuery } from "@tanstack/react-query";
import { getUsers, patchUser } from "../../../helpers/backend";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Swal from "sweetalert2";
import { toast } from "sonner";

const Users = () => {
  const [searchText, setSearchText] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const {
    data: users,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(`mobile=${searchText}`),
  });

  useEffect(() => {
    if (isMounted) {
      refetch();
    } else {
      setIsMounted(true);
    }
  }, [searchText]);

  if (isPending) {
    return (
      <div className="flex h-[100vh] justify-center items-center">
        <p className="border-white h-20 w-20 inline-block animate-spin rounded-full border-[3px]  border-t-blue-400" />
      </div>
    );
  }

  const handleBlockUser = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const result = await patchUser(id, { status: "CANCELLED" });
          if (result.success) {
            toast.success("User Updated Successfully");
            refetch();
          }
        } catch (error) {
          toast.error(error.message);
        }
      }
    });
  };



  return (
    <div>
      <div className="flex items-center justify-between my-4">
        <h1 className="text-2xl font-semibold">USERS</h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex h-12 w-full items-center gap-1 overflow-hidden rounded-3xl border border-[#D7DBEC] px-4 py-3 sm:w-64 sm:px-6"
        >
          <button type="submit">
            <FiSearch className="text-xl text-[#A1A7C4] sm:text-2xl" />
          </button>
          <input
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
            placeholder="Search by Mobile"
            type="text"
            className="h-full w-full bg-transparent outline-none placeholder:text-[#7E84A3]"
          />
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-center bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="border-b px-4 py-2">Name</th>
              <th className="border-b px-4 py-2">Email</th>
              <th className="border-b px-4 py-2">Mobile</th>
              <th className="border-b px-4 py-2">Status</th>
              <th className="border-b px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.data.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="border-b px-4 py-2">{user.name}</td>
                <td className="border-b px-4 py-2">{user.email}</td>
                <td className="border-b px-4 py-2">{user.mobile}</td>
                <td className="border-b px-4 py-2">{user.status}</td>
                <td className="border-b px-4 py-2">
                  {user.status !== "CANCELLED" && (
                    <Button className="py-1" onClick={() => handleBlockUser(user._id)}>
                      Block
                    </Button>
                  )}
                  {user.status == "CANCELLED" && <p>BLOCKED</p>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
