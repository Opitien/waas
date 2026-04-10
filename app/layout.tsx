import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "WAAS | Website As A Subscription",
  description: "Steadily run a website for your business with as low as 15k monthly. Premium design, zero maintenance headache.",
};

import { CursorFollower } from "@/components/CursorFollower";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased selection:bg-[#fb4e1a] selection:text-white`}
      >
        <div className="grain-overlay" />
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}
