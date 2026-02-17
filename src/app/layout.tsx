import type { Metadata } from "next";
import { Inter, Noto_Nastaliq_Urdu } from "next/font/google"; // <--- Imported Noto
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// <--- Configure the Urdu Font
const urduFont = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-urdu",
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
      {/* Add both variables to the body class list */}
      <body className={`${inter.variable} ${urduFont.variable} antialiased bg-slate-950 text-white`}>
        {children}
      </body>
    </html>
  );
} 