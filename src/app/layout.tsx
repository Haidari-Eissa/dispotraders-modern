import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/@react-grab/mcp/dist/client.global.js"
            strategy="lazyOnload"
          />
        )}
      </head>
      {/* Add both variables to the body class list */}
      <body className={`${inter.variable} ${urduFont.variable} antialiased bg-slate-950 text-white`}>
        {children}
      </body>
    </html>
  );
} 