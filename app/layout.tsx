import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const SITE_URL = "https://matasoft.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "MATA SOFT – Flutter App & Web Development",
  description:
    "รับทำ Flutter App มือถือ iOS/Android, เว็บไซต์ และ UI/UX Design ครบวงจร | Flutter App & Web Development Service",
  keywords: ["Flutter", "App Development", "Web Development", "iOS", "Android", "UI/UX Design", "MATA SOFT", "รับทำแอพ", "รับทำเว็บ"],
  authors: [{ name: "MATA SOFT", url: SITE_URL }],
  creator: "MATA SOFT",
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "MATA SOFT",
    title: "MATA SOFT – Flutter App & Web Development",
    description: "รับทำ Flutter App มือถือ iOS/Android, เว็บไซต์ และ UI/UX Design ครบวงจร | Flutter App & Web Development Service",
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title: "MATA SOFT – Flutter App & Web Development",
    description: "รับทำ Flutter App มือถือ iOS/Android, เว็บไซต์ และ UI/UX Design ครบวงจร",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${prompt.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
