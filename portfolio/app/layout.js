import { Outfit , Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],  weight: ["400" , "500" , "600" , "700"]
});

const ovo = Ovo({
  variable: "--font-geist-mono",
  subsets: ["latin"], weight: ["400" ]
});



export const metadata = {
  title: "Portfolio - Tech and Vibe ",
  description: "Generated ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
