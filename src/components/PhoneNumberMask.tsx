import React, { useState } from "react";
import InputMask from "react-input-mask";

const PhoneNumberInput = ({ value, onChange }: any) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (event: any) => {
    setPhoneNumber(event.target.value);
  };

  return (

    <InputMask
      className="border rounded-md py-2 px-3 w-full"
      mask="(99) 99999-9999"
      maskPlaceholder=""
      value={phoneNumber}
      onChange={handleChange}
      id="phoneNumber"
      placeholder="(99) 99999-9999"
    />
  );
};

export default PhoneNumberInput;
