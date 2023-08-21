import React from "react";

type buttonPropsType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  btnType?: "rounded" | "default";
  btnSize?: "sm" | "md" | "lg";
};

const Button = ({ btnType = "default", btnSize = "md", ...props }: buttonPropsType) => {
  return (
    <button {...props} className={`${BtnSize[btnSize]} ${BtnType[btnType]} flex items-center ${props.className}`}>
      {props.children}
    </button>
  );
};

const BtnType = {
  rounded: "rounded-full",
  default: "rounded",
};

const BtnSize: { [key: string]: string } = {
  sm: "px-1 py-0.5 text-sm gap-1",
  md: "px-3 py-1 text-base gap-2",
  lg: "px-5 py-3 text-lg gap-4",
};

export default Button;
