import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MATA SOFT – Flutter App & Web Development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #020818 0%, #060d1e 50%, #0c0a28 100%)",
          padding: "56px 72px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles — right side */}
        {[480, 360, 250, 150].map((s, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              right: -s / 2 + 120,
              top: "50%",
              marginTop: -s / 2,
              width: s,
              height: s,
              borderRadius: "50%",
              border: `1px solid rgba(59,130,246,${0.28 - i * 0.06})`,
            }}
          />
        ))}

        {/* Center glow */}
        <div
          style={{
            position: "absolute",
            right: 240,
            top: "50%",
            marginTop: -160,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.22) 0%, transparent 70%)",
          }}
        />

        {/* Cross lines */}
        <div style={{ position: "absolute", right: 390, top: 0, width: 1, height: "100%", background: "rgba(59,130,246,0.07)" }} />
        <div style={{ position: "absolute", right: 0, top: 315, width: 780, height: 1, background: "rgba(59,130,246,0.07)" }} />

        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 900,
              color: "white",
            }}
          >
            M
          </div>
          <span style={{ fontSize: 20, fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: 3 }}>
            MATA SOFT
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: "auto", maxWidth: 660 }}>
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(59,130,246,0.12)",
              border: "1px solid rgba(59,130,246,0.3)",
              borderRadius: 100,
              padding: "7px 18px",
              width: "fit-content",
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#60a5fa" }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: "#60a5fa", letterSpacing: 3 }}>
              FLUTTER DEVELOPER · UI/UX DESIGNER
            </span>
          </div>

          {/* Title */}
          <div style={{ fontSize: 64, fontWeight: 900, lineHeight: 1.05, color: "white", letterSpacing: -1 }}>
            Build Flutter Apps
          </div>
          <div style={{ fontSize: 64, fontWeight: 900, lineHeight: 1.05, color: "#60a5fa", letterSpacing: -1, marginTop: -12 }}>
            & Websites
          </div>

          {/* Sub */}
          <div style={{ fontSize: 20, color: "rgba(148,163,184,0.75)", marginTop: 4, lineHeight: 1.5 }}>
            iOS · Android · Web App · UI/UX Design — Delivered on time, every time.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 44,
            paddingTop: 20,
            borderTop: "1px solid rgba(59,130,246,0.18)",
          }}
        >
          <span style={{ fontSize: 14, color: "rgba(96,165,250,0.65)" }}>contact@matasoft.dev</span>
          <span style={{ fontSize: 14, color: "rgba(96,165,250,0.65)" }}>094-321-8118</span>
          <span style={{ fontSize: 14, color: "rgba(96,165,250,0.45)", letterSpacing: 1 }}>matasoft.dev</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
