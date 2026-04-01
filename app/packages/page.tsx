"use client";

import { useState } from "react";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const appPlans = [
  {
    name: "Basic",
    price: "15,000",
    badge: null,
    desc: { th: "App ง่ายๆ ไม่ซับซ้อน", en: "Simple, focused apps" },
    highlight: false,
    features: [
      { th: "1–3 หน้าหลัก", en: "1–3 Main Screens" },
      { th: "UI ตาม Design", en: "UI from Design" },
      { th: "รองรับ iOS + Android", en: "iOS + Android" },
      { th: "ส่ง Source Code", en: "Source Code Included" },
    ],
    notIncluded: [
      { th: "API / Backend", en: "API / Backend" },
      { th: "Login / Auth", en: "Login / Auth" },
      { th: "Admin Panel", en: "Admin Panel" },
      { th: "Payment / Map / Notification", en: "Payment / Map / Notification" },
    ],
    ideal: {
      th: "เหมาะสำหรับ: App เพื่อแนะนำธุรกิจ, Portfolio, หรือเครื่องมือง่ายๆ",
      en: "Ideal for: Business intro apps, portfolios, or simple utility apps",
    },
  },
  {
    name: "Standard",
    price: "35,000",
    badge: { th: "ยอดนิยม", en: "Most Popular" },
    desc: { th: "App พร้อม Backend เชื่อมต่อ API", en: "App with backend & API" },
    highlight: true,
    features: [
      { th: "Multi-screen + Navigation", en: "Multi-screen + Navigation" },
      { th: "เชื่อมต่อ API / Firebase", en: "API / Firebase Integration" },
      { th: "ระบบ Login / Auth", en: "Login / Auth System" },
      { th: "รองรับ iOS + Android", en: "iOS + Android" },
      { th: "ส่ง Source Code", en: "Source Code Included" },
    ],
    notIncluded: [
      { th: "Payment / Map / Notification", en: "Payment / Map / Notification" },
      { th: "Admin Panel", en: "Admin Panel" },
    ],
    ideal: {
      th: "เหมาะสำหรับ: App จองคิว, สมาชิก, สังคมออนไลน์, หรือ App ที่ต้องล็อกอิน",
      en: "Ideal for: Booking apps, membership, social apps, or login-required apps",
    },
  },
  {
    name: "Premium",
    price: "70,000",
    badge: null,
    desc: { th: "App ซับซ้อน ฟีเจอร์ครบ", en: "Complex, feature-rich apps" },
    highlight: false,
    features: [
      { th: "Custom Features ครบ", en: "Fully Custom Features" },
      { th: "Backend + Database เต็มรูปแบบ", en: "Backend + Database" },
      { th: "Payment / Map / Notification", en: "Payment / Map / Notification" },
      { th: "Admin Panel", en: "Admin Panel" },
      { th: "Deploy + Support 1 เดือน", en: "Deploy + 1 Month Support" },
      { th: "รองรับ iOS + Android", en: "iOS + Android" },
      { th: "ส่ง Source Code", en: "Source Code Included" },
    ],
    notIncluded: [],
    ideal: {
      th: "เหมาะสำหรับ: E-commerce, Marketplace, App จัดการระบบ, หรือ Startup ที่ต้องการ MVP เต็มรูปแบบ",
      en: "Ideal for: E-commerce, marketplace, management systems, or full-scale startup MVPs",
    },
  },
];

const webPlans = [
  {
    name: "Landing Page",
    price: "8,000",
    badge: null,
    desc: { th: "เว็บแนะนำธุรกิจ / โปรโมท", en: "Business intro / promo site" },
    highlight: false,
    features: [
      { th: "1 Page Design", en: "1 Page Design" },
      { th: "Responsive ทุกอุปกรณ์", en: "Mobile Responsive" },
      { th: "SEO Friendly", en: "SEO Friendly" },
      { th: "ส่ง Source Code", en: "Source Code Included" },
    ],
    notIncluded: [
      { th: "หลายหน้า / CMS", en: "Multi-page / CMS" },
      { th: "Contact Form", en: "Contact Form" },
      { th: "Login / Auth", en: "Login / Auth" },
      { th: "Admin Dashboard", en: "Admin Dashboard" },
    ],
    ideal: {
      th: "เหมาะสำหรับ: แนะนำธุรกิจ, โปรโมชั่น, หรือ หน้า Event",
      en: "Ideal for: Business intro, promotions, or event landing pages",
    },
  },
  {
    name: "Business Web",
    price: "20,000",
    badge: { th: "ยอดนิยม", en: "Most Popular" },
    desc: { th: "เว็บไซต์ธุรกิจครบวงจร", en: "Full business website" },
    highlight: true,
    features: [
      { th: "หลายหน้า + CMS จัดการเนื้อหา", en: "Multi-page + CMS" },
      { th: "Responsive ทุกอุปกรณ์", en: "Fully Responsive" },
      { th: "SEO + Performance", en: "SEO + Performance" },
      { th: "Contact Form", en: "Contact Form" },
      { th: "ส่ง Source Code", en: "Source Code Included" },
    ],
    notIncluded: [
      { th: "Login / Auth System", en: "Login / Auth System" },
      { th: "Admin Dashboard", en: "Admin Dashboard" },
    ],
    ideal: {
      th: "เหมาะสำหรับ: เว็บธุรกิจ, ร้านค้า, คลินิก, หรือ บริษัทที่ต้องการหน้าตาดี",
      en: "Ideal for: Business websites, shops, clinics, or companies wanting a professional presence",
    },
  },
  {
    name: "Web App",
    price: "45,000",
    badge: null,
    desc: { th: "ระบบ Web Application เต็มรูปแบบ", en: "Full-stack web application" },
    highlight: false,
    features: [
      { th: "Full-stack Next.js / React", en: "Next.js / React Full-stack" },
      { th: "Backend + Database", en: "Backend + Database" },
      { th: "ระบบ Login / Auth", en: "Login / Auth System" },
      { th: "Admin Dashboard", en: "Admin Dashboard" },
      { th: "Deploy + Support 1 เดือน", en: "Deploy + 1 Month Support" },
      { th: "ส่ง Source Code", en: "Source Code Included" },
    ],
    notIncluded: [],
    ideal: {
      th: "เหมาะสำหรับ: ระบบจัดการ, แอปพลิเคชันออนไลน์, หรือ Platform ที่ต้องการ Backend เต็มรูปแบบ",
      en: "Ideal for: Management systems, online apps, or platforms needing a full backend",
    },
  },
];

// ─── Icons ────────────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill="currentColor" fillOpacity="0.15" />
      <path d="M4.5 8l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill="currentColor" fillOpacity="0.08" />
      <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SmartphoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  );
}

// ─── Components ───────────────────────────────────────────────────────────────

type Plan = (typeof appPlans)[number];
type Lang = "th" | "en";

function PlanCard({ plan, lang, accent }: { plan: Plan; lang: Lang; accent: string }) {
  const isHighlight = plan.highlight;

  return (
    <div
      style={{
        background: isHighlight
          ? `linear-gradient(160deg, ${accent}18 0%, ${accent}08 100%)`
          : "rgba(255,255,255,0.03)",
        border: isHighlight ? `1.5px solid ${accent}55` : "1px solid rgba(255,255,255,0.08)",
        borderRadius: 20,
        padding: "28px 24px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        position: "relative",
        boxShadow: isHighlight ? `0 0 40px ${accent}18` : "none",
        transition: "transform 0.2s",
      }}
    >
      {/* Popular badge */}
      {plan.badge && (
        <div
          style={{
            position: "absolute",
            top: -13,
            left: "50%",
            transform: "translateX(-50%)",
            background: accent,
            color: "#fff",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.08em",
            padding: "4px 14px",
            borderRadius: 99,
            whiteSpace: "nowrap",
          }}
        >
          {plan.badge[lang]}
        </div>
      )}

      {/* Plan name */}
      <div style={{ fontSize: 13, fontWeight: 600, color: isHighlight ? accent : "rgba(255,255,255,0.5)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>
        {plan.name}
      </div>

      {/* Price */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
        <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.5)" }}>฿</span>
        <span style={{ fontSize: 38, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1 }}>{plan.price}</span>
      </div>

      {/* Note about price */}
      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>
        {lang === "th" ? "ราคาเริ่มต้น / เฉลี่ยตาม scope" : "Starting price / based on scope"}
      </div>

      {/* Description */}
      <div style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", marginBottom: 20, lineHeight: 1.5 }}>
        {plan.desc[lang]}
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: 18 }} />

      {/* Included features */}
      <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
        {lang === "th" ? "รวมอยู่แล้ว" : "Included"}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: plan.notIncluded.length > 0 ? 18 : 0 }}>
        {plan.features.map((f, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: isHighlight ? accent : "#4ade80", flexShrink: 0 }}>
              <CheckIcon />
            </span>
            <span style={{ fontSize: 13.5, color: "rgba(255,255,255,0.8)", lineHeight: 1.4 }}>{f[lang]}</span>
          </div>
        ))}
      </div>

      {/* Not included */}
      {plan.notIncluded.length > 0 && (
        <>
          <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
            {lang === "th" ? "ไม่รวม" : "Not Included"}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {plan.notIncluded.map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "rgba(255,255,255,0.2)", flexShrink: 0 }}>
                  <CrossIcon />
                </span>
                <span style={{ fontSize: 13.5, color: "rgba(255,255,255,0.3)", lineHeight: 1.4 }}>{f[lang]}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Ideal for */}
      <div
        style={{
          marginTop: 20,
          padding: "10px 14px",
          background: "rgba(255,255,255,0.04)",
          borderRadius: 10,
          fontSize: 12.5,
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.55,
        }}
      >
        {plan.ideal[lang]}
      </div>

      {/* CTA */}
      <a
        href={`https://matasoft.dev/?plan=${encodeURIComponent(plan.name)}#pricing`}
        style={{
          marginTop: 20,
          display: "block",
          textAlign: "center",
          padding: "12px 0",
          borderRadius: 12,
          fontSize: 14,
          fontWeight: 700,
          background: isHighlight ? accent : "transparent",
          color: isHighlight ? "#fff" : accent,
          border: isHighlight ? "none" : `1.5px solid ${accent}55`,
          textDecoration: "none",
          letterSpacing: "0.02em",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={e => ((e.target as HTMLElement).style.opacity = "0.8")}
        onMouseLeave={e => ((e.target as HTMLElement).style.opacity = "1")}
      >
        {lang === "th" ? "สอบถามแพ็คเกจนี้" : "Inquire About This Plan"}
      </a>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PackagesPage() {
  const [tab, setTab] = useState<"app" | "web">("app");
  const [lang, setLang] = useState<Lang>("th");

  const accent = "#60a5fa";
  const plans = tab === "app" ? appPlans : webPlans;

  const ui = {
    th: {
      eyebrow: "เลือกแพ็คเกจ",
      title: "ราคานี้",
      titleSub: "ได้อะไรบ้าง?",
      sub: "เปรียบเทียบแต่ละแพ็คเกจก่อนตัดสินใจ ไม่มีค่าใช้จ่ายซ่อนเร้น",
      note: "* ราคาเริ่มต้น ราคาจริงคำนวณตาม scope งาน ติดต่อเพื่อรับใบเสนอราคาฟรี",
      tabApp: "Flutter App",
      tabWeb: "Web / Web App",
      backHome: "กลับหน้าหลัก",
      compare: "เปรียบเทียบทุกแพ็คเกจ",
      contactLabel: "ยังไม่แน่ใจ? ปรึกษาฟรีก่อนได้เลย",
      contactCta: "ติดต่อเรา",
      compareTitle: "เปรียบเทียบฟีเจอร์",
    },
    en: {
      eyebrow: "Package Selector",
      title: "What Do",
      titleSub: "You Get?",
      sub: "Compare packages before you decide. No hidden fees.",
      note: "* Starting price. Actual cost based on scope. Contact us for a free quote.",
      tabApp: "Flutter App",
      tabWeb: "Web / Web App",
      backHome: "Back to Home",
      compare: "Compare All Packages",
      contactLabel: "Not sure which to choose? Get a free consultation.",
      contactCta: "Contact Us",
      compareTitle: "Feature Comparison",
    },
  };

  const t = ui[lang];

  // Comparison table rows per category
  const compareRows = {
    app: [
      { feature: { th: "จำนวนหน้า", en: "Screens" }, basic: { th: "1–3 หน้า", en: "1–3 screens" }, standard: { th: "Multi-screen", en: "Multi-screen" }, premium: { th: "ไม่จำกัด", en: "Unlimited" } },
      { feature: { th: "รองรับ iOS + Android", en: "iOS + Android" }, basic: true, standard: true, premium: true },
      { feature: { th: "API / Firebase", en: "API / Firebase" }, basic: false, standard: true, premium: true },
      { feature: { th: "Login / Auth", en: "Login / Auth" }, basic: false, standard: true, premium: true },
      { feature: { th: "Backend + Database", en: "Backend + Database" }, basic: false, standard: false, premium: true },
      { feature: { th: "Payment / Map / Notification", en: "Payment / Map / Notification" }, basic: false, standard: false, premium: true },
      { feature: { th: "Admin Panel", en: "Admin Panel" }, basic: false, standard: false, premium: true },
      { feature: { th: "Deploy + Support 1 เดือน", en: "Deploy + 1 Month Support" }, basic: false, standard: false, premium: true },
      { feature: { th: "Source Code", en: "Source Code" }, basic: true, standard: true, premium: true },
    ],
    web: [
      { feature: { th: "จำนวนหน้า", en: "Pages" }, basic: { th: "1 หน้า", en: "1 page" }, standard: { th: "Multi-page", en: "Multi-page" }, premium: { th: "ไม่จำกัด", en: "Unlimited" } },
      { feature: { th: "Responsive ทุกอุปกรณ์", en: "Fully Responsive" }, basic: true, standard: true, premium: true },
      { feature: { th: "SEO Friendly", en: "SEO Friendly" }, basic: true, standard: true, premium: true },
      { feature: { th: "Contact Form", en: "Contact Form" }, basic: false, standard: true, premium: true },
      { feature: { th: "CMS จัดการเนื้อหา", en: "CMS" }, basic: false, standard: true, premium: true },
      { feature: { th: "Login / Auth", en: "Login / Auth" }, basic: false, standard: false, premium: true },
      { feature: { th: "Backend + Database", en: "Backend + Database" }, basic: false, standard: false, premium: true },
      { feature: { th: "Admin Dashboard", en: "Admin Dashboard" }, basic: false, standard: false, premium: true },
      { feature: { th: "Deploy + Support 1 เดือน", en: "Deploy + 1 Month Support" }, basic: false, standard: false, premium: true },
      { feature: { th: "Source Code", en: "Source Code" }, basic: true, standard: true, premium: true },
    ],
  };

  const rows = compareRows[tab];
  const planNames = tab === "app" ? ["Basic", "Standard", "Premium"] : ["Landing Page", "Business Web", "Web App"];
  const planPrices = tab === "app" ? ["฿15,000", "฿35,000", "฿70,000"] : ["฿8,000", "฿20,000", "฿45,000"];

  function CellValue({ val, isHighlight }: { val: boolean | { th: string; en: string }; isHighlight: boolean }) {
    if (typeof val === "boolean") {
      return val ? (
        <span style={{ color: isHighlight ? accent : "#4ade80" }}><CheckIcon /></span>
      ) : (
        <span style={{ color: "rgba(255,255,255,0.2)" }}><CrossIcon /></span>
      );
    }
    return <span style={{ fontSize: 13, color: isHighlight ? accent : "rgba(255,255,255,0.7)", fontWeight: 500 }}>{val[lang]}</span>;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050d1a",
        fontFamily: "var(--font-prompt), sans-serif",
        color: "#fff",
      }}
    >
      {/* Nav */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 24px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          position: "sticky",
          top: 0,
          background: "rgba(5,13,26,0.9)",
          backdropFilter: "blur(12px)",
          zIndex: 50,
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "rgba(255,255,255,0.6)",
            textDecoration: "none",
            fontSize: 13,
            fontWeight: 500,
            transition: "color 0.2s",
          }}
          onMouseEnter={e => ((e.target as HTMLElement).style.color = "#fff")}
          onMouseLeave={e => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
        >
          <ArrowLeftIcon />
          {t.backHome}
        </Link>

        <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.06em", color: accent }}>
          MATA SOFT
        </div>

        {/* Language toggle */}
        <button
          onClick={() => setLang(l => l === "th" ? "en" : "th")}
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 8,
            padding: "5px 12px",
            fontSize: 12,
            fontWeight: 600,
            color: "rgba(255,255,255,0.7)",
            cursor: "pointer",
            letterSpacing: "0.05em",
          }}
        >
          {lang === "th" ? "EN" : "TH"}
        </button>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: "center", padding: "64px 24px 48px" }}>
        <div
          style={{
            display: "inline-block",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: accent,
            background: `${accent}15`,
            border: `1px solid ${accent}30`,
            borderRadius: 99,
            padding: "5px 16px",
            marginBottom: 20,
          }}
        >
          {t.eyebrow}
        </div>
        <h1
          style={{
            fontSize: "clamp(32px, 7vw, 56px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            margin: "0 0 8px",
          }}
        >
          {t.title}{" "}
          <span
            style={{
              background: `linear-gradient(135deg, ${accent}, #818cf8)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t.titleSub}
          </span>
        </h1>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", margin: "12px auto 0", maxWidth: 480, lineHeight: 1.6 }}>
          {t.sub}
        </p>
      </section>

      {/* Tab toggle */}
      <div style={{ display: "flex", justifyContent: "center", padding: "0 24px 40px" }}>
        <div
          style={{
            display: "inline-flex",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 14,
            padding: 4,
            gap: 4,
          }}
        >
          {(["app", "web"] as const).map(t2 => (
            <button
              key={t2}
              onClick={() => setTab(t2)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 22px",
                borderRadius: 10,
                border: "none",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
                background: tab === t2 ? accent : "transparent",
                color: tab === t2 ? "#fff" : "rgba(255,255,255,0.5)",
                fontFamily: "var(--font-prompt), sans-serif",
              }}
            >
              {t2 === "app" ? <SmartphoneIcon /> : <GlobeIcon />}
              {t2 === "app" ? t.tabApp : t.tabWeb}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 20px 64px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
        }}
      >
        {plans.map(plan => (
          <PlanCard key={plan.name} plan={plan} lang={lang} accent={accent} />
        ))}
      </section>

      {/* Comparison table */}
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px 80px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 28,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          {t.compareTitle}
        </h2>

        <div
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          {/* Table header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              background: "rgba(255,255,255,0.04)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div style={{ padding: "14px 16px", fontSize: 12, color: "rgba(255,255,255,0.35)", fontWeight: 600 }} />
            {planNames.map((name, i) => (
              <div
                key={name}
                style={{
                  padding: "14px 12px",
                  textAlign: "center",
                  borderLeft: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: i === 1 ? accent : "rgba(255,255,255,0.7)",
                    marginBottom: 2,
                  }}
                >
                  {name}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 800,
                    color: i === 1 ? accent : "rgba(255,255,255,0.5)",
                  }}
                >
                  {planPrices[i]}
                </div>
              </div>
            ))}
          </div>

          {/* Table rows */}
          {rows.map((row, ri) => (
            <div
              key={ri}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                borderBottom: ri < rows.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                background: ri % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)",
              }}
            >
              <div style={{ padding: "12px 16px", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
                {row.feature[lang]}
              </div>
              {(["basic", "standard", "premium"] as const).map((col, ci) => (
                <div
                  key={col}
                  style={{
                    padding: "12px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderLeft: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <CellValue val={row[col] as boolean | { th: string; en: string }} isHighlight={ci === 1} />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Note */}
        <p style={{ textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 16 }}>
          {t.note}
        </p>
      </section>

      {/* Contact CTA */}
      <section
        style={{
          textAlign: "center",
          padding: "48px 24px 80px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", marginBottom: 20 }}>
          {t.contactLabel}
        </p>
        <a
          href="https://matasoft.dev/#contact"
          style={{
            display: "inline-block",
            padding: "14px 36px",
            background: accent,
            color: "#fff",
            borderRadius: 12,
            fontSize: 15,
            fontWeight: 700,
            textDecoration: "none",
            letterSpacing: "0.02em",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => ((e.target as HTMLElement).style.opacity = "0.85")}
          onMouseLeave={e => ((e.target as HTMLElement).style.opacity = "1")}
        >
          {t.contactCta}
        </a>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "20px 24px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          fontSize: 12,
          color: "rgba(255,255,255,0.25)",
        }}
      >
        © 2026 MATA SOFT. All rights reserved.
      </footer>
    </div>
  );
}
