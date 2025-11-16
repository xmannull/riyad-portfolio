import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riyad Hossain Huzaifa - AI Mastering Expert",
  description: "AI Mastering এর মাস্টার। AI Handling এ বিশেষজ্ঞ। আপনার AI প্রকল্পের জন্য সেরা সমাধান।",
  keywords: ["AI", "Mastering", "AI Handling", "Technology", "Portfolio"],
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: "https://riyad-portfolio.vercel.app",
    siteName: "Riyad Hossain Huzaifa",
    title: "Riyad Hossain Huzaifa - AI Mastering Expert",
    description: "AI Mastering এর মাস্টার। AI Handling এ বিশেষজ্ঞ।",
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Riyad Hossain Huzaifa",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
