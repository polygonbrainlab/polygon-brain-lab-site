interface PolygonDecorationProps {
  className?: string;
  variant?: "large" | "small";
}

export default function PolygonDecoration({
  className = "",
  variant = "large",
}: PolygonDecorationProps) {
  if (variant === "small") {
    return (
      <svg
        className={className}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <polygon
          points="100,10 190,55 190,145 100,190 10,145 10,55"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <polygon
          points="100,40 160,75 160,140 100,170 40,140 40,75"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.7"
        />
        <circle cx="100" cy="100" r="8" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <line x1="100" y1="10" x2="100" y2="40" stroke="currentColor" strokeWidth="0.5" />
        <line x1="100" y1="160" x2="100" y2="190" stroke="currentColor" strokeWidth="0.5" />
        <line x1="10" y1="55" x2="40" y2="75" stroke="currentColor" strokeWidth="0.5" />
        <line x1="160" y1="75" x2="190" y2="55" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer hexagon */}
      <polygon
        points="200,20 370,110 370,290 200,380 30,290 30,110"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Middle hexagon */}
      <polygon
        points="200,70 320,135 320,265 200,330 80,265 80,135"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      {/* Inner hexagon */}
      <polygon
        points="200,120 275,162.5 275,237.5 200,280 125,237.5 125,162.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7"
      />
      {/* Center */}
      <circle cx="200" cy="200" r="20" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="200" cy="200" r="4" fill="currentColor" />
      {/* Radial lines */}
      <line x1="200" y1="20" x2="200" y2="70" stroke="currentColor" strokeWidth="0.6" />
      <line x1="200" y1="330" x2="200" y2="380" stroke="currentColor" strokeWidth="0.6" />
      <line x1="30" y1="110" x2="80" y2="135" stroke="currentColor" strokeWidth="0.6" />
      <line x1="370" y1="110" x2="320" y2="135" stroke="currentColor" strokeWidth="0.6" />
      <line x1="30" y1="290" x2="80" y2="265" stroke="currentColor" strokeWidth="0.6" />
      <line x1="370" y1="290" x2="320" y2="265" stroke="currentColor" strokeWidth="0.6" />
      {/* Triangle */}
      <polygon
        points="200,140 260,220 140,220"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
      />
      {/* Node dots */}
      <circle cx="200" cy="20" r="2" fill="currentColor" />
      <circle cx="370" cy="110" r="2" fill="currentColor" />
      <circle cx="370" cy="290" r="2" fill="currentColor" />
      <circle cx="200" cy="380" r="2" fill="currentColor" />
      <circle cx="30" cy="290" r="2" fill="currentColor" />
      <circle cx="30" cy="110" r="2" fill="currentColor" />
    </svg>
  );
}
