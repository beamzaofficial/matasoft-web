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

// ─── Mockup SVGs ──────────────────────────────────────────────────────────────

const W = (o: number) => `rgba(96,165,250,${o})`;

function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 200 400" style={{ width: "100%", maxWidth: 200, display: "block" }}>
      {/* body */}
      <rect x="0" y="0" width="200" height="400" rx="26" fill="#0b1a30" stroke={W(0.35)} strokeWidth="1.5" />
      {/* screen */}
      <rect x="9" y="18" width="182" height="352" rx="5" fill="#060f22" />
      {/* pill */}
      <rect x="80" y="9" width="40" height="7" rx="3.5" fill="#060f22" />
      {/* home bar */}
      <rect x="76" y="385" width="48" height="5" rx="2.5" fill={W(0.28)} />
      {children}
    </svg>
  );
}

function BrowserShell({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 380 250" style={{ width: "100%", maxWidth: 440, display: "block" }}>
      {/* frame */}
      <rect x="0" y="0" width="380" height="250" rx="10" fill="#0b1a30" stroke={W(0.3)} strokeWidth="1.2" />
      {/* chrome bar */}
      <rect x="0" y="0" width="380" height="32" rx="10" fill={W(0.07)} />
      <rect x="0" y="22" width="380" height="10" fill={W(0.07)} />
      {/* dots */}
      <circle cx="16" cy="16" r="4.5" fill={W(0.35)} />
      <circle cx="30" cy="16" r="4.5" fill={W(0.2)} />
      <circle cx="44" cy="16" r="4.5" fill={W(0.12)} />
      {/* url bar */}
      <rect x="60" y="9" width="260" height="14" rx="7" fill={W(0.1)} stroke={W(0.15)} strokeWidth="0.8" />
      <rect x="70" y="13" width="120" height="6" rx="2" fill={W(0.3)} />
      {/* viewport bg */}
      <rect x="0" y="32" width="380" height="218" rx="0" fill="#060f22" />
      <rect x="0" y="240" width="380" height="10" rx="10" fill="#060f22" />
      {children}
    </svg>
  );
}

/* ── App: Basic ── */
function MockupAppBasic() {
  return (
    <PhoneShell>
      {/* status */}
      <text x="17" y="34" fontSize="8" fill={W(0.45)} fontFamily="monospace">9:41</text>
      <rect x="170" y="25" width="16" height="7" rx="2" fill="none" stroke={W(0.35)} strokeWidth="0.8" />
      <rect x="171" y="26" width="10" height="5" rx="1" fill={W(0.35)} />
      {/* app bar */}
      <rect x="9" y="38" width="182" height="26" fill={W(0.07)} stroke={W(0.1)} strokeWidth="0.5" />
      <circle cx="24" cy="51" r="6" fill={W(0.25)} />
      <rect x="35" y="47" width="44" height="5" rx="2" fill={W(0.4)} />
      <rect x="174" y="47" width="12" height="2" rx="1" fill={W(0.4)} />
      <rect x="174" y="51" width="12" height="2" rx="1" fill={W(0.4)} />
      <rect x="174" y="55" width="12" height="2" rx="1" fill={W(0.4)} />
      {/* hero banner */}
      <rect x="13" y="70" width="174" height="80" rx="6" fill={W(0.06)} stroke={W(0.2)} strokeWidth="0.8" />
      <rect x="22" y="84" width="70" height="9" rx="3" fill={W(0.45)} />
      <rect x="22" y="97" width="110" height="5" rx="2" fill={W(0.2)} />
      <rect x="22" y="106" width="90" height="5" rx="2" fill={W(0.15)} />
      <rect x="22" y="118" width="58" height="18" rx="5" fill={W(0.3)} stroke={W(0.45)} strokeWidth="0.8" />
      <rect x="30" y="124" width="42" height="6" rx="2" fill={W(0.6)} />
      {/* section title */}
      <rect x="13" y="158" width="70" height="7" rx="3" fill={W(0.4)} />
      <rect x="13" y="170" width="174" height="4" rx="2" fill={W(0.12)} />
      <rect x="13" y="178" width="140" height="4" rx="2" fill={W(0.1)} />
      <rect x="13" y="186" width="160" height="4" rx="2" fill={W(0.12)} />
      {/* 2 cards */}
      <rect x="13" y="197" width="83" height="58" rx="6" fill={W(0.05)} stroke={W(0.18)} strokeWidth="0.8" />
      <circle cx="33" cy="214" r="9" fill={W(0.2)} />
      <rect x="20" y="228" width="50" height="5" rx="2" fill={W(0.35)} />
      <rect x="20" y="237" width="65" height="4" rx="1.5" fill={W(0.15)} />
      <rect x="20" y="244" width="55" height="4" rx="1.5" fill={W(0.12)} />

      <rect x="104" y="197" width="83" height="58" rx="6" fill={W(0.05)} stroke={W(0.18)} strokeWidth="0.8" />
      <circle cx="124" cy="214" r="9" fill={W(0.2)} />
      <rect x="111" y="228" width="50" height="5" rx="2" fill={W(0.35)} />
      <rect x="111" y="237" width="65" height="4" rx="1.5" fill={W(0.15)} />
      <rect x="111" y="244" width="55" height="4" rx="1.5" fill={W(0.12)} />
      {/* contact strip */}
      <rect x="13" y="263" width="174" height="28" rx="6" fill={W(0.05)} stroke={W(0.15)} strokeWidth="0.8" />
      <rect x="20" y="272" width="90" height="5" rx="2" fill={W(0.12)} />
      <rect x="128" y="269" width="52" height="14" rx="4" fill={W(0.28)} />
      <rect x="136" y="273" width="36" height="6" rx="2" fill={W(0.5)} />
      {/* bottom nav 3 */}
      <rect x="9" y="298" width="182" height="42" fill={W(0.04)} stroke={W(0.1)} strokeWidth="0.5" />
      {[45, 100, 155].map((cx, i) => (
        <g key={i}>
          <circle cx={cx} cy="313" r="6" fill={i === 0 ? W(0.5) : W(0.14)} />
          <rect x={cx - 8} y="323" width="16" height="3.5" rx="1.5" fill={i === 0 ? W(0.5) : W(0.14)} />
        </g>
      ))}
      {/* label */}
      <text x="100" y="358" textAnchor="middle" fontSize="7" fill={W(0.3)} fontFamily="monospace">3-Tab Navigation</text>
    </PhoneShell>
  );
}

/* ── App: Standard ── */
function MockupAppStandard() {
  return (
    <PhoneShell>
      {/* status */}
      <text x="17" y="34" fontSize="8" fill={W(0.45)} fontFamily="monospace">9:41</text>
      <rect x="170" y="25" width="16" height="7" rx="2" fill="none" stroke={W(0.35)} strokeWidth="0.8" />
      <rect x="171" y="26" width="13" height="5" rx="1" fill={W(0.4)} />
      {/* app bar */}
      <rect x="9" y="38" width="182" height="26" fill={W(0.07)} stroke={W(0.1)} strokeWidth="0.5" />
      <rect x="17" y="47" width="65" height="7" rx="3" fill={W(0.35)} />
      <circle cx="182" cy="51" r="8" fill={W(0.25)} stroke={W(0.4)} strokeWidth="0.8" />
      {/* welcome */}
      <rect x="13" y="72" width="85" height="8" rx="3" fill={W(0.45)} />
      <rect x="13" y="84" width="58" height="5" rx="2" fill={W(0.2)} />
      {/* 2 stat cards */}
      <rect x="13" y="96" width="84" height="48" rx="7" fill={W(0.08)} stroke={W(0.25)} strokeWidth="0.8" />
      <rect x="21" y="105" width="48" height="5" rx="2" fill={W(0.3)} />
      <rect x="21" y="114" width="32" height="12" rx="3" fill={W(0.5)} />
      <rect x="21" y="130" width="55" height="4" rx="2" fill={W(0.15)} />

      <rect x="103" y="96" width="88" height="48" rx="7" fill={W(0.08)} stroke={W(0.25)} strokeWidth="0.8" />
      <rect x="111" y="105" width="52" height="5" rx="2" fill={W(0.3)} />
      <rect x="111" y="114" width="38" height="12" rx="3" fill={W(0.5)} />
      <rect x="111" y="130" width="48" height="4" rx="2" fill={W(0.15)} />
      {/* list section */}
      <rect x="13" y="152" width="80" height="7" rx="3" fill={W(0.4)} />
      {[168, 194, 220, 246].map((y, i) => (
        <g key={i}>
          <circle cx="25" cy={y + 8} r="8" fill={W(0.2)} stroke={W(0.28)} strokeWidth="0.5" />
          <rect x="40" y={y + 4} width={90 + (i % 2) * 20} height="6" rx="2" fill={W(0.3)} />
          <rect x="40" y={y + 14} width={60 + (i % 3) * 15} height="4" rx="2" fill={W(0.15)} />
          <rect x="176" y={y + 5} width="15" height="9" rx="2" fill={W(0.18)} />
          {i < 3 && <line x1="13" y1={y + 26} x2="191" y2={y + 26} stroke={W(0.07)} strokeWidth="0.5" />}
        </g>
      ))}
      {/* chips */}
      <rect x="13" y="272" width="46" height="14" rx="7" fill={W(0.15)} stroke={W(0.3)} strokeWidth="0.5" />
      <rect x="20" y="276" width="32" height="6" rx="2" fill={W(0.45)} />
      <rect x="66" y="272" width="52" height="14" rx="7" fill={W(0.07)} stroke={W(0.18)} strokeWidth="0.5" />
      <rect x="73" y="276" width="38" height="6" rx="2" fill={W(0.2)} />
      {/* FAB */}
      <circle cx="177" cy="290" r="15" fill={W(0.3)} stroke={W(0.55)} strokeWidth="1" />
      <rect x="173" y="289" width="8" height="2" rx="1" fill={W(0.9)} />
      <rect x="176" y="286" width="2" height="8" rx="1" fill={W(0.9)} />
      {/* bottom nav 4 */}
      <rect x="9" y="314" width="182" height="44" fill={W(0.04)} stroke={W(0.1)} strokeWidth="0.5" />
      {[35, 78, 122, 165].map((cx, i) => (
        <g key={i}>
          <circle cx={cx} cy="329" r="6" fill={i === 0 ? W(0.5) : W(0.14)} />
          <rect x={cx - 8} y="339" width="16" height="3.5" rx="1.5" fill={i === 0 ? W(0.5) : W(0.14)} />
        </g>
      ))}
      <text x="100" y="370" textAnchor="middle" fontSize="7" fill={W(0.3)} fontFamily="monospace">Login · API · 4-Tab Nav</text>
    </PhoneShell>
  );
}

/* ── App: Premium ── */
function MockupAppPremium() {
  return (
    <PhoneShell>
      {/* status */}
      <text x="17" y="34" fontSize="8" fill={W(0.45)} fontFamily="monospace">9:41</text>
      <rect x="170" y="25" width="16" height="7" rx="2" fill="none" stroke={W(0.35)} strokeWidth="0.8" />
      <rect x="171" y="26" width="14" height="5" rx="1" fill={W(0.45)} />
      {/* app bar */}
      <rect x="9" y="38" width="182" height="26" fill={W(0.07)} stroke={W(0.1)} strokeWidth="0.5" />
      <rect x="17" y="47" width="75" height="7" rx="3" fill={W(0.35)} />
      <circle cx="162" cy="51" r="7" fill={W(0.1)} />
      <circle cx="162" cy="51" r="4" fill="none" stroke={W(0.5)} strokeWidth="0.8" />
      <circle cx="166" cy="48" r="3.5" fill="rgba(239,68,68,0.75)" />
      <circle cx="182" cy="51" r="8" fill={W(0.25)} stroke={W(0.4)} strokeWidth="0.8" />
      {/* 3 mini stat cards */}
      {[13, 77, 141].map((x, i) => (
        <g key={i}>
          <rect x={x} y="72" width="57" height="38" rx="5" fill={W(0.08)} stroke={W(0.2)} strokeWidth="0.7" />
          <rect x={x + 7} y="80" width="32" height="5" rx="2" fill={W(0.28)} />
          <rect x={x + 7} y="89" width="28" height="10" rx="2" fill={W(0.5)} />
          <rect x={x + 7} y="103" width="38" height="3" rx="1.5" fill={W(0.15)} />
        </g>
      ))}
      {/* bar chart */}
      <rect x="13" y="118" width="174" height="68" rx="5" fill={W(0.04)} stroke={W(0.14)} strokeWidth="0.7" />
      <rect x="18" y="124" width="55" height="5" rx="2" fill={W(0.35)} />
      {[22, 40, 58, 76, 94, 112, 130, 148, 166].map((x, i) => {
        const heights = [22, 36, 28, 44, 32, 18, 40, 26, 34];
        const h = heights[i];
        return <rect key={i} x={x} y={182 - h} width="13" height={h} rx="2" fill={W(0.25 + (h / 44) * 0.3)} />;
      })}
      <line x1="18" y1="182" x2="183" y2="182" stroke={W(0.15)} strokeWidth="0.7" />
      {/* map */}
      <rect x="13" y="194" width="174" height="54" rx="5" fill={W(0.04)} stroke={W(0.14)} strokeWidth="0.7" />
      {[208, 224, 240].map(y => <line key={y} x1="13" y1={y} x2="187" y2={y} stroke={W(0.06)} strokeWidth="0.5" />)}
      {[50, 100, 150].map(x => <line key={x} x1={x} y1="194" x2={x} y2="248" stroke={W(0.06)} strokeWidth="0.5" />)}
      <circle cx="96" cy="220" r="9" fill={W(0.3)} stroke={W(0.6)} strokeWidth="1" />
      <circle cx="96" cy="220" r="3.5" fill={W(0.85)} />
      <rect x="18" y="198" width="20" height="6" rx="2" fill={W(0.35)} />
      {/* payment button */}
      <rect x="13" y="256" width="174" height="26" rx="7" fill={W(0.2)} stroke={W(0.45)} strokeWidth="0.9" />
      <rect x="52" y="264" width="96" height="10" rx="3" fill={W(0.6)} />
      {/* bottom nav 5 */}
      <rect x="9" y="290" width="182" height="42" fill={W(0.04)} stroke={W(0.1)} strokeWidth="0.5" />
      {[25, 60, 100, 140, 175].map((cx, i) => (
        <g key={i}>
          <circle cx={cx} cy="305" r="5.5" fill={i === 0 ? W(0.55) : W(0.14)} />
          <rect x={cx - 7} y="314" width="14" height="3" rx="1.5" fill={i === 0 ? W(0.55) : W(0.14)} />
        </g>
      ))}
      <text x="100" y="350" textAnchor="middle" fontSize="7" fill={W(0.3)} fontFamily="monospace">Charts · Map · Payment · Admin</text>
    </PhoneShell>
  );
}

/* ── Web: Landing Page ── */
function MockupWebLanding() {
  return (
    <BrowserShell>
      {/* nav */}
      <rect x="0" y="32" width="380" height="28" fill={W(0.06)} stroke={W(0.1)} strokeWidth="0.5" />
      <circle cx="16" cy="46" r="6" fill={W(0.3)} />
      <rect x="26" y="43" width="36" height="6" rx="2" fill={W(0.4)} />
      {[140, 176, 212].map((x, i) => (
        <rect key={i} x={x} y="43" width={28 + i * 4} height="6" rx="2" fill={W(0.2)} />
      ))}
      <rect x="318" y="40" width="50" height="14" rx="4" fill={W(0.3)} stroke={W(0.45)} strokeWidth="0.7" />
      <rect x="326" y="44" width="34" height="6" rx="2" fill={W(0.55)} />
      {/* hero */}
      <rect x="0" y="60" width="380" height="80" fill={W(0.04)} />
      <rect x="30" y="74" width="140" height="12" rx="4" fill={W(0.5)} />
      <rect x="30" y="90" width="200" height="7" rx="3" fill={W(0.22)} />
      <rect x="30" y="101" width="170" height="7" rx="3" fill={W(0.18)} />
      <rect x="30" y="116" width="64" height="18" rx="5" fill={W(0.35)} stroke={W(0.5)} strokeWidth="0.8" />
      <rect x="38" y="121" width="48" height="8" rx="2" fill={W(0.6)} />
      <rect x="102" y="116" width="64" height="18" rx="5" fill="none" stroke={W(0.3)} strokeWidth="0.8" />
      <rect x="110" y="121" width="48" height="8" rx="2" fill={W(0.3)} />
      <rect x="260" y="68" width="100" height="68" rx="6" fill={W(0.07)} stroke={W(0.18)} strokeWidth="0.8" />
      <rect x="278" y="88" width="64" height="6" rx="2" fill={W(0.25)} />
      <rect x="278" y="98" width="48" height="6" rx="2" fill={W(0.18)} />
      {/* 3 feature cols */}
      <line x1="0" y1="145" x2="380" y2="145" stroke={W(0.08)} strokeWidth="0.7" />
      {[20, 148, 276].map((x, i) => (
        <g key={i}>
          <circle cx={x + 55} cy="164" r="12" fill={W(0.14)} stroke={W(0.25)} strokeWidth="0.8" />
          <rect x={x + 24} y="182" width="62" height="6" rx="2" fill={W(0.38)} />
          <rect x={x + 14} y="192" width="82" height="4" rx="2" fill={W(0.14)} />
          <rect x={x + 18} y="200" width="74" height="4" rx="2" fill={W(0.12)} />
          <rect x={x + 22} y="208" width="66" height="4" rx="2" fill={W(0.1)} />
        </g>
      ))}
      {/* footer */}
      <rect x="0" y="220" width="380" height="30" fill={W(0.06)} stroke={W(0.08)} strokeWidth="0.5" />
      <rect x="16" y="228" width="50" height="5" rx="2" fill={W(0.3)} />
      <rect x="220" y="228" width="35" height="5" rx="2" fill={W(0.18)} />
      <rect x="264" y="228" width="35" height="5" rx="2" fill={W(0.18)} />
      <rect x="308" y="228" width="55" height="5" rx="2" fill={W(0.18)} />
    </BrowserShell>
  );
}

/* ── Web: Business ── */
function MockupWebBusiness() {
  return (
    <BrowserShell>
      {/* nav */}
      <rect x="0" y="32" width="380" height="26" fill={W(0.06)} stroke={W(0.1)} strokeWidth="0.5" />
      <circle cx="16" cy="45" r="5.5" fill={W(0.3)} />
      <rect x="26" y="42" width="36" height="6" rx="2" fill={W(0.4)} />
      {[120, 152, 184, 216, 248].map((x, i) => (
        <rect key={i} x={x} y="42" width={24 + (i % 2) * 6} height="6" rx="2" fill={W(0.18)} />
      ))}
      <rect x="316" y="39" width="52" height="14" rx="4" fill={W(0.28)} stroke={W(0.4)} strokeWidth="0.7" />
      <rect x="324" y="43" width="36" height="6" rx="2" fill={W(0.5)} />
      {/* hero */}
      <rect x="0" y="58" width="380" height="48" fill={W(0.04)} />
      <rect x="20" y="68" width="120" height="9" rx="3" fill={W(0.5)} />
      <rect x="20" y="81" width="160" height="5" rx="2" fill={W(0.2)} />
      <rect x="20" y="89" width="140" height="5" rx="2" fill={W(0.15)} />
      {/* about (2 col) */}
      <line x1="0" y1="110" x2="380" y2="110" stroke={W(0.08)} strokeWidth="0.7" />
      <rect x="15" y="118" width="155" height="48" rx="5" fill={W(0.06)} stroke={W(0.14)} strokeWidth="0.7" />
      <rect x="185" y="118" width="180" height="9" rx="3" fill={W(0.4)} />
      <rect x="185" y="131" width="160" height="4" rx="2" fill={W(0.15)} />
      <rect x="185" y="139" width="170" height="4" rx="2" fill={W(0.13)} />
      <rect x="185" y="147" width="150" height="4" rx="2" fill={W(0.12)} />
      <rect x="185" y="155" width="140" height="4" rx="2" fill={W(0.1)} />
      {/* 3 service cards */}
      <line x1="0" y1="172" x2="380" y2="172" stroke={W(0.08)} strokeWidth="0.7" />
      {[10, 135, 260].map((x) => (
        <g key={x}>
          <rect x={x} y="180" width="110" height="32" rx="5" fill={W(0.05)} stroke={W(0.16)} strokeWidth="0.7" />
          <circle cx={x + 16} cy="192" r="7" fill={W(0.18)} />
          <rect x={x + 28} y="188" width="60" height="5" rx="2" fill={W(0.32)} />
          <rect x={x + 28} y="197" width="74" height="4" rx="1.5" fill={W(0.14)} />
        </g>
      ))}
      {/* contact form */}
      <line x1="0" y1="218" x2="380" y2="218" stroke={W(0.08)} strokeWidth="0.7" />
      <rect x="80" y="224" width="100" height="5" rx="2" fill={W(0.4)} />
      <rect x="50" y="234" width="130" height="8" rx="3" fill={W(0.06)} stroke={W(0.2)} strokeWidth="0.7" />
      <rect x="200" y="234" width="130" height="8" rx="3" fill={W(0.06)} stroke={W(0.2)} strokeWidth="0.7" />
      <rect x="50" y="246" width="280" height="5" rx="2" fill={W(0.06)} stroke={W(0.15)} strokeWidth="0.7" />
    </BrowserShell>
  );
}

/* ── Web: Web App ── */
function MockupWebApp() {
  return (
    <BrowserShell>
      {/* sidebar */}
      <rect x="0" y="32" width="72" height="218" fill={W(0.06)} stroke={W(0.12)} strokeWidth="0.5" />
      <circle cx="14" cy="46" r="6" fill={W(0.3)} />
      <rect x="24" y="43" width="36" height="6" rx="2" fill={W(0.4)} />
      {["Dashboard","Orders","Users","Analytics","Settings"].map((label, i) => (
        <g key={label}>
          <rect x="6" y={62 + i * 26} width="60" height="20" rx="4"
            fill={i === 0 ? W(0.15) : "none"}
            stroke={i === 0 ? W(0.35) : "none"} strokeWidth="0.7" />
          <circle cx="18" cy={72 + i * 26} r="5" fill={i === 0 ? W(0.5) : W(0.18)} />
          <rect x="28" y={69 + i * 26} width={30 + (i % 3) * 6} height="6" rx="2"
            fill={i === 0 ? W(0.5) : W(0.18)} />
        </g>
      ))}
      {/* topbar */}
      <rect x="72" y="32" width="308" height="26" fill={W(0.05)} stroke={W(0.1)} strokeWidth="0.5" />
      <rect x="82" y="40" width="60" height="5" rx="2" fill={W(0.25)} />
      <rect x="148" y="40" width="6" height="5" rx="1" fill={W(0.2)} />
      <rect x="158" y="40" width="60" height="5" rx="2" fill={W(0.3)} />
      <circle cx="354" cy="45" r="8" fill={W(0.25)} stroke={W(0.35)} strokeWidth="0.7" />
      <circle cx="336" cy="45" r="7" fill={W(0.1)} stroke={W(0.25)} strokeWidth="0.7" />
      {/* 4 stat cards */}
      {[78, 152, 226, 300].map((x, i) => (
        <g key={i}>
          <rect x={x} y="64" width="64" height="36" rx="5" fill={W(0.07)} stroke={W(0.2)} strokeWidth="0.7" />
          <rect x={x + 7} y="72" width="38" height="5" rx="2" fill={W(0.25)} />
          <rect x={x + 7} y="81" width="28" height="11" rx="2" fill={W(0.5)} />
        </g>
      ))}
      {/* table */}
      <rect x="78" y="106" width="288" height="16" rx="0" fill={W(0.07)} />
      {["ID", "Name", "Status", "Date", "Action"].map((col, i) => (
        <rect key={i} x={84 + i * 56} y="112" width={40 + (i === 1 ? 10 : 0)} height="5" rx="2" fill={W(0.35)} />
      ))}
      {[0,1,2,3].map(row => (
        <g key={row}>
          <rect x="78" y={122 + row * 20} width="288" height="20" rx="0"
            fill={row % 2 === 0 ? W(0.03) : "none"} />
          <rect x="84" y={127 + row * 20} width="20" height="5" rx="2" fill={W(0.2)} />
          <rect x="140" y={127 + row * 20} width="48" height="5" rx="2" fill={W(0.28)} />
          <rect x="218" y={125 + row * 20} width="38" height="9" rx="4"
            fill={row % 3 === 0 ? "rgba(74,222,128,0.15)" : W(0.08)}
            stroke={row % 3 === 0 ? "rgba(74,222,128,0.4)" : W(0.18)} strokeWidth="0.6" />
          <rect x="280" y={127 + row * 20} width="36" height="5" rx="2" fill={W(0.2)} />
          <rect x="328" y={125 + row * 20} width="30" height="9" rx="3" fill={W(0.15)} />
        </g>
      ))}
      {/* pagination */}
      <rect x="78" y="204" width="288" height="16" rx="0" fill={W(0.04)} />
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={180 + i * 20} y="207" width="14" height="10" rx="3"
          fill={i === 1 ? W(0.35) : W(0.08)} stroke={i === 1 ? W(0.5) : W(0.14)} strokeWidth="0.6" />
      ))}
    </BrowserShell>
  );
}

function MockupGrid({ tab, lang }: { tab: "app" | "web"; lang: Lang }) {
  const accent = "#60a5fa";
  const appItems = [
    { name: "Basic", price: "฿15,000", label: { th: "App แนะนำธุรกิจ / Portfolio", en: "Business intro / Portfolio app" }, comp: <MockupAppBasic /> },
    { name: "Standard", price: "฿35,000", label: { th: "App พร้อม Login + API", en: "App with Login + API" }, comp: <MockupAppStandard />, highlight: true },
    { name: "Premium", price: "฿70,000", label: { th: "App เต็มรูปแบบ + Admin", en: "Full-featured app + Admin" }, comp: <MockupAppPremium /> },
  ];
  const webItems = [
    { name: "Landing Page", price: "฿8,000", label: { th: "เว็บโปรโมท 1 หน้า", en: "1-page promo site" }, comp: <MockupWebLanding /> },
    { name: "Business Web", price: "฿20,000", label: { th: "เว็บธุรกิจหลายหน้า", en: "Multi-page business site" }, comp: <MockupWebBusiness />, highlight: true },
    { name: "Web App", price: "฿45,000", label: { th: "ระบบ Dashboard + Backend", en: "Dashboard + Backend system" }, comp: <MockupWebApp /> },
  ];
  const items = tab === "app" ? appItems : webItems;

  return (
    <section style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "48px 20px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: accent, marginBottom: 10 }}>
            {lang === "th" ? "แบบร่างตัวอย่าง" : "Blueprint Preview"}
          </div>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", margin: 0 }}>
            {lang === "th"
              ? "ตัวอย่างคร่าวๆ ว่าแต่ละแพ็คเกจได้หน้าตาแบบไหน — ดีไซน์จริงออกแบบตาม brand ของคุณ"
              : "A rough preview of what each package looks like — actual design is tailored to your brand"}
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28, alignItems: "start" }}>
          {items.map((item) => (
            <div key={item.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
              {/* Mockup frame */}
              <div style={{
                width: "100%",
                padding: tab === "app" ? "0 30px" : "0",
                position: "relative",
                filter: item.highlight ? `drop-shadow(0 0 24px rgba(96,165,250,0.25))` : "none",
              }}>
                {item.highlight && (
                  <div style={{
                    position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)",
                    background: accent, color: "#fff", fontSize: 10, fontWeight: 700,
                    letterSpacing: "0.1em", padding: "3px 12px", borderRadius: 99, whiteSpace: "nowrap", zIndex: 2,
                  }}>
                    {lang === "th" ? "ยอดนิยม" : "POPULAR"}
                  </div>
                )}
                <div style={{
                  border: item.highlight ? `1px solid rgba(96,165,250,0.35)` : "1px solid rgba(255,255,255,0.06)",
                  borderRadius: tab === "app" ? 28 : 12,
                  overflow: "hidden",
                }}>
                  {item.comp}
                </div>
              </div>
              {/* Label */}
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: item.highlight ? accent : "rgba(255,255,255,0.7)", marginBottom: 4 }}>
                  {item.name} — {item.price}
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", lineHeight: 1.5 }}>
                  {item.label[lang]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
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

      {/* Mockup blueprints */}
      <MockupGrid tab={tab} lang={lang} />

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
