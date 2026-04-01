'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: '1px solid #30363d',
        backgroundColor: 'rgba(13, 17, 23, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <svg viewBox="0 0 560 100" style={{ height: '36px', width: 'auto' }}>
            <g transform="translate(50,50)">
              {/* Hexagon */}
              <polygon
                points="0,-38 33,-19 33,19 0,38 -33,19 -33,-19"
                fill="none"
                stroke="#FFB300"
                strokeWidth="2.5"
              />
              {/* Bee body */}
              <ellipse cx="0" cy="6" rx="11" ry="14" fill="#FFB300" />
              {/* Bee head */}
              <ellipse cx="0" cy="-10" rx="8" ry="8" fill="#FFB300" />
              {/* Bee stripes */}
              <rect x="-11" y="2" width="22" height="3.5" fill="#0d1117" rx="1.5" />
              <rect x="-11" y="9" width="22" height="3.5" fill="#0d1117" rx="1.5" />
              {/* Wings */}
              <ellipse cx="-16" cy="-4" rx="10" ry="6" fill="rgba(255,179,0,0.35)" transform="rotate(-25,-16,-4)" />
              <ellipse cx="16" cy="-4" rx="10" ry="6" fill="rgba(255,179,0,0.35)" transform="rotate(25,16,-4)" />
              {/* Antennae */}
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
        </Link>

        {/* Nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Link
            href="/"
            style={{
              padding: '6px 14px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              textDecoration: 'none',
              color: pathname === '/' ? '#FFB300' : '#8b949e',
              backgroundColor: pathname === '/' ? 'rgba(255, 179, 0, 0.1)' : 'transparent',
              transition: 'all 0.2s',
            }}
          >
            홈
          </Link>
          <Link
            href="/posts"
            style={{
              padding: '6px 14px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              textDecoration: 'none',
              color: pathname === '/posts' || pathname.startsWith('/posts') ? '#FFB300' : '#8b949e',
              backgroundColor: pathname === '/posts' || pathname.startsWith('/posts') ? 'rgba(255, 179, 0, 0.1)' : 'transparent',
              transition: 'all 0.2s',
            }}
          >
            코드 리뷰
          </Link>
          <Link
            href="/posts"
            style={{
              padding: '6px 14px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              textDecoration: 'none',
              color: '#8b949e',
              transition: 'all 0.2s',
            }}
          >
            탐색
          </Link>
        </div>

        {/* Auth buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Link
            href="/auth/login"
            style={{
              padding: '7px 16px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              textDecoration: 'none',
              color: '#c9d1d9',
              border: '1px solid #30363d',
              backgroundColor: 'transparent',
              transition: 'all 0.2s',
            }}
          >
            로그인
          </Link>
          <Link
            href="/auth/register"
            style={{
              padding: '7px 16px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '600',
              textDecoration: 'none',
              color: '#0d1117',
              backgroundColor: '#FFB300',
              transition: 'all 0.2s',
            }}
          >
            회원가입
          </Link>
        </div>
      </div>
    </nav>
  )
}
