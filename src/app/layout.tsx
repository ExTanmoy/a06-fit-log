import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/Footer";
import WorkoutProvider from "@/context/WorkoutContext";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fitlog - A Workout Library",
  description: "A Project For A-06",
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      // data-theme="light"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col">
        <WorkoutProvider>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
            <ToastContainer />
        </WorkoutProvider>
      </body>
      
    </html>
  );
}
