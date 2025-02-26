import { Outlet } from "react-router";
import { Toaster } from "sonner";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className=" w-full ">
      <Navbar />
      <div className="overflow-x-hidden">
        <Toaster richColors position="top-right"/>
        <div className="space-y-5 lg:space-y-10">
          <div className="container mx-auto font-poppins px-5 lg:px-10 ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
