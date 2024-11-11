import type { Metadata } from "next";
import {  Plus_Jakarta_Sans} from "next/font/google";
import "./globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets:['latin'],
  variable: "--font-sans",
  weight: ['300','400','500','600','700'],
});


export const metadata: Metadata = {
  title: "HealthSync",
  description: "A HealthCare Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
