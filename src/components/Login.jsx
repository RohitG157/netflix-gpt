import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const handleSwitchingForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_large.jpg"
          alt="body logo"
        />
      </div>
      <form className="w-3/12 absolute bg-black/85 my-36 py-10 left-0 right-0 m-auto px-8">
        <h1 className="text-3xl font-bold text-white py-2 my-2">
          {isSignInForm ? "Sign In" : "Create Account"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 text-white"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-700 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700 w-full text-white"
        />
        <button type="button" className="bg-red-700 text-white w-full p-4 my-8 font-semibold">
          {isSignInForm ? "Sign In" : "Create Account"}
        </button>

        <p className="text-lg text-white my-4" onClick={handleSwitchingForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
