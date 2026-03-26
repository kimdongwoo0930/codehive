interface LanguageBadgeProps {
  language: string
  size?: 'sm' | 'md'
}

const languageColors: Record<string, { bg: string; color: string; dot: string }> = {
  Java: { bg: 'rgba(237,139,0,0.15)', color: '#ed8b00', dot: '#ed8b00' },
  Python: { bg: 'rgba(53,114,165,0.15)', color: '#79b8ff', dot: '#3572a5' },
  JavaScript: { bg: 'rgba(241,224,90,0.12)', color: '#f1e05a', dot: '#f1e05a' },
  TypeScript: { bg: 'rgba(49,120,198,0.15)', color: '#79b8ff', dot: '#3178c6' },
  Go: { bg: 'rgba(0,173,216,0.12)', color: '#79c0ff', dot: '#00ADD8' },
  Rust: { bg: 'rgba(206,66,43,0.15)', color: '#ffa657', dot: '#CE422B' },
}

export default function LanguageBadge({ language, size = 'md' }: LanguageBadgeProps) {
  const colors = languageColors[language] || {
    bg: 'rgba(139,148,158,0.12)',
    color: '#8b949e',
    dot: '#8b949e',
  }

  const fontSize = size === 'sm' ? '11px' : '12px'
  const padding = size === 'sm' ? '2px 8px' : '3px 10px'
  const dotSize = size === 'sm' ? '7px' : '8px'

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding,
        borderRadius: '20px',
        fontSize,
        fontWeight: '600',
        backgroundColor: colors.bg,
        color: colors.color,
        fontFamily: "'JetBrains Mono', monospace",
        letterSpacing: '0.02em',
      }}
    >
      <span
        style={{
          width: dotSize,
          height: dotSize,
          borderRadius: '50%',
          backgroundColor: colors.dot,
          flexShrink: 0,
        }}
      />
      {language}
    </span>
  )
}
