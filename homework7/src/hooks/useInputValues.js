import { useState } from "react";

const useInputValues = () => {
  const [values, setValues] = useState({});

  const inputHandler = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return {
    values,
    inputHandler,
  };
};

export default useInputValues;
