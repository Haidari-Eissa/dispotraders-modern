import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const urduFont = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-urdu",
});

export const metadata: Metadata = {
  title: "Dispotraders – Disposable Tableware | Hazara Town, Quetta",
  description:
    "Buy disposable cups, plates, containers, aluminum trays and packaging in Hazara Town, Quetta. Fast WhatsApp ordering, same-day delivery. Affordable bulk prices for shops, events and homes.",
  keywords: [
    "disposable cups Quetta",
    "disposable plates Quetta",
    "Hazara Town supplier",
    "کوئٹہ ڈسپوزایبل",
    "ہزارہ ٹاؤن",
    "plastic cups Quetta",
    "aluminum trays Quetta",
  ],
  openGraph: {
    title: "Dispotraders – Hazara Town Disposable Supplier, Quetta",
    description:
      "Same-day delivery in Hazara Town. Order cups, plates, containers via WhatsApp.",
    locale: "ur_PK",
    type: "website",
  },
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
      <body
        className={`${inter.variable} ${urduFont.variable} antialiased bg-slate-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}