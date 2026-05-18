import type { Metadata } from "next";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "WAAS | Websites Built, Managed, and Updated for You On Demand",
  description: "Stop hiring expensive agencies or wrestling with clunky template builders. Get a premium custom-built website, managed performance, and unlimited design updates under one simple subscription.",
  metadataBase: new URL("https://waas.thebigdev.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WAAS | Websites Built, Managed, and Updated for You On Demand",
    description: "Stop hiring expensive agencies or wrestling with clunky template builders. Get a premium custom-built website, managed performance, and unlimited design updates under one simple subscription.",
    url: "https://waas.thebigdev.co",
    siteName: "WAAS",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WAAS - Websites Built, Managed, and Updated for You On Demand",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WAAS | Websites Built, Managed, and Updated for You On Demand",
    description: "Stop hiring expensive agencies or wrestling with clunky template builders. Get a premium custom-built website, managed performance, and unlimited design updates under one simple subscription.",
    images: ["/og-image.png"],
    creator: "@thebigdev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable} antialiased selection:bg-emerald-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
