import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function AuthForm() {
  const [isRegistered, setIsRegistered] = useState(true);

  function authFormhandler(e) {
    e.preventDefault();

    const userNameinput = e.target[0].value;
    const emailInput = e.target.email.value;
    const passwordInput = e.target.password.value;
    const repeatPasswordInput = e.target[3].value;

    // need to verify that password matches repeate password
    axios
      .post(
        `http://localhost:3001/api/${isRegistered ? "auth/login" : "users"}`,
        {
          email: emailInput,
          password: passwordInput,
        }
      )
      .then((x) => {
        if (x.data.token) {
          console.log(x.data.token);

          // save token to LS
          localStorage.setItem("userToken", JSON.stringify(x.data.token));

          setIsRegistered(true);
          // console.log("Hello guys!");


          // setIsUser(true)

          // setLoading(false)
        }
      })
      .catch((e) => {
        console.log("Hi folks");
        // setIsError(true)
        //   setLoading(false)
        console.log("Error ");
      });
  }
  return (
    <form onSubmit={authFormhandler}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">
          {isRegistered ? "Login" : "Create Account"}
        </legend>

        {!isRegistered && (
          <>
            <label className="label">User Name</label>
            <input type="email" className="input" placeholder="Email" />
          </>
        )}

        <label className="label">Email</label>
        <input name="email" type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input name="password" type="password" className="input" placeholder="Password" />

        {!isRegistered && (
          <>
            <label className="label">Repeat Password</label>
            <input
              type="password"
              className="input"
              placeholder="Repeat Password"
            />
          </>
        )}

        <button className="btn btn-neutral mt-4" type="submit">
          {isRegistered ? "Login" : "Create Account"}
        </button>
      </fieldset>
    </form>
  );
}
