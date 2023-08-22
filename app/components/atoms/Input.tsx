import React from "react";
import { IconType } from "react-icons";

type BaseInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type customInputProps = {
  label?: {
    text: string;
    position?: "left" | "center" | "right";
  };
  containerClass?: string;
  addon?: {
    icon?: IconType;
    text?: string;
    position?: "left" | "center" | "right";
    element?: React.ElementType;
  };
};

type InputProps = BaseInputProps & customInputProps;

const Input = ({ label, containerClass, addon, ...props }: InputProps) => {
  const id = props.id ? props.id : generateRandomString(5);

  return (
    <div className={`space-y-2 w-full ${containerClass}`}>
      {label && (
        <label htmlFor={id} className="block">
          {label.text}
        </label>
      )}
      <input {...props} id={id} className={`placeholder:text-sm w-full block border rounded border-dark/50 focus:outline-sky-700 px-2 py-1 ${props.className}`} />
    </div>
  );
};

export default Input;

function generateRandomString(length: number) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters[randomIndex];
  }

  return randomString;
}
