import { Noto_Serif } from "next/font/google";

const fontSerif = Noto_Serif({
  weight: ["400"],
  subsets: ["latin"],
  adjustFontFallback: false,
});

export { fontSerif };
