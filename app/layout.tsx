import type { Metadata } from "next";
import localFont from "next/font/local";
import { Mulish } from "next/font/google";
import "./globals.css";

const Muli = Mulish({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Brilliant Eassy Writings in US",
  description: "Easy eassy wtiting in the Uswritings.com - Get 16% off DISCOUNT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Muli.className} antialiased overflow-x-hidden text-[#383945]`}>{children}</body>
    </html>
  );
}
