import errors from "./error.helper";

export const verifyEmail = (value) => {
  const isError = !/^[A-Za-z]+[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
    value
  );
  return isError ? errors.wrongEmail : "";
};

export const verifyPassword = (value) => {
  const isError = !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*&#^+=_-])[A-Za-z\d@$!%*&#^+=_-]{8,}$/.test(
    value
  );
  return isError ? errors.wrongPassword : "";
};
