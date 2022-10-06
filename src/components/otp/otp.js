import React ,{useState}from 'react'
import OtpInput from 'react-otp-input';

function Otp(props) {
const [otp,setotp]= useState("")

const handleChange=(x)=>{
    setotp(x)
    if(x.length==6){
        props.validateOtp(x);
        // alert("otp success")
    }
}
  return (
    <OtpInput
    value={otp}
    onChange={handleChange}
    numInputs={6}
    otpType="number"
    separator={<span>-</span>}
  />
  )
}

export default Otp