import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const SITE_URL = "https://matasoft.dev";

const TITLE = "รับทำแอป Flutter & เว็บไซต์ | MATA SOFT – ส่งตรงเวลา มี Source Code ครบ";
const DESCRIPTION =
  "รับทำ Flutter App iOS/Android และเว็บไซต์ธุรกิจ ราคาเริ่ม ฿8,000 ส่งตรงเวลาทุกครั้ง มี Source Code ครบ ปรึกษาฟรีไม่มีข้อผูกมัด | รับทำแอป รับทำเว็บ UI/UX Design";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "รับทำแอป", "รับทำเว็บ", "รับทำแอพมือถือ", "รับพัฒนาแอป",
    "Flutter App", "Flutter Developer", "รับทำ Flutter",
    "รับทำเว็บไซต์", "รับทำเว็บไซต์ธุรกิจ", "Web Developer Thailand",
    "รับทำ Landing Page", "รับทำ Web App",
    "UI/UX Design", "Figma", "ออกแบบแอป", "ออกแบบเว็บ",
    "iOS Android", "Next.js", "MATA SOFT", "matasoft",
  ],
  authors: [{ name: "MATA SOFT", url: SITE_URL }],
  creator: "MATA SOFT",
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "MATA SOFT",
    title: TITLE,
    description: DESCRIPTION,
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": SITE_URL,
      name: "MATA SOFT",
      url: SITE_URL,
      telephone: "+660943218118",
      email: "contact@matasoft.dev",
      description: DESCRIPTION,
      priceRange: "฿฿",
      areaServed: "TH",
      availableLanguage: ["Thai", "English"],
      sameAs: [],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "บริการพัฒนาซอฟต์แวร์",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "รับทำ Flutter App iOS/Android",
              description: "รับพัฒนา Flutter App รองรับทั้ง iOS และ Android จาก codebase เดียว พร้อม Source Code ครบ",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "รับทำเว็บไซต์ธุรกิจ และ Web App",
              description: "รับทำเว็บไซต์ Landing Page และ Web Application ด้วย Next.js / React SEO-ready Responsive",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "UI/UX Design",
              description: "รับออกแบบ UI/UX ด้วย Figma Wireframe และ Design System สำหรับ App และเว็บไซต์",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "รับทำแอป Flutter ราคาเท่าไหร่?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ราคาเริ่มต้น ฿15,000 สำหรับ App ง่ายๆ ไม่ซับซ้อน และ ฿35,000 สำหรับ App พร้อม Backend เชื่อมต่อ API ราคาจริงคำนวณตาม scope งาน ติดต่อเพื่อรับใบเสนอราคาฟรี",
          },
        },
        {
          "@type": "Question",
          name: "รับทำเว็บไซต์ราคาเริ่มต้นเท่าไหร่?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "รับทำเว็บไซต์ราคาเริ่มต้น ฿8,000 สำหรับ Landing Page และ ฿20,000 สำหรับเว็บไซต์ธุรกิจแบบ Multi-page พร้อม SEO",
          },
        },
        {
          "@type": "Question",
          name: "ส่งงานตรงเวลาไหม?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "วาง timeline ชัดก่อนเริ่ม อัปเดตทุกสัปดาห์ ไม่มีประวัติล่าช้า พร้อม Source Code เต็ม และดูแลหลังส่งงาน 30 วัน",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${prompt.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
