import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Medicity Multispeciality Dental Clinic | Best Dentist in Guwahati",
  description:
    "Guwahati's most trusted dental clinic with 4.8★ rating & 1,655+ Google reviews. Painless root canal, dental implants, teeth whitening, braces & smile makeover by expert specialists in Ulubari.",
  keywords:
    "dentist guwahati, dental clinic ulubari, best dentist assam, painless root canal guwahati, dental implants guwahati, teeth whitening guwahati, braces guwahati, medicity dental",
  openGraph: {
    title: "Medicity Multispeciality Dental Clinic",
    description: "4.8★ rated dental clinic in Guwahati. Painless, expert dental care for the whole family.",
    url: "https://medicitydental.in",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Elfsight platform script */}
        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="lazyOnload"
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
