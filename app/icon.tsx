import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "linear-gradient(135deg, #1d4ed8, #6d28d9)",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          fontWeight: 900,
          color: "white",
          fontFamily: "system-ui, sans-serif",
          letterSpacing: -0.5,
        }}
      >
        M
      </div>
    ),
    { width: 32, height: 32 }
  );
}
