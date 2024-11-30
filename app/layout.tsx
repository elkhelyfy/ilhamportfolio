import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-outfit",
});


export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
