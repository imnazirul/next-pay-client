/* eslint-disable react/prop-types */
import OTPInput from "react-otp-input";

const PinInput = ({ value, setValue }) => {
  return (
    <>
      <OTPInput
        value={value}
        onChange={setValue}
        numInputs={5}
        renderSeparator={<span className="text-white">---</span>}
        renderInput={(props) => <input {...props} />}
        inputStyle="bg-transparent flex-1 text-black outline-none border border-gray-300 rounded-md py-2  w-14 focus:border-blue-500"
        inputType="number"
      />
    </>
  );
};

export default PinInput;
