import Input from "../../components/Input";
import "react-phone-input-2/lib/style.css";
import "./PhoneInput.css";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import PinInput from "../../components/PinInput";
import Button from "../../components/Button";
import { Link } from "react-router";

const SignUp = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: "",
    nid: "",
    kind: "",
    pin: "",
  });
  const [pin, setPin] = useState();
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    console.log(pin);
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center h-[100vh]">
      <h1 className=" text-4xl text-center font-semibold h-12 my-4">Sign Up</h1>
      <form onSubmit={handleSubmit} className="max-w-md min-w-md space-y-3">
        <div className="flex flex-col gap-2">
          <label className="">Name</label>
          <Input
            value={userData.name}
            onChange={(e) => {
              setUserData((prev) => ({
                ...prev,
                name: e.target.value,
              }));
            }}
            type="text"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="">Email</label>
          <Input
            value={userData.email}
            onChange={(e) => {
              setUserData((prev) => ({
                ...prev,
                email: e.target.value,
              }));
            }}
            type="email"
            placeholder="example@email.com"
            required={true}
          />
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
            value={userData.mobile}
            onChange={(value) => {
              setUserData((prev) => ({
                ...prev,
                mobile: `${value}`,
              }));
            }}
            enableSearch={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="">NID</label>
          <Input
            value={userData.nid}
            onChange={(e) => {
              setUserData((prev) => ({
                ...prev,
                nid: e.target.value,
              }));
            }}
            type="number"
            placeholder="12345678"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="">Account Type</label>
          <select
            value={userData.kind}
            onChange={(e) => {
              setUserData((prev) => ({
                ...prev,
                kind: e.target.value,
              }));
            }}
            className="bg-transparent outline-none border border-gray-300 rounded-md py-2 px-4 focus:border-blue-500 placeholder:text-gray-400"
            required
          >
            <option defaultChecked value="">
              Select Type
            </option>
            <option value="USER">User</option>
            <option value="AGENT">Agent</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-">PIN</label>
          <div className="flex-1">
            <PinInput setValue={setPin} value={pin} />
          </div>
        </div>
        <Button className="mt-4" type="submit" isLoading={isLoading}>
          Submit
        </Button>
      </form>
      <p className="text-gray-500 mt-4">Already have an account? <Link className="text-blue-500 hover:underline" to="/sign_in">Sign In</Link></p>
    </div>
  );
};

export default SignUp;
