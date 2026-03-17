export const REGEX = {
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  PASSWORD:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  FULL_NAME: /^([a-zA-Z\'-.]+\s[a-zA-Z\'-.]+)$/,
};

export const MESSAGE = {
  INVALID_EMAIL: "Email Id is invalid.",
  INVALID_PASSWORD: "Password does not follow the guidelines.",
  INVALID_FULL_NAME: "Full Name does not follow the guidelines.",
  ERROR_CODE: {
    "auth/invalid-credential": "Email id or password is incorrect.",
  },
  GENERIC_ERROR: "Error Occured! Please try again later.",
};
