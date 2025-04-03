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
    <html lang="en">
      <body className={`${mulish.variable} antialiased`}>
        <div className="w-screen h-screen flex justify-center items-center p-8">
          <div className="w-full h-full border-1 border-(--comment) overflow-hidden flex justify-center">
            <div className="w-3/4 h-full overflow-auto pt-[72px] ">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
