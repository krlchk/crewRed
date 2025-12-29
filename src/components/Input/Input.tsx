import "./Input.css";
import { useState } from "react";
import { Eye, EyeSlash, Cross } from "./svg";
import type { InputProps } from "./types";

export const Input = ({ type = "text", clearable = true }: InputProps) => {
  const isPasswordType = type === "password";
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const currentlyType = isPasswordType && showPassword ? "text" : type;

  return (
    <div className="wrap">
      <input
        value={inputValue}
        className="input"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="enter..."
        type={currentlyType}
      />
      {isPasswordType ? (
        <button
          className="togleButton"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? (
            <EyeSlash className="iconStyle" />
          ) : (
            <Eye className="iconStyle" />
          )}
        </button>
      ) : (
        clearable &&
        inputValue && (
          <button
            onClick={() => {
              setInputValue("");
            }}
            className="togleButton"
          >
            <Cross className="iconStyle" />
          </button>
        )
      )}
    </div>
  );
};
