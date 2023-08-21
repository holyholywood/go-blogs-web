import Link from "next/link";
import React from "react";
type linkTypeOption = "default" | "underlined" | "button" | "button-rounded";
type linkSizeOption = "sm" | "md" | "lg";
type linkPropsType = {
  linkType?: linkTypeOption;
  linkSize?: linkSizeOption;
  children: React.ReactNode;
  className?: string;
  href: string;
};

const RouterLink = ({ href = "/", linkType = "underlined", linkSize = "md", ...props }: linkPropsType) => {
  return (
    <Link href={href} className={`duration-200 flex w-fit items-center ${generateLinkStyle(linkType, linkSize)} ${props.className}`}>
      {props.children}
    </Link>
  );
};

const LinkButtonType = {
  rounded: "rounded-full",
  default: "rounded",
};

const LinkButtonSize = {
  sm: "px-1 py-0.5 text-sm gap-1",
  md: "px-3 py-1 text-base gap-2",
  lg: "px-5 py-3 text-lg gap-4",
};

const linkFontSizeStyle = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

const linkTypeStyle = {
  default: "",
  underlined: "underline",
  button: "",
  "button-rounded": "",
};

const generateLinkStyle = (linkType: linkTypeOption, linkSize: linkSizeOption): string => {
  const shapeStyle = linkType === "button" || linkType === "button-rounded" ? LinkButtonType[linkType === "button" ? "default" : "rounded"] : "";
  const shapeSizeStyle = linkType === "button" || linkType === "button-rounded" ? LinkButtonSize[linkSize] : "";
  return `${linkFontSizeStyle[linkSize]} ${shapeStyle} ${shapeSizeStyle} ${linkTypeStyle[linkType]}`;
};
export default RouterLink;
