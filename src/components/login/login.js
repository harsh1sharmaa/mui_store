import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Signup from "../signup/signup";

function Login() {
  let navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [loginResponse, setloginResponse] = useState({ success: false , error: true });
  const [loginError, setloginError] = useState(false);
  const handleChange = (event) => {
    setloginError(false);
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(inputs);
    //call post Login Api for validating user and give reaponse
    //if response is success we show Home page
    if(inputs.username=='qq' && inputs.age=='11'){
      navigate('/home',{state:{userId:1,token:'sabaoon'}});
    }
    if (loginResponse.success == true) {
      //show Homw page
    }
    if (loginResponse.error == true) {
      //show error message
      setloginError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your age:
          <input
            type="number"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
      <div>
        <Link to="../signup" element={<Signup />}>
          Sign Up
        </Link>
      </div>
      {loginError == true ? <p className="login_error">login fild</p> : <></>}
    </div>
  );
}

export default Login;
