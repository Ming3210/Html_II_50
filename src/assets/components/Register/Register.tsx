import React from "react";

export default function Register() {
  return (
    <div>
      <form action="">
        <h2>Create account</h2>
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
        <label htmlFor="">Confirm password</label>
        <br />
        <br />
        <input type="password" />
        <br />
        <br />
        <button>Create account</button>
        <br />
        <br />
        Already have an account? <b>Login here</b>
      </form>
    </div>
  );
}
