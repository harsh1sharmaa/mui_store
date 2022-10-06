import React from "react";
import { useState, useEffect } from "react";
import Otp from "../otp/otp";
import Signupform from "./signupform";
import Loder from "../loder/loder"
function Signup() {
  const [inputs, setInputs] = useState({});
  const [otpstate, setotpstate] = useState(false);
  const [otpvalidatestate, setotpvalidatestate] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const validateOtp = (otp) => {
    //place Loder and lock screen  until Validate endpoint API does not give response
    console.log("validatingOtp->" + otp);
    setotpvalidatestate(!otpvalidatestate);
    setTimeout(() => {
      setotpvalidatestate(false);
    setotpstate(!otpstate);

    },3000 );
    console.log("End validatingOtp->" + otp);

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    //send otp api Call

    //if response of otp send api succes then we show otp componnet to enter otp
    setotpstate(!otpstate);
    // alert(inputs);
    //send Post API to register
  };

  return (
    <>
      {otpvalidatestate === true ? (
        <Loder />
      ) : otpstate === true ? (
        <Otp validateOtp={validateOtp} />
      ) : (
        <Signupform
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          otpstate={otpstate}
          inputs={inputs}
        />
      )}
    </>
  );
}

export default Signup;
