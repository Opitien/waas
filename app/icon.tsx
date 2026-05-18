import { ImageResponse } from "next/og";

export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Dynamic Favicon Generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
          position: "relative",
        }}
      >
        {/* Left Circle (Bright Emerald Green) */}
        <div
          style={{
            position: "absolute",
            left: 2,
            width: 18,
            height: 18,
            borderRadius: "50%",
            backgroundColor: "#10b981",
            opacity: 0.9,
          }}
        />
        {/* Right Circle (Deep Forest Green) */}
        <div
          style={{
            position: "absolute",
            right: 2,
            width: 18,
            height: 18,
            borderRadius: "50%",
            backgroundColor: "#012e17",
            opacity: 0.9,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
