import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";  // <--- THIS IS THE CRITICAL LINE

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Dispotraders",
  description: "Disposable tableware for Quetta.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased bg-slate-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
