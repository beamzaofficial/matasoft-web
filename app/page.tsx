"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Smartphone,
  Palette,
  Code2,
  Globe,
  CheckCircle,
  Mail,
  MessageCircle,
  Phone,
  Menu,
  X,
  Zap,
  Shield,
  Layers,
  Star,
  Sun,
  Moon,
} from "lucide-react";
import DemoModal, { type DemoSlug } from "./components/DemoModal";

const content = {
  th: {
    nav: {
      services: "บริการ",
      process: "ขั้นตอน",
      pricing: "ราคา",
      portfolio: "ผลงาน",
      contact: "ติดต่อ",
      cta: "เริ่มโปรเจกต์",
    },
    hero: {
      eyebrow: "Flutter App · เว็บไซต์ · UI/UX Design",
      line1: "สร้าง App & เว็บไซต์",
      line2: "ที่ใช่สำหรับ",
      line3: "ธุรกิจคุณ",
      sub: "รับทำ Flutter App iOS/Android และเว็บไซต์ธุรกิจ พร้อม UI/UX Design ที่ใช้งานง่าย ส่งมอบตรงเวลา",
      cta: "เริ่มโปรเจกต์",
      ctaSecondary: "ดูบริการทั้งหมด",
    },
    services: {
      eyebrow: "บริการ",
      title: "ครบครัน",
      titleSub: "ทุกด้านที่คุณต้องการ",
      items: [
        {
          icon: "smartphone",
          title: "Flutter App",
          titleSub: "Development",
          desc: "รองรับทั้ง iOS และ Android จาก codebase เดียว ประหยัดเวลาและงบประมาณ ไม่ลดคุณภาพ",
          tags: ["iOS & Android", "Performance สูง", "Native-like UX"],
        },
        {
          icon: "globe",
          title: "Web",
          titleSub: "Development",
          desc: "รับทำเว็บไซต์ธุรกิจ Landing Page และ Web App ที่ตอบโจทย์ ดีไซน์สวย เร็ว และ SEO-ready",
          tags: ["Next.js / React", "Responsive", "SEO Ready"],
        },
        {
          icon: "palette",
          title: "UI/UX",
          titleSub: "Design",
          desc: "ออกแบบ UI/UX ที่สวยงาม ใช้งานง่าย เน้น User Experience ที่ดี ทำให้ผู้ใช้ติดใจ",
          tags: ["Figma", "Wireframe", "Design System"],
        },
        {
          icon: "code",
          title: "ต่อเติม",
          titleSub: "App / เว็บ",
          desc: "รับต่อเติมฟีเจอร์ใหม่ แก้ Bug หรือปรับปรุง App และเว็บไซต์เดิมให้ดีขึ้น",
          tags: ["Bug Fixing", "New Feature", "Code Review"],
        },
      ],
    },
    why: {
      eyebrow: "ทำไมต้องเลือกเรา",
      title: "ไม่ใช่แค่รับจ้าง",
      titleSub: "แต่คือพาร์ทเนอร์ที่คุณวางใจได้",
      sub: "เราเข้าใจว่าคุณไม่มีเวลาเสี่ยง ทุกโปรเจกต์คือความไว้วางใจที่เราให้ความสำคัญที่สุด",
      items: [
        { icon: "zap", label: "ส่งงานตรงเวลา ทุกครั้ง", desc: "วาง timeline ชัดก่อนเริ่ม อัปเดตทุกสัปดาห์ ไม่มีประวัติล่าช้า" },
        { icon: "shield", label: "โค้ดสะอาด ส่งมอบเต็ม", desc: "Clean code มาตรฐาน พร้อม Source Code เต็ม แก้ไขเองได้ในอนาคต" },
        { icon: "layers", label: "Design → Deploy ครบจบ", desc: "ไม่ต้องหาทีมเพิ่ม จัดการครบตั้งแต่ UI Design ไปถึง App Store" },
        { icon: "star", label: "ดูแลตลอด ไม่หายหัว", desc: "ตอบภายใน 24 ชม. แก้ Bug ฟรี 30 วันหลังส่งงาน" },
      ],
    },
    process: {
      eyebrow: "ขั้นตอน",
      title: "โปร่งใส",
      titleSub: "ตั้งแต่ต้นจนจบ",
      steps: [
        { num: "01", title: "รับ Requirement", desc: "คุยรายละเอียด ความต้องการ และ scope ของโปรเจกต์" },
        { num: "02", title: "เสนอราคา", desc: "ประเมินราคาและระยะเวลา พร้อม timeline ชัดเจน" },
        { num: "03", title: "Design UI/UX", desc: "ออกแบบ Wireframe และ UI ให้ Approve ก่อนลงมือโค้ด" },
        { num: "04", title: "พัฒนา App", desc: "เขียนโค้ด Flutter อัปเดตความคืบหน้าเป็นระยะ" },
        { num: "05", title: "ทดสอบ & แก้ไข", desc: "Test ทุก feature แก้ Bug ก่อนส่งมอบ" },
        { num: "06", title: "ส่งมอบ & Deploy", desc: "ส่ง Source Code และช่วย Deploy ขึ้น App Store / Play Store" },
      ],
    },
    pricing: {
      eyebrow: "ราคา",
      title: "เรียบง่าย",
      titleSub: "ไม่มีค่าใช้จ่ายซ่อนเร้น",
      note: "* ราคาจริงคำนวณตาม scope งาน ติดต่อเพื่อรับใบเสนอราคา",
      compareLink: "เปรียบเทียบแพ็คเกจทั้งหมด →",
      plans: [
        {
          name: "Basic",
          price: "15,000",
          desc: "App ง่ายๆ ไม่ซับซ้อน",
          features: ["1–3 หน้าหลัก", "UI ตาม Design", "iOS + Android", "Source Code"],
          cta: "สอบถาม",
          highlight: false,
        },
        {
          name: "Standard",
          price: "35,000",
          desc: "App พร้อม Backend เชื่อมต่อ API",
          features: ["Multi-screen + Navigation", "API / Firebase", "Login / Auth", "iOS + Android", "Source Code"],
          cta: "สอบถาม",
          highlight: true,
        },
        {
          name: "Premium",
          price: "70,000",
          desc: "App ซับซ้อน ฟีเจอร์ครบ",
          features: ["Custom Features ครบ", "Backend + Database", "Payment / Map / Notification", "Admin Panel", "Deploy + Support 1 เดือน"],
          cta: "สอบถาม",
          highlight: false,
        },
      ],
      webPlans: [
        {
          name: "Landing Page",
          price: "8,000",
          desc: "เว็บแนะนำธุรกิจ / โปรโมท",
          features: ["1 Page Design", "Responsive Mobile", "SEO Friendly", "Source Code"],
          cta: "สอบถาม",
          highlight: false,
        },
        {
          name: "Business Web",
          price: "20,000",
          desc: "เว็บไซต์ธุรกิจครบวงจร",
          features: ["Multi-page + CMS", "Responsive ทุกอุปกรณ์", "SEO + Performance", "Contact Form", "Source Code"],
          cta: "สอบถาม",
          highlight: true,
        },
        {
          name: "Web App",
          price: "45,000",
          desc: "ระบบ Web Application เต็มรูปแบบ",
          features: ["Full-stack Next.js / React", "Backend + Database", "Login / Auth System", "Admin Dashboard", "Deploy + Support 1 เดือน"],
          cta: "สอบถาม",
          highlight: false,
        },
      ],
      tabApp: "Flutter App",
      tabWeb: "Web / Web App",
    },
    faq: {
      eyebrow: "FAQ",
      title: "คำถาม",
      titleSub: "ที่พบบ่อย",
      items: [
        { q: "รับทำแอป Flutter ราคาเท่าไหร่?", a: "ราคาเริ่มต้น ฿15,000 สำหรับ App ง่ายๆ ไม่ซับซ้อน และ ฿35,000 สำหรับ App พร้อม Backend เชื่อมต่อ API ราคาจริงคำนวณตาม scope งาน ติดต่อเพื่อรับใบเสนอราคาฟรี" },
        { q: "รับทำเว็บไซต์ราคาเริ่มต้นเท่าไหร่?", a: "รับทำเว็บไซต์ราคาเริ่มต้น ฿8,000 สำหรับ Landing Page และ ฿20,000 สำหรับเว็บไซต์ธุรกิจแบบ Multi-page พร้อม SEO" },
        { q: "ส่งงานตรงเวลาไหม?", a: "วาง timeline ชัดก่อนเริ่ม อัปเดตทุกสัปดาห์ ไม่มีประวัติล่าช้า พร้อม Source Code เต็ม และดูแลหลังส่งงาน 30 วัน" },
        { q: "ใช้เวลานานแค่ไหน?", a: "Landing Page ใช้เวลา 1–2 สัปดาห์, App Basic 3–4 สัปดาห์, App Standard ขึ้นไป 4–8 สัปดาห์ ขึ้นอยู่กับ scope งาน" },
        { q: "ได้รับ Source Code หลังส่งงานไหม?", a: "ได้รับ Source Code เต็มทุกโปรเจกต์ ไม่ว่าจะเป็น Flutter App หรือเว็บไซต์ คุณเป็นเจ้าของโค้ดทั้งหมด นำไปต่อยอดหรือแก้ไขเองได้ในอนาคต" },
        { q: "ต้องรู้เรื่อง IT ไหมถึงจะจ้างได้?", a: "ไม่จำเป็น เราอธิบายทุกอย่างให้เข้าใจง่าย ตั้งแต่ออกแบบ วางแผน ไปจนถึง Deploy ดูแลทุกขั้นตอนให้ครบ" },
        { q: "แนวคิดในการทำงานของทีมเป็นยังไง?", a: "ผ่านงานจริงมาหลายสเกล รู้ว่าโปรแกรมที่ดีไม่ใช่แค่รันได้ แต่ต้องทำให้คนใช้งานได้จริงในชีวิตประจำวัน\nทุกโปรเจกต์เริ่มจากคำถามว่า 'ผู้ใช้ต้องการอะไร' ก่อนเสมอ ไม่ใช่ 'โค้ดบรรทัดนี้ควรเขียนยังไง'" },
      ],
    },
    portfolio: {
      eyebrow: "ผลงาน",
      title: "ตัวอย่าง",
      titleSub: "งานที่เราทำ",
      sub: "ผลงานจริงจากทีมเรา — ดูสดได้เลย",
      items: [
        {
          title: "Brain Sudoku",
          desc: "เกม Sudoku ออนไลน์เต็มรูปแบบ พร้อมระดับความยาก 4 ระดับ ระบบจับเวลา และ UI สวยงาม รองรับทุกอุปกรณ์",
          tags: ["Web App", "Next.js", "Game"],
          url: "https://brainsudoku.matasoft.dev/",
          type: "Web Development",
          cta: "เปิดดูเว็บ",
        },
        {
          title: "Brain Sudoku",
          desc: "Flutter App เกม Sudoku บน iOS พร้อมระดับความยาก สถิติ และ UI สวยงาม ดาวน์โหลดได้บน App Store",
          tags: ["Flutter App", "iOS", "Game"],
          url: "https://apps.apple.com/th/app/brain-sudoku-mind-trainer/id6761324273",
          type: "Flutter App",
          cta: "ดูบน App Store",
        },
      ],
    },
    contact: {
      eyebrow: "ติดต่อ",
      title: "เริ่มต้น",
      titleSub: "วันนี้เลย",
      sub: "ปรึกษาฟรี ไม่มีข้อผูกมัด",
      emailLabel: "อีเมล",
      lineLabel: "Line",
      lineVal: "linebeamza",
      emailVal: "contact@matasoft.dev",
      phoneLabel: "โทรศัพท์",
      phoneVal: "0943218118",
      phoneName: "มิติ",
      cta: "ส่งข้อความหาเรา",
    },
    footer: "© 2026 MATA SOFT. All rights reserved.",
  },
  en: {
    nav: {
      services: "Services",
      process: "Process",
      pricing: "Pricing",
      portfolio: "Portfolio",
      contact: "Contact",
      cta: "Start Project",
    },
    hero: {
      eyebrow: "Flutter App · Website · UI/UX Design",
      line1: "Build Apps & Websites",
      line2: "That Drive",
      line3: "Your Business",
      sub: "Flutter App iOS/Android & Business Websites with beautiful UI/UX Design. On time. Every time.",
      cta: "Start a Project",
      ctaSecondary: "View Services",
    },
    services: {
      eyebrow: "Services",
      title: "Everything",
      titleSub: "You Need to Ship",
      items: [
        {
          icon: "smartphone",
          title: "Flutter App",
          titleSub: "Development",
          desc: "iOS & Android from one codebase. Save time and budget without sacrificing quality.",
          tags: ["iOS & Android", "High Performance", "Native-like UX"],
        },
        {
          icon: "globe",
          title: "Web",
          titleSub: "Development",
          desc: "Business websites, landing pages, and web apps — fast, beautiful, and SEO-ready.",
          tags: ["Next.js / React", "Responsive", "SEO Ready"],
        },
        {
          icon: "palette",
          title: "UI/UX",
          titleSub: "Design",
          desc: "Beautiful, intuitive design that keeps users engaged and coming back.",
          tags: ["Figma", "Wireframe", "Design System"],
        },
        {
          icon: "code",
          title: "App / Web",
          titleSub: "Enhancement",
          desc: "Add features, fix bugs, or improve your existing app or website.",
          tags: ["Bug Fixing", "New Feature", "Code Review"],
        },
      ],
    },
    why: {
      eyebrow: "Why Choose Us",
      title: "Not Just a Freelancer.",
      titleSub: "A partner you can trust.",
      sub: "We know you can't afford to take risks. Every project gets our full commitment — start to finish.",
      items: [
        { icon: "zap", label: "On Time. Every Time.", desc: "Clear timeline before we start. Weekly updates. No history of being late." },
        { icon: "shield", label: "Clean Code, Full Handoff", desc: "Industry-standard code + full source code delivery. Easy to maintain and scale." },
        { icon: "layers", label: "Design to Deploy", desc: "No need to hire a team. We handle everything from UI design to App Store submission." },
        { icon: "star", label: "We Don't Disappear", desc: "Reply within 24 hrs. Free bug fixes for 30 days after delivery." },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "Transparent",
      titleSub: "From Start to Finish",
      steps: [
        { num: "01", title: "Gather Requirements", desc: "Discuss details, needs, and project scope together." },
        { num: "02", title: "Proposal & Quote", desc: "Get a clear price estimate and timeline." },
        { num: "03", title: "UI/UX Design", desc: "Design wireframes and UI for your approval before coding." },
        { num: "04", title: "App Development", desc: "Flutter development with regular progress updates." },
        { num: "05", title: "Testing & Revisions", desc: "Test all features and fix bugs before delivery." },
        { num: "06", title: "Delivery & Deploy", desc: "Hand over source code and assist with App Store / Play Store deployment." },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Simple",
      titleSub: "No Hidden Fees",
      note: "* Actual cost calculated based on scope. Contact us for a custom quote.",
      compareLink: "Compare all packages →",
      plans: [
        {
          name: "Basic",
          price: "15,000",
          desc: "Simple, focused apps",
          features: ["1–3 Main Screens", "UI from Design", "iOS + Android", "Source Code"],
          cta: "Inquire",
          highlight: false,
        },
        {
          name: "Standard",
          price: "35,000",
          desc: "App with backend & API",
          features: ["Multi-screen + Navigation", "API / Firebase", "Login / Auth", "iOS + Android", "Source Code"],
          cta: "Inquire",
          highlight: true,
        },
        {
          name: "Premium",
          price: "70,000",
          desc: "Complex, feature-rich apps",
          features: ["Fully Custom Features", "Backend + Database", "Payment / Map / Notification", "Admin Panel", "Deploy + 1 Month Support"],
          cta: "Inquire",
          highlight: false,
        },
      ],
      webPlans: [
        {
          name: "Landing Page",
          price: "8,000",
          desc: "Business intro / promo site",
          features: ["1 Page Design", "Mobile Responsive", "SEO Friendly", "Source Code"],
          cta: "Inquire",
          highlight: false,
        },
        {
          name: "Business Web",
          price: "20,000",
          desc: "Full business website",
          features: ["Multi-page + CMS", "Fully Responsive", "SEO + Performance", "Contact Form", "Source Code"],
          cta: "Inquire",
          highlight: true,
        },
        {
          name: "Web App",
          price: "45,000",
          desc: "Full-stack web application",
          features: ["Next.js / React Full-stack", "Backend + Database", "Login / Auth System", "Admin Dashboard", "Deploy + 1 Month Support"],
          cta: "Inquire",
          highlight: false,
        },
      ],
      tabApp: "Flutter App",
      tabWeb: "Web / Web App",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently",
      titleSub: "Asked Questions",
      items: [
        { q: "How much does a Flutter app cost?", a: "Starting from ฿15,000 for simple apps and ฿35,000 for apps with backend & API. Final price is based on project scope — contact us for a free quote." },
        { q: "How much does a website cost?", a: "Starting from ฿8,000 for a Landing Page and ฿20,000 for a full multi-page business website with SEO." },
        { q: "Do you deliver on time?", a: "Always. We set a clear timeline before starting, give weekly updates, and have no history of late delivery. Source code is included and we provide 30 days of post-delivery support." },
        { q: "How long does it take?", a: "A landing page takes 1–2 weeks, a Basic App 3–4 weeks, and Standard apps 4–8 weeks depending on scope." },
        { q: "Do I get the source code?", a: "Yes, full source code is included with every project. You own the code entirely and can extend or modify it in the future." },
        { q: "Do I need technical knowledge to hire you?", a: "Not at all. We explain everything in plain language, from design and planning to deployment. We handle the whole process end-to-end." },
        { q: "What's your approach to building software?", a: "We've worked across projects of all sizes and learned that great software isn't about elegant code — it's about working well for the people who use it every day.\nEvery project starts with 'what does the user actually need?' not 'how should this line of code be written?'" },
      ],
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Our",
      titleSub: "Recent Works",
      sub: "Real projects from our team — live and ready to explore.",
      items: [
        {
          title: "Brain Sudoku",
          desc: "A full-featured online Sudoku game with 4 difficulty levels, timer, and beautiful UI. Fully responsive.",
          tags: ["Web App", "Next.js", "Game"],
          url: "https://brainsudoku.matasoft.dev/",
          type: "Web Development",
          cta: "Visit Live Site",
        },
        {
          title: "Brain Sudoku",
          desc: "Flutter iOS app — Sudoku game with difficulty levels, stats tracking, and polished UI. Available on the App Store.",
          tags: ["Flutter App", "iOS", "Game"],
          url: "https://apps.apple.com/th/app/brain-sudoku-mind-trainer/id6761324273",
          type: "Flutter App",
          cta: "View on App Store",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's Build",
      titleSub: "Together",
      sub: "Free consultation, no commitment.",
      emailLabel: "Email",
      lineLabel: "Line",
      lineVal: "linebeamza",
      emailVal: "contact@matasoft.dev",
      phoneLabel: "Phone",
      phoneVal: "0943218118",
      phoneName: "Miti",
      cta: "Send Us a Message",
    },
    footer: "© 2026 MATA SOFT. All rights reserved.",
  },
};

type Lang = "th" | "en";

const dk = {
  pageBg: "#050d1a",
  sectionAlt: "#060f22",
  text: "white",
  textMuted: "rgba(255,255,255,0.45)",
  textSubtle: "rgba(255,255,255,0.18)",
  eyebrow: "#60a5fa",
  cardBg: "rgba(255,255,255,0.03)",
  cardBorder: "rgba(255,255,255,0.07)",
  cardHoverBg: "rgba(59,130,246,0.08)",
  cardHoverBorder: "rgba(59,130,246,0.3)",
  navBg: "rgba(5,13,26,0.92)",
  navBorder: "rgba(255,255,255,0.08)",
  navText: "rgba(255,255,255,0.55)",
  numCol: "rgba(59,130,246,0.22)",
  footerBorder: "rgba(255,255,255,0.06)",
  noteCol: "rgba(255,255,255,0.2)",
  tagBg: "rgba(255,255,255,0.05)",
  tagBorder: "rgba(255,255,255,0.08)",
  tagText: "rgba(255,255,255,0.35)",
  iconBg: "rgba(59,130,246,0.15)",
  iconColor: "#60a5fa",
};
const lt = {
  pageBg: "#f8faff",
  sectionAlt: "#ffffff",
  text: "#0f172a",
  textMuted: "#64748b",
  textSubtle: "#cbd5e1",
  eyebrow: "#2563eb",
  cardBg: "#ffffff",
  cardBorder: "rgba(0,0,0,0.07)",
  cardHoverBg: "rgba(59,130,246,0.04)",
  cardHoverBorder: "rgba(59,130,246,0.25)",
  navBg: "rgba(248,250,255,0.92)",
  navBorder: "rgba(0,0,0,0.08)",
  navText: "#475569",
  numCol: "rgba(37,99,235,0.12)",
  footerBorder: "rgba(0,0,0,0.07)",
  noteCol: "#94a3b8",
  tagBg: "#f1f5f9",
  tagBorder: "rgba(0,0,0,0.06)",
  tagText: "#64748b",
  iconBg: "rgba(37,99,235,0.1)",
  iconColor: "#2563eb",
};

const iconMap: Record<string, React.ReactNode> = {
  smartphone: <Smartphone className="w-6 h-6" />,
  palette: <Palette className="w-6 h-6" />,
  code: <Code2 className="w-6 h-6" />,
  globe: <Globe className="w-6 h-6" />,
  zap: <Zap className="w-5 h-5" />,
  shield: <Shield className="w-5 h-5" />,
  layers: <Layers className="w-5 h-5" />,
  star: <Star className="w-5 h-5" />,
};

// ─── Pricing Mockup SVGs ──────────────────────────────────────────────────────

function MPhoneShell({ children, dark }: { children: React.ReactNode; dark: boolean }) {
  const c = (o: number) => dark ? `rgba(96,165,250,${o})` : `rgba(37,99,235,${o})`;
  const bg = dark ? "#0b1a30" : "#eef2ff";
  const screen = dark ? "#060f22" : "#e8edff";
  return (
    <svg viewBox="0 0 200 400" style={{ width: "100%", display: "block" }}>
      <rect x="0" y="0" width="200" height="400" rx="26" fill={bg} stroke={c(0.35)} strokeWidth="1.5" />
      <rect x="9" y="18" width="182" height="352" rx="5" fill={screen} />
      <rect x="80" y="9" width="40" height="7" rx="3.5" fill={bg} />
      <rect x="76" y="385" width="48" height="5" rx="2.5" fill={c(0.28)} />
      {children}
    </svg>
  );
}

function MBrowserShell({ children, dark }: { children: React.ReactNode; dark: boolean }) {
  const c = (o: number) => dark ? `rgba(96,165,250,${o})` : `rgba(37,99,235,${o})`;
  const bg = dark ? "#0b1a30" : "#eef2ff";
  const screen = dark ? "#060f22" : "#e8edff";
  return (
    <svg viewBox="0 0 380 250" style={{ width: "100%", display: "block" }}>
      <rect x="0" y="0" width="380" height="250" rx="10" fill={bg} stroke={c(0.3)} strokeWidth="1.2" />
      <rect x="0" y="0" width="380" height="32" rx="10" fill={c(0.07)} />
      <rect x="0" y="22" width="380" height="10" fill={c(0.07)} />
      <circle cx="16" cy="16" r="4.5" fill={c(0.35)} />
      <circle cx="30" cy="16" r="4.5" fill={c(0.2)} />
      <circle cx="44" cy="16" r="4.5" fill={c(0.12)} />
      <rect x="60" y="9" width="260" height="14" rx="7" fill={c(0.1)} stroke={c(0.15)} strokeWidth="0.8" />
      <rect x="70" y="13" width="120" height="6" rx="2" fill={c(0.3)} />
      <rect x="0" y="32" width="380" height="218" rx="0" fill={screen} />
      <rect x="0" y="240" width="380" height="10" rx="10" fill={screen} />
      {children}
    </svg>
  );
}

function MAppBasic({ dark }: { dark: boolean }) {
  const c = (o: number) => dark ? `rgba(96,165,250,${o})` : `rgba(37,99,235,${o})`;
  return (
    <MPhoneShell dark={dark}>
      <text x="17" y="34" fontSize="8" fill={c(0.45)} fontFamily="monospace">9:41</text>
      <rect x="170" y="25" width="16" height="7" rx="2" fill="none" stroke={c(0.35)} strokeWidth="0.8" />
      <rect x="171" y="26" width="10" height="5" rx="1" fill={c(0.35)} />
      <rect x="9" y="38" width="182" height="26" fill={c(0.07)} stroke={c(0.1)} strokeWidth="0.5" />
      <circle cx="24" cy="51" r="6" fill={c(0.25)} />
      <rect x="35" y="47" width="44" height="5" rx="2" fill={c(0.4)} />
      <rect x="174" y="47" width="12" height="2" rx="1" fill={c(0.4)} />
      <rect x="174" y="51" width="12" height="2" rx="1" fill={c(0.4)} />
      <rect x="174" y="55" width="12" height="2" rx="1" fill={c(0.4)} />
      <rect x="13" y="70" width="174" height="80" rx="6" fill={c(0.06)} stroke={c(0.2)} strokeWidth="0.8" />
      <rect x="22" y="84" width="70" height="9" rx="3" fill={c(0.45)} />
      <rect x="22" y="97" width="110" height="5" rx="2" fill={c(0.2)} />
      <rect x="22" y="106" width="90" height="5" rx="2" fill={c(0.15)} />
      <rect x="22" y="118" width="58" height="18" rx="5" fill={c(0.3)} stroke={c(0.45)} strokeWidth="0.8" />
      <rect x="30" y="124" width="42" height="6" rx="2" fill={c(0.6)} />
      <rect x="13" y="158" width="70" height="7" rx="3" fill={c(0.4)} />
      <rect x="13" y="170" width="174" height="4" rx="2" fill={c(0.12)} />
      <rect x="13" y="178" width="140" height="4" rx="2" fill={c(0.1)} />
      <rect x="13" y="186" width="160" height="4" rx="2" fill={c(0.12)} />
      <rect x="13" y="197" width="83" height="58" rx="6" fill={c(0.05)} stroke={c(0.18)} strokeWidth="0.8" />
      <circle cx="33" cy="214" r="9" fill={c(0.2)} />
      <rect x="20" y="228" width="50" height="5" rx="2" fill={c(0.35)} />
      <rect x="20" y="237" width="65" height="4" rx="1.5" fill={c(0.15)} />
      <rect x="104" y="197" width="83" height="58" rx="6" fill={c(0.05)} stroke={c(0.18)} strokeWidth="0.8" />
      <circle cx="124" cy="214" r="9" fill={c(0.2)} />
      <rect x="111" y="228" width="50" height="5" rx="2" fill={c(0.35)} />
      <rect x="111" y="237" width="65" height="4" rx="1.5" fill={c(0.15)} />
      <rect x="13" y="263" width="174" height="28" rx="6" fill={c(0.05)} stroke={c(0.15)} strokeWidth="0.8" />
      <rect x="20" y="272" width="90" height="5" rx="2" fill={c(0.12)} />
      <rect x="128" y="269" width="52" height="14" rx="4" fill={c(0.28)} />
      <rect x="136" y="273" width="36" height="6" rx="2" fill={c(0.5)} />
      <rect x="9" y="298" width="182" height="42" fill={c(0.04)} stroke={c(0.1)} strokeWidth="0.5" />
      {([45, 100, 155] as number[]).map((cx, i) => (
        <g key={i}>
          <circle cx={cx} cy="313" r="6" fill={i === 0 ? c(0.5) : c(0.14)} />
          <rect x={cx - 8} y="323" width="16" height="3.5" rx="1.5" fill={i === 0 ? c(0.5) : c(0.14)} />
        </g>
      ))}
    </MPhoneShell>
  );
}

function MAppStandard({ dark }: { dark: boolean }) {
  const c = (o: number) => dark ? `rgba(96,165,250,${o})` : `rgba(37,99,235,${o})`;
  return (
    <MPhoneShell dark={dark}>
      <text x="17" y="34" fontSize="8" fill={c(0.45)} fontFamily="monospace">9:41</text>
      <rect x="170" y="25" width="16" height="7" rx="2" fill="none" stroke={c(0.35)} strokeWidth="0.8" />
      <rect x="171" y="26" width="13" height="5" rx="1" fill={c(0.4)} />
      <rect x="9" y="38" width="182" height="26" fill={c(0.07)} stroke={c(0.1)} strokeWidth="0.5" />
      <rect x="17" y="47" width="65" height="7" rx="3" fill={c(0.35)} />
      <circle cx="182" cy="51" r="8" fill={c(0.25)} stroke={c(0.4)} strokeWidth="0.8" />
      <rect x="13" y="72" width="85" height="8" rx="3" fill={c(0.45)} />
      <rect x="13" y="84" width="58" height="5" rx="2" fill={c(0.2)} />
      <rect x="13" y="96" width="84" height="48" rx="7" fill={c(0.08)} stroke={c(0.25)} strokeWidth="0.8" />
      <rect x="21" y="105" width="48" height="5" rx="2" fill={c(0.3)} />
      <rect x="21" y="114" width="32" height="12" rx="3" fill={c(0.5)} />
      <rect x="21" y="130" width="55" height="4" rx="2" fill={c(0.15)} />
      <rect x="103" y="96" width="88" height="48" rx="7" fill={c(0.08)} stroke={c(0.25)} strokeWidth="0.8" />
      <rect x="111" y="105" width="52" height="5" rx="2" fill={c(0.3)} />
      <rect x="111" y="114" width="38" height="12" rx="3" fill={c(0.5)} />
      <rect x="111" y="130" width="48" height="4" rx="2" fill={c(0.15)} />
      <rect x="13" y="152" width="80" height="7" rx="3" fill={c(0.4)} />
      {([168, 194, 220, 246] as number[]).map((y, i) => (
        <g key={i}>
          <circle cx="25" cy={y + 8} r="8" fill={c(0.2)} stroke={c(0.28)} strokeWidth="0.5" />
          <rect x="40" y={y + 4} width={90 + (i % 2) * 20} height="6" rx="2" fill={c(0.3)} />
          <rect x="40" y={y + 14} width={60 + (i % 3) * 15} height="4" rx="2" fill={c(0.15)} />
          <rect x="176" y={y + 5} width="15" height="9" rx="2" fill={c(0.18)} />
          {i < 3 && <line x1="13" y1={y + 26} x2="191" y2={y + 26} stroke={c(0.07)} strokeWidth="0.5" />}
        </g>
      ))}
      <rect x="13" y="272" width="46" height="14" rx="7" fill={c(0.15)} stroke={c(0.3)} strokeWidth="0.5" />
      <rect x="20" y="276" width="32" height="6" rx="2" fill={c(0.45)} />
      <rect x="66" y="272" width="52" height="14" rx="7" fill={c(0.07)} stroke={c(0.18)} strokeWidth="0.5" />
      <rect x="73" y="276" width="38" height="6" rx="2" fill={c(0.2)} />
      <circle cx="177" cy="290" r="15" fill={c(0.3)} stroke={c(0.55)} strokeWidth="1" />
      <rect x="173" y="289" width="8" height="2" rx="1" fill={c(0.9)} />
      <rect x="176" y="286" width="2" height="8" rx="1" fill={c(0.9)} />
      <rect x="9" y="314" width="182" height="44" fill={c(0.04)} stroke={c(0.1)} strokeWidth="0.5" />
      {([35, 78, 122, 165] as number[]).map((cx, i) => (
        <g key={i}>
          <circle cx={cx} cy="329" r="6" fill={i === 0 ? c(0.5) : c(0.14)} />
          <rect x={cx - 8} y="339" width="16" height="3.5" rx="1.5" fill={i === 0 ? c(0.5) : c(0.14)} />
        </g>
      ))}
    </MPhoneShell>
  );
}

function MAppPremium({ dark }: { dark: boolean }) {
  const c = (o: number) => dark ? `rgba(96,165,250,${o})` : `rgba(37,99,235,${o})`;
  return (
    <MPhoneShell dark={dark}>
      <text x="17" y="34" fontSize="8" fill={c(0.45)} fontFamily="monospace">9:41</text>
      <rect x="170" y="25" width="16" height="7" rx="2" fill="none" stroke={c(0.35)} strokeWidth="0.8" />
      <rect x="171" y="26" width="14" height="5" rx="1" fill={c(0.45)} />
      <rect x="9" y="38" width="182" height="26" fill={c(0.07)} stroke={c(0.1)} strokeWidth="0.5" />
      <rect x="17" y="47" width="75" height="7" rx="3" fill={c(0.35)} />
      <circle cx="162" cy="51" r="4" fill="none" stroke={c(0.5)} strokeWidth="0.8" />
      <circle cx="166" cy="48" r="3.5" fill="rgba(239,68,68,0.75)" />
      <circle cx="182" cy="51" r="8" fill={c(0.25)} stroke={c(0.4)} strokeWidth="0.8" />
      {([13, 77, 141] as number[]).map((x, i) => (
        <g key={i}>
          <rect x={x} y="72" width="57" height="38" rx="5" fill={c(0.08)} stroke={c(0.2)} strokeWidth="0.7" />
          <rect x={x + 7} y="80" width="32" height="5" rx="2" fill={c(0.28)} />
          <rect x={x + 7} y="89" width="28" height="10" rx="2" fill={c(0.5)} />
          <rect x={x + 7} y="103" width="38" height="3" rx="1.5" fill={c(0.15)} />
        </g>
      ))}
      <rect x="13" y="118" width="174" height="68" rx="5" fill={c(0.04)} stroke={c(0.14)} strokeWidth="0.7" />
      <rect x="18" y="124" width="55" height="5" rx="2" fill={c(0.35)} />
      {([22, 40, 58, 76, 94, 112, 130, 148, 166] as number[]).map((x, i) => {
        const hs = [22, 36, 28, 44, 32, 18, 40, 26, 34];
        return <rect key={i} x={x} y={182 - hs[i]} width="13" height={hs[i]} rx="2" fill={c(0.25 + (hs[i] / 44) * 0.3)} />;
      })}
      <line x1="18" y1="182" x2="183" y2="182" stroke={c(0.15)} strokeWidth="0.7" />
      <rect x="13" y="194" width="174" height="54" rx="5" fill={c(0.04)} stroke={c(0.14)} strokeWidth="0.7" />
      {([208, 224, 240] as number[]).map(y => <line key={y} x1="13" y1={y} x2="187" y2={y} stroke={c(0.06)} strokeWidth="0.5" />)}
      {([50, 100, 150] as number[]).map(x => <line key={x} x1={x} y1="194" x2={x} y2="248" stroke={c(0.06)} strokeWidth="0.5" />)}
      <circle cx="96" cy="220" r="9" fill={c(0.3)} stroke={c(0.6)} strokeWidth="1" />
      <circle cx="96" cy="220" r="3.5" fill={c(0.85)} />
      <rect x="13" y="256" width="174" height="26" rx="7" fill={c(0.2)} stroke={c(0.45)} strokeWidth="0.9" />
      <rect x="52" y="264" width="96" height="10" rx="3" fill={c(0.6)} />
      <rect x="9" y="290" width="182" height="42" fill={c(0.04)} stroke={c(0.1)} strokeWidth="0.5" />
      {([25, 60, 100, 140, 175] as number[]).map((cx, i) => (
        <g key={i}>
          <circle cx={cx} cy="305" r="5.5" fill={i === 0 ? c(0.55) : c(0.14)} />
          <rect x={cx - 7} y="314" width="14" height="3" rx="1.5" fill={i === 0 ? c(0.55) : c(0.14)} />
        </g>
      ))}
    </MPhoneShell>
  );
}

function MWebLanding({ dark }: { dark: boolean }) {
  const c = (o: number) => dark ? `rgba(96,165,250,${o})` : `rgba(37,99,235,${o})`;
  return (
    <MBrowserShell dark={dark}>
      <rect x="0" y="32" width="380" height="28" fill={c(0.06)} stroke={c(0.1)} strokeWidth="0.5" />
      <circle cx="16" cy="46" r="6" fill={c(0.3)} />
      <rect x="26" y="43" width="36" height="6" rx="2" fill={c(0.4)} />
      {([140, 176, 212] as number[]).map((x, i) => (
        <rect key={i} x={x} y="43" width={28 + i * 4} height="6" rx="2" fill={c(0.2)} />
      ))}
      <rect x="318" y="40" width="50" height="14" rx="4" fill={c(0.3)} stroke={c(0.45)} strokeWidth="0.7" />
      <rect x="326" y="44" width="34" height="6" rx="2" fill={c(0.55)} />
      <rect x="0" y="60" width="380" height="80" fill={c(0.04)} />
      <rect x="30" y="74" width="140" height="12" rx="4" fill={c(0.5)} />
      <rect x="30" y="90" width="200" height="7" rx="3" fill={c(0.22)} />
      <rect x="30" y="101" width="170" height="7" rx="3" fill={c(0.18)} />
      <rect x="30" y="116" width="64" height="18" rx="5" fill={c(0.35)} stroke={c(0.5)} strokeWidth="0.8" />
      <rect x="38" y="121" width="48" height="8" rx="2" fill={c(0.6)} />
      <rect x="102" y="116" width="64" height="18" rx="5" fill="none" stroke={c(0.3)} strokeWidth="0.8" />
      <rect x="260" y="68" width="100" height="68" rx="6" fill={c(0.07)} stroke={c(0.18)} strokeWidth="0.8" />
      <line x1="0" y1="145" x2="380" y2="145" stroke={c(0.08)} strokeWidth="0.7" />
      {([20, 148, 276] as number[]).map((x) => (
        <g key={x}>
          <circle cx={x + 55} cy="164" r="12" fill={c(0.14)} stroke={c(0.25)} strokeWidth="0.8" />
          <rect x={x + 24} y="182" width="62" height="6" rx="2" fill={c(0.38)} />
          <rect x={x + 14} y="192" width="82" height="4" rx="2" fill={c(0.14)} />
          <rect x={x + 18} y="200" width="74" height="4" rx="2" fill={c(0.12)} />
          <rect x={x + 22} y="208" width="66" height="4" rx="2" fill={c(0.1)} />
        </g>
      ))}
      <rect x="0" y="220" width="380" height="30" fill={c(0.06)} stroke={c(0.08)} strokeWidth="0.5" />
      <rect x="16" y="228" width="50" height="5" rx="2" fill={c(0.3)} />
      <rect x="220" y="228" width="35" height="5" rx="2" fill={c(0.18)} />
      <rect x="264" y="228" width="35" height="5" rx="2" fill={c(0.18)} />
      <rect x="308" y="228" width="55" height="5" rx="2" fill={c(0.18)} />
    </MBrowserShell>
  );
}

function MWebBusiness({ dark }: { dark: boolean }) {
  const c = (o: number) => dark ? `rgba(96,165,250,${o})` : `rgba(37,99,235,${o})`;
  return (
    <MBrowserShell dark={dark}>
      <rect x="0" y="32" width="380" height="26" fill={c(0.06)} stroke={c(0.1)} strokeWidth="0.5" />
      <circle cx="16" cy="45" r="5.5" fill={c(0.3)} />
      <rect x="26" y="42" width="36" height="6" rx="2" fill={c(0.4)} />
      {([120, 152, 184, 216, 248] as number[]).map((x, i) => (
        <rect key={i} x={x} y="42" width={24 + (i % 2) * 6} height="6" rx="2" fill={c(0.18)} />
      ))}
      <rect x="316" y="39" width="52" height="14" rx="4" fill={c(0.28)} stroke={c(0.4)} strokeWidth="0.7" />
      <rect x="324" y="43" width="36" height="6" rx="2" fill={c(0.5)} />
      <rect x="0" y="58" width="380" height="48" fill={c(0.04)} />
      <rect x="20" y="68" width="120" height="9" rx="3" fill={c(0.5)} />
      <rect x="20" y="81" width="160" height="5" rx="2" fill={c(0.2)} />
      <rect x="20" y="89" width="140" height="5" rx="2" fill={c(0.15)} />
      <line x1="0" y1="110" x2="380" y2="110" stroke={c(0.08)} strokeWidth="0.7" />
      <rect x="15" y="118" width="155" height="48" rx="5" fill={c(0.06)} stroke={c(0.14)} strokeWidth="0.7" />
      <rect x="185" y="118" width="180" height="9" rx="3" fill={c(0.4)} />
      <rect x="185" y="131" width="160" height="4" rx="2" fill={c(0.15)} />
      <rect x="185" y="139" width="170" height="4" rx="2" fill={c(0.13)} />
      <rect x="185" y="147" width="150" height="4" rx="2" fill={c(0.12)} />
      <rect x="185" y="155" width="140" height="4" rx="2" fill={c(0.1)} />
      <line x1="0" y1="172" x2="380" y2="172" stroke={c(0.08)} strokeWidth="0.7" />
      {([10, 135, 260] as number[]).map((x) => (
        <g key={x}>
          <rect x={x} y="180" width="110" height="32" rx="5" fill={c(0.05)} stroke={c(0.16)} strokeWidth="0.7" />
          <circle cx={x + 16} cy="192" r="7" fill={c(0.18)} />
          <rect x={x + 28} y="188" width="60" height="5" rx="2" fill={c(0.32)} />
          <rect x={x + 28} y="197" width="74" height="4" rx="1.5" fill={c(0.14)} />
        </g>
      ))}
      <line x1="0" y1="218" x2="380" y2="218" stroke={c(0.08)} strokeWidth="0.7" />
      <rect x="50" y="228" width="130" height="8" rx="3" fill={c(0.06)} stroke={c(0.2)} strokeWidth="0.7" />
      <rect x="200" y="228" width="130" height="8" rx="3" fill={c(0.06)} stroke={c(0.2)} strokeWidth="0.7" />
      <rect x="50" y="240" width="280" height="5" rx="2" fill={c(0.06)} stroke={c(0.15)} strokeWidth="0.7" />
    </MBrowserShell>
  );
}

function MWebApp({ dark }: { dark: boolean }) {
  const c = (o: number) => dark ? `rgba(96,165,250,${o})` : `rgba(37,99,235,${o})`;
  return (
    <MBrowserShell dark={dark}>
      <rect x="0" y="32" width="72" height="218" fill={c(0.06)} stroke={c(0.12)} strokeWidth="0.5" />
      <circle cx="14" cy="46" r="6" fill={c(0.3)} />
      <rect x="24" y="43" width="36" height="6" rx="2" fill={c(0.4)} />
      {(["Dashboard","Orders","Users","Analytics","Settings"] as string[]).map((_, i) => (
        <g key={i}>
          <rect x="6" y={62 + i * 26} width="60" height="20" rx="4" fill={i === 0 ? c(0.15) : "none"} stroke={i === 0 ? c(0.35) : "none"} strokeWidth="0.7" />
          <circle cx="18" cy={72 + i * 26} r="5" fill={i === 0 ? c(0.5) : c(0.18)} />
          <rect x="28" y={69 + i * 26} width={30 + (i % 3) * 6} height="6" rx="2" fill={i === 0 ? c(0.5) : c(0.18)} />
        </g>
      ))}
      <rect x="72" y="32" width="308" height="26" fill={c(0.05)} stroke={c(0.1)} strokeWidth="0.5" />
      <rect x="82" y="40" width="60" height="5" rx="2" fill={c(0.25)} />
      <rect x="148" y="40" width="6" height="5" rx="1" fill={c(0.2)} />
      <rect x="158" y="40" width="60" height="5" rx="2" fill={c(0.3)} />
      <circle cx="354" cy="45" r="8" fill={c(0.25)} stroke={c(0.35)} strokeWidth="0.7" />
      <circle cx="336" cy="45" r="7" fill={c(0.1)} stroke={c(0.25)} strokeWidth="0.7" />
      {([78, 152, 226, 300] as number[]).map((x) => (
        <g key={x}>
          <rect x={x} y="64" width="64" height="36" rx="5" fill={c(0.07)} stroke={c(0.2)} strokeWidth="0.7" />
          <rect x={x + 7} y="72" width="38" height="5" rx="2" fill={c(0.25)} />
          <rect x={x + 7} y="81" width="28" height="11" rx="2" fill={c(0.5)} />
        </g>
      ))}
      <rect x="78" y="106" width="288" height="16" rx="0" fill={c(0.07)} />
      {([0,1,2,3,4] as number[]).map((i) => (
        <rect key={i} x={84 + i * 56} y="112" width={40} height="5" rx="2" fill={c(0.35)} />
      ))}
      {([0,1,2,3] as number[]).map(row => (
        <g key={row}>
          <rect x="78" y={122 + row * 20} width="288" height="20" rx="0" fill={row % 2 === 0 ? c(0.03) : "none"} />
          <rect x="84" y={127 + row * 20} width="20" height="5" rx="2" fill={c(0.2)} />
          <rect x="140" y={127 + row * 20} width="48" height="5" rx="2" fill={c(0.28)} />
          <rect x="218" y={125 + row * 20} width="38" height="9" rx="4" fill={row % 3 === 0 ? "rgba(74,222,128,0.15)" : c(0.08)} stroke={row % 3 === 0 ? "rgba(74,222,128,0.4)" : c(0.18)} strokeWidth="0.6" />
          <rect x="280" y={127 + row * 20} width="36" height="5" rx="2" fill={c(0.2)} />
          <rect x="328" y={125 + row * 20} width="30" height="9" rx="3" fill={c(0.15)} />
        </g>
      ))}
      {([0,1,2,3,4] as number[]).map(i => (
        <rect key={i} x={180 + i * 20} y="207" width="14" height="10" rx="3" fill={i === 1 ? c(0.35) : c(0.08)} stroke={i === 1 ? c(0.5) : c(0.14)} strokeWidth="0.6" />
      ))}
    </MBrowserShell>
  );
}

// ─── Hero Wireframe Drawing Animation ────────────────────────────────────────
function HeroWireframe({ dark }: { dark: boolean }) {
  const s  = (o: number) => dark ? `rgba(96,165,250,${o})`  : `rgba(37,99,235,${o})`;
  const sv = (o: number) => dark ? `rgba(167,139,250,${o})` : `rgba(109,40,217,${o})`;   // violet accent for web
  const bg  = dark ? "#070f1e" : "#f0f5ff";
  const bgW = dark ? "#0b1220" : "#f5f0ff";                                                // browser bg (violet tint)
  const scr  = dark ? "rgba(4,10,25,0.92)"  : "rgba(214,225,255,0.55)";
  const scrW = dark ? "rgba(6,4,22,0.88)"   : "rgba(237,233,254,0.6)";

  const drw = (t: number, d = 0.65): React.CSSProperties => ({
    animation: `heroDraw ${d}s cubic-bezier(0.4,0,0.2,1) ${t}s both`,
  });
  const fi = (t: number, d = 0.4): React.CSSProperties => ({
    opacity: 0,
    animation: `heroFadeIn ${d}s ease-out ${t}s forwards`,
  });

  return (
    <svg viewBox="0 0 430 570" width="100%" xmlns="http://www.w3.org/2000/svg"
      style={{ display:"block", filter: dark ? "drop-shadow(0 0 44px rgba(96,165,250,0.16))" : "drop-shadow(0 0 32px rgba(37,99,235,0.13))" }}>

      {/* ── Corner registration marks ── */}
      {([[5,5,1,1],[425,5,-1,1],[425,565,-1,-1],[5,565,1,-1]] as [number,number,number,number][]).map(([x,y,dx,dy],i) => (
        <g key={i}>
          <line x1={x} y1={y} x2={x+dx*16} y2={y} stroke={s(0.45)} strokeWidth="1" style={fi(i*0.05, 0.2)} />
          <line x1={x} y1={y} x2={x} y2={y+dy*16} stroke={s(0.45)} strokeWidth="1" style={fi(i*0.05, 0.2)} />
        </g>
      ))}

      {/* ════════════════════════════════════════════════
          LAYER 1 — BROWSER WINDOW (web, drawn first)
          ════════════════════════════════════════════════ */}

      {/* Browser shadow */}
      <rect x="8" y="22" width="298" height="238" rx="10" fill={dark?"rgba(0,0,0,0.35)":"rgba(0,0,50,0.09)"} style={fi(0.05, 1.2)} />

      {/* Browser body fill */}
      <rect x="5" y="18" width="298" height="236" rx="10" fill={bgW} style={fi(0.1, 1.0)} />

      {/* Browser outline */}
      <rect x="5" y="18" width="298" height="236" rx="10"
        fill="none" stroke={sv(0.75)} strokeWidth="1.4"
        pathLength="1" strokeDasharray="1" strokeDashoffset="1"
        style={drw(0.1, 1.2)} />

      {/* Chrome bar fill */}
      <rect x="5" y="18" width="298" height="32" rx="10" fill={dark?"rgba(15,8,40,0.9)":"rgba(230,220,255,0.8)"} style={fi(0.3, 0.6)} />
      <rect x="5" y="36" width="298" height="14" fill={dark?"rgba(15,8,40,0.9)":"rgba(230,220,255,0.8)"} style={fi(0.3, 0.6)} />
      <line x1="5" y1="50" x2="303" y2="50" stroke={sv(0.18)} strokeWidth="0.6" style={fi(0.8)} />

      {/* Traffic lights */}
      {[0,1,2].map(i => (
        <circle key={i} cx={20+i*14} cy={34} r="4.5"
          fill="none" stroke={sv(0.5)} strokeWidth="0.7"
          pathLength="1" strokeDasharray="1" strokeDashoffset="1"
          style={drw(0.6+i*0.07, 0.2)} />
      ))}

      {/* URL bar */}
      <rect x="56" y="26" width="160" height="16" rx="8"
        fill="none" stroke={sv(0.4)} strokeWidth="0.7"
        pathLength="1" strokeDasharray="1" strokeDashoffset="1"
        style={drw(0.85, 0.4)} />
      <rect x="60" y="30" width="85" height="8" rx="3" fill={sv(0.18)} style={fi(1.2, 0.25)} />

      {/* Browser content area */}
      <rect x="5" y="50" width="298" height="204" fill={scrW} style={fi(0.9, 0.7)} />

      {/* Web nav bar */}
      <rect x="16" y="58" width="26" height="16" rx="3"
        fill="none" stroke={sv(0.5)} strokeWidth="0.7"
        pathLength="1" strokeDasharray="1" strokeDashoffset="1"
        style={drw(1.1, 0.25)} />
      <rect x="18" y="62" width="22" height="8" rx="2" fill={sv(0.2)} style={fi(1.3, 0.2)} />
      {[70,100,130,160].map((x,i) => (
        <rect key={i} x={x} y={62} width={22} height={7} rx="2" fill={sv(0.12)} style={fi(1.15+i*0.05, 0.2)} />
      ))}
      <rect x="240" y="58" width="48" height="16" rx="8"
        fill="none" stroke={sv(0.55)} strokeWidth="0.8"
        pathLength="1" strokeDasharray="1" strokeDashoffset="1"
        style={drw(1.25, 0.3)} />
      <rect x="244" y="62" width="40" height="8" rx="4" fill={sv(0.2)} style={fi(1.5, 0.2)} />
      <line x1="5" y1="80" x2="303" y2="80" stroke={sv(0.1)} strokeWidth="0.5" style={fi(1.3)} />

      {/* Web hero text section */}
      <rect x="18" y="90"  width="140" height="12" rx="3" fill={sv(0.28)} style={fi(1.5, 0.3)} />
      <rect x="18" y="107" width="105" height="8"  rx="2" fill={sv(0.14)} style={fi(1.58, 0.25)} />
      <rect x="18" y="119" width="120" height="8"  rx="2" fill={sv(0.14)} style={fi(1.64, 0.25)} />
      <rect x="18" y="133" width="64"  height="20" rx="10"
        fill="none" stroke={sv(0.65)} strokeWidth="0.9"
        pathLength="1" strokeDasharray="1" strokeDashoffset="1"
        style={drw(1.8, 0.4)} />
      <rect x="22" y="137" width="56" height="12" rx="6" fill={sv(0.2)} style={fi(2.1, 0.2)} />

      {/* Web hero image placeholder */}
      <rect x="175" y="86" width="112" height="80" rx="6"
        fill="none" stroke={sv(0.3)} strokeWidth="0.7"
        pathLength="1" strokeDasharray="1" strokeDashoffset="1"
        style={drw(1.6, 0.45)} />
      <line x1="175" y1="86" x2="287" y2="166" stroke={sv(0.12)} strokeWidth="0.5" style={fi(2.0)} />
      <line x1="287" y1="86" x2="175" y2="166" stroke={sv(0.12)} strokeWidth="0.5" style={fi(2.0)} />

      {/* Web feature cards strip */}
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={16+i*96} y={176} width={84} height={66} rx="6"
            fill="none" stroke={sv(0.38)} strokeWidth="0.7"
            pathLength="1" strokeDasharray="1" strokeDashoffset="1"
            style={drw(2.1+i*0.1, 0.38)} />
          <circle cx={16+i*96+14} cy={192} r="7"
            fill="none" stroke={sv(0.38)} strokeWidth="0.65"
            pathLength="1" strokeDasharray="1" strokeDashoffset="1"
            style={drw(2.22+i*0.1, 0.22)} />
          <rect x={16+i*96+6} y={204} width={70} height={5.5} rx="2" fill={sv(0.18)} style={fi(2.35+i*0.08, 0.18)} />
          <rect x={16+i*96+6} y={213} width={55} height={4.5} rx="2" fill={sv(0.1)}  style={fi(2.42+i*0.08, 0.18)} />
          <rect x={16+i*96+6} y={222} width={62} height={4.5} rx="2" fill={sv(0.1)}  style={fi(2.48+i*0.08, 0.18)} />
        </g>
      ))}

      {/* WEB label */}
      <text x="11" y="15" fontSize="7" fill={sv(0.45)} fontFamily="monospace" letterSpacing="0.1em"
        style={fi(0.6, 0.4)}>WEB</text>

      {/* ════════════════════════════════════════════════
          LAYER 2 — PHONE (app, drawn on top of browser)
          ════════════════════════════════════════════════ */}

      {/* Drop shadow for phone depth */}
      <rect x="160" y="68" width="262" height="498" rx="30"
        fill={dark?"rgba(0,0,0,0.45)":"rgba(10,10,60,0.14)"} style={fi(1.4, 1.0)} />

      {/* Phone body fill */}
      <rect x="155" y="62" width="262" height="500" rx="30" fill={bg} style={fi(1.5, 1.0)} />

      {/* Phone body outline */}
      <rect x="155" y="62" width="262" height="500" rx="30"
        fill="none" stroke={s(0.88)} strokeWidth="1.5"
        pathLength="1" strokeDasharray="1" strokeDashoffset="1"
        style={drw(1.5, 1.4)} />

      {/* Dynamic island */}
      <rect x="243" y="62" width="90" height="25" rx="12"
        fill={bg} stroke={s(0.6)} strokeWidth="1"
        pathLength="1" strokeDasharray="1" strokeDashoffset="1"
        style={drw(2.1, 0.38)} />

      {/* Screen area */}
      <rect x="155" y="100" width="262" height="430" fill={scr} style={fi(2.3, 0.8)} />

      {/* Status bar */}
      <text x="171" y="126" fontSize="8.5" fill={s(0.5)} fontFamily="monospace" style={fi(2.45, 0.3)}>9:41</text>
      <rect x="364" y="116" width="22" height="10" rx="2" fill="none" stroke={s(0.4)} strokeWidth="0.8"
        pathLength="1" strokeDasharray="1" strokeDashoffset="1" style={drw(2.45, 0.3)} />
      <rect x="366" y="118" width="16" height="6" rx="1" fill={s(0.35)} style={fi(2.7, 0.2)} />
      <line x1="155" y1="140" x2="417" y2="140" stroke={s(0.1)} strokeWidth="0.5" style={fi(2.5)} />

      {/* App nav */}
      <rect x="170" y="148" width="28" height="20" rx="3" fill="none" stroke={s(0.55)} strokeWidth="0.75"
        pathLength="1" strokeDasharray="1" strokeDashoffset="1" style={drw(2.6, 0.28)} />
      <rect x="175" y="153" width="18" height="10" rx="2" fill={s(0.22)} style={fi(2.85, 0.2)} />
      {[0,5,10].map((dy, i) => (
        <line key={i} x1={372} y1={150+dy} x2={400} y2={150+dy}
          stroke={s(0.5)} strokeWidth="1.2" strokeLinecap="round" style={fi(2.65+i*0.05)} />
      ))}
      <line x1="155" y1="175" x2="417" y2="175" stroke={s(0.09)} strokeWidth="0.5" style={fi(2.7)} />

      {/* App hero/banner area */}
      <rect x="163" y="182" width="244" height="104" rx="7"
        fill="none" stroke={s(0.5)} strokeWidth="0.85"
        pathLength="1" strokeDasharray="1" strokeDashoffset="1"
        style={drw(2.8, 0.65)} />
      <rect x="174" y="194" width="110" height="10" rx="2.5" fill={s(0.22)} style={fi(3.4, 0.28)} />
      <rect x="174" y="208" width="80"  height="7" rx="2"   fill={s(0.12)} style={fi(3.47, 0.22)} />
      <rect x="174" y="218" width="96"  height="7" rx="2"   fill={s(0.12)} style={fi(3.52, 0.22)} />
      <rect x="174" y="232" width="68"  height="22" rx="11" fill="none" stroke={s(0.65)} strokeWidth="0.85"
        pathLength="1" strokeDasharray="1" strokeDashoffset="1" style={drw(3.4, 0.38)} />
      <rect x="178" y="236" width="60" height="14" rx="7" fill={s(0.18)} style={fi(3.75, 0.2)} />
      <rect x="318" y="188" width="80" height="90" rx="6"
        fill="none" stroke={s(0.3)} strokeWidth="0.65"
        pathLength="1" strokeDasharray="1" strokeDashoffset="1" style={drw(3.1, 0.45)} />
      <line x1="318" y1="188" x2="398" y2="278" stroke={s(0.12)} strokeWidth="0.5" style={fi(3.5)} />
      <line x1="398" y1="188" x2="318" y2="278" stroke={s(0.12)} strokeWidth="0.5" style={fi(3.5)} />

      {/* App cards */}
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={163+i*84} y={298} width={74} height={62} rx="7"
            fill="none" stroke={s(0.45)} strokeWidth="0.75"
            pathLength="1" strokeDasharray="1" strokeDashoffset="1"
            style={drw(3.55+i*0.12, 0.42)} />
          <circle cx={163+i*84+14} cy={313} r="7.5"
            fill="none" stroke={s(0.4)} strokeWidth="0.7"
            pathLength="1" strokeDasharray="1" strokeDashoffset="1"
            style={drw(3.68+i*0.12, 0.25)} />
          <rect x={163+i*84+7} y={325} width={58} height={5.5} rx="2" fill={s(0.2)}  style={fi(3.8+i*0.09, 0.18)} />
          <rect x={163+i*84+7} y={334} width={44} height={4.5} rx="2" fill={s(0.12)} style={fi(3.87+i*0.09, 0.18)} />
          <rect x={163+i*84+7} y={342} width={52} height={4}   rx="2" fill={s(0.1)}  style={fi(3.93+i*0.09, 0.18)} />
        </g>
      ))}

      {/* Text section */}
      <rect x="170" y="374" width="90" height="8.5" rx="2.5" fill={s(0.28)} style={fi(3.9, 0.22)} />
      {[384,395,406,417].map((y, i) => (
        <rect key={i} x="170" y={y} width={i%2===0 ? 225 : 170} height="5" rx="2"
          fill={s(0.11)} style={fi(3.98+i*0.06, 0.18)} />
      ))}

      {/* CTA button */}
      <rect x="193" y="436" width="188" height="38" rx="19"
        fill="none" stroke={s(0.72)} strokeWidth="1.2"
        pathLength="1" strokeDasharray="1" strokeDashoffset="1"
        style={drw(4.2, 0.5)} />
      <rect x="197" y="440" width="180" height="30" rx="15" fill={s(0.15)} style={fi(4.65, 0.28)} />
      <rect x="240" y="449" width="94"  height="12" rx="3"  fill={s(0.25)} style={fi(4.7, 0.22)} />

      {/* Bottom nav */}
      <line x1="155" y1="496" x2="417" y2="496" stroke={s(0.13)} strokeWidth="0.5" style={fi(4.1)} />
      {[0,1,2,3].map(i => (
        <g key={i}>
          <circle cx={178+i*62} cy={515} r="9" fill="none" stroke={s(0.42)} strokeWidth="0.75"
            pathLength="1" strokeDasharray="1" strokeDashoffset="1" style={drw(4.1+i*0.08, 0.28)} />
          <rect x={163+i*62} y={528} width="30" height="4.5" rx="2" fill={s(0.13)} style={fi(4.25+i*0.06, 0.18)} />
        </g>
      ))}

      {/* Blinking pen cursor */}
      <circle cx="395" cy="478" r="3.5" fill={s(0.9)}
        style={{ animation: "heroPenBlink 1.1s ease-in-out 4.7s infinite" }} />
      <circle cx="395" cy="478" r="8" fill="none" stroke={s(0.3)} strokeWidth="0.8"
        style={{ animation: "heroPenBlink 1.1s ease-in-out 4.7s infinite", opacity:0 }} />

      {/* APP label */}
      <text x="161" y="58" fontSize="7" fill={s(0.45)} fontFamily="monospace" letterSpacing="0.1em"
        style={fi(1.8, 0.4)}>APP</text>

      {/* Annotation */}
      <line x1="426" y1="62" x2="426" y2="560" stroke={s(0.2)} strokeWidth="0.5" strokeDasharray="3 2" style={fi(4.8, 0.5)} />
      <line x1="426" y1="62"  x2="417" y2="62"  stroke={s(0.2)} strokeWidth="0.5" style={fi(4.8, 0.5)} />
      <line x1="426" y1="560" x2="417" y2="560" stroke={s(0.2)} strokeWidth="0.5" style={fi(4.8, 0.5)} />
      <text x="420" y="14" fontSize="7.5" fill={s(0.3)} fontFamily="monospace" letterSpacing="0.1em"
        textAnchor="end" style={fi(4.9, 0.5)}>MATA SOFT · v2.0</text>
    </svg>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("th");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryPlan, setInquiryPlan] = useState("");
  const [inquiryText, setInquiryText] = useState("");
  const [inquiryContact, setInquiryContact] = useState("");
  const [inquiryDone, setInquiryDone] = useState(false);
  const [inquiryLoading, setInquiryLoading] = useState(false);
  const [demoSlug, setDemoSlug] = useState<DemoSlug | null>(null);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const t = content[lang];
  const c = isDark ? dk : lt;

  const spotlightRef = useRef<HTMLDivElement>(null);
  const heroGeoRef   = useRef<HTMLDivElement>(null);
  const backTopRef   = useRef<HTMLButtonElement>(null);
  // Normalize floating-point SVG coords — prevents SSR/client hydration mismatch
  const p = (n: number) => +n.toFixed(4);

  useEffect(() => {
    const onScroll = () => {
      const s = window.scrollY;
      setScrolled(s > 60);
      const bt = backTopRef.current;
      if (bt) {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        const pct = total > 0 ? Math.round((s / total) * 100) : 0;
        bt.style.opacity = s > 400 ? "1" : "0";
        bt.style.pointerEvents = s > 400 ? "auto" : "none";
        const fill = bt.querySelector<HTMLElement>(".bt-fill");
        if (fill) fill.style.height = `${pct}%`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cursor spotlight — direct DOM, zero re-renders
  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      el.style.left = `${e.clientX - 300}px`;
      el.style.top  = `${e.clientY - 300}px`;
      el.style.opacity = "1";
    };
    const onLeave = () => { el.style.opacity = "0"; };
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [lang]);

  // Scroll-driven hero geometry — direct DOM, zero re-renders
  useEffect(() => {
    const root = heroGeoRef.current;
    if (!root) return;
    const onScroll = () => {
      const s = window.scrollY;
      if (s > window.innerHeight * 1.2) return;
      // HUD drifts up + fades with scroll
      const hud = root.querySelector<HTMLElement>(".hgeo-hud");
      if (hud) hud.style.transform =
        `translate(-50%, calc(-50% + ${s * -0.09}px)) scale(${Math.max(1 - s * 0.00018, 0.82)})`;
      // Scroll-driven ring gets extra rotation
      const sring = root.querySelector<SVGElement>(".hgeo-sring");
      if (sring) { sring.style.transform = `rotate(${s * 0.07}deg)`; sring.style.transformOrigin = "350px 350px"; }
      // Grid moves forward (parallax)
      const grid = root.querySelector<HTMLElement>(".hgeo-grid");
      if (grid) grid.style.transform = `translateY(${s * 0.16}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 3-D card tilt
  const onTilt = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r  = el.getBoundingClientRect();
    const x  = ((e.clientX - r.left) / r.width  - 0.5) * 14;
    const y  = ((e.clientY - r.top)  / r.height - 0.5) * -14;
    el.style.transform = `perspective(700px) rotateY(${x}deg) rotateX(${y}deg) translateY(-4px) scale(1.01)`;
  }, []);

  const offTilt = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(700px) rotateY(0deg) rotateX(0deg) translateY(0) scale(1)";
  }, []);

  const heroBg = isDark
    ? "linear-gradient(160deg,#020818 0%,#040d24 40%,#061236 70%,#0a1a4a 100%)"
    : "linear-gradient(160deg,#eff6ff 0%,#dbeafe 35%,#ede9fe 70%,#f5f3ff 100%)";
  const heroFade = isDark ? `linear-gradient(to top,${dk.pageBg},transparent)` : `linear-gradient(to top,${lt.pageBg},transparent)`;

  return (
    <>
      {/* Global styles */}
      <style>{`
        .theme-root, .theme-root * {
          transition:
            background-color 0.55s cubic-bezier(0.4,0,0.2,1),
            background 0.55s cubic-bezier(0.4,0,0.2,1),
            color 0.4s cubic-bezier(0.4,0,0.2,1),
            border-color 0.4s cubic-bezier(0.4,0,0.2,1),
            box-shadow 0.4s ease !important;
        }
        /* Scroll reveal */
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1) !important;
        }
        .reveal.is-visible { opacity: 1; transform: translateY(0); }
        .reveal-d1 { transition-delay: 80ms !important; }
        .reveal-d2 { transition-delay: 160ms !important; }
        .reveal-d3 { transition-delay: 240ms !important; }
        .reveal-d4 { transition-delay: 320ms !important; }
        .reveal-d5 { transition-delay: 400ms !important; }
        .reveal-d6 { transition-delay: 480ms !important; }
        /* Tilt card */
        .tilt-card {
          transition: transform 0.2s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.2s ease, border-color 0.2s ease !important;
          will-change: transform;
        }
        /* Magnetic button */
        .mag-btn { transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1) !important; }
        @keyframes pulseGlow {
          0%,100% { opacity:.7; transform:translate(-50%,-60%) scale(1); }
          50% { opacity:1; transform:translate(-50%,-60%) scale(1.08); }
        }
        @keyframes floatA {
          0%,100% { transform:translate(0,0) scale(1); }
          33% { transform:translate(40px,30px) scale(1.05); }
          66% { transform:translate(-20px,50px) scale(0.97); }
        }
        @keyframes floatB {
          0%,100% { transform:translate(0,0); }
          50% { transform:translate(-50px,-40px); }
        }
        @keyframes floatC {
          0%,100% { transform:translate(0,0) scale(1); }
          40% { transform:translate(30px,-40px) scale(1.1); }
          70% { transform:translate(-10px,20px) scale(0.95); }
        }
        @keyframes svgSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0% { background-position:0% 50%; }
          100% { background-position:200% 50%; }
        }
        @keyframes toggleSlide {
          from { transform:translateX(0); }
          to { transform:translateX(22px); }
        }
        /* ── Contact section animations ── */
        @keyframes contactPingExpand {
          0%   { transform:scale(1); opacity:0.75; }
          100% { transform:scale(9); opacity:0; }
        }
        @keyframes contactNodeBlink {
          0%,100% { opacity:1; }
          50%     { opacity:0.25; }
        }
        @keyframes contactSignalFlow {
          from { stroke-dashoffset:0; }
          to   { stroke-dashoffset:-1; }
        }
        @keyframes dialogIn {
          from { opacity:0; transform:scale(0.92) translateY(16px); }
          to   { opacity:1; transform:scale(1) translateY(0); }
        }
        @keyframes dialogOut {
          from { opacity:1; transform:scale(1) translateY(0); }
          to   { opacity:0; transform:scale(0.92) translateY(16px); }
        }
        @keyframes backdropIn {
          from { opacity:0; }
          to   { opacity:1; }
        }
        /* Hero wireframe responsive sizing */
        .hero-wf { max-width: min(175px, 46vw); }
        @media (min-width: 640px) { .hero-wf { max-width: min(260px, 60vw); } }
        @media (min-width: 1024px) { .hero-wf { max-width: 360px; } }
        @keyframes heroDraw {
          from { stroke-dashoffset: 1; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes heroPenBlink {
          0%,100% { opacity: 1; transform: scale(1); }
          50%     { opacity: 0.2; transform: scale(0.6); }
        }
        @keyframes checkPop {
          0%   { transform:scale(0) rotate(-10deg); }
          60%  { transform:scale(1.2) rotate(4deg); }
          100% { transform:scale(1) rotate(0deg); }
        }
        @keyframes contactCtaGlow {
          0%,100% { box-shadow:0 0 30px rgba(37,99,235,0.45),0 0 60px rgba(124,58,237,0.18),0 4px 24px rgba(0,0,0,0.5); }
          50%     { box-shadow:0 0 55px rgba(37,99,235,0.75),0 0 110px rgba(124,58,237,0.38),0 4px 24px rgba(0,0,0,0.5); }
        }
        /* ── Service card animations ── */
        .svc-char {
          display: inline-block;
          transform: translateY(110%) skewY(5deg);
          transition: transform 0.52s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.is-visible .svc-char { transform: translateY(0) skewY(0); }
        .svc-sub-fade {
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .reveal.is-visible .svc-sub-fade { opacity: 1; transform: translateX(0); }
        .svc-desc-fade {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .reveal.is-visible .svc-desc-fade { opacity: 1; transform: translateY(0); }
        .svc-tag-item {
          opacity: 0;
          transform: scale(0.8) translateY(6px);
          transition: opacity 0.4s ease, transform 0.48s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .reveal.is-visible .svc-tag-item { opacity: 1; transform: scale(1) translateY(0); }
        /* ── Process step card animations ── */
        .proc-watermark {
          transition: transform 0.55s ease, opacity 0.4s ease !important;
        }
        .tilt-card:hover .proc-watermark {
          transform: scale(1.1) translate(-4px, -4px) !important;
          opacity: 0.18 !important;
        }
        .proc-desc {
          opacity: 0.6;
          transition: opacity 0.32s ease, transform 0.32s ease;
        }
        .tilt-card:hover .proc-desc { opacity: 1; transform: translateY(-2px); }
        /* Word-reveal: scroll-triggered for ALL devices, hover is bonus only */
        .proc-word {
          display: inline-block;
          transform: translateY(112%) skewY(5deg);
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.is-visible .proc-word { transform: translateY(0) skewY(0); }
        /* ── ───────────────────────── ── */
        .svc-geo-path {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          transition: stroke-dashoffset 0.22s ease 0s;
          fill: none;
        }
        .tilt-card:hover .svc-geo-path {
          stroke-dashoffset: 0;
          transition: stroke-dashoffset 1.1s cubic-bezier(0.77, 0, 0.175, 1) var(--geo-delay, 0s);
        }
      `}</style>

      <div
        className="theme-root"
        style={{ background: c.pageBg, color: c.text, fontFamily: "var(--font-prompt), sans-serif" }}
      >
        {/* Cursor spotlight */}
        <div
          ref={spotlightRef}
          className="fixed pointer-events-none z-[9998]"
          style={{
            width: 600, height: 600,
            borderRadius: "50%",
            opacity: 0,
            background: isDark
              ? "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 65%)"
              : "radial-gradient(circle, rgba(37,99,235,0.055) 0%, transparent 65%)",
            transition: "opacity 0.4s ease",
            mixBlendMode: "normal",
          }}
        />

        {/* ── Navbar ── */}
        <nav
          className="fixed top-0 left-0 right-0 z-50"
          style={{
            background: scrolled ? c.navBg : "transparent",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            borderBottom: scrolled ? `1px solid ${c.navBorder}` : "1px solid transparent",
          }}
        >
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
            <a href="#" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: isDark ? "white" : "#2563eb" }}>
                <span className="font-black text-xs" style={{ color: isDark ? "#2563eb" : "white" }}>M</span>
              </div>
              <span className="font-semibold text-[15px] tracking-tight" style={{ color: isDark ? "white" : c.text }}>MATA SOFT</span>
            </a>

            <div className="hidden md:flex items-center gap-8 text-[13px]" style={{ color: c.navText }}>
              {(["#services","#process","#pricing","#portfolio","#contact"] as const).map((href, i) => (
                <a key={href} href={href} className="hover:opacity-100 transition-opacity" style={{ opacity: 0.75 }}>
                  {[t.nav.services, t.nav.process, t.nav.pricing, t.nav.portfolio, t.nav.contact][i]}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              {/* Lang */}
              <button
                onClick={() => setLang(lang === "th" ? "en" : "th")}
                className="text-[12px] px-3 py-1.5 rounded-full border transition-all"
                style={{ color: c.navText, borderColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.12)" }}
              >
                {lang === "th" ? "EN" : "TH"}
              </button>

              {/* Dark/Light toggle pill */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="relative flex items-center rounded-full p-1 cursor-pointer"
                style={{
                  width: 52, height: 28,
                  background: isDark ? "rgba(59,130,246,0.25)" : "rgba(37,99,235,0.12)",
                  border: isDark ? "1px solid rgba(96,165,250,0.4)" : "1px solid rgba(37,99,235,0.25)",
                }}
                aria-label="Toggle theme"
              >
                <span
                  className="absolute flex items-center justify-center rounded-full"
                  style={{
                    width: 20, height: 20,
                    background: isDark ? "#60a5fa" : "#2563eb",
                    transform: isDark ? "translateX(0px)" : "translateX(24px)",
                    transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), background 0.3s ease",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  {isDark
                    ? <Moon className="w-3 h-3 text-white" />
                    : <Sun className="w-3 h-3 text-white" />
                  }
                </span>
              </button>

              <a
                href="#contact"
                className="mag-btn text-[13px] font-semibold px-5 py-2 rounded-full"
                style={{ background: "linear-gradient(135deg,#2563eb,#7c3aed)", color: "white" }}
                onMouseMove={e => {
                  const el = e.currentTarget; const r = el.getBoundingClientRect();
                  el.style.transform = `translate(${(e.clientX-r.left-r.width/2)*0.3}px,${(e.clientY-r.top-r.height/2)*0.3}px) scale(1.05)`;
                }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translate(0,0) scale(1)"; }}
              >
                {t.nav.cta}
              </a>
            </div>

            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setIsDark(!isDark)}
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: c.cardBg, border: `1px solid ${c.cardBorder}`, color: c.eyebrow }}
              >
                {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>
              <button onClick={() => setMenuOpen(!menuOpen)} style={{ color: c.navText }}>
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden px-6 py-6 flex flex-col gap-5 text-[15px]"
              style={{ background: c.navBg, backdropFilter: "blur(20px)", borderTop: `1px solid ${c.navBorder}` }}
            >
              {([["#services",t.nav.services],["#process",t.nav.process],["#pricing",t.nav.pricing],["#portfolio",t.nav.portfolio],["#contact",t.nav.contact]] as [string,string][]).map(([href,label]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{ color: c.navText }}>{label}</a>
              ))}
              <div className="flex gap-3">
                <button onClick={() => setLang(lang==="th"?"en":"th")} className="text-[12px] px-4 py-2 rounded-full border flex-1" style={{ color: c.navText, borderColor: c.cardBorder }}>
                  {lang==="th"?"EN":"TH"}
                </button>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="text-center font-semibold py-2 rounded-full flex-1 text-[14px]" style={{ background: "linear-gradient(135deg,#2563eb,#7c3aed)", color: "white" }}>
                  {t.nav.cta}
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* ── Hero (always dark animated bg) ── */}
        <section
          className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
          style={{ background: heroBg }}
        >
          {/* orbs */}
          <div className="absolute pointer-events-none" style={{ width:700,height:700,top:"50%",left:"50%",transform:"translate(-50%,-60%)",borderRadius:"50%",background:isDark?"radial-gradient(circle,rgba(59,130,246,0.28) 0%,rgba(37,99,235,0.1) 40%,transparent 70%)":"radial-gradient(circle,rgba(37,99,235,0.18) 0%,transparent 70%)",animation:"pulseGlow 6s ease-in-out infinite" }} />
          <div className="absolute pointer-events-none" style={{ width:500,height:500,top:"-10%",left:"-10%",borderRadius:"50%",background:isDark?"radial-gradient(circle,rgba(124,58,237,0.18) 0%,transparent 65%)":"radial-gradient(circle,rgba(124,58,237,0.1) 0%,transparent 65%)",animation:"floatA 9s ease-in-out infinite" }} />
          <div className="absolute pointer-events-none" style={{ width:400,height:400,bottom:"5%",right:"-5%",borderRadius:"50%",background:isDark?"radial-gradient(circle,rgba(6,182,212,0.15) 0%,transparent 65%)":"radial-gradient(circle,rgba(6,182,212,0.1) 0%,transparent 65%)",animation:"floatB 11s ease-in-out infinite" }} />
          <div className="absolute pointer-events-none" style={{ width:260,height:260,top:"30%",left:"8%",borderRadius:"50%",background:isDark?"radial-gradient(circle,rgba(99,102,241,0.2) 0%,transparent 65%)":"radial-gradient(circle,rgba(99,102,241,0.12) 0%,transparent 65%)",animation:"floatC 13s ease-in-out infinite" }} />

          {/* flat grid */}
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage:`linear-gradient(${isDark?"rgba(255,255,255,0.025)":"rgba(37,99,235,0.04)"} 1px,transparent 1px),linear-gradient(90deg,${isDark?"rgba(255,255,255,0.025)":"rgba(37,99,235,0.04)"} 1px,transparent 1px)`,backgroundSize:"80px 80px" }} />

          {/* ── Scroll-driven geometry ── */}
          <div ref={heroGeoRef} className="absolute inset-0 pointer-events-none overflow-hidden select-none">

            {/* Vanishing-point SVG perspective grid */}
            <div className="hgeo-grid absolute left-0 right-0 bottom-0" style={{ height:"58%" }}>
              <svg viewBox="0 0 1400 420" preserveAspectRatio="xMidYMax slice" width="100%" height="100%"
                style={{ maskImage:"linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)", WebkitMaskImage:"linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)" }}>
                {/* Fan lines from vanishing point (700, 0) */}
                {[-700,-525,-350,-210,-105,-42,0,42,105,210,350,525,700].map((dx, i) => (
                  <line key={i} x1={700} y1={0} x2={700+dx} y2={420}
                    stroke={isDark?"rgba(96,165,250,0.14)":"rgba(37,99,235,0.13)"} strokeWidth="0.8"/>
                ))}
                {/* Perspective-spaced horizontal lines */}
                {[55, 112, 182, 265, 360].map((y, i) => {
                  const t = y / 420;
                  return <line key={i} x1={700 - 700*t} y1={y} x2={700 + 700*t} y2={y}
                    stroke={isDark?"rgba(96,165,250,0.13)":"rgba(37,99,235,0.11)"} strokeWidth="0.7"/>;
                })}
              </svg>
            </div>

            {/* Precision HUD targeting circle */}
            <div className="hgeo-hud absolute" style={{ left:"50%", top:"48%", transform:"translate(-50%,-50%)", width:700, height:700 }}>
              <svg width="700" height="700" viewBox="0 0 700 700" style={{ overflow:"visible" }}>

                {/* ── 4 concentric rings ── */}
                <circle cx="350" cy="350" r="320" fill="none" stroke={isDark?"rgba(96,165,250,0.13)":"rgba(37,99,235,0.10)"} strokeWidth="0.8"/>
                <circle cx="350" cy="350" r="240" fill="none" stroke={isDark?"rgba(96,165,250,0.18)":"rgba(37,99,235,0.14)"} strokeWidth="0.8"/>
                <circle cx="350" cy="350" r="165" fill="none" stroke={isDark?"rgba(96,165,250,0.24)":"rgba(37,99,235,0.18)"} strokeWidth="0.7"/>
                <circle cx="350" cy="350" r="90"  fill="none" stroke={isDark?"rgba(96,165,250,0.28)":"rgba(37,99,235,0.22)"} strokeWidth="0.7"/>

                {/* ── 24 tick marks on outer ring ── */}
                {Array.from({length:24}, (_,i) => {
                  const deg = i*15, rad = (deg-90)*Math.PI/180;
                  const major = deg%90===0, medium = !major && deg%30===0;
                  const len = major?22:medium?13:7;
                  const cos = Math.cos(rad), sin = Math.sin(rad);
                  return <line key={i}
                    x1={p(350+cos*(320-len))} y1={p(350+sin*(320-len))}
                    x2={p(350+cos*320)}       y2={p(350+sin*320)}
                    stroke={isDark?(major?"rgba(96,165,250,0.75)":medium?"rgba(96,165,250,0.45)":"rgba(96,165,250,0.22)"):(major?"rgba(37,99,235,0.6)":medium?"rgba(37,99,235,0.35)":"rgba(37,99,235,0.17)")}
                    strokeWidth={major?1.4:medium?0.9:0.6}/>;
                })}

                {/* ── Degree labels at cardinals ── */}
                {([[0,"000"],[90,"090"],[180,"180"],[270,"270"]] as [number,string][]).map(([deg,lbl]) => {
                  const rad = (deg-90)*Math.PI/180;
                  return <text key={deg} x={p(350+Math.cos(rad)*298)} y={p(350+Math.sin(rad)*298)}
                    textAnchor="middle" dominantBaseline="middle" fontSize="8.5" letterSpacing="0.1em"
                    fill={isDark?"rgba(96,165,250,0.38)":"rgba(37,99,235,0.3)"}
                    fontFamily="var(--font-prompt),monospace">{lbl}</text>;
                })}

                {/* ── Cardinal dots on r=240 ── */}
                {[0,90,180,270].map((deg,i) => {
                  const rad=(deg-90)*Math.PI/180;
                  return <circle key={i} cx={p(350+Math.cos(rad)*240)} cy={p(350+Math.sin(rad)*240)}
                    r="2.8" fill={isDark?"rgba(96,165,250,0.55)":"rgba(37,99,235,0.45)"}/>;
                })}

                {/* ── Crosshairs (gap at center r=90) ── */}
                <line x1="350" y1={350-320} x2="350" y2={350-92}  stroke={isDark?"rgba(96,165,250,0.18)":"rgba(37,99,235,0.13)"} strokeWidth="0.6"/>
                <line x1="350" y1={350+92}  x2="350" y2={350+320} stroke={isDark?"rgba(96,165,250,0.18)":"rgba(37,99,235,0.13)"} strokeWidth="0.6"/>
                <line x1={350-320} y1="350" x2={350-92} y2="350"  stroke={isDark?"rgba(96,165,250,0.18)":"rgba(37,99,235,0.13)"} strokeWidth="0.6"/>
                <line x1={350+92}  y1="350" x2={350+320} y2="350" stroke={isDark?"rgba(96,165,250,0.18)":"rgba(37,99,235,0.13)"} strokeWidth="0.6"/>

                {/* ── Rotating arc 1 — r=240, 110° CW, 9s ── */}
                <g style={{ transformOrigin:"350px 350px", animation:"svgSpin 9s linear infinite" }}>
                  <path d={`M 350 110 A 240 240 0 0 1 ${p(350+240*Math.cos(20*Math.PI/180))} ${p(350+240*Math.sin(20*Math.PI/180))}`}
                    fill="none" stroke={isDark?"rgba(96,165,250,0.62)":"rgba(37,99,235,0.52)"} strokeWidth="1.6" strokeLinecap="round"/>
                  <circle cx="350" cy="110" r="2.5" fill={isDark?"rgba(96,165,250,0.8)":"rgba(37,99,235,0.7)"}/>
                </g>

                {/* ── Rotating arc 2 — r=320, 55° CCW, 14s ── */}
                <g style={{ transformOrigin:"350px 350px", animation:"svgSpin 14s linear infinite reverse" }}>
                  <path d={`M 350 30 A 320 320 0 0 1 ${p(350+320*Math.cos(-35*Math.PI/180))} ${p(350+320*Math.sin(-35*Math.PI/180))}`}
                    fill="none" stroke={isDark?"rgba(96,165,250,0.42)":"rgba(37,99,235,0.35)"} strokeWidth="1.2" strokeLinecap="round"/>
                  <circle cx="350" cy="30" r="2" fill={isDark?"rgba(96,165,250,0.65)":"rgba(37,99,235,0.55)"}/>
                </g>

                {/* ── Rotating arc 3 — r=90, 40° CW, 5s + scroll-driven outer wrapper ── */}
                <g className="hgeo-sring">
                  <g style={{ transformOrigin:"350px 350px", animation:"svgSpin 5s linear infinite" }}>
                    <path d={`M 350 260 A 90 90 0 0 1 ${p(350+90*Math.cos(-50*Math.PI/180))} ${p(350+90*Math.sin(-50*Math.PI/180))}`}
                      fill="none" stroke={isDark?"rgba(167,139,250,0.72)":"rgba(79,70,229,0.6)"} strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="350" cy="260" r="2.5" fill={isDark?"rgba(167,139,250,0.9)":"rgba(79,70,229,0.75)"}/>
                  </g>
                </g>

                {/* ── Scan sweep at r=165, 7s ── */}
                <g style={{ transformOrigin:"350px 350px", animation:"svgSpin 7s linear infinite" }}>
                  <line x1="350" y1="350" x2="350" y2={350-165}
                    stroke={isDark?"rgba(96,165,250,0.28)":"rgba(37,99,235,0.22)"} strokeWidth="0.8"/>
                  <circle cx="350" cy={350-165} r="2.2"
                    fill={isDark?"rgba(96,165,250,0.65)":"rgba(37,99,235,0.55)"}/>
                </g>

                {/* ── Corner reticle L-marks ── */}
                {([[30,30,1,1],[670,30,-1,1],[670,670,-1,-1],[30,670,1,-1]] as [number,number,number,number][]).map(([x,y,dx,dy],i) => (
                  <g key={i}>
                    <line x1={x} y1={y} x2={x+dx*24} y2={y}
                      stroke={isDark?"rgba(96,165,250,0.45)":"rgba(37,99,235,0.35)"} strokeWidth="1.3"/>
                    <line x1={x} y1={y} x2={x} y2={y+dy*24}
                      stroke={isDark?"rgba(96,165,250,0.45)":"rgba(37,99,235,0.35)"} strokeWidth="1.3"/>
                  </g>
                ))}

                {/* ── Center: outer dot + ring + micro crosshair ── */}
                <circle cx="350" cy="350" r="13" fill="none"
                  stroke={isDark?"rgba(96,165,250,0.35)":"rgba(37,99,235,0.28)"} strokeWidth="0.8"/>
                <circle cx="350" cy="350" r="4"
                  fill={isDark?"rgba(96,165,250,0.85)":"rgba(37,99,235,0.75)"}/>
                <line x1="340" y1="350" x2="360" y2="350"
                  stroke={isDark?"rgba(96,165,250,0.5)":"rgba(37,99,235,0.4)"} strokeWidth="0.9"/>
                <line x1="350" y1="340" x2="350" y2="360"
                  stroke={isDark?"rgba(96,165,250,0.5)":"rgba(37,99,235,0.4)"} strokeWidth="0.9"/>

                {/* ── HUD data tags ── */}
                <text x="368" y="192" fontSize="8" letterSpacing="0.12em"
                  fill={isDark?"rgba(96,165,250,0.38)":"rgba(37,99,235,0.3)"}
                  fontFamily="var(--font-prompt),monospace">SYS:ONLINE</text>
                <text x="60"  y="378" fontSize="8" letterSpacing="0.1em"
                  fill={isDark?"rgba(96,165,250,0.35)":"rgba(37,99,235,0.27)"}
                  fontFamily="var(--font-prompt),monospace">LAT 13.7563°N</text>
                <text x="432" y="508" fontSize="8" letterSpacing="0.1em"
                  fill={isDark?"rgba(96,165,250,0.35)":"rgba(37,99,235,0.27)"}
                  fontFamily="var(--font-prompt),monospace">LON 100.5018°E</text>
                <text x="222" y="155" fontSize="8" letterSpacing="0.12em"
                  fill={isDark?"rgba(96,165,250,0.3)":"rgba(37,99,235,0.23)"}
                  fontFamily="var(--font-prompt),monospace">MATA SOFT v2.0</text>

              </svg>
            </div>

          </div>

          <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

              {/* ── Text content ── */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-[12px] font-semibold tracking-[0.15em] uppercase"
                  style={{ background: isDark?"rgba(59,130,246,0.15)":"rgba(37,99,235,0.1)", border:`1px solid ${isDark?"rgba(59,130,246,0.35)":"rgba(37,99,235,0.25)"}`, color: isDark?"#93c5fd":"#2563eb" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: isDark?"#60a5fa":"#2563eb" }} />
                  {t.hero.eyebrow}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-[62px] font-black leading-[1.15] tracking-[-0.01em] mb-8" style={{ color: isDark?"white":c.text }}>
                  <span className="block">{t.hero.line1}</span>
                  <span className="block" style={{ backgroundImage:"linear-gradient(90deg,#60a5fa 0%,#a78bfa 45%,#38bdf8 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",backgroundSize:"200% 100%",animation:"shimmer 4s linear infinite" }}>
                    {t.hero.line2}
                  </span>
                  <span className="block" style={{ color: isDark?"white":c.text }}>{t.hero.line3}</span>
                </h1>

                <p className="text-lg md:text-xl max-w-lg leading-relaxed mb-12 mx-auto lg:mx-0" style={{ color: isDark?"rgba(255,255,255,0.5)":"rgba(15,23,42,0.55)" }}>
                  {t.hero.sub}
                </p>

                <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                  <a href="#contact"
                    className="mag-btn font-semibold px-8 py-4 rounded-full text-[15px] min-w-[180px] text-center"
                    style={{ background:"linear-gradient(135deg,#2563eb,#7c3aed)",color:"white",boxShadow:"0 0 40px rgba(59,130,246,0.4)" }}
                    onMouseMove={e => {
                      const el = e.currentTarget; const r = el.getBoundingClientRect();
                      el.style.transform = `translate(${(e.clientX-r.left-r.width/2)*0.3}px,${(e.clientY-r.top-r.height/2)*0.3}px) scale(1.05)`;
                      el.style.boxShadow = "0 0 60px rgba(59,130,246,0.6)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = "translate(0,0) scale(1)";
                      e.currentTarget.style.boxShadow = "0 0 40px rgba(59,130,246,0.4)";
                    }}
                  >
                    {t.hero.cta}
                  </a>
                  <a href="#services" className="text-[15px] font-medium flex items-center gap-1.5 transition-opacity hover:opacity-100"
                    style={{ color: isDark?"rgba(255,255,255,0.6)":"rgba(15,23,42,0.5)", opacity:0.8 }}
                  >
                    {t.hero.ctaSecondary} <span className="text-lg">↓</span>
                  </a>
                </div>
              </div>

              {/* ── Wireframe drawing animation ── */}
              <div className="hero-wf flex-shrink-0 flex items-center justify-center w-full lg:w-auto">
                <HeroWireframe dark={isDark} />
              </div>

            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: isDark?"rgba(255,255,255,0.2)":"rgba(15,23,42,0.2)", fontSize:11 }}>
            <div style={{ width:1,height:40,background:`linear-gradient(to bottom,transparent,${isDark?"rgba(255,255,255,0.25)":"rgba(15,23,42,0.2)"})` }} />
            scroll
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: heroFade }} />
        </section>

        {/* ── Services ── */}
        <section id="services" className="py-28 px-6 overflow-hidden" style={{ background: c.pageBg }}>
          <div className="max-w-6xl mx-auto">
            {/* Headline + phone mockup */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-16 reveal">
              <div className="lg:max-w-lg">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.22em] uppercase px-3.5 py-1.5 rounded-full mb-5"
                  style={{ background: isDark?"rgba(59,130,246,0.15)":"rgba(37,99,235,0.08)", color: c.eyebrow, border:`1px solid ${isDark?"rgba(59,130,246,0.3)":"rgba(37,99,235,0.18)"}`, display:"inline-flex" }}
                >
                  <span style={{ width:5,height:5,borderRadius:"50%",background:c.eyebrow,display:"inline-block",flexShrink:0 }} />
                  {t.services.eyebrow}
                </span>
                <h2 className="text-4xl md:text-[56px] font-black leading-[1.1] tracking-tight">
                  <span style={{ backgroundImage:`linear-gradient(135deg,${isDark?"#60a5fa":"#1d4ed8"} 0%,${isDark?"#a78bfa":"#6d28d9"} 100%)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
                    {t.services.title}
                  </span>
                  <br />
                  <span style={{ color: c.text }}>{t.services.titleSub}</span>
                </h2>
              </div>

              {/* Phone mockup cluster */}
              <div className="hidden lg:block relative flex-shrink-0" style={{ width:280, height:320 }}>
                {/* Back phone */}
                <div className="absolute" style={{ right:0, top:20, width:150, height:260, borderRadius:22, background:isDark?"rgba(255,255,255,0.025)":"#e8f0fe", border:`1.5px solid ${isDark?"rgba(255,255,255,0.05)":"rgba(37,99,235,0.12)"}`, transform:"rotate(6deg)", zIndex:0, overflow:"hidden" }}>
                  <div style={{ height:20, borderBottom:`1px solid ${isDark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"}`, display:"flex", alignItems:"center", paddingLeft:10, gap:4 }}>
                    {[1,2,3].map(k => <div key={k} style={{ width:14, height:4, borderRadius:2, background:isDark?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)" }} />)}
                  </div>
                  <div style={{ padding:10 }}>
                    <div style={{ height:60, borderRadius:10, background:"linear-gradient(135deg,#4f46e5,#7c3aed)", marginBottom:8, opacity:0.6 }} />
                    {[70,55,70].map((w,k) => <div key={k} style={{ height:8, borderRadius:4, width:`${w}%`, background:isDark?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.07)", marginBottom:6 }} />)}
                  </div>
                </div>
                {/* Front phone */}
                <div className="absolute" style={{ left:0, top:0, width:170, height:290, borderRadius:26, background:isDark?"rgba(255,255,255,0.04)":"#ffffff", border:`1.5px solid ${isDark?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.08)"}`, zIndex:1, overflow:"hidden", boxShadow:isDark?"0 30px 70px rgba(0,0,0,0.5)":"0 30px 70px rgba(0,0,0,0.12)" }}>
                  {/* Status bar */}
                  <div style={{ height:26, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 12px", borderBottom:`1px solid ${isDark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)"}` }}>
                    <div style={{ width:28, height:5, borderRadius:3, background:isDark?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.1)" }} />
                    <div style={{ display:"flex", gap:3 }}>
                      {[12,8,16].map((w,k) => <div key={k} style={{ width:w, height:5, borderRadius:3, background:isDark?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.08)" }} />)}
                    </div>
                  </div>
                  {/* Banner */}
                  <div style={{ margin:"10px 10px 8px", height:72, borderRadius:14, background:"linear-gradient(135deg,#2563eb,#6d28d9)", display:"flex", alignItems:"flex-end", padding:"8px 10px" }}>
                    <div>
                      <div style={{ width:60, height:5, borderRadius:3, background:"rgba(255,255,255,0.5)", marginBottom:3 }} />
                      <div style={{ width:40, height:5, borderRadius:3, background:"rgba(255,255,255,0.3)" }} />
                    </div>
                  </div>
                  {/* List rows */}
                  {[75,60,75].map((w,k) => (
                    <div key={k} style={{ display:"flex", alignItems:"center", gap:7, padding:"6px 10px" }}>
                      <div style={{ width:26, height:26, borderRadius:8, background:isDark?"rgba(59,130,246,0.2)":"rgba(37,99,235,0.1)", flexShrink:0 }} />
                      <div style={{ flex:1 }}>
                        <div style={{ width:`${w}%`, height:6, borderRadius:3, background:isDark?"rgba(255,255,255,0.14)":"rgba(0,0,0,0.1)", marginBottom:3 }} />
                        <div style={{ width:"50%", height:5, borderRadius:3, background:isDark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)" }} />
                      </div>
                    </div>
                  ))}
                  {/* CTA bar */}
                  <div style={{ margin:"6px 10px", height:30, borderRadius:8, background:"linear-gradient(90deg,rgba(37,99,235,0.2),rgba(109,40,217,0.15))", border:`1px solid ${isDark?"rgba(59,130,246,0.2)":"rgba(37,99,235,0.15)"}` }} />
                  {/* Bottom nav */}
                  <div style={{ position:"absolute", bottom:0, left:0, right:0, height:40, display:"flex", alignItems:"center", justifyContent:"space-around", borderTop:`1px solid ${isDark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"}` }}>
                    {[true,false,false,false].map((active,k) => (
                      <div key={k} style={{ width:18, height:18, borderRadius:5, background:active?(isDark?"#3b82f6":"#2563eb"):isDark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)" }} />
                    ))}
                  </div>
                </div>
                {/* Floating labels */}
                <div className="absolute" style={{ top:-8, right:10, background:isDark?"rgba(59,130,246,0.2)":"rgba(37,99,235,0.1)", border:`1px solid ${isDark?"rgba(59,130,246,0.4)":"rgba(37,99,235,0.25)"}`, color:c.eyebrow, fontSize:10, fontWeight:700, padding:"3px 8px", borderRadius:20, zIndex:2 }}>Flutter</div>
                <div className="absolute" style={{ bottom:10, right:-10, background:isDark?"rgba(109,40,217,0.2)":"rgba(109,40,217,0.08)", border:`1px solid ${isDark?"rgba(109,40,217,0.4)":"rgba(109,40,217,0.2)"}`, color:isDark?"#a78bfa":"#6d28d9", fontSize:10, fontWeight:700, padding:"3px 8px", borderRadius:20, zIndex:2 }}>iOS & Android</div>
              </div>
            </div>

            {/* 2×2 Cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              {t.services.items.map((svc, i) => {
                const geoStroke = isDark ? "rgba(96,165,250,0.13)" : "rgba(37,99,235,0.1)";
                const geoStrokeAccent = isDark ? "rgba(167,139,250,0.18)" : "rgba(79,70,229,0.13)";
                // Per-card SVG geometry
                const geoSvg = [
                  // Card 0 — Flutter App: precise phone + flutter diamond
                  <svg key={0} width="160" height="190" viewBox="0 0 160 190" style={{ overflow:"visible" }}>
                    <rect x="30" y="8" width="100" height="174" rx="16" className="svc-geo-path" stroke={geoStroke} strokeWidth="1.2" style={{ "--geo-delay":"0.08s" } as React.CSSProperties} pathLength="1"/>
                    <line x1="30" y1="30" x2="130" y2="30" className="svc-geo-path" stroke={geoStroke} strokeWidth="0.8" style={{ "--geo-delay":"0.18s" } as React.CSSProperties} pathLength="1"/>
                    <circle cx="80" cy="19" r="4.5" className="svc-geo-path" stroke={geoStroke} strokeWidth="1" style={{ "--geo-delay":"0.26s" } as React.CSSProperties} pathLength="1"/>
                    <line x1="46" y1="50" x2="114" y2="50" className="svc-geo-path" stroke={geoStroke} strokeWidth="0.7" style={{ "--geo-delay":"0.33s" } as React.CSSProperties} pathLength="1"/>
                    <line x1="46" y1="62" x2="100" y2="62" className="svc-geo-path" stroke={geoStroke} strokeWidth="0.7" style={{ "--geo-delay":"0.39s" } as React.CSSProperties} pathLength="1"/>
                    <line x1="46" y1="74" x2="107" y2="74" className="svc-geo-path" stroke={geoStroke} strokeWidth="0.7" style={{ "--geo-delay":"0.45s" } as React.CSSProperties} pathLength="1"/>
                    {/* Flutter diamond */}
                    <path d="M 80 92 L 114 126 L 80 160 L 46 126 Z" className="svc-geo-path" stroke={geoStrokeAccent} strokeWidth="1.2" style={{ "--geo-delay":"0.54s" } as React.CSSProperties} pathLength="1"/>
                    <path d="M 80 108 L 101 126 L 80 144 L 59 126 Z" className="svc-geo-path" stroke={geoStrokeAccent} strokeWidth="0.8" style={{ "--geo-delay":"0.64s" } as React.CSSProperties} pathLength="1"/>
                    <line x1="64" y1="175" x2="96" y2="175" className="svc-geo-path" stroke={geoStroke} strokeWidth="1.2" style={{ "--geo-delay":"0.72s" } as React.CSSProperties} pathLength="1"/>
                  </svg>,
                  // Card 1 — Web: browser chrome with grid
                  <svg key={1} width="185" height="155" viewBox="0 0 185 155" style={{ overflow:"visible" }}>
                    <rect x="5" y="5" width="175" height="145" rx="10" className="svc-geo-path" stroke={geoStroke} strokeWidth="1.2" style={{ "--geo-delay":"0.08s" } as React.CSSProperties} pathLength="1"/>
                    <line x1="5" y1="28" x2="180" y2="28" className="svc-geo-path" stroke={geoStroke} strokeWidth="0.8" style={{ "--geo-delay":"0.18s" } as React.CSSProperties} pathLength="1"/>
                    {[18,27,36].map((cx,k) => <circle key={k} cx={cx} cy="17" r="3.5" className="svc-geo-path" stroke={geoStroke} strokeWidth="0.9" style={{ "--geo-delay":`${0.24+k*0.06}s` } as React.CSSProperties} pathLength="1"/>)}
                    <rect x="55" y="11" width="80" height="12" rx="5" className="svc-geo-path" stroke={geoStroke} strokeWidth="0.7" style={{ "--geo-delay":"0.42s" } as React.CSSProperties} pathLength="1"/>
                    {/* 3-col layout lines */}
                    <line x1="65" y1="28" x2="65" y2="150" className="svc-geo-path" stroke={geoStroke} strokeWidth="0.6" strokeDasharray="0.03 0.03" style={{ "--geo-delay":"0.5s" } as React.CSSProperties} pathLength="1"/>
                    <line x1="125" y1="28" x2="125" y2="150" className="svc-geo-path" stroke={geoStroke} strokeWidth="0.6" strokeDasharray="0.03 0.03" style={{ "--geo-delay":"0.56s" } as React.CSSProperties} pathLength="1"/>
                    {/* Content blocks */}
                    <rect x="13" y="38" width="44" height="32" rx="4" className="svc-geo-path" stroke={geoStroke} strokeWidth="0.8" style={{ "--geo-delay":"0.62s" } as React.CSSProperties} pathLength="1"/>
                    <rect x="73" y="38" width="44" height="32" rx="4" className="svc-geo-path" stroke={geoStroke} strokeWidth="0.8" style={{ "--geo-delay":"0.68s" } as React.CSSProperties} pathLength="1"/>
                    <rect x="133" y="38" width="44" height="32" rx="4" className="svc-geo-path" stroke={geoStroke} strokeWidth="0.8" style={{ "--geo-delay":"0.74s" } as React.CSSProperties} pathLength="1"/>
                    {[82,97,112,127].map((y,k) => <line key={k} x1="13" y1={y} x2={k%2===0?155:120} y2={y} className="svc-geo-path" stroke={geoStroke} strokeWidth="0.6" style={{ "--geo-delay":`${0.8+k*0.06}s` } as React.CSSProperties} pathLength="1"/>)}
                  </svg>,
                  // Card 2 — UI/UX: bezier frame + palette
                  <svg key={2} width="175" height="175" viewBox="0 0 175 175" style={{ overflow:"visible" }}>
                    {/* Frame corners */}
                    {([[5,5,1,1],[170,5,-1,1],[170,170,-1,-1],[5,170,1,-1]] as [number,number,number,number][]).map(([x,y,dx,dy],k) => (
                      <g key={k}>
                        <line x1={x} y1={y} x2={x+dx*20} y2={y} className="svc-geo-path" stroke={geoStroke} strokeWidth="1.3" style={{ "--geo-delay":`${0.06+k*0.06}s` } as React.CSSProperties} pathLength="1"/>
                        <line x1={x} y1={y} x2={x} y2={y+dy*20} className="svc-geo-path" stroke={geoStroke} strokeWidth="1.3" style={{ "--geo-delay":`${0.1+k*0.06}s` } as React.CSSProperties} pathLength="1"/>
                      </g>
                    ))}
                    {/* Bezier main curve */}
                    <path d="M 20 145 C 60 20, 115 20, 155 145" className="svc-geo-path" stroke={geoStrokeAccent} strokeWidth="1.4" style={{ "--geo-delay":"0.32s" } as React.CSSProperties} pathLength="1"/>
                    {/* Control handles (dashed) */}
                    <line x1="20" y1="145" x2="60" y2="20" className="svc-geo-path" stroke={geoStroke} strokeWidth="0.6" strokeDasharray="0.04 0.04" style={{ "--geo-delay":"0.44s" } as React.CSSProperties} pathLength="1"/>
                    <line x1="155" y1="145" x2="115" y2="20" className="svc-geo-path" stroke={geoStroke} strokeWidth="0.6" strokeDasharray="0.04 0.04" style={{ "--geo-delay":"0.5s" } as React.CSSProperties} pathLength="1"/>
                    {/* Anchor + handle dots */}
                    {[[20,145],[60,20],[115,20],[155,145]].map(([cx,cy],k) => <circle key={k} cx={cx} cy={cy} r={k%2===0?4:2.5} className="svc-geo-path" stroke={k%2===0?geoStrokeAccent:geoStroke} strokeWidth={k%2===0?"1.2":"0.9"} style={{ "--geo-delay":`${0.56+k*0.07}s` } as React.CSSProperties} pathLength="1"/>)}
                    {/* Color swatches */}
                    {[50,82,114].map((cx,k) => <circle key={k} cx={cx} cy={162} r={8} className="svc-geo-path" stroke={k===1?geoStrokeAccent:geoStroke} strokeWidth="1" style={{ "--geo-delay":`${0.84+k*0.08}s` } as React.CSSProperties} pathLength="1"/>)}
                    {/* Grid dots (3×3) */}
                    {[75,88,101].flatMap((x,r)=>[75,88,101].map((y,c)=><circle key={`${r}-${c}`} cx={x} cy={y} r="1.5" className="svc-geo-path" stroke={geoStroke} strokeWidth="0.8" style={{ "--geo-delay":`${0.68+r*0.04+c*0.03}s` } as React.CSSProperties} pathLength="1"/>))}
                  </svg>,
                  // Card 3 — Enhance: code brackets + circuit
                  <svg key={3} width="160" height="175" viewBox="0 0 160 175" style={{ overflow:"visible" }}>
                    {/* Left curly brace */}
                    <path d="M 78 15 Q 60 15 60 35 Q 60 65 40 80 Q 60 95 60 125 Q 60 145 78 145" className="svc-geo-path" stroke={geoStrokeAccent} strokeWidth="1.4" style={{ "--geo-delay":"0.08s" } as React.CSSProperties} pathLength="1"/>
                    {/* Right curly brace */}
                    <path d="M 82 15 Q 100 15 100 35 Q 100 65 120 80 Q 100 95 100 125 Q 100 145 82 145" className="svc-geo-path" stroke={geoStrokeAccent} strokeWidth="1.4" style={{ "--geo-delay":"0.16s" } as React.CSSProperties} pathLength="1"/>
                    {/* Forward slash */}
                    <line x1="93" y1="30" x2="67" y2="130" className="svc-geo-path" stroke={geoStroke} strokeWidth="0.8" style={{ "--geo-delay":"0.26s" } as React.CSSProperties} pathLength="1"/>
                    {/* Circuit trace nodes from center dot */}
                    <circle cx="40" cy="80" r="4" className="svc-geo-path" stroke={geoStroke} strokeWidth="1" style={{ "--geo-delay":"0.36s" } as React.CSSProperties} pathLength="1"/>
                    <circle cx="120" cy="80" r="4" className="svc-geo-path" stroke={geoStroke} strokeWidth="1" style={{ "--geo-delay":"0.36s" } as React.CSSProperties} pathLength="1"/>
                    <line x1="40" y1="80" x2="12" y2="58" className="svc-geo-path" stroke={geoStroke} strokeWidth="0.7" style={{ "--geo-delay":"0.46s" } as React.CSSProperties} pathLength="1"/>
                    <line x1="40" y1="80" x2="12" y2="102" className="svc-geo-path" stroke={geoStroke} strokeWidth="0.7" style={{ "--geo-delay":"0.52s" } as React.CSSProperties} pathLength="1"/>
                    <line x1="120" y1="80" x2="148" y2="58" className="svc-geo-path" stroke={geoStroke} strokeWidth="0.7" style={{ "--geo-delay":"0.58s" } as React.CSSProperties} pathLength="1"/>
                    <line x1="120" y1="80" x2="148" y2="102" className="svc-geo-path" stroke={geoStroke} strokeWidth="0.7" style={{ "--geo-delay":"0.64s" } as React.CSSProperties} pathLength="1"/>
                    {[[12,58],[12,102],[148,58],[148,102]].map(([cx,cy],k) => <circle key={k} cx={cx} cy={cy} r="2.5" className="svc-geo-path" stroke={geoStroke} strokeWidth="0.8" style={{ "--geo-delay":`${0.7+k*0.06}s` } as React.CSSProperties} pathLength="1"/>)}
                    {/* Code line dots */}
                    {[155,165].map((y,k) => <line key={k} x1="30" y1={y} x2={k===0?90:70} y2={y} className="svc-geo-path" stroke={geoStroke} strokeWidth="0.7" style={{ "--geo-delay":`${0.92+k*0.07}s` } as React.CSSProperties} pathLength="1"/>)}
                  </svg>,
                ][i];

                return (
                  <div
                    key={i}
                    className={`tilt-card reveal reveal-d${i + 1} relative rounded-2xl overflow-hidden cursor-default`}
                    style={{
                      background: isDark ? "rgba(255,255,255,0.03)" : "#ffffff",
                      border: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)"}`,
                      boxShadow: isDark ? "none" : "0 1px 12px rgba(0,0,0,0.04)",
                    }}
                    onMouseMove={onTilt}
                    onMouseLeave={e => {
                      offTilt(e);
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)";
                      el.style.boxShadow = isDark ? "none" : "0 1px 12px rgba(0,0,0,0.04)";
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = isDark ? "rgba(96,165,250,0.35)" : "rgba(37,99,235,0.25)";
                      el.style.boxShadow = isDark
                        ? "0 20px 60px rgba(59,130,246,0.15)"
                        : "0 20px 60px rgba(37,99,235,0.1), 0 4px 20px rgba(0,0,0,0.06)";
                    }}
                  >
                    {/* Left accent bar */}
                    <div className="absolute top-6 left-0 w-[3px] h-10 rounded-r-full"
                      style={{ background: "linear-gradient(180deg,#3b82f6,#6366f1)" }}
                    />
                    {/* Background geometry */}
                    <div className="absolute bottom-0 right-0 pointer-events-none select-none" style={{ opacity: isDark ? 0.9 : 1 }}>
                      {geoSvg}
                    </div>

                    <div className="relative p-8 pl-9">
                      <div className="flex items-start justify-between mb-5">
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: isDark ? "rgba(59,130,246,0.15)" : "rgba(37,99,235,0.08)", color: c.eyebrow }}>
                          {iconMap[svc.icon]}
                        </div>
                        <span className="text-[13px] font-black tabular-nums" style={{ color: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}>
                          0{i + 1}
                        </span>
                      </div>

                      {/* Word-by-word title reveal (safe for Thai diacritics) */}
                      <p className="text-xl font-black leading-tight mb-0.5" style={{ color: c.text }}>
                        {svc.title.split(" ").map((word, wi, arr) => (
                          <span key={wi} className="inline-block" style={{ overflow:"hidden", verticalAlign:"bottom", marginRight: wi < arr.length-1 ? "0.3em" : 0 }}>
                            <span className="svc-char" style={{ transitionDelay:`${180 + wi * 90}ms` }}>
                              {word}
                            </span>
                          </span>
                        ))}
                      </p>
                      <p className="svc-sub-fade text-sm font-semibold mb-4" style={{ color: c.eyebrow, transitionDelay:"320ms" }}>{svc.titleSub}</p>
                      <p className="svc-desc-fade text-sm leading-relaxed mb-5" style={{ color: c.textMuted, transitionDelay:"420ms" }}>{svc.desc}</p>

                      <div className="flex flex-wrap gap-1.5">
                        {svc.tags.map((tag, j) => (
                          <span key={j} className="svc-tag-item text-[11px] font-medium px-3 py-1 rounded-full"
                            style={{ background: c.tagBg, color: c.tagText, border: `1px solid ${c.tagBorder}`, transitionDelay:`${530 + j * 80}ms` }}
                          >{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </section>

        {/* ── Why ── */}
        <section className="py-28 px-6 overflow-hidden relative" style={{ background: c.sectionAlt }}>
          <div className="max-w-6xl mx-auto">

            {/* Top: text left, diagram right */}
            <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 items-center mb-14">

              {/* Left — headline + sub + trust */}
              <div className="reveal">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.22em] uppercase px-3.5 py-1.5 rounded-full mb-5"
                  style={{ background:isDark?"rgba(59,130,246,0.15)":"rgba(37,99,235,0.08)", color:c.eyebrow, border:`1px solid ${isDark?"rgba(59,130,246,0.3)":"rgba(37,99,235,0.18)"}` }}
                >
                  <span style={{ width:5,height:5,borderRadius:"50%",background:c.eyebrow,display:"inline-block" }} />
                  {t.why.eyebrow}
                </span>
                <h2 className="text-4xl md:text-[50px] font-black leading-[1.1] tracking-tight mb-5">
                  <span style={{ color:c.text }}>{t.why.title}</span><br />
                  <span style={{ backgroundImage:`linear-gradient(135deg,${isDark?"#60a5fa":"#1d4ed8"},${isDark?"#a78bfa":"#6d28d9"})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
                    {t.why.titleSub}
                  </span>
                </h2>
                <p className="text-[15px] leading-relaxed mb-8 max-w-xs" style={{ color:c.textMuted }}>{t.why.sub}</p>
                <div className="flex flex-col gap-3">
                  {[
                    { num:"30", unit:lang==="th"?"วัน":"days", label:lang==="th"?"แก้ Bug ฟรีหลังส่งงาน":"free bug fix after delivery" },
                    { num:"24", unit:lang==="th"?"ชม.":"hrs",  label:lang==="th"?"รับประกันตอบกลับ":"guaranteed response time" },
                    { num:"100%", unit:"",                       label:lang==="th"?"ส่ง Source Code เต็ม":"full source code handoff" },
                  ].map((b,i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-2xl font-black tabular-nums w-20" style={{ color:c.eyebrow }}>{b.num}{b.unit && <span className="text-xs ml-0.5">{b.unit}</span>}</span>
                      <div className="h-px w-6" style={{ background:isDark?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.08)" }} />
                      <span className="text-sm" style={{ color:c.textMuted }}>{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — premium blueprint diagram */}
              <div className="reveal reveal-d2 flex items-center justify-center">
                <svg viewBox="0 0 400 400" style={{ width:"min(100%,420px)", height:"auto", overflow:"visible" }}>
                  <defs>
                    <radialGradient id="wCoreGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%"   stopColor={isDark?"#3b82f6":"#2563eb"} stopOpacity="0.35" />
                      <stop offset="60%"  stopColor={isDark?"#6366f1":"#4f46e5"} stopOpacity="0.08" />
                      <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="wSatGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%"   stopColor={isDark?"#3b82f6":"#2563eb"} stopOpacity="0.25" />
                      <stop offset="100%" stopColor={isDark?"#3b82f6":"#2563eb"} stopOpacity="0.02" />
                    </radialGradient>
                  </defs>

                  {/* Dot grid */}
                  {Array.from({length:7},(_,row) => Array.from({length:7},(_,col) => (
                    <circle key={`${row}-${col}`} cx={col*60+20} cy={row*60+20} r="1.5"
                      fill={isDark?"rgba(59,130,246,0.2)":"rgba(37,99,235,0.13)"} />
                  )))}

                  {/* Engineering corner brackets */}
                  {(["M15,55 L15,15 L55,15","M345,15 L385,15 L385,55","M385,345 L385,385 L345,385","M55,385 L15,385 L15,345"] as string[]).map((d,k) => (
                    <path key={k} d={d} fill="none" stroke={isDark?"rgba(59,130,246,0.4)":"rgba(37,99,235,0.25)"} strokeWidth="1.5" />
                  ))}

                  {/* Blueprint crosshairs */}
                  <line x1="200" y1="0" x2="200" y2="400" stroke={isDark?"rgba(59,130,246,0.12)":"rgba(37,99,235,0.08)"} strokeWidth="0.6" strokeDasharray="2 10" />
                  <line x1="0" y1="200" x2="400" y2="200" stroke={isDark?"rgba(59,130,246,0.12)":"rgba(37,99,235,0.08)"} strokeWidth="0.6" strokeDasharray="2 10" />

                  {/* Outer dashed orbit */}
                  <circle cx="200" cy="200" r="158" fill="none" stroke={isDark?"rgba(59,130,246,0.2)":"rgba(37,99,235,0.13)"} strokeWidth="0.8" strokeDasharray="5 7" />

                  {/* Rotating scan arc on outer orbit */}
                  <circle cx="200" cy="200" r="158" fill="none"
                    stroke={isDark?"rgba(59,130,246,0.55)":"rgba(37,99,235,0.4)"} strokeWidth="1.5"
                    strokeDasharray="48 944"
                    style={{ transformOrigin:"200px 200px", animation:"svgSpin 7s linear infinite" }} />

                  {/* Inner solid orbit */}
                  <circle cx="200" cy="200" r="106" fill="none" stroke={isDark?"rgba(59,130,246,0.38)":"rgba(37,99,235,0.25)"} strokeWidth="1" />

                  {/* Tick marks on inner orbit */}
                  {([[200,94,0,-8],[306,200,8,0],[200,306,0,8],[94,200,-8,0]] as number[][]).map(([x,y,dx,dy],k) => (
                    <line key={k} x1={x} y1={y} x2={x+dx} y2={y+dy}
                      stroke={isDark?"rgba(59,130,246,0.6)":"rgba(37,99,235,0.4)"} strokeWidth="2" />
                  ))}

                  {/* Corner dots at 45° on outer orbit */}
                  {([[313,87],[313,313],[87,313],[87,87]] as number[][]).map(([x,y],k) => (
                    <circle key={k} cx={x} cy={y} r="4.5"
                      fill={isDark?"rgba(59,130,246,0.35)":"rgba(37,99,235,0.22)"}
                      stroke={isDark?"rgba(96,165,250,0.7)":"rgba(37,99,235,0.5)"} strokeWidth="1" />
                  ))}

                  {/* Diagonal faint lines to corners */}
                  {(["M228,172 L305,95","M172,172 L95,95","M228,228 L305,305","M172,228 L95,305"] as string[]).map((d,k) => (
                    <path key={k} d={d} stroke={isDark?"rgba(59,130,246,0.1)":"rgba(37,99,235,0.07)"} strokeWidth="0.6" strokeDasharray="3 5" />
                  ))}

                  {/* Connection lines (hex edge → satellite edge) */}
                  <line x1="200" y1="164" x2="200" y2="116" stroke={isDark?"rgba(59,130,246,0.45)":"rgba(37,99,235,0.3)"} strokeWidth="1.2" />
                  <line x1="242" y1="200" x2="284" y2="200" stroke={isDark?"rgba(59,130,246,0.45)":"rgba(37,99,235,0.3)"} strokeWidth="1.2" />
                  <line x1="200" y1="236" x2="200" y2="284" stroke={isDark?"rgba(59,130,246,0.45)":"rgba(37,99,235,0.3)"} strokeWidth="1.2" />
                  <line x1="158" y1="200" x2="116" y2="200" stroke={isDark?"rgba(59,130,246,0.45)":"rgba(37,99,235,0.3)"} strokeWidth="1.2" />

                  {/* Traveling dot animation on top line */}
                  <circle r="3.5" fill={isDark?"#60a5fa":"#2563eb"} opacity="0.9">
                    <animateMotion dur="2.2s" repeatCount="indefinite" calcMode="linear">
                      <mpath xlinkHref="#wTopLine" />
                    </animateMotion>
                  </circle>
                  <path id="wTopLine" d="M 200 164 L 200 116" />

                  {/* Traveling dot on right line (delayed) */}
                  <circle r="3" fill={isDark?"#a78bfa":"#6d28d9"} opacity="0.85">
                    <animateMotion dur="2.2s" begin="1.1s" repeatCount="indefinite" calcMode="linear">
                      <mpath xlinkHref="#wRightLine" />
                    </animateMotion>
                  </circle>
                  <path id="wRightLine" d="M 242 200 L 284 200" />

                  {/* Center glow */}
                  <circle cx="200" cy="200" r="62" fill="url(#wCoreGrad)" />

                  {/* Central flat-top hexagon (r=42) */}
                  {/* Points at 0°,60°,120°,180°,240°,300°: (242,200),(221,236),(179,236),(158,200),(179,164),(221,164) */}
                  <polygon points="242,200 221,236.4 179,236.4 158,200 179,163.6 221,163.6"
                    fill={isDark?"rgba(5,13,26,0.92)":"rgba(255,255,255,0.95)"}
                    stroke={isDark?"rgba(96,165,250,0.75)":"rgba(37,99,235,0.55)"} strokeWidth="1.8" />
                  {/* Inner hex */}
                  <polygon points="224,200 212.5,220.8 187.5,220.8 176,200 187.5,179.2 212.5,179.2"
                    fill={isDark?"rgba(59,130,246,0.1)":"rgba(37,99,235,0.06)"}
                    stroke={isDark?"rgba(59,130,246,0.3)":"rgba(37,99,235,0.18)"} strokeWidth="0.8" />
                  {/* "M" */}
                  <text x="200" y="208" textAnchor="middle" fontSize="26" fontWeight="900" fontFamily="var(--font-prompt),sans-serif"
                    fill={isDark?"#60a5fa":"#2563eb"}>M</text>

                  {/* Satellite nodes */}
                  {([
                    { cx:200, cy:94,  label1:lang==="th"?"Flutter":"Flutter",  label2:lang==="th"?"Dev":"Dev" },
                    { cx:306, cy:200, label1:lang==="th"?"Deploy":"Deploy",    label2:lang==="th"?"Store":"Store" },
                    { cx:200, cy:306, label1:lang==="th"?"Support":"Support",  label2:lang==="th"?"30 วัน":"30 days" },
                    { cx:94,  cy:200, label1:lang==="th"?"UI/UX":"UI/UX",     label2:lang==="th"?"Design":"Design" },
                  ] as {cx:number,cy:number,label1:string,label2:string}[]).map((s,k) => (
                    <g key={k}>
                      <circle cx={s.cx} cy={s.cy} r="26"
                        fill={isDark?"rgba(5,13,26,0.92)":"white"}
                        stroke={isDark?"rgba(96,165,250,0.65)":"rgba(37,99,235,0.45)"} strokeWidth="1.5" />
                      <circle cx={s.cx} cy={s.cy} r="19" fill="url(#wSatGrad)" />
                      <text x={s.cx} y={s.cy-1} textAnchor="middle" fontSize="8.5" fontWeight="800" fontFamily="var(--font-prompt),sans-serif"
                        fill={isDark?"#93c5fd":"#1d4ed8"}>{s.label1}</text>
                      <text x={s.cx} y={s.cy+10} textAnchor="middle" fontSize="7" fontFamily="var(--font-prompt),sans-serif"
                        fill={isDark?"rgba(255,255,255,0.38)":"rgba(0,0,0,0.35)"}>{s.label2}</text>
                    </g>
                  ))}

                  {/* Floating label tags at corners */}
                  {([
                    { x:294, y:60, w:76, label:"Clean Code", col:isDark?"rgba(96,165,250,0.8)":"rgba(37,99,235,0.75)", bg:isDark?"rgba(59,130,246,0.13)":"rgba(37,99,235,0.07)", border:isDark?"rgba(59,130,246,0.35)":"rgba(37,99,235,0.22)" },
                    { x:30,  y:60, w:68, label:"On-Time",    col:isDark?"rgba(167,139,250,0.8)":"rgba(109,40,217,0.75)", bg:isDark?"rgba(109,40,217,0.13)":"rgba(109,40,217,0.07)", border:isDark?"rgba(167,139,250,0.35)":"rgba(109,40,217,0.22)" },
                    { x:30,  y:320,w:82, label:"Source Code", col:isDark?"rgba(96,165,250,0.8)":"rgba(37,99,235,0.75)", bg:isDark?"rgba(59,130,246,0.13)":"rgba(37,99,235,0.07)", border:isDark?"rgba(59,130,246,0.35)":"rgba(37,99,235,0.22)" },
                    { x:294, y:320,w:70, label:"24hr Reply",  col:isDark?"rgba(167,139,250,0.8)":"rgba(109,40,217,0.75)", bg:isDark?"rgba(109,40,217,0.13)":"rgba(109,40,217,0.07)", border:isDark?"rgba(167,139,250,0.35)":"rgba(109,40,217,0.22)" },
                  ] as {x:number,y:number,w:number,label:string,col:string,bg:string,border:string}[]).map((tag,k) => (
                    <g key={k}>
                      <rect x={tag.x} y={tag.y} width={tag.w} height={21} rx="10.5" fill={tag.bg} stroke={tag.border} strokeWidth="0.8" />
                      <text x={tag.x+tag.w/2} y={tag.y+14} textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="var(--font-prompt),sans-serif" fill={tag.col}>{tag.label}</text>
                    </g>
                  ))}

                  {/* Angle arc decoration */}
                  <path d="M 218,181 A 24 24 0 0 1 218,219" fill="none"
                    stroke={isDark?"rgba(59,130,246,0.22)":"rgba(37,99,235,0.15)"} strokeWidth="0.8" />
                  <path d="M 182,181 A 24 24 0 0 0 182,219" fill="none"
                    stroke={isDark?"rgba(59,130,246,0.22)":"rgba(37,99,235,0.15)"} strokeWidth="0.8" />
                </svg>
              </div>
            </div>

            {/* Bottom: 4 cards in row */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {t.why.items.map((item,i) => (
                <div key={i}
                  className={`tilt-card reveal reveal-d${i+1} relative rounded-2xl p-5 overflow-hidden`}
                  style={{ background:c.cardBg, border:`1px solid ${c.cardBorder}` }}
                  onMouseMove={onTilt}
                  onMouseLeave={e => { offTilt(e); (e.currentTarget as HTMLDivElement).style.borderColor=c.cardBorder.replace(/^1px solid /,""); (e.currentTarget as HTMLDivElement).style.boxShadow="none"; }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor=c.cardHoverBorder.replace(/^1px solid /,""); (e.currentTarget as HTMLDivElement).style.boxShadow=isDark?"0 8px 40px rgba(59,130,246,0.12)":"0 8px 40px rgba(37,99,235,0.08)"; }}
                >
                  <div className="absolute top-0 left-5 right-5 h-[2px] rounded-b-full" style={{ background:`linear-gradient(90deg,${isDark?"#3b82f6":"#2563eb"},transparent)` }} />
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 mt-1" style={{ background:c.iconBg, color:c.iconColor }}>{iconMap[item.icon]}</div>
                  <p className="font-bold text-[13px] mb-1.5 leading-snug" style={{ color:c.text }}>{item.label}</p>
                  <p className="text-xs leading-relaxed" style={{ color:c.textMuted }}>{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Process ── */}
        <section id="process" className="py-28 px-6 overflow-hidden relative" style={{ background: c.pageBg }}>

          {/* ── Background: isometric 3-D block cityscape ── */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            <svg viewBox="0 0 900 600" preserveAspectRatio="xMaxYMid meet"
              style={{ position:"absolute", right:0, top:0, width:"68%", height:"100%" }}>
              {(() => {
                const u = 44, cx = 510, cy = 468;
                type B = [number,number,number,boolean];

                const blocks: B[] = [
                  [0,0,2,false],[1,0,4,true ],[2,0,2,false],[3,0,3,true ],[4,0,1,false],
                  [0,1,3,true ],[1,1,1,false],[2,1,4,true ],[3,1,2,false],[4,1,2,false],
                  [0,2,1,false],[1,2,3,true ],[2,2,1,false],[3,2,5,true ],[4,2,2,false],
                  [0,3,2,false],[1,3,1,false],[2,3,2,false],[3,3,1,false],[4,3,1,false],
                ];
                const steps: B[] = [
                  [0,1,3,true],[1,0,4,true],[3,0,3,true],
                  [2,1,4,true],[1,2,3,true],[3,2,5,true],
                ];
                const sorted = [...blocks].sort((a,b) => (a[0]+a[1])-(b[0]+b[1]) || (a[1]-b[1]));

                const sc = (col:number, row:number) => ({
                  sx: cx + col*u - row*u,
                  sy: cy + (col+row)*(u/2),
                });
                const topCenter = (col:number, row:number, h:number) => {
                  const {sx,sy} = sc(col,row);
                  return { tx:sx, ty: sy + u/2 - h*u };
                };

                const bt = isDark?"rgba(59,130,246,0.1)" :"rgba(37,99,235,0.062)";
                const br = isDark?"rgba(37,99,235,0.08)" :"rgba(37,99,235,0.045)";
                const bl = isDark?"rgba(29,78,216,0.06)" :"rgba(37,99,235,0.03)";
                const ht = isDark?"rgba(59,130,246,0.34)" :"rgba(37,99,235,0.21)";
                const hr = isDark?"rgba(37,99,235,0.27)" :"rgba(37,99,235,0.16)";
                const hl = isDark?"rgba(29,78,216,0.2)"  :"rgba(37,99,235,0.11)";
                const bSt= isDark?"rgba(59,130,246,0.18)":"rgba(37,99,235,0.13)";
                const hSt= isDark?"rgba(96,165,250,0.5)" :"rgba(37,99,235,0.38)";

                const tF = (col:number,row:number,h:number) => { const {sx,sy}=sc(col,row); return `${sx},${sy-h*u} ${sx+u},${sy+u/2-h*u} ${sx},${sy+u-h*u} ${sx-u},${sy+u/2-h*u}`; };
                const rF = (col:number,row:number,h:number) => { const {sx,sy}=sc(col,row); return `${sx},${sy} ${sx+u},${sy+u/2} ${sx+u},${sy+u/2-h*u} ${sx},${sy-h*u}`; };
                const lF = (col:number,row:number,h:number) => { const {sx,sy}=sc(col,row); return `${sx},${sy} ${sx-u},${sy+u/2} ${sx-u},${sy+u/2-h*u} ${sx},${sy-h*u}`; };

                return (
                  <>
                    {/* Dot matrix background */}
                    {Array.from({length:7}, (_,r) => Array.from({length:10}, (_,c) => (
                      <circle key={`d${r}${c}`} cx={c*90+10} cy={r*86+10} r="1.5"
                        fill={isDark?"rgba(59,130,246,0.13)":"rgba(37,99,235,0.085)"} />
                    )))}

                    {/* Engineering corner brackets */}
                    {(["M12,44 L12,12 L44,12","M856,12 L888,12 L888,44","M888,556 L888,588 L856,588","M44,588 L12,588 L12,556"] as string[]).map((d,k)=>(
                      <path key={`br${k}`} d={d} fill="none"
                        stroke={isDark?"rgba(59,130,246,0.3)":"rgba(37,99,235,0.2)"} strokeWidth="1.2" />
                    ))}

                    {/* Thin blueprint crosshair */}
                    <line x1="450" y1="0" x2="450" y2="600" stroke={isDark?"rgba(59,130,246,0.06)":"rgba(37,99,235,0.05)"} strokeWidth="0.5" strokeDasharray="2 12" />
                    <line x1="0" y1="300" x2="900" y2="300" stroke={isDark?"rgba(59,130,246,0.06)":"rgba(37,99,235,0.05)"} strokeWidth="0.5" strokeDasharray="2 12" />

                    {/* Isometric blocks — back to front */}
                    {sorted.map(([col,row,h,isStep],k) => (
                      <g key={`b${k}`}>
                        <polygon points={lF(col,row,h)} fill={isStep?hl:bl} stroke={isStep?hSt:bSt} strokeWidth={isStep?.75:.4}/>
                        <polygon points={rF(col,row,h)} fill={isStep?hr:br} stroke={isStep?hSt:bSt} strokeWidth={isStep?.75:.4}/>
                        <polygon points={tF(col,row,h)} fill={isStep?ht:bt} stroke={isStep?hSt:bSt} strokeWidth={isStep?.75:.4}/>
                      </g>
                    ))}

                    {/* Soft glow on top face of highlighted blocks */}
                    {steps.map(([col,row,h],k) => (
                      <polygon key={`gw${k}`} points={tF(col,row,h)}
                        fill={isDark?"rgba(96,165,250,0.13)":"rgba(37,99,235,0.09)"}
                        style={{ filter:`blur(3px)` }} />
                    ))}

                    {/* Dashed connection path through step blocks */}
                    {(() => {
                      const pts = steps.map(([c,r,h]) => topCenter(c,r,h));
                      const d = pts.map((p,i) => `${i===0?"M":"L"} ${p.tx} ${p.ty}`).join(" ");
                      return <path d={d} fill="none"
                        stroke={isDark?"rgba(96,165,250,0.38)":"rgba(37,99,235,0.28)"}
                        strokeWidth="1.2" strokeDasharray="5 5" />;
                    })()}

                    {/* Traveling dot on the path */}
                    {(() => {
                      const pts = steps.map(([c,r,h]) => topCenter(c,r,h));
                      const d = pts.map((p,i) => `${i===0?"M":"L"} ${p.tx} ${p.ty}`).join(" ");
                      return (
                        <>
                          <path id="procPath" d={d} fill="none" />
                          <circle r="4" fill={isDark?"#60a5fa":"#2563eb"} opacity="0.9">
                            <animateMotion dur="4s" repeatCount="indefinite" calcMode="linear">
                              <mpath xlinkHref="#procPath" />
                            </animateMotion>
                          </circle>
                        </>
                      );
                    })()}

                    {/* Step number badges above highlighted blocks */}
                    {steps.map(([col,row,h],k) => {
                      const {tx,ty} = topCenter(col,row,h);
                      return (
                        <g key={`lb${k}`}>
                          <circle cx={tx} cy={ty-17} r="13.5"
                            fill={isDark?"rgba(37,99,235,0.88)":"rgba(37,99,235,0.82)"}
                            stroke={isDark?"rgba(96,165,250,0.55)":"rgba(96,165,250,0.4)"} strokeWidth="1.2"/>
                          <text x={tx} y={ty-13} textAnchor="middle" fontSize="9.5" fontWeight="900"
                            fontFamily="var(--font-prompt),sans-serif" fill="white">{`0${k+1}`}</text>
                        </g>
                      );
                    })}

                    {/* Floating annotation tags */}
                    {[
                      { x:30,  y:30,  w:90, label:"Isometric View" },
                      { x:750, y:30,  w:88, label:"5 × 4 Grid" },
                      { x:750, y:560, w:100, label:"6 Steps Flow" },
                    ].map((tag,k)=>(
                      <g key={`tag${k}`}>
                        <rect x={tag.x} y={tag.y} width={tag.w} height={19} rx="9.5"
                          fill={isDark?"rgba(59,130,246,0.1)":"rgba(37,99,235,0.065)"}
                          stroke={isDark?"rgba(59,130,246,0.3)":"rgba(37,99,235,0.2)"} strokeWidth="0.7"/>
                        <text x={tag.x+tag.w/2} y={tag.y+13} textAnchor="middle" fontSize="7.5" fontWeight="700"
                          fontFamily="var(--font-prompt),sans-serif"
                          fill={isDark?"rgba(96,165,250,0.75)":"rgba(37,99,235,0.65)"}>{tag.label}</text>
                      </g>
                    ))}
                  </>
                );
              })()}
            </svg>
          </div>

          <div className="max-w-6xl mx-auto relative">
            <div className="mb-16 reveal">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.22em] uppercase px-3.5 py-1.5 rounded-full mb-5"
                style={{ background:isDark?"rgba(59,130,246,0.15)":"rgba(37,99,235,0.08)", color:c.eyebrow, border:`1px solid ${isDark?"rgba(59,130,246,0.3)":"rgba(37,99,235,0.18)"}`, display:"inline-flex" }}
              >
                <span style={{ width:5,height:5,borderRadius:"50%",background:c.eyebrow,display:"inline-block" }} />
                {t.process.eyebrow}
              </span>
              <h2 className="text-4xl md:text-[56px] font-black leading-[1.1] tracking-tight">
                <span style={{ backgroundImage:`linear-gradient(135deg,${isDark?"#60a5fa":"#1d4ed8"},${isDark?"#a78bfa":"#6d28d9"})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
                  {t.process.title}
                </span>
                <br />
                <span style={{ color: c.text }}>{t.process.titleSub}</span>
              </h2>
            </div>

            {/* Steps — 2 rows of 3 with visual connectors */}
            <div className="flex flex-col gap-4">
              {[0,1].map(row => (
                <div key={row} className="grid md:grid-cols-3 gap-0 relative">
                  {/* Dashed connector line (md+) */}
                  <div className="hidden md:block absolute top-8 left-[calc(16.7%+8px)] right-[calc(16.7%+8px)] h-px pointer-events-none" style={{ zIndex:0 }}>
                    <svg width="100%" height="1" style={{ overflow:"visible" }}>
                      <line x1="0" y1="0" x2="100%" y2="0" stroke={isDark?"rgba(59,130,246,0.25)":"rgba(37,99,235,0.2)"} strokeWidth="1.5" strokeDasharray="6 5" />
                      <circle cx="50%" cy="0" r="3" fill={isDark?"rgba(59,130,246,0.4)":"rgba(37,99,235,0.3)"} />
                    </svg>
                  </div>
                  {t.process.steps.slice(row*3, row*3+3).map((step, j) => {
                    const i = row*3+j;
                    return (
                      <div key={i}
                        className={`tilt-card reveal reveal-d${j+1} relative rounded-2xl p-7 overflow-hidden`}
                        style={{ margin:"0 2px", background: c.cardBg, border: `1px solid ${c.cardBorder}`, zIndex:1 }}
                        onMouseMove={onTilt}
                        onMouseLeave={e => {
                          offTilt(e);
                          const el = e.currentTarget as HTMLDivElement;
                          el.style.background = c.cardBg;
                          el.style.borderColor = c.cardBorder.replace(/^1px solid /,"");
                          el.style.boxShadow = "none";
                        }}
                        onMouseEnter={e => {
                          const el = e.currentTarget as HTMLDivElement;
                          el.style.background = c.cardHoverBg;
                          el.style.borderColor = c.cardHoverBorder.replace(/^1px solid /,"");
                          el.style.boxShadow = isDark?"0 8px 40px rgba(59,130,246,0.12)":"0 8px 40px rgba(37,99,235,0.08)";
                        }}
                      >
                        {/* Ghost number — large bg, no badge duplication */}
                        <div className="proc-watermark absolute right-3 bottom-1 font-black select-none pointer-events-none" style={{ fontSize:108, lineHeight:1, color:isDark?"rgba(59,130,246,0.07)":"rgba(37,99,235,0.055)", letterSpacing:"-0.04em" }}>{step.num}</div>

                        {/* Minimal step label */}
                        <div className="mb-5" style={{ display:"inline-flex", alignItems:"center", gap:6 }}>
                          <span style={{ fontSize:10, fontWeight:900, letterSpacing:"0.18em", color:c.eyebrow, background:isDark?"rgba(59,130,246,0.12)":"rgba(37,99,235,0.08)", padding:"3px 9px", borderRadius:20 }}>
                            {step.num}
                          </span>
                          <div style={{ width:28, height:1, background:isDark?"rgba(59,130,246,0.2)":"rgba(37,99,235,0.15)" }} />
                        </div>

                        {/* Animated word-reveal title */}
                        <p className="font-black mb-3 overflow-hidden" style={{ fontSize:22, lineHeight:1.25, color: c.text }}>
                          {step.title.split(" ").map((word, wi) => (
                            <span key={wi} style={{ overflow:"hidden", display:"inline-block", verticalAlign:"bottom", marginRight:"0.28em" }}>
                              <span className="proc-word" style={{ transitionDelay:`${wi * 65}ms` }}>{word}</span>
                            </span>
                          ))}
                        </p>
                        <p className="proc-desc text-sm leading-relaxed" style={{ color: c.textMuted }}>{step.desc}</p>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" className="py-28 px-6 overflow-hidden relative" style={{ background: c.sectionAlt }}>
          {/* Ambient orbs */}
          <div className="absolute pointer-events-none" style={{ width:500,height:500,top:"10%",left:"-8%",borderRadius:"50%",background:isDark?"radial-gradient(circle,rgba(59,130,246,0.1) 0%,transparent 65%)":"radial-gradient(circle,rgba(37,99,235,0.07) 0%,transparent 65%)" }} />
          <div className="absolute pointer-events-none" style={{ width:400,height:400,bottom:"5%",right:"-5%",borderRadius:"50%",background:isDark?"radial-gradient(circle,rgba(109,40,217,0.1) 0%,transparent 65%)":"radial-gradient(circle,rgba(109,40,217,0.06) 0%,transparent 65%)" }} />

          <div className="max-w-5xl mx-auto relative">
            <div className="mb-16 reveal">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.22em] uppercase px-3.5 py-1.5 rounded-full mb-5"
                style={{ background:isDark?"rgba(59,130,246,0.15)":"rgba(37,99,235,0.08)", color:c.eyebrow, border:`1px solid ${isDark?"rgba(59,130,246,0.3)":"rgba(37,99,235,0.18)"}`, display:"inline-flex" }}
              >
                <span style={{ width:5,height:5,borderRadius:"50%",background:c.eyebrow,display:"inline-block" }} />
                {t.pricing.eyebrow}
              </span>
              <h2 className="text-4xl md:text-[56px] font-black leading-[1.1] tracking-tight">
                <span style={{ backgroundImage:`linear-gradient(135deg,${isDark?"#60a5fa":"#1d4ed8"},${isDark?"#a78bfa":"#6d28d9"})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
                  {t.pricing.title}
                </span>
                <br />
                <span style={{ color: c.text }}>{t.pricing.titleSub}</span>
              </h2>
            </div>
            {/* ── Flutter App section ── */}
            <div className="reveal flex items-center gap-3 mb-8">
              <Smartphone style={{ width:18, height:18, color:c.eyebrow }} />
              <span style={{ fontSize:16, fontWeight:800, color:c.eyebrow }}>{t.pricing.tabApp}</span>
              <div style={{ flex:1, height:1, background:isDark?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.07)" }} />
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-16" style={{ alignItems:"start" }}>
              {t.pricing.plans.map((plan, i) => ({ ...plan, comp: [<MAppBasic key={0} dark={isDark}/>, <MAppStandard key={1} dark={isDark}/>, <MAppPremium key={2} dark={isDark}/>][i], isApp: true })).map((item, i) => (
                <div key={i} className="reveal" style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:16 }}>
                  <div style={{ width:"100%", padding: item.isApp ? "0 16px" : "0", position:"relative",
                    filter: item.highlight ? "drop-shadow(0 0 28px rgba(96,165,250,0.28))" : "none",
                  }}>
                    {item.highlight && (
                      <div style={{ position:"absolute", top:-12, left:"50%", transform:"translateX(-50%)",
                        background:"linear-gradient(90deg,#60a5fa,#a78bfa)", color:"#fff", fontSize:10, fontWeight:800,
                        letterSpacing:"0.1em", padding:"3px 14px", borderRadius:99, whiteSpace:"nowrap", zIndex:2,
                      }}>POPULAR</div>
                    )}
                    <div style={{ border: item.highlight ? "1px solid rgba(96,165,250,0.35)" : `1px solid ${c.cardBorder}`,
                      borderRadius: item.isApp ? 28 : 12, overflow:"hidden",
                    }}>
                      {item.comp}
                    </div>
                  </div>
                  <div style={{ textAlign:"center" }}>
                    <div style={{ fontSize:15, fontWeight:800, color: item.highlight ? c.eyebrow : c.text, marginBottom:3 }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize:22, fontWeight:900, color: item.highlight ? c.eyebrow : c.text, letterSpacing:"-0.02em", marginBottom:4 }}>
                      ฿{item.price}
                    </div>
                    <div style={{ fontSize:13, color:c.textMuted, marginBottom:14, lineHeight:1.5 }}>{item.desc}</div>
                    {/* Feature list */}
                    <ul style={{ listStyle:"none", padding:0, margin:"0 0 18px", display:"flex", flexDirection:"column", gap:7, textAlign:"left" }}>
                      {item.features.map((f: string, j: number) => (
                        <li key={j} style={{ display:"flex", alignItems:"flex-start", gap:8, fontSize:13 }}>
                          <CheckCircle style={{ width:14, height:14, marginTop:2, flexShrink:0, color: item.highlight ? c.eyebrow : "#4ade80" }} />
                          <span style={{ color: c.textMuted }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div style={{ display:"flex", flexDirection:"column", gap:8, alignItems:"center" }}>
                      <button
                        onClick={() => { setInquiryPlan(`${item.isApp?"Flutter App":"Web"} · ${item.name} — ฿${item.price}`); setInquiryText(""); setInquiryContact(""); setInquiryDone(false); setInquiryOpen(true); }}
                        style={{ padding:"10px 28px", borderRadius:99, fontSize:13.5, fontWeight:700, cursor:"pointer", width:"100%",
                          background: item.highlight ? c.eyebrow : "transparent",
                          color: item.highlight ? "#fff" : c.eyebrow,
                          border: item.highlight ? "none" : `1.5px solid ${isDark?"rgba(96,165,250,0.4)":"rgba(37,99,235,0.35)"}`,
                          fontFamily:"var(--font-prompt), sans-serif",
                        }}>{item.cta}</button>
                      <button
                        onClick={() => setDemoSlug((["app-basic","app-standard","app-premium"] as DemoSlug[])[i])}
                        style={{ padding:"8px 20px", borderRadius:99, fontSize:12.5, fontWeight:600, cursor:"pointer", width:"100%",
                          background:"transparent", color:c.textMuted,
                          border:`1px solid ${isDark?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.1)"}`,
                          fontFamily:"var(--font-prompt), sans-serif",
                        }}>ดูตัวอย่าง →</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Web section ── */}
            <div className="reveal flex items-center gap-3 mb-8">
              <Globe style={{ width:18, height:18, color:c.eyebrow }} />
              <span style={{ fontSize:16, fontWeight:800, color:c.eyebrow }}>{t.pricing.tabWeb}</span>
              <div style={{ flex:1, height:1, background:isDark?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.07)" }} />
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-10" style={{ alignItems:"start" }}>
              {t.pricing.webPlans.map((plan, i) => ({ ...plan, comp: [<MWebLanding key={0} dark={isDark}/>, <MWebBusiness key={1} dark={isDark}/>, <MWebApp key={2} dark={isDark}/>][i], isApp: false })).map((item, i) => (
                <div key={i} className="reveal" style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:16 }}>
                  <div style={{ width:"100%", padding:"0", position:"relative",
                    filter: item.highlight ? "drop-shadow(0 0 28px rgba(96,165,250,0.28))" : "none",
                  }}>
                    {item.highlight && (
                      <div style={{ position:"absolute", top:-12, left:"50%", transform:"translateX(-50%)",
                        background:"linear-gradient(90deg,#60a5fa,#a78bfa)", color:"#fff", fontSize:10, fontWeight:800,
                        letterSpacing:"0.1em", padding:"3px 14px", borderRadius:99, whiteSpace:"nowrap", zIndex:2,
                      }}>POPULAR</div>
                    )}
                    <div style={{ border: item.highlight ? "1px solid rgba(96,165,250,0.35)" : `1px solid ${c.cardBorder}`,
                      borderRadius:12, overflow:"hidden",
                    }}>
                      {item.comp}
                    </div>
                  </div>
                  <div style={{ textAlign:"center" }}>
                    <div style={{ fontSize:15, fontWeight:800, color: item.highlight ? c.eyebrow : c.text, marginBottom:3 }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize:22, fontWeight:900, color: item.highlight ? c.eyebrow : c.text, letterSpacing:"-0.02em", marginBottom:4 }}>
                      ฿{item.price}
                    </div>
                    <div style={{ fontSize:13, color:c.textMuted, marginBottom:14, lineHeight:1.5 }}>{item.desc}</div>
                    <ul style={{ listStyle:"none", padding:0, margin:"0 0 18px", display:"flex", flexDirection:"column", gap:7, textAlign:"left" }}>
                      {item.features.map((f: string, j: number) => (
                        <li key={j} style={{ display:"flex", alignItems:"flex-start", gap:8, fontSize:13 }}>
                          <CheckCircle style={{ width:14, height:14, marginTop:2, flexShrink:0, color: item.highlight ? c.eyebrow : "#4ade80" }} />
                          <span style={{ color: c.textMuted }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div style={{ display:"flex", flexDirection:"column", gap:8, alignItems:"center" }}>
                      <button
                        onClick={() => { setInquiryPlan(`Web · ${item.name} — ฿${item.price}`); setInquiryText(""); setInquiryContact(""); setInquiryDone(false); setInquiryOpen(true); }}
                        style={{ padding:"10px 28px", borderRadius:99, fontSize:13.5, fontWeight:700, cursor:"pointer", width:"100%",
                          background: item.highlight ? c.eyebrow : "transparent",
                          color: item.highlight ? "#fff" : c.eyebrow,
                          border: item.highlight ? "none" : `1.5px solid ${isDark?"rgba(96,165,250,0.4)":"rgba(37,99,235,0.35)"}`,
                          fontFamily:"var(--font-prompt), sans-serif",
                        }}>{item.cta}</button>
                      <button
                        onClick={() => setDemoSlug((["web-landing","web-business","web-app"] as DemoSlug[])[i])}
                        style={{ padding:"8px 20px", borderRadius:99, fontSize:12.5, fontWeight:600, cursor:"pointer", width:"100%",
                          background:"transparent", color:c.textMuted,
                          border:`1px solid ${isDark?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.1)"}`,
                          fontFamily:"var(--font-prompt), sans-serif",
                        }}>ดูตัวอย่าง →</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-sm mt-8" style={{ color: c.noteCol }}>{t.pricing.note}</p>
            <div className="text-center mt-4">
              <a href="/packages" style={{ color: c.eyebrow, fontSize: 14, fontWeight: 600, textDecoration: "none", opacity: 0.85 }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "0.85")}
              >{t.pricing.compareLink}</a>
            </div>
          </div>
        </section>

        {/* ── Portfolio ── */}
        <section id="portfolio" className="py-28 px-6 overflow-hidden relative" style={{ background: c.pageBg }}>
          {/* Ambient orbs */}
          <div className="absolute pointer-events-none" style={{ width:500,height:500,top:"5%",right:"-5%",borderRadius:"50%",background:isDark?"radial-gradient(circle,rgba(124,58,237,0.1) 0%,transparent 65%)":"radial-gradient(circle,rgba(124,58,237,0.07) 0%,transparent 65%)" }} />
          <div className="absolute pointer-events-none" style={{ width:400,height:400,bottom:"5%",left:"-5%",borderRadius:"50%",background:isDark?"radial-gradient(circle,rgba(59,130,246,0.09) 0%,transparent 65%)":"radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 65%)" }} />

          <div className="max-w-5xl mx-auto relative">
            {/* Heading */}
            <div className="mb-14 reveal">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.22em] uppercase px-3.5 py-1.5 rounded-full mb-5"
                style={{ background:isDark?"rgba(59,130,246,0.15)":"rgba(37,99,235,0.08)", color:c.eyebrow, border:`1px solid ${isDark?"rgba(59,130,246,0.3)":"rgba(37,99,235,0.18)"}`, display:"inline-flex" }}
              >
                <span style={{ width:5,height:5,borderRadius:"50%",background:c.eyebrow,display:"inline-block" }} />
                {t.portfolio.eyebrow}
              </span>
              <h2 className="text-4xl md:text-[56px] font-black leading-[1.1] tracking-tight">
                <span style={{ backgroundImage:`linear-gradient(135deg,${isDark?"#60a5fa":"#1d4ed8"},${isDark?"#a78bfa":"#6d28d9"})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
                  {t.portfolio.title}
                </span>
                <br />
                <span style={{ color: c.text }}>{t.portfolio.titleSub}</span>
              </h2>
              <p className="mt-4 text-base" style={{ color: c.textMuted }}>{t.portfolio.sub}</p>
            </div>

            {/* Cards grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.portfolio.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`reveal reveal-d${idx + 1} tilt-card rounded-2xl overflow-hidden flex flex-col`}
                  style={{ background: c.cardBg, border:`1px solid ${c.cardBorder}`, transition:"border-color 0.2s ease,box-shadow 0.2s ease" }}
                  onMouseMove={onTilt}
                  onMouseLeave={offTilt}
                >
                  {item.type === "Flutter App" ? (
                    /* Phone mockup */
                    <div className="flex items-center justify-center py-5" style={{ background:isDark?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.03)", borderBottom:`1px solid ${c.cardBorder}` }}>
                      <div className="relative flex items-center justify-center" style={{ width:90,height:160,borderRadius:18,background:isDark?"#0d1a2e":"#e2e8f0",border:`2px solid ${isDark?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.14)"}`,boxShadow:isDark?"0 8px 32px rgba(0,0,0,0.5)":"0 8px 32px rgba(0,0,0,0.15)" }}>
                        {/* notch */}
                        <div className="absolute top-2.5 left-1/2 -translate-x-1/2" style={{ width:28,height:5,borderRadius:3,background:isDark?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.18)" }} />
                        {/* screen content */}
                        <div className="flex flex-col items-center justify-center gap-1.5 mt-3">
                          <div style={{ width:36,height:36,borderRadius:10,background:"linear-gradient(135deg,#2563eb,#7c3aed)",display:"flex",alignItems:"center",justifyContent:"center" }}>
                            <span className="text-white font-black text-sm">S</span>
                          </div>
                          <span className="text-[8px] font-bold" style={{ color:isDark?"rgba(255,255,255,0.6)":"rgba(0,0,0,0.5)" }}>Brain Sudoku</span>
                        </div>
                        {/* home bar */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2" style={{ width:32,height:3,borderRadius:2,background:isDark?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.2)" }} />
                      </div>
                      {/* App Store badge */}
                      <div className="ml-4 flex flex-col gap-2">
                        <div className="px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1.5" style={{ background:isDark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)", color:c.textMuted }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                          App Store
                        </div>
                        <div className="text-[9px]" style={{ color:c.textSubtle }}>iOS · Flutter</div>
                      </div>
                    </div>
                  ) : (
                    /* Browser chrome mockup */
                    <div className="relative" style={{ background:isDark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.04)", borderBottom:`1px solid ${c.cardBorder}` }}>
                      {/* Dots */}
                      <div className="flex items-center gap-1.5 px-4 py-3">
                        {["#ff5f57","#febc2e","#28c840"].map(col=>(
                          <span key={col} style={{ width:10,height:10,borderRadius:"50%",background:col,display:"inline-block",opacity:0.7 }} />
                        ))}
                        {/* URL bar */}
                        <div className="flex-1 mx-3 px-3 py-1 rounded-md text-[11px] truncate"
                          style={{ background:isDark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)", color:c.textMuted }}>
                          {item.url.replace("https://","")}
                        </div>
                      </div>
                      {/* Preview area */}
                      <div className="flex items-center justify-center" style={{ height:140, background:isDark?"linear-gradient(135deg,rgba(37,99,235,0.12),rgba(109,40,217,0.12))":"linear-gradient(135deg,rgba(37,99,235,0.07),rgba(109,40,217,0.07))" }}>
                        <span className="text-4xl font-black tracking-tight" style={{ backgroundImage:`linear-gradient(135deg,${isDark?"#60a5fa":"#2563eb"},${isDark?"#a78bfa":"#7c3aed"})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
                          {item.title}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-5 gap-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-[17px]" style={{ color: c.text }}>{item.title}</h3>
                      <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full shrink-0"
                        style={{ background:isDark?"rgba(59,130,246,0.15)":"rgba(37,99,235,0.1)", color:c.eyebrow, border:`1px solid ${isDark?"rgba(59,130,246,0.25)":"rgba(37,99,235,0.2)"}` }}>
                        {item.type}
                      </span>
                    </div>
                    <p className="text-[13px] leading-relaxed flex-1" style={{ color: c.textMuted }}>{item.desc}</p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map(tag=>(
                        <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full"
                          style={{ background:c.tagBg, border:`1px solid ${c.tagBorder}`, color:c.tagText }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* CTA */}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 flex items-center justify-center gap-2 text-[13px] font-semibold py-2.5 rounded-xl"
                      style={{ background:`linear-gradient(135deg,${isDark?"rgba(37,99,235,0.2)":"rgba(37,99,235,0.1)"},${isDark?"rgba(109,40,217,0.2)":"rgba(109,40,217,0.1)"})`, color:c.eyebrow, border:`1px solid ${isDark?"rgba(59,130,246,0.25)":"rgba(37,99,235,0.2)"}`, transition:"background 0.2s ease,border-color 0.2s ease" }}
                      onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.background=`linear-gradient(135deg,rgba(37,99,235,0.35),rgba(109,40,217,0.35))`; }}
                      onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.background=`linear-gradient(135deg,${isDark?"rgba(37,99,235,0.2)":"rgba(37,99,235,0.1)"},${isDark?"rgba(109,40,217,0.2)":"rgba(109,40,217,0.1)"})` }}
                    >
                      <Globe className="w-3.5 h-3.5" />
                      {item.cta}
                    </a>
                  </div>
                </div>
              ))}

              {/* "Coming soon" placeholder card */}
              <div className="reveal reveal-d2 rounded-2xl flex flex-col items-center justify-center gap-3 p-8 text-center"
                style={{ background:c.cardBg, border:`1.5px dashed ${c.cardBorder}`, minHeight:300 }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background:isDark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.04)", border:`1px solid ${c.cardBorder}` }}>
                  <span className="text-2xl font-black" style={{ color:c.textSubtle }}>+</span>
                </div>
                <p className="text-sm font-semibold" style={{ color:c.textMuted }}>{lang==="th"?"ผลงานเพิ่มเติม กำลังมา…":"More projects coming soon…"}</p>
                <p className="text-xs" style={{ color:c.textSubtle }}>{lang==="th"?"ติดต่อเพื่อดูงานเพิ่มเติม":"Contact us to see more work"}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-24 px-6 overflow-hidden" style={{ background: c.sectionAlt }}>
          <div className="max-w-3xl mx-auto">
            {/* Heading */}
            <div className="mb-12 reveal text-center">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.22em] uppercase px-3.5 py-1.5 rounded-full mb-5"
                style={{ background: isDark?"rgba(59,130,246,0.15)":"rgba(37,99,235,0.08)", color: c.eyebrow, border:`1px solid ${isDark?"rgba(59,130,246,0.3)":"rgba(37,99,235,0.18)"}`, display:"inline-flex" }}
              >
                <span style={{ width:5,height:5,borderRadius:"50%",background:c.eyebrow,display:"inline-block" }} />
                {t.faq.eyebrow}
              </span>
              <h2 className="text-4xl md:text-[52px] font-black leading-[1.1] tracking-tight">
                <span style={{ backgroundImage:`linear-gradient(135deg,${isDark?"#60a5fa":"#1d4ed8"},${isDark?"#a78bfa":"#6d28d9"})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
                  {t.faq.title}
                </span>
                {" "}
                <span style={{ color: c.text }}>{t.faq.titleSub}</span>
              </h2>
            </div>

            {/* Accordion */}
            <div className="flex flex-col gap-3">
              {t.faq.items.map((item, i) => {
                const open = faqOpen === i;
                return (
                  <div
                    key={i}
                    className="reveal rounded-2xl overflow-hidden"
                    style={{ border:`1px solid ${open ? (isDark?"rgba(59,130,246,0.4)":"rgba(37,99,235,0.3)") : c.cardBorder}`, background: open ? (isDark?"rgba(59,130,246,0.07)":"rgba(37,99,235,0.04)") : c.cardBg, transition:"border-color 0.2s,background 0.2s" }}
                  >
                    <button
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                      onClick={() => setFaqOpen(open ? null : i)}
                    >
                      <span className="font-semibold text-[15px]" style={{ color: c.text }}>{item.q}</span>
                      <span
                        className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                        style={{ background: isDark?"rgba(59,130,246,0.15)":"rgba(37,99,235,0.1)", color: c.eyebrow, transform: open?"rotate(45deg)":"rotate(0deg)", transition:"transform 0.25s ease" }}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <line x1="6" y1="1" x2="6" y2="11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                          <line x1="1" y1="6" x2="11" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                        </svg>
                      </span>
                    </button>
                    <div style={{ maxHeight: open ? 300 : 0, overflow:"hidden", transition:"max-height 0.3s ease" }}>
                      <p className="px-6 pb-5 text-[14px] leading-relaxed" style={{ color: c.textMuted, whiteSpace:"pre-line" }}>{item.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Still have questions CTA */}
            <div className="mt-10 text-center reveal">
              <p className="text-sm mb-4" style={{ color: c.textMuted }}>{lang==="th"?"ยังมีคำถามอื่น? ปรึกษาฟรี ไม่มีข้อผูกมัด":"Still have questions? Free consultation, no commitment."}</p>
              <a href="#contact"
                className="inline-flex items-center gap-2 text-[14px] font-semibold px-6 py-3 rounded-full"
                style={{ background:`linear-gradient(135deg,${isDark?"rgba(37,99,235,0.25)":"rgba(37,99,235,0.12)"},${isDark?"rgba(109,40,217,0.25)":"rgba(109,40,217,0.12)"})`, color: c.eyebrow, border:`1px solid ${isDark?"rgba(59,130,246,0.3)":"rgba(37,99,235,0.2)"}` }}
              >
                {lang==="th"?"ติดต่อเราเลย →":"Contact Us →"}
              </a>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="relative overflow-hidden" style={{ background:"linear-gradient(160deg,#020818 0%,#06101f 45%,#0c0a28 100%)" }}>

          {/* Dot-grid BG */}
          <div className="absolute inset-0 pointer-events-none select-none" style={{
            backgroundImage:"radial-gradient(circle,rgba(59,130,246,0.11) 1px,transparent 1px)",
            backgroundSize:"36px 36px",
            maskImage:"radial-gradient(ellipse 90% 90% at 50% 50%,black 20%,transparent 80%)",
            WebkitMaskImage:"radial-gradient(ellipse 90% 90% at 50% 50%,black 20%,transparent 80%)",
          }}/>

          {/* HUD corner brackets */}
          {([
            {style:{top:20,left:20},d:"M0 22 L0 0 L22 0"},
            {style:{top:20,right:20},d:"M22 0 L0 0 L0 22"},
            {style:{bottom:20,left:20},d:"M0 0 L0 22 L22 22"},
            {style:{bottom:20,right:20},d:"M22 0 L22 22 L0 22"},
          ] as {style:React.CSSProperties,d:string}[]).map((b,i)=>(
            <div key={i} className="absolute pointer-events-none" style={b.style}>
              <svg width="28" height="28" viewBox="0 0 22 22"><path d={b.d} fill="none" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5"/></svg>
            </div>
          ))}

          <div className="max-w-6xl mx-auto px-6 py-24 relative">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

              {/* ── LEFT: Content ── */}
              <div className="reveal">

                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full" style={{ background:"rgba(59,130,246,0.1)", border:"1px solid rgba(59,130,246,0.25)" }}>
                  <span style={{ width:5,height:5,borderRadius:"50%",background:"#60a5fa",display:"inline-block",animation:"contactNodeBlink 2s ease-in-out infinite" }}/>
                  <span style={{ fontSize:11,fontWeight:700,letterSpacing:"0.22em",color:"#60a5fa",textTransform:"uppercase" as const }}>{t.contact.eyebrow}</span>
                </div>

                {/* Title */}
                <h2 className="font-black leading-[1.06] tracking-tight mb-5" style={{ fontSize:"clamp(44px,5.5vw,76px)", color:"#fff" }}>
                  {t.contact.title}{" "}
                  <span style={{ backgroundImage:"linear-gradient(90deg,#60a5fa 0%,#a78bfa 55%,#f472b6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
                    {t.contact.titleSub}
                  </span>
                </h2>

                {/* Sub */}
                <p className="mb-10 leading-relaxed" style={{ fontSize:16,color:"rgba(148,163,184,0.85)",maxWidth:400 }}>{t.contact.sub}</p>

                {/* Contact cards */}
                <div className="flex flex-col gap-3 mb-10">
                  {([
                    {icon:<Mail className="w-4 h-4"/>, label:t.contact.emailLabel, val:t.contact.emailVal, href:`mailto:${t.contact.emailVal}`, col:"#60a5fa", bg:"rgba(59,130,246,0.08)", hbg:"rgba(59,130,246,0.16)", border:"rgba(59,130,246,0.22)"},
                    {icon:<MessageCircle className="w-4 h-4"/>, label:t.contact.lineLabel, val:"", href:`https://line.me/ti/p/~${t.contact.lineVal}`, col:"#4ade80", bg:"rgba(34,197,94,0.08)", hbg:"rgba(34,197,94,0.16)", border:"rgba(34,197,94,0.22)"},
                    {icon:<Phone className="w-4 h-4"/>, label:t.contact.phoneLabel, val:`${t.contact.phoneVal} · ${t.contact.phoneName}`, href:`tel:${t.contact.phoneVal.replace(/-/g,"")}`, col:"#fb923c", bg:"rgba(251,146,60,0.08)", hbg:"rgba(251,146,60,0.16)", border:"rgba(251,146,60,0.22)"},
                  ] as {icon:React.ReactNode,label:string,val:string,href:string,col:string,bg:string,hbg:string,border:string}[]).map((item,i)=>(
                    <a key={i} href={item.href}
                      className="flex items-center gap-3 px-5 py-4 rounded-2xl flex-1 transition-all duration-200"
                      style={{ background:item.bg, border:`1px solid ${item.border}`, textDecoration:"none" }}
                      onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background=item.hbg;}}
                      onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background=item.bg;}}
                    >
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background:item.hbg, color:item.col }}>{item.icon}</div>
                      <div>
                        <p style={{ fontSize:10,fontWeight:700,letterSpacing:"0.18em",color:"rgba(148,163,184,0.6)",textTransform:"uppercase" as const,marginBottom:2 }}>{item.label}</p>
                        <p style={{ fontSize:14,fontWeight:600,color:"#f1f5f9" }}>{item.val}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* CTA */}
                <a href={`mailto:${t.contact.emailVal}`}
                  className="mag-btn inline-flex items-center gap-3 font-bold rounded-2xl relative overflow-hidden"
                  style={{ background:"linear-gradient(135deg,#1d4ed8 0%,#6d28d9 100%)", color:"white", padding:"18px 44px", fontSize:16, letterSpacing:"0.03em", textDecoration:"none", animation:"contactCtaGlow 3s ease-in-out infinite" }}
                  onMouseMove={e=>{
                    const el=e.currentTarget; const r=el.getBoundingClientRect();
                    el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*0.28}px,${(e.clientY-r.top-r.height/2)*0.28}px) scale(1.05)`;
                  }}
                  onMouseLeave={e=>{e.currentTarget.style.transform="translate(0,0) scale(1)";}}
                >
                  {/* Shimmer sweep */}
                  <span className="absolute inset-0 pointer-events-none" style={{ background:"linear-gradient(105deg,transparent 38%,rgba(255,255,255,0.13) 50%,transparent 62%)", backgroundSize:"200% 100%", animation:"shimmer 3.5s linear infinite" }}/>
                  <Mail className="w-5 h-5 relative z-10"/>
                  <span className="relative z-10">{t.contact.cta}</span>
                  <span className="relative z-10" style={{ fontSize:20,opacity:0.6,marginLeft:2 }}>→</span>
                </a>
              </div>

              {/* ── RIGHT: Signal geometry ── */}
              <div className="hidden lg:flex items-center justify-center">
                <svg viewBox="0 0 480 480" style={{ width:"100%",maxWidth:480,overflow:"visible" }}>
                  <defs>
                    <radialGradient id="cntCG" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35"/>
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
                    </radialGradient>
                    <filter id="cntBlur2"><feGaussianBlur stdDeviation="3"/></filter>
                    <filter id="cntGlow2">
                      <feGaussianBlur stdDeviation="5" result="b"/>
                      <feComposite in="SourceGraphic" in2="b" operator="over"/>
                    </filter>
                  </defs>

                  {/* Background glow blob */}
                  <circle cx="240" cy="240" r="205" fill="url(#cntCG)"/>

                  {/* Faint concentric rings */}
                  {[220,185,148,112,76].map((r,i)=>(
                    <circle key={i} cx="240" cy="240" r={r} fill="none" stroke="rgba(59,130,246,0.055)" strokeWidth="1"/>
                  ))}

                  {/* 36-tick outer ring */}
                  {Array.from({length:36},(_,k)=>{
                    const θ=k*10*Math.PI/180;
                    const major=k%9===0;
                    const [r1,r2]=major?[204,224]:[211,218];
                    return <line key={k}
                      x1={p(240+r1*Math.cos(θ))} y1={p(240+r1*Math.sin(θ))}
                      x2={p(240+r2*Math.cos(θ))} y2={p(240+r2*Math.sin(θ))}
                      stroke={major?"rgba(59,130,246,0.75)":"rgba(59,130,246,0.28)"} strokeWidth={major?1.5:0.7}/>;
                  })}

                  {/* Outer ring */}
                  <circle cx="240" cy="240" r="222" fill="none" stroke="rgba(59,130,246,0.22)" strokeWidth="0.8"/>

                  {/* Slowly-rotating orbital ring */}
                  <g style={{ animation:"svgSpin 45s linear infinite", transformOrigin:"240px 240px" }}>
                    <circle cx="240" cy="240" r="196" fill="none" stroke="rgba(99,102,241,0.18)" strokeWidth="0.8" strokeDasharray="3 11"/>
                    <circle cx={p(240+196)} cy="240" r="3.5" fill="#818cf8" opacity="0.7"/>
                    <circle cx={p(240-196)} cy="240" r="2" fill="#818cf8" opacity="0.4"/>
                  </g>

                  {/* Radar sweep */}
                  <g style={{ animation:"svgSpin 7s linear infinite", transformOrigin:"240px 240px" }}>
                    <path d={`M240,240 L${p(240+218*Math.cos(-110*Math.PI/180))},${p(240+218*Math.sin(-110*Math.PI/180))} A218,218 0 0 1 ${p(240+218*Math.cos(-90*Math.PI/180))},${p(240+218*Math.sin(-90*Math.PI/180))} Z`}
                      fill="rgba(59,130,246,0.055)"/>
                    <line x1="240" y1="240"
                      x2={p(240+218*Math.cos(-90*Math.PI/180))} y2={p(240+218*Math.sin(-90*Math.PI/180))}
                      stroke="rgba(96,165,250,0.9)" strokeWidth="1.5"/>
                    <line x1="240" y1="240"
                      x2={p(240+218*Math.cos(-90*Math.PI/180))} y2={p(240+218*Math.sin(-90*Math.PI/180))}
                      stroke="rgba(96,165,250,0.25)" strokeWidth="5" filter="url(#cntBlur2)"/>
                  </g>

                  {/* Main orbit path */}
                  <circle cx="240" cy="240" r="175" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="1"/>

                  {/* Cross-hair lines */}
                  <line x1="240" y1="26" x2="240" y2="454" stroke="rgba(59,130,246,0.07)" strokeWidth="0.6" strokeDasharray="4 10"/>
                  <line x1="26" y1="240" x2="454" y2="240" stroke="rgba(59,130,246,0.07)" strokeWidth="0.6" strokeDasharray="4 10"/>

                  {/* 6 Satellites + animated connection lines */}
                  {([
                    {angle:270, label:"FLUTTER",  sub:"App Dev"},
                    {angle:330, label:"WEB",       sub:"Next.js"},
                    {angle:30,  label:"UI/UX",     sub:"Design"},
                    {angle:90,  label:"iOS",       sub:"Deploy"},
                    {angle:150, label:"ANDROID",   sub:"Native"},
                    {angle:210, label:"SOURCE",    sub:"Code"},
                  ] as {angle:number,label:string,sub:string}[]).map((sat,i)=>{
                    const θ=sat.angle*Math.PI/180;
                    const sx=p(240+175*Math.cos(θ)); const sy=p(240+175*Math.sin(θ));
                    const isR=sx>260, isL=sx<220;
                    const tAnchor=isR?"start":isL?"end":"middle";
                    const lx=p(isR?sx+20:isL?sx-20:sx);
                    const ly=p(sat.angle===270?sy-22:sat.angle===90?sy+22:sy);
                    const lBase=sat.angle===270?"auto":sat.angle===90?"hanging":"middle";
                    return (
                      <g key={i}>
                        {/* Static dim guide line */}
                        <line x1="240" y1="240" x2={sx} y2={sy} stroke="rgba(59,130,246,0.1)" strokeWidth="0.7" strokeDasharray="3 7"/>
                        {/* Animated flowing dash */}
                        <line x1="240" y1="240" x2={sx} y2={sy}
                          pathLength="1" strokeDasharray="0.12 0.88"
                          stroke="rgba(96,165,250,0.55)" strokeWidth="1.2"
                          style={{ strokeDashoffset:0, animation:`contactSignalFlow ${2.2+i*0.18}s linear ${i*0.45}s infinite` }}/>
                        {/* Traveling dot */}
                        <circle cx="0" cy="0" r="2.2" fill="#93c5fd" opacity="0">
                          <animateMotion path={`M240,240 L${sx},${sy}`} dur={`${1.9+i*0.22}s`} begin={`${i*0.45}s`} repeatCount="indefinite" calcMode="linear"/>
                          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.82;1" dur={`${1.9+i*0.22}s`} begin={`${i*0.45}s`} repeatCount="indefinite"/>
                        </circle>
                        {/* Satellite node */}
                        <circle cx={sx} cy={sy} r="20" fill="rgba(30,27,75,0.0)" filter="url(#cntBlur2)" opacity="0.7"/>
                        <circle cx={sx} cy={sy} r="14" fill="rgba(10,14,30,0.92)" stroke="rgba(99,102,241,0.55)" strokeWidth="1.2"/>
                        <circle cx={sx} cy={sy} r="9" fill="none" stroke="rgba(99,102,241,0.25)" strokeWidth="0.8"/>
                        <circle cx={sx} cy={sy} r="3.5" fill="#6366f1"
                          style={{ animation:`contactNodeBlink ${1.4+i*0.28}s ease-in-out ${i*0.18}s infinite`, transformOrigin:`${sx}px ${sy}px` }}/>
                        {/* Labels */}
                        <text x={lx} y={ly} textAnchor={tAnchor} dominantBaseline={lBase}
                          fill="rgba(148,163,184,0.75)" fontSize="8.5" fontWeight="700" letterSpacing="0.14em">{sat.label}</text>
                        <text x={lx} y={p(parseFloat(String(ly))+(sat.angle===270?-10:10))} textAnchor={tAnchor} dominantBaseline={lBase}
                          fill="rgba(99,102,241,0.5)" fontSize="7" letterSpacing="0.08em">{sat.sub}</text>
                      </g>
                    );
                  })}

                  {/* Center ping rings */}
                  {[0,1,2].map(i=>(
                    <circle key={i} cx="240" cy="240" r="6" fill="none" stroke="rgba(59,130,246,0.65)" strokeWidth="1.5"
                      style={{ animation:`contactPingExpand 3s ease-out ${i*1}s infinite`, transformOrigin:"240px 240px" }}/>
                  ))}

                  {/* Center node layers */}
                  <circle cx="240" cy="240" r="30" fill="rgba(8,12,28,0.95)" stroke="rgba(59,130,246,0.55)" strokeWidth="1.5"/>
                  <circle cx="240" cy="240" r="22" fill="none" stroke="rgba(99,102,241,0.28)" strokeWidth="0.8"/>
                  <circle cx="240" cy="240" r="14" fill="none" stroke="rgba(59,130,246,0.18)" strokeWidth="0.6"/>
                  <circle cx="240" cy="240" r="6" fill="#3b82f6" opacity="0.95" filter="url(#cntGlow2)"/>
                  <circle cx="240" cy="240" r="3" fill="#bfdbfe"/>

                  {/* HUD data labels */}
                  <text x="240" y="12" textAnchor="middle" fill="rgba(96,165,250,0.65)" fontSize="8" fontWeight="700" letterSpacing="0.18em">◈ SIGNAL ACTIVE ◈</text>
                  <text x="240" y="472" textAnchor="middle" fill="rgba(96,165,250,0.4)" fontSize="7" letterSpacing="0.12em">MATA SOFT · STUDIO · v2.0</text>
                  <text x="16" y="240" textAnchor="middle" fill="rgba(96,165,250,0.35)" fontSize="6.5" letterSpacing="0.1em" transform="rotate(-90,16,240)">LAT 13.756°N</text>
                  <text x="464" y="240" textAnchor="middle" fill="rgba(96,165,250,0.35)" fontSize="6.5" letterSpacing="0.1em" transform="rotate(90,464,240)">LON 100.501°E</text>

                  {/* Corner L-brackets */}
                  <path d="M32 54 L32 32 L54 32" fill="none" stroke="rgba(59,130,246,0.45)" strokeWidth="1.5"/>
                  <path d="M426 32 L448 32 L448 54" fill="none" stroke="rgba(59,130,246,0.45)" strokeWidth="1.5"/>
                  <path d="M32 426 L32 448 L54 448" fill="none" stroke="rgba(59,130,246,0.45)" strokeWidth="1.5"/>
                  <path d="M448 426 L448 448 L426 448" fill="none" stroke="rgba(59,130,246,0.45)" strokeWidth="1.5"/>
                </svg>
              </div>

            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="px-6 pt-12 pb-8" style={{ borderTop:`1px solid ${c.footerBorder}`, background:c.pageBg }}>
          <div className="max-w-6xl mx-auto">
            {/* Top row */}
            <div className="grid sm:grid-cols-3 gap-10 mb-10">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background:"linear-gradient(135deg,#1d4ed8,#6d28d9)" }}>
                    <span className="font-black text-xs text-white">M</span>
                  </div>
                  <span className="font-black text-sm" style={{ color:c.text }}>MATA SOFT</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color:c.noteCol, maxWidth:200 }}>
                  รับทำ App & เว็บไซต์ระดับมืออาชีพ<br/>ส่งตรงเวลา มี Source Code ครบ
                </p>
              </div>
              {/* Services */}
              <div>
                <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color:c.eyebrow }}>บริการ</p>
                <ul className="space-y-2">
                  {["Flutter App iOS/Android","เว็บไซต์ธุรกิจ","Web Application","UI/UX Design"].map(s=>(
                    <li key={s} className="text-xs" style={{ color:c.noteCol }}>{s}</li>
                  ))}
                </ul>
              </div>
              {/* Contact */}
              <div>
                <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color:c.eyebrow }}>ติดต่อ</p>
                <ul className="space-y-2">
                  <li className="text-xs" style={{ color:c.noteCol }}>contact@matasoft.dev</li>
                  <li className="text-xs" style={{ color:c.noteCol }}>0943218118 · มิติ</li>
                  <li className="text-xs" style={{ color:c.noteCol }}>Line: @linebeamza</li>
                  <li><a href="https://matasoft.dev" className="text-xs" style={{ color:c.eyebrow }}>matasoft.dev</a></li>
                </ul>
              </div>
            </div>
            {/* Bottom row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-6" style={{ borderTop:`1px solid ${c.footerBorder}` }}>
              <p className="text-xs" style={{ color:c.noteCol }}>{t.footer}</p>
              <div className="flex items-center gap-4">
                {["Flutter App","Web Development","UI/UX Design"].map(tag=>(
                  <span key={tag} className="text-xs" style={{ color:c.noteCol, opacity:0.6 }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* ── Demo Modal ── */}
      {demoSlug && (
        <DemoModal
          slug={demoSlug}
          onClose={() => setDemoSlug(null)}
          onInquiry={() => { setDemoSlug(null); setInquiryPlan(demoSlug); setInquiryText(""); setInquiryContact(""); setInquiryDone(false); setInquiryOpen(true); }}
        />
      )}

      {/* ── Inquiry Dialog ── */}
      {inquiryOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
          style={{ background:"rgba(2,8,24,0.78)", backdropFilter:"blur(12px)", animation:"backdropIn 0.25s ease" }}
          onClick={e => { if(e.target===e.currentTarget){ setInquiryOpen(false); } }}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl overflow-hidden"
            style={{ animation:"dialogIn 0.32s cubic-bezier(0.34,1.56,0.64,1)", background:"linear-gradient(160deg,#070f24,#0c0a28)", border:"1px solid rgba(99,102,241,0.35)", boxShadow:"0 0 0 1px rgba(255,255,255,0.04),0 32px 80px rgba(0,0,0,0.7),0 0 60px rgba(37,99,235,0.18)" }}
          >
            {/* Gradient top bar */}
            <div style={{ height:3, background:"linear-gradient(90deg,#2563eb,#7c3aed,#06b6d4)", borderRadius:"9999px 9999px 0 0" }} />

            {/* Corner HUD brackets */}
            {([{s:{top:12,left:12},d:"M0 16 L0 0 L16 0"},{s:{top:12,right:12},d:"M16 0 L0 0 L0 16"},{s:{bottom:12,left:12},d:"M0 0 L0 16 L16 16"},{s:{bottom:12,right:12},d:"M16 0 L16 16 L0 16"}] as {s:React.CSSProperties,d:string}[]).map((b,i)=>(
              <div key={i} className="absolute pointer-events-none" style={b.s}>
                <svg width="20" height="20" viewBox="0 0 16 16"><path d={b.d} fill="none" stroke="rgba(99,102,241,0.35)" strokeWidth="1.2"/></svg>
              </div>
            ))}

            <div className="p-7">
              {!inquiryDone ? (
                <>
                  {/* Header */}
                  <div className="mb-6">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-4"
                      style={{ background:"rgba(99,102,241,0.15)", color:"#a78bfa", border:"1px solid rgba(99,102,241,0.3)" }}>
                      <span style={{ width:5,height:5,borderRadius:"50%",background:"#a78bfa",display:"inline-block" }} />
                      {lang==="th"?"แพ็กเกจที่เลือก":"Selected Plan"}
                    </span>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[13px] font-bold px-3 py-1 rounded-full" style={{ background:"linear-gradient(135deg,rgba(37,99,235,0.25),rgba(109,40,217,0.25))", color:"#93c5fd", border:"1px solid rgba(99,102,241,0.3)" }}>
                        {inquiryPlan}
                      </span>
                    </div>
                    <h2 className="text-2xl font-black leading-snug" style={{ color:"white" }}>
                      {lang==="th" ? <>บอกเราเลย<br/><span style={{ backgroundImage:"linear-gradient(135deg,#60a5fa,#a78bfa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>อยากได้อะไร?</span></> : <>Tell us what<br/><span style={{ backgroundImage:"linear-gradient(135deg,#60a5fa,#a78bfa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>you want to build</span></>}
                    </h2>
                    <p className="text-sm mt-1.5" style={{ color:"rgba(255,255,255,0.4)" }}>
                      {lang==="th" ? "เล่าให้ฟัง เราจะรีบติดต่อกลับภายใน 24 ชม." : "Describe your project — we'll get back to you within 24 hrs."}
                    </p>
                  </div>

                  {/* Textarea */}
                  <div className="mb-4">
                    <textarea
                      rows={4}
                      value={inquiryText}
                      onChange={e => setInquiryText(e.target.value)}
                      placeholder={lang==="th" ? "เช่น อยากทำ App สำหรับร้านอาหาร รองรับ iOS/Android มีระบบสั่งอาหาร และจัดการออร์เดอร์..." : "e.g. A food ordering app for iOS/Android with order management and a dashboard..."}
                      className="w-full rounded-2xl text-sm leading-relaxed resize-none outline-none"
                      style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", color:"white", padding:"14px 16px", caretColor:"#60a5fa" }}
                      onFocus={e => { e.currentTarget.style.borderColor="rgba(99,102,241,0.55)"; e.currentTarget.style.boxShadow="0 0 0 3px rgba(99,102,241,0.12)"; }}
                      onBlur={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.1)"; e.currentTarget.style.boxShadow="none"; }}
                    />
                  </div>

                  {/* Contact input */}
                  <div className="mb-6">
                    <input
                      type="text"
                      value={inquiryContact}
                      onChange={e => setInquiryContact(e.target.value)}
                      placeholder={lang==="th" ? "ช่องทางติดต่อกลับ (Line / เบอร์ / Email)" : "How to reach you (Line / Phone / Email)"}
                      className="w-full rounded-2xl text-sm outline-none"
                      style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", color:"white", padding:"13px 16px", caretColor:"#60a5fa" }}
                      onFocus={e => { e.currentTarget.style.borderColor="rgba(99,102,241,0.55)"; e.currentTarget.style.boxShadow="0 0 0 3px rgba(99,102,241,0.12)"; }}
                      onBlur={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.1)"; e.currentTarget.style.boxShadow="none"; }}
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => setInquiryOpen(false)}
                      className="flex-1 py-3 rounded-2xl text-sm font-semibold"
                      style={{ background:"rgba(255,255,255,0.05)", color:"rgba(255,255,255,0.45)", border:"1px solid rgba(255,255,255,0.08)" }}
                    >
                      {lang==="th" ? "ยกเลิก" : "Cancel"}
                    </button>
                    <button
                      onClick={async () => {
                        if(!inquiryText.trim() || inquiryLoading) return;
                        setInquiryLoading(true);
                        try {
                          await fetch("https://formspree.io/f/mlgolnzq", {
                            method: "POST",
                            headers: { "Content-Type": "application/json", Accept: "application/json" },
                            body: JSON.stringify({
                              plan: inquiryPlan,
                              message: inquiryText,
                              contact: inquiryContact || "-",
                            }),
                          });
                        } catch(_) { /* fail silently */ }
                        setInquiryLoading(false);
                        setInquiryDone(true);
                      }}
                      disabled={!inquiryText.trim() || inquiryLoading}
                      className="flex-[2] py-3 rounded-2xl text-sm font-bold flex items-center justify-center gap-2"
                      style={{ background: inquiryText.trim() ? "linear-gradient(135deg,#2563eb,#7c3aed)" : "rgba(255,255,255,0.08)", color: inquiryText.trim() ? "white" : "rgba(255,255,255,0.25)", transition:"all 0.2s ease", cursor: inquiryText.trim() && !inquiryLoading ? "pointer" : "not-allowed", opacity: inquiryLoading ? 0.7 : 1 }}
                    >
                      {inquiryLoading
                        ? <><span style={{ width:16,height:16,borderRadius:"50%",border:"2px solid rgba(255,255,255,0.3)",borderTopColor:"white",display:"inline-block",animation:"svgSpin 0.7s linear infinite" }} />{lang==="th"?"กำลังส่ง…":"Sending…"}</>
                        : <><MessageCircle className="w-4 h-4" />{lang==="th" ? "ส่งหาเราเลย" : "Send to Us"}</>
                      }
                    </button>
                  </div>
                </>
              ) : (
                /* Success state */
                <div className="py-6 flex flex-col items-center text-center gap-4">
                  <div style={{ width:72,height:72,borderRadius:"50%",background:"linear-gradient(135deg,rgba(37,99,235,0.2),rgba(109,40,217,0.2))",border:"1px solid rgba(99,102,241,0.4)",display:"flex",alignItems:"center",justifyContent:"center",animation:"checkPop 0.5s cubic-bezier(0.34,1.56,0.64,1)" }}>
                    <CheckCircle className="w-8 h-8" style={{ color:"#60a5fa" }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white mb-1">{lang==="th" ? "ส่งแล้ว! 🎉" : "Sent! 🎉"}</h3>
                    <p className="text-sm" style={{ color:"rgba(255,255,255,0.45)" }}>
                      {lang==="th" ? "ได้รับข้อมูลของคุณแล้ว\nเราจะรีบติดต่อกลับภายใน 24 ชม. ครับ" : "We've received your message.\nWe'll get back to you within 24 hrs."}
                    </p>
                  </div>
                  <div className="w-full p-4 rounded-2xl text-left" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)" }}>
                    <p className="font-bold mb-2 text-[10px] tracking-widest uppercase" style={{ color:"rgba(99,102,241,0.7)" }}>{lang==="th"?"ติดต่อด่วนผ่าน":"Reach us faster via"}</p>
                    <div className="flex gap-3">
                      <a href="https://line.me/ti/p/linebeamza" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background:"rgba(37,211,102,0.15)",color:"#4ade80",border:"1px solid rgba(37,211,102,0.25)" }}>
                        LINE: linebeamza
                      </a>
                      <a href="tel:0943218118" className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background:"rgba(59,130,246,0.15)",color:"#93c5fd",border:"1px solid rgba(59,130,246,0.25)" }}>
                        094-321-8118
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => setInquiryOpen(false)}
                    className="w-full py-3 rounded-2xl text-sm font-semibold mt-1"
                    style={{ background:"rgba(255,255,255,0.05)", color:"rgba(255,255,255,0.55)", border:"1px solid rgba(255,255,255,0.08)" }}
                  >
                    {lang==="th" ? "ปิด" : "Close"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Back to top */}
      <button
        ref={backTopRef}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed z-50"
        style={{
          right: 24, bottom: 24,
          width: 36, height: 52,
          borderRadius: 10,
          background: "rgba(6,10,24,0.88)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(59,130,246,0.28)",
          cursor: "pointer",
          opacity: 0,
          pointerEvents: "none",
          transition: "opacity 0.35s ease, border-color 0.2s ease, transform 0.2s ease",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end",
          padding: "0 0 10px 0",
          overflow: "hidden",
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(96,165,250,0.6)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.28)"; e.currentTarget.style.transform = "translateY(0)"; }}
      >
        {/* Scroll progress fill */}
        <div className="bt-fill absolute left-0 bottom-0 w-full" style={{ background: "linear-gradient(to top,rgba(59,130,246,0.22),rgba(99,102,241,0.1))", height: "0%", transition: "height 0.15s linear" }} />
        {/* Arrow */}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ position: "relative", zIndex: 1 }}>
          <path d="M6 10V2M6 2L2 6M6 2L10 6" stroke="rgba(96,165,250,0.85)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </>
  );
}
