import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Dispotraders",
  description: "Disposable tableware for Quetta.",
};

/**
 * CRITICAL FIX:
 * We removed 'params' here because it causes the "Type Error" in Next.js 16.
 * The language direction will be handled by your LanguageSwitcher instead.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}