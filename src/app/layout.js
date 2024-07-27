import {Poppins} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style:["normal", "italic"]
});

export const metadata = {
  title: "Wonderful Indonesia",
  description: "Re-design Wonderful Indonesia Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      {children}
      </body>
    </html>
  );
}
