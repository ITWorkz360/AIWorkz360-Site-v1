import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "AIWorkz360 — The AI Team You Don't Have To Hire",
  description: "Custom AI automations and AI-powered tool builds for professionals and SMBs. Reclaim your time with tailored systems.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "AIWorkz360 — The AI Team You Don't Have To Hire",
    description: "Custom AI automations and AI-powered tool builds for professionals and SMBs.",
    url: "https://aiworkz360.com",
    siteName: "AIWorkz360",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="bg-[#07070D] text-[#F0F0F8] font-body selection:bg-[#6C63FF]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
