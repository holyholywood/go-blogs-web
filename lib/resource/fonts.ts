import { Alfa_Slab_One, Noto_Serif } from "next/font/google";

const fontSerif = Noto_Serif({
  weight: ["400"],
  subsets: ["latin"],
  adjustFontFallback: false,
});

const brandFont = Alfa_Slab_One({
  weight: "400",
  subsets: ["latin"],
  adjustFontFallback: false,
});

export { fontSerif, brandFont };
