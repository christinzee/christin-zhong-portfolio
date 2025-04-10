import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Christin Zhong",
  description: "Full-Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <link rel="icon" href="/favicon.svg" sizes="any" />
      <body className={`${mulish.variable} antialiased h-full`}>
        <div className="w-full h-full flex justify-center items-center p-8">
          <div className="w-full h-full border-1 border-(--comment) flex justify-center">
            <div className="content h-full max-w-screen py-18 px-8 overflow-hidden ">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
