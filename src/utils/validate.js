import { MESSAGE, REGEX } from "./constant";

export const validateAuthForm = (isSignInForm, name, email, password) => {
  const isNameValid = REGEX.FULL_NAME.test(name);
  const isEmailValid = REGEX.EMAIL.test(email);
  const isPasswordValid = REGEX.PASSWORD.test(password);
  if (!isSignInForm && !isNameValid) return MESSAGE.INVALID_FULL_NAME;
  if (!isEmailValid) return MESSAGE.INVALID_EMAIL;
  if (!isPasswordValid) return MESSAGE.INVALID_PASSWORD;

  return null;
};
