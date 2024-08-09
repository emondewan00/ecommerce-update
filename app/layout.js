import {  Roboto } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "@/components/shared/NavBar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});
export const metadata = {
  title: "PORTO",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} `}>
        <AuthProvider>
          <NavBar />
          {children}
        </AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
