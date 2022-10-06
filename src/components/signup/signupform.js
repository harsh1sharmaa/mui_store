import React from "react";

function Signupform(props) {
  console.log(props);
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            name="username"
            value={props.inputs.username || ""}
            onChange={props.handleChange}
          />
          <br></br>
        </label>
        <label>
          Enter email:
          <input
            type="email"
            name="email"
            value={props.inputs.email || ""}
            onChange={props.handleChange}
          />
        </label>
        <br></br>

        <label>
          Enter Passwords:
          <input
            type="password"
            name="password"
            value={props.inputs.password || ""}
            onChange={props.handleChange}
          />
        </label>
        <br></br>
        <label>
          Re Enter Passwords:
          <input
            type="password"
            name="re_password"
            value={props.inputs.re_password || ""}
            onChange={props.handleChange}
          />
        </label>
        <br></br>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Signupform;
