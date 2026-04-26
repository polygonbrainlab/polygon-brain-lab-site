interface PolygonLogoProps {
  className?: string;
}

export default function PolygonLogo({ className = "h-8 w-8" }: PolygonLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 110 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {/* silhouette */}
        <path
          d="M18 54L10 46L14 34L10 24L20 14L34 10L48 6L66 8L82 14L94 24L100 36L98 48L102 58L94 70L82 78L64 84L46 86L28 80L16 70L18 54Z"
          strokeWidth="1.8"
        />

        {/* stem */}
        <path d="M56 76L60 94L68 90L64 72" strokeWidth="1.8" />

        {/* dense low-poly mesh */}
        <polygon points="20,14 34,10 30,20 18,22" strokeWidth="1.35" />
        <polygon points="34,10 48,6 50,18 30,20" strokeWidth="1.35" />
        <polygon points="48,6 66,8 62,20 50,18" strokeWidth="1.35" />
        <polygon points="66,8 82,14 74,22 62,20" strokeWidth="1.35" />
        <polygon points="82,14 94,24 82,28 74,22" strokeWidth="1.35" />

        <polygon points="18,22 30,20 26,30 14,34" strokeWidth="1.35" />
        <polygon points="30,20 50,18 42,28 26,30" strokeWidth="1.35" />
        <polygon points="50,18 62,20 58,30 42,28" strokeWidth="1.35" />
        <polygon points="62,20 74,22 72,34 58,30" strokeWidth="1.35" />
        <polygon points="74,22 82,28 88,38 72,34" strokeWidth="1.35" />

        <polygon points="14,34 26,30 24,42 12,46" strokeWidth="1.35" />
        <polygon points="26,30 42,28 38,40 24,42" strokeWidth="1.35" />
        <polygon points="42,28 58,30 52,42 38,40" strokeWidth="1.35" />
        <polygon points="58,30 72,34 68,46 52,42" strokeWidth="1.35" />
        <polygon points="72,34 88,38 86,50 68,46" strokeWidth="1.35" />

        <polygon points="12,46 24,42 24,54 18,54 10,46" strokeWidth="1.35" />
        <polygon points="24,42 38,40 36,52 24,54" strokeWidth="1.35" />
        <polygon points="38,40 52,42 50,54 36,52" strokeWidth="1.35" />
        <polygon points="52,42 68,46 64,58 50,54" strokeWidth="1.35" />
        <polygon points="68,46 86,50 90,62 64,58" strokeWidth="1.35" />

        <polygon points="18,54 24,54 28,66 16,70" strokeWidth="1.35" />
        <polygon points="24,54 36,52 40,66 28,66" strokeWidth="1.35" />
        <polygon points="36,52 50,54 52,68 40,66" strokeWidth="1.35" />
        <polygon points="50,54 64,58 66,72 52,68" strokeWidth="1.35" />
        <polygon points="64,58 90,62 82,78 66,72" strokeWidth="1.35" />

        <polygon points="28,66 40,66 46,86 28,80" strokeWidth="1.35" />
        <polygon points="40,66 52,68 46,86" strokeWidth="1.35" />
        <polygon points="52,68 66,72 64,84 46,86" strokeWidth="1.35" />
        <polygon points="66,72 82,78 64,84" strokeWidth="1.35" />

        {/* extra shard cuts for aggressive feel */}
        <path d="M30 20L42 28" strokeWidth="1.05" opacity="0.8" />
        <path d="50 18L38 40" stroke="currentColor" strokeWidth="1.05" opacity="0.8" />
        <path d="62 20L52 42" stroke="currentColor" strokeWidth="1.05" opacity="0.8" />
        <path d="26 30L38 40" strokeWidth="1.05" opacity="0.8" />
        <path d="42 28L52 42" strokeWidth="1.05" opacity="0.8" />
        <path d="58 30L68 46" strokeWidth="1.05" opacity="0.8" />
        <path d="24 42L36 52" strokeWidth="1.05" opacity="0.8" />
        <path d="38 40L50 54" strokeWidth="1.05" opacity="0.8" />
        <path d="52 42L64 58" strokeWidth="1.05" opacity="0.8" />
        <path d="36 52L52 68" strokeWidth="1.05" opacity="0.8" />
        <path d="50 54L46 86" strokeWidth="1.05" opacity="0.8" />
      </g>
    </svg>
  );
}
