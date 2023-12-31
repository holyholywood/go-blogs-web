import AppConfig from "@/config/app-config";
import React from "react";
import { Alfa_Slab_One } from "next/font/google";

const brandFont = Alfa_Slab_One({
  weight: "400",
  subsets: ["latin"],
  adjustFontFallback: false,
});
const Brand = ({ ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
  return (
    <h1 {...props} style={{ ...brandFont.style }} className={`${props.className} text-center`}>
      {AppConfig.APP_NAME}
    </h1>
  );
};

export default Brand;
