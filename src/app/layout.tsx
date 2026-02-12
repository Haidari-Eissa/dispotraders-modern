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

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang?: string };
}) {
  // Logic: if the folder name is 'ur', set direction to Right-to-Left (RTL)
  const isUrdu = params?.lang === 'ur';

  return (
    <html lang={params?.lang || 'de'} dir={isUrdu ? 'rtl' : 'ltr'} className="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}