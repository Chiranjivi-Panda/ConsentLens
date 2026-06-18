import { LEVEL_CONFIG } from "../data/appDatabase";

export default function ScoreGauge({
  score,
  level,
}) {
  const cfg = LEVEL_CONFIG[level];

  const pct = score / 100;

  const r = 54;
  const cx = 70;
  const cy = 70;

  const circumference = Math.PI * r;
  const offset =
    circumference * (1 - pct);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <svg
        width="140"
        height="80"
        viewBox="0 0 140 80"
      >
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${
            cx + r
          } ${cy}`}
          fill="none"
          stroke="#1e293b"
          strokeWidth="14"
          strokeLinecap="round"
        />

        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${
            cx + r
          } ${cy}`}
          fill="none"
          stroke={cfg.border}
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition:
              "stroke-dashoffset 1s ease",
          }}
        />

        <text
          x={cx}
          y={cy - 8}
          textAnchor="middle"
          fill={cfg.text}
          fontSize="26"
          fontWeight="bold"
        >
          {score}
        </text>

        <text
          x={cx}
          y={cy + 10}
          textAnchor="middle"
          fill="#94a3b8"
          fontSize="10"
        >
          /100
        </text>
      </svg>

      <span
        style={{
          fontSize: 11,
          color: cfg.text,
          fontWeight: 700,
          letterSpacing: 1.5,
          background: cfg.bg,
          border: `1px solid ${cfg.border}`,
          padding: "3px 10px",
          borderRadius: 20,
          marginTop: -4,
        }}
      >
        {cfg.label}
      </span>
    </div>
  );
}