import { Inter, Roboto_Mono } from "@next/font/google";

export const roboto_mono = Roboto_Mono({
  variable: "--font-roboto-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const inter = Inter({
  variable: "--font-inter",
  weight: ["700", "900"],
  subsets: ["latin"],
});
