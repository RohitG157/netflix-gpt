import { useRef, useState } from "react";
import Header from "./Header";
import { validateAuthForm } from "../utils/validate";
import { createAnAccount, signIn, updateUser } from "../utils/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { BODY_IMG_URL } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const nameField = useRef(null);
  const emailField = useRef(null);
  const passwordField = useRef(null);
  const handleSwitchingForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { current: name } = nameField;
    const { current: email } = emailField;
    const { current: password } = passwordField;

    const errorMsg = validateAuthForm(
      isSignInForm,
      name?.value,
      email.value,
      password.value,
    );
    setErrorMessage(errorMsg);

    if (errorMsg) return;

    if (!isSignInForm) {
      const signUpResponse = await createAnAccount(email.value, password.value);
      if (typeof signUpResponse === "string") {
        setErrorMessage(signUpResponse);
      } else {
        await updateUser(name.value);
        const { uid, email, displayName } = auth.currentUser;
        dispatch(addUser({ uid, email, displayName }));
      }
    } else {
      const signInResponse = await signIn(email.value, password.value);
      if (typeof signInResponse === "string") {
        setErrorMessage(signInResponse);
      }
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BODY_IMG_URL} alt="body logo" />
      </div>
      <form
        onSubmit={handleFormSubmit}
        className="w-3/12 absolute bg-black/85 my-36 py-10 left-0 right-0 m-auto px-8"
      >
        <h1 className="text-3xl font-bold text-white py-2 my-2">
          {isSignInForm ? "Sign In" : "Create Account"}
        </h1>
        {!isSignInForm && (
          <input
            ref={nameField}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 text-white"
          />
        )}
        <input
          ref={emailField}
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-700 text-white"
        />
        <input
          ref={passwordField}
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700 w-full text-white"
        />
        {errorMessage && (
          <p className="text-sm font-semibold text-red-700 my-2 cursor-pointer">
            {errorMessage}
          </p>
        )}

        <input
          type="submit"
          className="bg-red-700 text-white w-full p-4 my-8 font-semibold cursor-pointer"
          value={isSignInForm ? "Sign In" : "Create Account"}
        />

        <p
          className="text-lg text-white my-4 cursor-pointer"
          onClick={handleSwitchingForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
