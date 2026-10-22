type LineChartProps = {
  id: string
  label: string
  className?: string
  marker?: string
}

export function LineChart({ id, label, className = '', marker }: LineChartProps) {
  const strokeId = `${id}-stroke`
  const softId = `${id}-soft`

  return (
    <svg
      viewBox="0 0 280 96"
      className={className}
      role="img"
      aria-label={label}
    >
      <defs>
        <linearGradient id={strokeId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#69D0E2" />
          <stop offset="100%" stopColor="#8AF0C1" />
        </linearGradient>
        <linearGradient id={softId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#A8EAF0" />
          <stop offset="100%" stopColor="#69D0E2" />
        </linearGradient>
      </defs>
      <path
        d="M6 78 C 50 76, 100 72, 150 66 C 200 60, 240 62, 274 54"
        fill="none"
        stroke={`url(#${softId})`}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        className="chart-line-load"
        pathLength={1}
        d="M6 66 C 36 64, 64 60, 96 52 C 128 44, 156 26, 188 26 C 220 26, 246 40, 274 32"
        fill="none"
        stroke={`url(#${strokeId})`}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {marker ? (
        <g transform="translate(161, 8)">
          <rect width="54" height="20" rx="10" fill="#111111" />
          <text
            x="27"
            y="14"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="10"
            fontFamily="Inter, sans-serif"
          >
            {marker}
          </text>
        </g>
      ) : null}
    </svg>
  )
}
