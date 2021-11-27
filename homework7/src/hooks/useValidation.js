import { useState } from "react";

const useValidation = (values) => {
  const [firstName, setFirstNameError] = useState();
  const [lastName, setLastNameError] = useState();
  const [email, setEmailError] = useState();
  const [password, setPasswordError] = useState();
  const [confirmPassword, setConfirmPasswordError] = useState();

  const checkErrors = (e) => {
    e.preventDefault();
    for (let value in values) {
      switch (value) {
        case "firstName":
          values[value] && values[value].length < 2
            ? setFirstNameError("Минимум 2 символа")
            : setFirstNameError(null);
          break;

        case "lastName":
          values[value] && values[value].length < 2
            ? setLastNameError("Минимум 2 символа")
            : setLastNameError(null);
          break;

        case "email":
          const emailReg =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          values[value] && !emailReg.test(values[value])
            ? setEmailError("Введите корректный email")
            : setEmailError(null);
          break;

        case "password":
          const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,13}$/g;
          values[value] && !passReg.test(values[value])
            ? setPasswordError(
                "Легкий пароль (6-13 символов, минимум 1 заглавная буква и 1 цифра)"
              )
            : setPasswordError(null);
          break;

        case "confirmPassword":
          values[value] && values[value] !== values.password
            ? setConfirmPasswordError("Пароли не совпадают")
            : setConfirmPasswordError(null);
          break;

        default:
          break;
      }
    }
  };

  return {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    checkErrors,
  };
};

export default useValidation;
