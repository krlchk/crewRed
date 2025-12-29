import { useEffect, useState } from "react";
import { Cross } from "./svg";
import "./Toast.css";
import type { ToastProps } from "./types";

export const Toast = ({
  message = "Hello world",
  duration = 5000,
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showToastId = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const hideToastId = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => {
      clearTimeout(showToastId);
      clearTimeout(hideToastId);
    };
  }, [duration]);

  return (
    <div className={`toast ${isVisible ? "show" : ""}`}>
      <p>{message}</p>
      <button
        onClick={() => {
          setIsVisible(false);
        }}
        className="togleButtonToast"
      >
        <Cross className="iconStyleToast" />
      </button>
    </div>
  );
};
