import React from "react";

export default function Login() {
  return (
    <div>
      <form
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        action=""
      >
        <div>
          {" "}
          <h2>Login account</h2>
          <br />
          <br />
          <label htmlFor="">Your email</label>
          <br />
          <br />
          <input type="text" />
          <br />
          <br />
          <label htmlFor="">Password</label>
          <br />
          <br />
          <input type="password" />
          <br />
          <br />
          Already have an account? <b>Register here</b>
        </div>
      </form>
    </div>
  );
}
