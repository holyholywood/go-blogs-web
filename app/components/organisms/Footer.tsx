import React from "react";
import { RiCopyrightLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full text-center text-sm text-dark-light py-4 border-t">
      <p className="flex items-center gap-2 mx-auto w-fit">
        <RiCopyrightLine /> Copyright {new Date().getFullYear()} Ditotisi.
      </p>
    </footer>
  );
};

export default Footer;
