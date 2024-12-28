// src/lib/fonts.ts
import localFont from "next/font/local";
import { Bebas_Neue } from "next/font/google";

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export const neueRegrade = localFont({
  src: "../../public/fonts/Neue Regrade Medium.otf",
  variable: "--font-neue-regrade",
});
