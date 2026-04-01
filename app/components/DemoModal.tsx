"use client";
import React from "react";

export type DemoSlug =
  | "app-basic" | "app-standard" | "app-premium"
  | "web-landing" | "web-business" | "web-app";

// ─── Helpers ──────────────────────────────────────────────────────────────────
const B  = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) =>
  <div style={{ fontWeight: 700, ...style }}>{children}</div>;

const Row = ({ children, gap = 8, style }: { children: React.ReactNode; gap?: number; style?: React.CSSProperties }) =>
  <div style={{ display: "flex", alignItems: "center", gap, ...style }}>{children}</div>;

const Col = ({ children, gap = 8, style }: { children: React.ReactNode; gap?: number; style?: React.CSSProperties }) =>
  <div style={{ display: "flex", flexDirection: "column", gap, ...style }}>{children}</div>;

const Box = ({ w, h, r = 6, color, style, children }: { w?: number | string; h?: number | string; r?: number; color: string; style?: React.CSSProperties; children?: React.ReactNode }) =>
  <div style={{ width: w, height: h, borderRadius: r, background: color, flexShrink: 0, ...style }}>{children}</div>;

const Line = ({ w = "100%", h = 7, r = 3, opacity = 0.15, color = "#000" }: { w?: number | string; h?: number; r?: number; opacity?: number; color?: string }) =>
  <div style={{ width: w, height: h, borderRadius: r, background: color, opacity }} />;

const Tag = ({ children, color, bg }: { children: React.ReactNode; color: string; bg: string }) =>
  <span style={{ background: bg, color, fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 99, letterSpacing: "0.05em" }}>{children}</span>;

// ─── WEB LANDING: Bloom Spa ────────────────────────────────────────────────────
function WebLandingDemo() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", minHeight: "100%", background: "#fff9f6" }}>
      {/* Nav */}
      <div style={{ background: "#fff", borderBottom: "1px solid #f3e8e0", padding: "0 28px", height: 52, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 10 }}>
        <Row gap={6}>
          <Box w={28} h={28} r={8} color="#e8a87c" />
          <B style={{ fontSize: 15, color: "#7c4a2d" }}>Bloom Spa</B>
        </Row>
        <Row gap={20} style={{ fontSize: 13, color: "#a08070" }}>
          {["บริการ", "แกลเลอรี่", "โปรโมชัน", "ติดต่อ"].map(l => <span key={l}>{l}</span>)}
          <div style={{ background: "#e8a87c", color: "#fff", padding: "6px 16px", borderRadius: 99, fontSize: 12, fontWeight: 700 }}>จองเลย</div>
        </Row>
      </div>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg,#fdf0e8 0%,#fff5ef 100%)", padding: "52px 28px", textAlign: "center" }}>
        <Tag color="#b5672b" bg="#fde8d0">✦ Premium Wellness</Tag>
        <div style={{ fontSize: 34, fontWeight: 900, color: "#4a2615", marginTop: 14, lineHeight: 1.2 }}>ผ่อนคลายสุดๆ<br/>กับบริการสปาชั้นนำ</div>
        <div style={{ fontSize: 14, color: "#9c7060", marginTop: 12, marginBottom: 24 }}>นวดไทย · อโรมา · สโตนเทอราพี · สครับ</div>
        <Row gap={10} style={{ justifyContent: "center" }}>
          <div style={{ background: "#e8a87c", color: "#fff", padding: "12px 28px", borderRadius: 99, fontSize: 14, fontWeight: 700 }}>จองนัดวันนี้</div>
          <div style={{ border: "1.5px solid #e8a87c", color: "#b5672b", padding: "12px 28px", borderRadius: 99, fontSize: 14, fontWeight: 700 }}>ดูบริการทั้งหมด</div>
        </Row>
        {/* Hero visual */}
        <div style={{ display: "flex", gap: 12, marginTop: 36, justifyContent: "center" }}>
          {["#f5c9a7","#f2b893","#fddcbf"].map((c,i) => (
            <div key={i} style={{ width: 120, height: 88, borderRadius: 12, background: c, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", bottom: 8, left: 8, right: 8, background: "rgba(255,255,255,0.8)", borderRadius: 6, padding: "4px 8px", fontSize: 10, fontWeight: 700, color: "#7c4a2d" }}>
                {["นวดไทย","อโรมา","สโตน"][i]}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Services */}
      <div style={{ padding: "40px 28px" }}>
        <div style={{ textAlign: "center", fontSize: 22, fontWeight: 900, color: "#4a2615", marginBottom: 8 }}>บริการของเรา</div>
        <div style={{ textAlign: "center", fontSize: 13, color: "#9c7060", marginBottom: 28 }}>เลือกบริการที่ใช่สำหรับคุณ</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
          {[
            { icon: "🌿", name: "นวดไทยโบราณ", price: "฿450/hr", desc: "ผ่อนคลายกล้ามเนื้อด้วยภูมิปัญญาไทย" },
            { icon: "🌸", name: "อโรมาเทอราพี", price: "฿550/hr", desc: "น้ำมันหอมระเหยคัดพิเศษ ช่วยคลายเครียด" },
            { icon: "🔥", name: "ฮอตสโตน", price: "฿680/hr", desc: "หินร้อนธรรมชาติ ปรับสมดุลพลังงาน" },
          ].map((s, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #f3e8e0", borderRadius: 14, padding: "20px 16px", textAlign: "center" }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontWeight: 800, fontSize: 13, color: "#4a2615", marginBottom: 4 }}>{s.name}</div>
              <div style={{ fontSize: 11, color: "#9c7060", marginBottom: 8 }}>{s.desc}</div>
              <div style={{ fontSize: 14, fontWeight: 900, color: "#e8a87c" }}>{s.price}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Gallery */}
      <div style={{ padding: "0 28px 40px" }}>
        <div style={{ fontSize: 22, fontWeight: 900, color: "#4a2615", marginBottom: 16, textAlign: "center" }}>แกลเลอรี่</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
          {["#f5c9a7","#e8b896","#fde8d0","#f2c4a0","#fddcbf","#f0b882"].map((c,i) => (
            <div key={i} style={{ height: 70, borderRadius: 10, background: c }} />
          ))}
        </div>
      </div>
      {/* Contact */}
      <div style={{ background: "#4a2615", padding: "36px 28px", color: "#fff", textAlign: "center" }}>
        <div style={{ fontSize: 20, fontWeight: 900, marginBottom: 6 }}>พร้อมให้บริการคุณ</div>
        <div style={{ fontSize: 13, opacity: 0.7, marginBottom: 16 }}>📍 สุขุมวิท 39  ·  📞 02-xxx-xxxx  ·  เปิด 10:00–21:00</div>
        <div style={{ background: "#e8a87c", color: "#4a2615", display: "inline-block", padding: "10px 28px", borderRadius: 99, fontSize: 14, fontWeight: 700 }}>จองนัดออนไลน์</div>
      </div>
    </div>
  );
}

// ─── WEB BUSINESS: TechCorp ───────────────────────────────────────────────────
function WebBusinessDemo() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", minHeight: "100%", background: "#f8fafc" }}>
      {/* Nav */}
      <div style={{ background: "#0f172a", padding: "0 28px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 10 }}>
        <Row gap={8}>
          <Box w={32} h={32} r={8} color="#3b82f6" />
          <B style={{ fontSize: 15, color: "#fff" }}>TechCorp</B>
        </Row>
        <Row gap={18} style={{ fontSize: 13, color: "#94a3b8" }}>
          {["บริการ","ผลงาน","เกี่ยวกับ","บล็อก","ติดต่อ"].map(l => <span key={l}>{l}</span>)}
          <div style={{ background: "#3b82f6", color: "#fff", padding: "6px 16px", borderRadius: 6, fontSize: 12, fontWeight: 700 }}>ปรึกษาฟรี</div>
        </Row>
      </div>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg,#0f172a 0%,#1e3a5f 60%,#1e40af 100%)", padding: "56px 28px" }}>
        <Row gap={40} style={{ alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <Tag color="#93c5fd" bg="rgba(59,130,246,0.2)">🚀 Digital Transformation</Tag>
            <div style={{ fontSize: 30, fontWeight: 900, color: "#fff", lineHeight: 1.2, marginTop: 12 }}>พัฒนาธุรกิจ<br/>ด้วยเทคโนโลยีล้ำ</div>
            <div style={{ fontSize: 13, color: "#94a3b8", marginTop: 10, marginBottom: 20 }}>ครบวงจรทุก solution ตั้งแต่ web, app, ERP จนถึง cloud</div>
            <Row gap={10}>
              <div style={{ background: "#3b82f6", color: "#fff", padding: "10px 24px", borderRadius: 6, fontSize: 13, fontWeight: 700 }}>เริ่มโปรเจกต์</div>
              <div style={{ border: "1px solid rgba(148,163,184,0.4)", color: "#cbd5e1", padding: "10px 24px", borderRadius: 6, fontSize: 13 }}>ดูผลงาน →</div>
            </Row>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10, flexShrink: 0 }}>
            {[["150+","โปรเจกต์"],["98%","ความพึงพอใจ"],["8ปี","ประสบการณ์"],["24/7","Support"]].map(([n,l],i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.07)", borderRadius: 10, padding: "14px 16px", textAlign: "center", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ fontSize: 20, fontWeight: 900, color: "#60a5fa" }}>{n}</div>
                <div style={{ fontSize: 10, color: "#94a3b8", marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </Row>
      </div>
      {/* Services */}
      <div style={{ padding: "40px 28px" }}>
        <div style={{ fontSize: 22, fontWeight: 900, color: "#0f172a", marginBottom: 6, textAlign: "center" }}>บริการของเรา</div>
        <div style={{ fontSize: 13, color: "#64748b", textAlign: "center", marginBottom: 24 }}>ครอบคลุมทุกความต้องการด้าน IT</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 14 }}>
          {[
            { icon:"💻", name:"Web Development", desc:"Next.js, React, Node.js — SEO-ready, fast" },
            { icon:"📱", name:"Mobile App", desc:"Flutter iOS/Android จาก codebase เดียว" },
            { icon:"☁️", name:"Cloud & DevOps", desc:"AWS, GCP, Docker, CI/CD pipeline ครบ" },
            { icon:"🔒", name:"Cybersecurity", desc:"Audit, Penetration Test, Compliance" },
          ].map((s,i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "18px" }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontWeight: 800, fontSize: 13, color: "#0f172a", marginBottom: 4 }}>{s.name}</div>
              <div style={{ fontSize: 11, color: "#64748b" }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Testimonial */}
      <div style={{ background: "#eff6ff", padding: "32px 28px" }}>
        <div style={{ fontSize: 13, color: "#1d4ed8", fontWeight: 700, marginBottom: 8 }}>⭐️⭐️⭐️⭐️⭐️</div>
        <div style={{ fontSize: 15, color: "#1e3a5f", fontStyle: "italic", lineHeight: 1.6, marginBottom: 12 }}>"TechCorp ช่วยเปลี่ยนระบบ ERP เก่าเป็น cloud-based ได้ใน 3 เดือน ตรงเวลา ตรง budget"</div>
        <Row gap={10}>
          <Box w={36} h={36} r={18} color="#bfdbfe" />
          <Col gap={2}>
            <div style={{ fontWeight: 700, fontSize: 12, color: "#1e3a5f" }}>คุณวิภา ทองคำ</div>
            <div style={{ fontSize: 11, color: "#64748b" }}>CEO, ThaiRetail Group</div>
          </Col>
        </Row>
      </div>
      {/* Contact form */}
      <div style={{ padding: "36px 28px", background: "#0f172a" }}>
        <div style={{ fontSize: 20, fontWeight: 900, color: "#fff", marginBottom: 6 }}>ปรึกษาฟรี ไม่มีข้อผูกมัด</div>
        <div style={{ fontSize: 13, color: "#94a3b8", marginBottom: 20 }}>กรอกข้อมูลแล้วเราจะติดต่อกลับภายใน 24 ชม.</div>
        <Col gap={10}>
          {["ชื่อ – นามสกุล","อีเมล / เบอร์โทร","รายละเอียดโปรเจกต์"].map((pl,i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "10px 14px", fontSize: 12, color: "#64748b" }}>{pl}</div>
          ))}
          <div style={{ background: "#3b82f6", color: "#fff", padding: "12px", borderRadius: 8, textAlign: "center", fontWeight: 700, fontSize: 14 }}>ส่งข้อความ</div>
        </Col>
      </div>
    </div>
  );
}

// ─── WEB APP: DashFlow ────────────────────────────────────────────────────────
function WebAppDemo() {
  const statColors = ["#3b82f6","#8b5cf6","#10b981","#f59e0b"];
  const stats = [["฿2.4M","ยอดขายเดือนนี้","+12%"],["1,284","ออเดอร์ใหม่","+8%"],["342","ลูกค้าใหม่","+24%"],["98.2%","Uptime","+0.1%"]];
  const rows = [["#3156","ลูกค้า A","฿12,500","สำเร็จ"],["#3157","ลูกค้า B","฿8,200","รอยืนยัน"],["#3158","ลูกค้า C","฿31,000","กำลังดำเนิน"],["#3159","ลูกค้า D","฿5,400","สำเร็จ"]];
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", height: "100%", display: "flex", background: "#f1f5f9" }}>
      {/* Sidebar */}
      <div style={{ width: 180, background: "#0f172a", flexShrink: 0, display: "flex", flexDirection: "column", padding: "20px 0" }}>
        <div style={{ padding: "0 16px 20px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <Row gap={8}>
            <Box w={28} h={28} r={8} color="#3b82f6" />
            <B style={{ fontSize: 13, color: "#fff" }}>DashFlow</B>
          </Row>
        </div>
        <Col gap={2} style={{ padding: "12px 8px", flex: 1 }}>
          {[["📊","Dashboard",true],["📈","Analytics",false],["🛒","Orders",false],["👥","Customers",false],["📋","Reports",false],["⚙️","Settings",false]].map(([ic,lb,act],i) => (
            <div key={i} style={{ padding: "8px 10px", borderRadius: 8, display: "flex", alignItems: "center", gap: 8, background: act ? "rgba(59,130,246,0.2)" : "transparent" }}>
              <span style={{ fontSize: 14 }}>{ic as string}</span>
              <span style={{ fontSize: 12, color: act ? "#93c5fd" : "#64748b", fontWeight: act ? 700 : 400 }}>{lb as string}</span>
            </div>
          ))}
        </Col>
        <div style={{ padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <Row gap={8}>
            <Box w={28} h={28} r={14} color="#334155" />
            <Col gap={1}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#cbd5e1" }}>สมชาย</div>
              <div style={{ fontSize: 9, color: "#64748b" }}>Admin</div>
            </Col>
          </Row>
        </div>
      </div>
      {/* Main */}
      <div style={{ flex: 1, overflow: "auto", padding: 20 }}>
        {/* Header */}
        <Row style={{ marginBottom: 20, justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 900, color: "#0f172a" }}>Dashboard</div>
            <div style={{ fontSize: 12, color: "#64748b" }}>ยินดีต้อนรับ, คุณสมชาย · อัปเดตล่าสุด: เมื่อกี้</div>
          </div>
          <Row gap={8}>
            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 8, padding: "6px 12px", fontSize: 12, color: "#64748b" }}>🔔 3</div>
            <div style={{ background: "#3b82f6", color: "#fff", borderRadius: 8, padding: "6px 14px", fontSize: 12, fontWeight: 700 }}>+ สร้างออเดอร์</div>
          </Row>
        </Row>
        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 20 }}>
          {stats.map(([val,lbl,chg],i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "16px", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: 10, color: "#64748b", marginBottom: 4 }}>{lbl}</div>
              <div style={{ fontSize: 18, fontWeight: 900, color: "#0f172a" }}>{val}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: statColors[i], marginTop: 4 }}>{chg} จากเดือนที่แล้ว</div>
            </div>
          ))}
        </div>
        {/* Chart */}
        <div style={{ background: "#fff", borderRadius: 12, padding: "16px", border: "1px solid #e2e8f0", marginBottom: 16 }}>
          <Row style={{ justifyContent: "space-between", marginBottom: 12 }}>
            <B style={{ fontSize: 13, color: "#0f172a" }}>รายได้รายเดือน</B>
            <Row gap={8}>
              {["3M","6M","1Y"].map(p => <div key={p} style={{ fontSize: 10, color: "#64748b", padding: "2px 8px", borderRadius: 4, background: p==="3M"?"#eff6ff":"transparent", fontWeight: p==="3M"?700:400 }}>{p}</div>)}
            </Row>
          </Row>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 80 }}>
            {[45,62,55,78,85,92,70,88,95,75,82,100].map((h,i) => (
              <div key={i} style={{ flex: 1, background: `linear-gradient(to top, #3b82f6, #93c5fd)`, height: `${h}%`, borderRadius: "4px 4px 0 0", opacity: i === 11 ? 1 : 0.6 }} />
            ))}
          </div>
          <Row style={{ justifyContent: "space-between", marginTop: 4 }}>
            {["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."].map(m => (
              <div key={m} style={{ fontSize: 8, color: "#94a3b8", flex: 1, textAlign: "center" }}>{m}</div>
            ))}
          </Row>
        </div>
        {/* Table */}
        <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", overflow: "hidden" }}>
          <div style={{ padding: "12px 16px", borderBottom: "1px solid #f1f5f9" }}>
            <B style={{ fontSize: 13, color: "#0f172a" }}>ออเดอร์ล่าสุด</B>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ background: "#f8fafc" }}>
                {["#ID","ลูกค้า","มูลค่า","สถานะ"].map(h => (
                  <th key={h} style={{ padding: "8px 14px", textAlign: "left", color: "#64748b", fontWeight: 600, fontSize: 11 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([id,name,val,status],i) => (
                <tr key={i} style={{ borderTop: "1px solid #f1f5f9" }}>
                  <td style={{ padding: "10px 14px", color: "#3b82f6", fontWeight: 600 }}>{id}</td>
                  <td style={{ padding: "10px 14px", color: "#0f172a" }}>{name}</td>
                  <td style={{ padding: "10px 14px", color: "#0f172a", fontWeight: 700 }}>{val}</td>
                  <td style={{ padding: "10px 14px" }}>
                    <span style={{ background: status==="สำเร็จ"?"#dcfce7":status==="รอยืนยัน"?"#fef9c3":"#dbeafe", color: status==="สำเร็จ"?"#16a34a":status==="รอยืนยัน"?"#ca8a04":"#1d4ed8", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 99 }}>{status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ─── APP BASIC: PetCare ───────────────────────────────────────────────────────
function AppBasicDemo() {
  const products = [
    { name: "อาหารสุนัข Royal", price: "฿320", tag: "#D4845A" },
    { name: "ของเล่นแมว", price: "฿180", tag: "#7B9E87" },
    { name: "ที่นอน Fluffy", price: "฿690", tag: "#5B8CC4" },
    { name: "แชมพูPet Pro", price: "฿250", tag: "#B5835A" },
  ];
  return (
    <Col gap={0} style={{ background: "#fef9f5", minHeight: "100%" }}>
      {/* Status bar */}
      <Row style={{ padding: "12px 16px 4px", justifyContent: "space-between" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#333" }}>9:41</div>
        <div style={{ fontSize: 10, color: "#666" }}>●●●</div>
      </Row>
      {/* App header */}
      <Row style={{ padding: "8px 16px 12px", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 11, color: "#a07050" }}>สวัสดีคุณ 👋</div>
          <B style={{ fontSize: 18, color: "#3d2010" }}>PetCare Shop</B>
        </div>
        <Box w={36} h={36} r={18} color="#f5cba7" style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🛒</Box>
      </Row>
      {/* Search bar */}
      <div style={{ margin: "0 16px 16px", background: "#fff", border: "1px solid #f0ddd0", borderRadius: 12, padding: "10px 14px", fontSize: 12, color: "#bbb" }}>🔍 ค้นหาสินค้าสำหรับน้องๆ...</div>
      {/* Banner */}
      <div style={{ margin: "0 16px 16px", background: "linear-gradient(135deg,#e8824a,#d4603a)", borderRadius: 16, padding: "20px 18px", position: "relative", overflow: "hidden" }}>
        <Tag color="#fff" bg="rgba(255,255,255,0.2)">โปรโมชัน</Tag>
        <div style={{ fontSize: 16, fontWeight: 900, color: "#fff", marginTop: 6 }}>ลด 20% ทุกสินค้า</div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", marginTop: 3 }}>สิ้นสุด 31 ม.ค. นี้เท่านั้น</div>
        <div style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", fontSize: 36 }}>🐾</div>
      </div>
      {/* Categories */}
      <div style={{ padding: "0 16px 14px" }}>
        <B style={{ fontSize: 14, color: "#3d2010", marginBottom: 10, display: "block" }}>หมวดหมู่</B>
        <Row gap={10}>
          {[["🐶","สุนัข"],["🐱","แมว"],["🐰","กระต่าย"],["🐟","ปลา"]].map(([ic,lb])=>(
            <Col key={lb as string} gap={4} style={{ alignItems: "center", flex: 1 }}>
              <Box w={44} h={44} r={14} color="#fff" style={{ border: "1.5px solid #f0ddd0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{ic as string}</Box>
              <div style={{ fontSize: 9, color: "#a07050", fontWeight: 600 }}>{lb as string}</div>
            </Col>
          ))}
        </Row>
      </div>
      {/* Products */}
      <div style={{ padding: "0 16px" }}>
        <Row style={{ justifyContent: "space-between", marginBottom: 10 }}>
          <B style={{ fontSize: 14, color: "#3d2010" }}>สินค้าแนะนำ</B>
          <div style={{ fontSize: 12, color: "#e8824a" }}>ดูทั้งหมด →</div>
        </Row>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
          {products.map((p,i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 14, overflow: "hidden", border: "1px solid #f0ddd0" }}>
              <Box w="100%" h={80} r={0} color={p.tag} style={{ opacity: 0.7 }} />
              <div style={{ padding: "10px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#3d2010", marginBottom: 4 }}>{p.name}</div>
                <Row style={{ justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900, color: "#e8824a" }}>{p.price}</div>
                  <Box w={22} h={22} r={11} color="#e8824a" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ color: "#fff", fontSize: 14, lineHeight: 1, marginTop: -1 }}>+</div>
                  </Box>
                </Row>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom nav */}
      <div style={{ position: "sticky", bottom: 0, background: "#fff", borderTop: "1px solid #f0ddd0", padding: "10px 0 20px" }}>
        <Row style={{ justifyContent: "space-around" }}>
          {[["🏠","หน้าแรก",true],["🔍","ค้นหา",false],["🛒","ตะกร้า",false],["👤","โปรไฟล์",false]].map(([ic,lb,act])=>(
            <Col key={lb as string} gap={2} style={{ alignItems: "center" }}>
              <div style={{ fontSize: 20 }}>{ic as string}</div>
              <div style={{ fontSize: 9, fontWeight: act ? 700 : 400, color: act ? "#e8824a" : "#aaa" }}>{lb as string}</div>
            </Col>
          ))}
        </Row>
      </div>
    </Col>
  );
}

// ─── APP STANDARD: QuickEat ───────────────────────────────────────────────────
function AppStandardDemo() {
  const cats = ["🍜 ก๋วยเตี๋ยว","🍱 ข้าวกล่อง","🍕 พิซซ่า","🧋 เครื่องดื่ม","🍣 ซูชิ"];
  const restaurants = [
    { name: "ครัวคุณแม่", tag: "ข้าวไทย", rating: "4.8", time: "20-30 นาที", color: "#e57c3c" },
    { name: "Ramen Ichigo", tag: "ราเมน", rating: "4.7", time: "25-35 นาที", color: "#c0392b" },
    { name: "MK Suki Express", tag: "สุกี้", rating: "4.6", time: "30-40 นาที", color: "#27ae60" },
  ];
  return (
    <Col gap={0} style={{ background: "#f8f9ff", minHeight: "100%" }}>
      {/* Status bar */}
      <Row style={{ padding: "12px 16px 4px", justifyContent: "space-between", background: "#fff" }}>
        <div style={{ fontSize: 11, fontWeight: 700 }}>9:41</div>
        <div style={{ fontSize: 10, color: "#666" }}>●●●</div>
      </Row>
      {/* Location header */}
      <Row style={{ padding: "8px 16px 14px", background: "#fff", borderBottom: "1px solid #f1f5f9", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 10, color: "#94a3b8" }}>📍 ส่งถึง</div>
          <Row gap={4}>
            <B style={{ fontSize: 14, color: "#0f172a" }}>สุขุมวิท 39</B>
            <div style={{ fontSize: 12 }}>▾</div>
          </Row>
        </div>
        <Row gap={8}>
          <Box w={32} h={32} r={16} color="#eff6ff" style={{ display:"flex",alignItems:"center",justifyContent:"center",fontSize:14 }}>🔔</Box>
          <Box w={32} h={32} r={16} color="#eff6ff" style={{ display:"flex",alignItems:"center",justifyContent:"center",fontSize:14 }}>👤</Box>
        </Row>
      </Row>
      {/* Search */}
      <div style={{ margin: "14px 16px", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: "10px 14px", fontSize: 12, color: "#bbb" }}>🔍 ค้นหาร้านอาหารหรือเมนู...</div>
      {/* Promo banner */}
      <div style={{ margin: "0 16px 14px", background: "linear-gradient(135deg,#4f46e5,#7c3aed)", borderRadius: 16, padding: "18px" }}>
        <Tag color="#c4b5fd" bg="rgba(255,255,255,0.15)">🎉 โปรพิเศษ</Tag>
        <div style={{ fontSize: 15, fontWeight: 900, color: "#fff", marginTop: 6 }}>ส่งฟรีทุกออเดอร์</div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.75)" }}>วันนี้เท่านั้น · ไม่มีขั้นต่ำ</div>
      </div>
      {/* Categories */}
      <div style={{ padding: "0 16px 14px" }}>
        <B style={{ fontSize: 14, color: "#0f172a", marginBottom: 10, display: "block" }}>หมวดหมู่</B>
        <Row gap={8} style={{ overflowX: "auto", paddingBottom: 4 }}>
          {cats.map((c,i)=>(
            <div key={i} style={{ background: i===0?"#4f46e5":"#fff", color: i===0?"#fff":"#64748b", border: "1px solid", borderColor: i===0?"#4f46e5":"#e2e8f0", borderRadius: 99, padding: "6px 14px", fontSize: 11, fontWeight: i===0?700:400, whiteSpace: "nowrap", flexShrink: 0 }}>{c}</div>
          ))}
        </Row>
      </div>
      {/* Restaurants */}
      <div style={{ padding: "0 16px" }}>
        <B style={{ fontSize: 14, color: "#0f172a", marginBottom: 12, display: "block" }}>ร้านแนะนำ 🔥</B>
        <Col gap={10}>
          {restaurants.map((r,i)=>(
            <Row key={i} gap={12} style={{ background: "#fff", borderRadius: 14, padding: "12px", border: "1px solid #f1f5f9" }}>
              <Box w={64} h={64} r={12} color={r.color} style={{ flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <Row style={{ justifyContent: "space-between", marginBottom: 3 }}>
                  <B style={{ fontSize: 13, color: "#0f172a" }}>{r.name}</B>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#f59e0b" }}>⭐ {r.rating}</div>
                </Row>
                <Tag color="#64748b" bg="#f1f5f9">{r.tag}</Tag>
                <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 6 }}>🚴 {r.time}</div>
              </div>
            </Row>
          ))}
        </Col>
      </div>
      {/* Bottom nav */}
      <div style={{ position: "sticky", bottom: 0, background: "#fff", borderTop: "1px solid #f1f5f9", padding: "10px 0 22px", marginTop: 16 }}>
        <Row style={{ justifyContent: "space-around" }}>
          {[["🏠","หน้าแรก",true],["🔍","ค้นหา",false],["📋","ออเดอร์",false],["👤","โปรไฟล์",false]].map(([ic,lb,act])=>(
            <Col key={lb as string} gap={2} style={{ alignItems: "center" }}>
              <div style={{ fontSize: 20 }}>{ic as string}</div>
              <div style={{ fontSize: 9, fontWeight: act?700:400, color: act?"#4f46e5":"#aaa" }}>{lb as string}</div>
            </Col>
          ))}
        </Row>
      </div>
    </Col>
  );
}

// ─── APP PREMIUM: ProWork ─────────────────────────────────────────────────────
function AppPremiumDemo() {
  const projects = [
    { name: "Redesign เว็บหลัก", progress: 72, color: "#3b82f6", due: "15 ก.พ.", team: 4 },
    { name: "API Integration v2", progress: 45, color: "#8b5cf6", due: "28 ก.พ.", team: 3 },
    { name: "Mobile App Launch", progress: 90, color: "#10b981", due: "10 ก.พ.", team: 6 },
  ];
  return (
    <Col gap={0} style={{ background: "#f8fafc", minHeight: "100%" }}>
      {/* Status bar */}
      <Row style={{ padding: "12px 16px 4px", background: "#0f172a", justifyContent: "space-between" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#fff" }}>9:41</div>
        <div style={{ fontSize: 10, color: "#64748b" }}>●●●</div>
      </Row>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#0f172a,#1e3a5f)", padding: "16px 16px 24px" }}>
        <Row style={{ justifyContent: "space-between", marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 11, color: "#94a3b8" }}>สวัสดีตอนเช้า 👋</div>
            <B style={{ fontSize: 18, color: "#fff" }}>คุณสมชาย</B>
          </div>
          <Row gap={8}>
            <Box w={32} h={32} r={16} color="rgba(255,255,255,0.1)" style={{ display:"flex",alignItems:"center",justifyContent:"center",fontSize:14 }}>🔔</Box>
            <Box w={32} h={32} r={16} color="#3b82f6" style={{ display:"flex",alignItems:"center",justifyContent:"center",fontSize:14 }}>SK</Box>
          </Row>
        </Row>
        {/* Quick stats */}
        <Row gap={8}>
          {[["12","งานทั้งหมด","#3b82f6"],["5","กำลังทำ","#f59e0b"],["4","เสร็จแล้ว","#10b981"],["3","ใกล้ deadline","#ef4444"]].map(([v,l,c])=>(
            <div key={l as string} style={{ flex: 1, background: "rgba(255,255,255,0.07)", borderRadius: 12, padding: "10px 8px", textAlign: "center", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ fontSize: 18, fontWeight: 900, color: c as string }}>{v}</div>
              <div style={{ fontSize: 8, color: "#94a3b8", marginTop: 2, lineHeight: 1.3 }}>{l as string}</div>
            </div>
          ))}
        </Row>
      </div>
      {/* Projects */}
      <div style={{ padding: "16px" }}>
        <Row style={{ justifyContent: "space-between", marginBottom: 12 }}>
          <B style={{ fontSize: 14, color: "#0f172a" }}>โปรเจกต์ที่กำลังทำ</B>
          <div style={{ fontSize: 12, color: "#3b82f6" }}>ดูทั้งหมด →</div>
        </Row>
        <Col gap={10}>
          {projects.map((p,i)=>(
            <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "14px", border: "1px solid #e2e8f0" }}>
              <Row style={{ justifyContent: "space-between", marginBottom: 10 }}>
                <div>
                  <B style={{ fontSize: 13, color: "#0f172a" }}>{p.name}</B>
                  <div style={{ fontSize: 10, color: "#94a3b8", marginTop: 2 }}>📅 Due: {p.due} · 👥 {p.team} คน</div>
                </div>
                <div style={{ fontSize: 13, fontWeight: 900, color: p.color }}>{p.progress}%</div>
              </Row>
              <div style={{ background: "#f1f5f9", borderRadius: 99, height: 6, overflow: "hidden" }}>
                <div style={{ width: `${p.progress}%`, height: "100%", background: p.color, borderRadius: 99 }} />
              </div>
            </div>
          ))}
        </Col>
      </div>
      {/* Activity */}
      <div style={{ padding: "0 16px" }}>
        <B style={{ fontSize: 14, color: "#0f172a", marginBottom: 12, display: "block" }}>กิจกรรมล่าสุด</B>
        <Col gap={8}>
          {[["✅","สมศักดิ์ ปิด task #234","2 นาทีที่แล้ว"],["💬","วิภา คอมเมนต์ใน Sprint 4","15 นาทีที่แล้ว"],["📎","อัปโหลดไฟล์ design_v3.fig","1 ชม.ที่แล้ว"]].map(([ic,msg,time],i)=>(
            <Row key={i} gap={10} style={{ background: "#fff", borderRadius: 10, padding: "10px 12px", border: "1px solid #f1f5f9" }}>
              <div style={{ fontSize: 16 }}>{ic as string}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: "#0f172a" }}>{msg as string}</div>
                <div style={{ fontSize: 10, color: "#94a3b8", marginTop: 2 }}>{time as string}</div>
              </div>
            </Row>
          ))}
        </Col>
      </div>
      {/* Bottom nav */}
      <div style={{ position: "sticky", bottom: 0, background: "#fff", borderTop: "1px solid #e2e8f0", padding: "10px 0 22px", marginTop: 16 }}>
        <Row style={{ justifyContent: "space-around" }}>
          {[["🏠","หน้าแรก",true],["📊","โปรเจกต์",false],["💬","แชต",false],["📈","รายงาน",false],["⚙️","ตั้งค่า",false]].map(([ic,lb,act])=>(
            <Col key={lb as string} gap={2} style={{ alignItems: "center" }}>
              <div style={{ fontSize: 18 }}>{ic as string}</div>
              <div style={{ fontSize: 8, fontWeight: act?700:400, color: act?"#3b82f6":"#aaa" }}>{lb as string}</div>
            </Col>
          ))}
        </Row>
      </div>
    </Col>
  );
}

// ─── Demo config ──────────────────────────────────────────────────────────────
const DEMOS: Record<DemoSlug, { label: string; content: React.ReactNode }> = {
  "web-landing":  { label: "Web Landing · ตัวอย่าง: Bloom Spa",       content: <WebLandingDemo /> },
  "web-business": { label: "Web Business · ตัวอย่าง: TechCorp",       content: <WebBusinessDemo /> },
  "web-app":      { label: "Web App · ตัวอย่าง: DashFlow Dashboard",  content: <WebAppDemo /> },
  "app-basic":    { label: "App Basic · ตัวอย่าง: PetCare",           content: <AppBasicDemo /> },
  "app-standard": { label: "App Standard · ตัวอย่าง: QuickEat",       content: <AppStandardDemo /> },
  "app-premium":  { label: "App Premium · ตัวอย่าง: ProWork",         content: <AppPremiumDemo /> },
};

// ─── Modal ────────────────────────────────────────────────────────────────────
export default function DemoModal({ slug, onClose, onInquiry }: {
  slug: DemoSlug;
  onClose: () => void;
  onInquiry: () => void;
}) {
  const demo = DEMOS[slug];
  const isApp = slug.startsWith("app");

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: 16, background: "rgba(0,0,0,0.82)", backdropFilter: "blur(6px)" }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{ width: "min(960px, 96vw)", height: "min(720px, 92vh)", display: "flex", flexDirection: "column", background: "#1e293b", borderRadius: 18, overflow: "hidden", boxShadow: "0 40px 120px rgba(0,0,0,0.6)" }}>

        {/* Title bar */}
        <div style={{ background: "#0f172a", padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.06)", flexShrink: 0 }}>
          <Row gap={8}>
            <Tag color="#94a3b8" bg="rgba(255,255,255,0.07)">DEMO</Tag>
            <span style={{ fontSize: 13, color: "#cbd5e1", fontWeight: 600 }}>{demo.label}</span>
          </Row>
          <Row gap={8}>
            <button onClick={onInquiry} style={{ background: "linear-gradient(135deg,#2563eb,#7c3aed)", color: "#fff", border: "none", borderRadius: 8, padding: "6px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
              สั่งทำแบบนี้ →
            </button>
            <button onClick={onClose} style={{ background: "rgba(255,255,255,0.08)", color: "#94a3b8", border: "none", borderRadius: 8, padding: "6px 10px", cursor: "pointer", fontSize: 16, lineHeight: 1 }}>✕</button>
          </Row>
        </div>

        {/* Content area */}
        <div style={{ flex: 1, overflow: "hidden", display: "flex", alignItems: isApp ? "center" : "stretch", justifyContent: isApp ? "center" : "stretch", background: isApp ? "#0f172a" : "#fff", padding: isApp ? "24px 0" : 0 }}>
          {isApp ? (
            /* Phone frame */
            <div style={{ width: 320, height: "100%", maxHeight: 600, borderRadius: 40, border: "8px solid #334155", background: "#fff", overflow: "hidden", boxShadow: "0 0 0 2px #1e293b, 0 20px 60px rgba(0,0,0,0.5)", display: "flex", flexDirection: "column" }}>
              <div style={{ flex: 1, overflowY: "auto" }}>
                {demo.content}
              </div>
            </div>
          ) : (
            /* Browser content */
            <div style={{ flex: 1, overflowY: "auto" }}>
              {demo.content}
            </div>
          )}
        </div>

        {/* Footer note */}
        <div style={{ background: "#0f172a", padding: "8px 16px", borderTop: "1px solid rgba(255,255,255,0.06)", flexShrink: 0 }}>
          <div style={{ fontSize: 11, color: "#475569", textAlign: "center" }}>
            นี่คือตัวอย่าง demo เท่านั้น — ผลงานจริงออกแบบตาม brand และ requirement ของคุณ
          </div>
        </div>
      </div>
    </div>
  );
}
