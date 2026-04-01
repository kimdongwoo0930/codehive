import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #30363d',
        backgroundColor: '#0d1117',
        padding: '48px 24px',
        marginTop: 'auto',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <svg viewBox="0 0 560 100" style={{ height: '28px', width: 'auto' }}>
            <g transform="translate(50,50)">
              <polygon
                points="0,-38 33,-19 33,19 0,38 -33,19 -33,-19"
                fill="none"
                stroke="#FFB300"
                strokeWidth="2.5"
              />
              <ellipse cx="0" cy="6" rx="11" ry="14" fill="#FFB300" />
              <ellipse cx="0" cy="-10" rx="8" ry="8" fill="#FFB300" />
              <rect x="-11" y="2" width="22" height="3.5" fill="#0d1117" rx="1.5" />
              <rect x="-11" y="9" width="22" height="3.5" fill="#0d1117" rx="1.5" />
              <ellipse cx="-16" cy="-4" rx="10" ry="6" fill="rgba(255,179,0,0.35)" transform="rotate(-25,-16,-4)" />
              <ellipse cx="16" cy="-4" rx="10" ry="6" fill="rgba(255,179,0,0.35)" transform="rotate(25,16,-4)" />
              <line x1="-4" y1="-17" x2="-12" y2="-30" stroke="#FFB300" strokeWidth="1.5" />
              <line x1="4" y1="-17" x2="12" y2="-30" stroke="#FFB300" strokeWidth="1.5" />
              <circle cx="-12" cy="-30" r="2" fill="#FFB300" />
              <circle cx="12" cy="-30" r="2" fill="#FFB300" />
            </g>
            <text
              x="100"
              y="62"
              fontSize="36"
              fontWeight="700"
              fill="#FFB300"
              letterSpacing="-1"
            >
              Codehive
            </text>
          </svg>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/posts" style={{ color: '#8b949e', textDecoration: 'none', fontSize: '14px' }}>
            코드 리뷰
          </Link>
          <Link href="/posts/new" style={{ color: '#8b949e', textDecoration: 'none', fontSize: '14px' }}>
            코드 제출
          </Link>
          <Link href="/auth/login" style={{ color: '#8b949e', textDecoration: 'none', fontSize: '14px' }}>
            로그인
          </Link>
          <Link href="/auth/register" style={{ color: '#8b949e', textDecoration: 'none', fontSize: '14px' }}>
            회원가입
          </Link>
          <Link href="/mypage" style={{ color: '#8b949e', textDecoration: 'none', fontSize: '14px' }}>
            마이페이지
          </Link>
        </div>

        {/* Copyright */}
        <p style={{ color: '#484f58', fontSize: '13px', margin: 0 }}>
          © 2026 Codehive. AI 코드 리뷰 커뮤니티
        </p>
      </div>
    </footer>
  )
}
