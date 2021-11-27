import "./style.css";
import { useRef } from "react";
import useEscape from "../hooks/useEscape";
import useOutsideClick from "../hooks/useOutsideClick";
import useInputValues from "../hooks/useInputValues";
import useValidation from "../hooks/useValidation";

const fields = [
  { name: "firstName", type: "text" },
  { name: "lastName", type: "text" },
  { name: "email", type: "text" },
  { name: "password", type: "password" },
  { name: "confirmPassword", type: "password" },
];

const Modal = (props) => {
  const modal = useRef();
  useEscape(() => props.onEsc(false));
  useOutsideClick(() => props.onOutside(false), modal);
  const { values, inputHandler } = useInputValues();
  const errors = useValidation(values);
  console.log(errors);

  return (
    <form className="modal" ref={modal} onSubmit={errors.checkErrors}>
      {fields.map((item, index) => {
        return (
          <div key={index}>
            <input
              className="modal__input"
              placeholder={splitCamelCase(item.name)}
              onChange={inputHandler}
              name={item.name}
              type={item.type}
            />
            {errors[item.name] ? (
              <span className="error__meggase">{errors[item.name]}</span>
            ) : null}
          </div>
        );
      })}
      <button type="submit" className="submit__button">
        submit
      </button>
    </form>
  );

  function splitCamelCase(item) {
    const result = item
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
    return result;
  }
};

export default Modal;
