import Input from "../../components/Input";
import "react-phone-input-2/lib/style.css";
import "./PhoneInput.css";
import PhoneInput from "react-phone-input-2";

import { useState } from "react";
import PinInput from "../../components/PinInput";

const SignUp = () => {
  const [pin, setPin] = useState();
  return (
    <div className="flex flex-col items-center h-[100vh]">
      <h1 className=" text-4xl text-center font-semibold h-12 my-4">Sign Up</h1>
      <form className="max-w-lg min-w-md space-y-3">
        <div className="flex flex-col gap-2">
          <label className="">Name</label>
          <Input type="text" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="">Email</label>
          <Input type="email" placeholder="example@email.com" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-">Mobile</label>
          <PhoneInput
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: true,
            }}
            onlyCountries={["bd"]}
            isValid={false}
            inputStyle={{
              height: "44px",
              background: "transparent",
              borderColor: "#d3d3d3",
              width: "100%",
            }}
            country={"bd"}
            buttonStyle={{
              background: "transparent",
              borderColor: "#d3d3d3",
            }}
            // value={customerData.mobile_number}
            // onChange={(value) => {
            //   setCustomerData((prev) => ({
            //     ...prev,
            //     mobile_number: `+${value}`,
            //   }));
            // }}
            enableSearch={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="">NID</label>
          <Input type="text" placeholder="12345678" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="">Account Type</label>
          <select className="bg-transparent outline-none border border-gray-300 rounded-md py-2 px-4 focus:border-blue-500 placeholder:text-gray-400">
            <option defaultChecked value="">
              Select Type
            </option>
            <option value="USER">User</option>
            <option value="AGENT">Agent</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-">PIN</label>
          <div className="flex-1"><PinInput setValue={setPin} value={pin}/></div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
