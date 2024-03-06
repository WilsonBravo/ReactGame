import Bubble from "@/app/Bubble";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/page.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My lemon life",
  description: "Lemon | Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Bubble/>
        {children}
        </body>
    </html>
  );
}
