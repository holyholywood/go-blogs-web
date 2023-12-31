import React from "react";
import { VscLoading } from "react-icons/vsc";

type buttonPropsType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  btnType?: "rounded" | "default";
  btnSize?: "sm" | "md" | "lg";
  isLoading?: boolean;
};

const Button = ({ btnType = "default", btnSize = "md", isLoading, ...props }: buttonPropsType) => {
  return (
    <button {...props} className={`${BtnSize[btnSize]} ${BtnType[btnType]} flex items-center duration-200 ${props.className}`} disabled={props.disabled || isLoading}>
      {isLoading ? <VscLoading className={`animate-spin text-lg`} /> : props.children}
    </button>
  );
};

const BtnType = {
  rounded: "rounded-full",
  default: "rounded",
};

const BtnSize: { [key: string]: string } = {
  sm: "px-2 py-1 text-sm gap-1",
  md: "px-3 py-1 text-base gap-2",
  lg: "px-5 py-3 text-lg gap-4",
};

export default Button;
