interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeader({ eyebrow, title, subtitle, center = false, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-10 md:mb-14 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs tracking-wider uppercase mb-3"
          style={{
            background: light ? "rgba(255,255,255,0.15)" : "rgba(92,45,92,0.08)",
            color: light ? "#E8A0B4" : "#5C2D5C",
            fontWeight: 700,
          }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mb-3 ${light ? "text-white" : "text-[#2A1A2E]"}`}
        style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 800, lineHeight: 1.3 }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl ${center ? "mx-auto" : ""} leading-relaxed`}
          style={{
            color: light ? "rgba(255,255,255,0.75)" : "#7A6080",
            fontWeight: 400,
            fontSize: "1rem",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
