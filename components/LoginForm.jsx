"use client";
import handleLoginFormSubmit from "../app/helpers/handleLoginFormSubmit";
import { useState } from "react";

export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      {!isLogin && (
        <form onSubmit={handleLoginFormSubmit}>
          <label>Email: </label>
          <input type='text' id='email'></input>
          <label>Password: </label>
          <input type='text' id='password'></input>
          <button type='submit' >Submit</button>
        </form>
      )}
    </div>
  );
}
