'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.')
      return
    }

    if (password.length < 8) {
      setError('비밀번호는 8자 이상이어야 합니다.')
      return
    }

    setLoading(true)

    // TODO: POST /api/auth/register
    // const res = await fetch('/api/auth/register', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, email, password })
    // })

    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    router.push('/')
  }

  const inputStyle = {
    width: '100%',
    padding: '11px 16px',
    backgroundColor: '#161b22',
    border: '1px solid #30363d',
    borderRadius: '8px',
    color: '#c9d1d9',
    fontSize: '14px',
    fontFamily: 'inherit',
    outline: 'none',
    boxSizing: 'border-box' as const,
    transition: 'border-color 0.2s',
  }

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 24px',
      }}
    >
      <div style={{ width: '100%', maxWidth: '400px' }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <svg viewBox="0 0 560 100" style={{ height: '40px', width: 'auto' }}>
            <g transform="translate(50,50)">
              <polygon points="0,-38 33,-19 33,19 0,38 -33,19 -33,-19" fill="none" stroke="#FFB300" strokeWidth="2.5" />
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
            <text x="100" y="62" fontFamily="'JetBrains Mono', monospace" fontSize="36" fontWeight="700" fill="#FFB300" letterSpacing="-1">
              Codehive
            </text>
          </svg>
          <p style={{ margin: '12px 0 0', fontSize: '14px', color: '#8b949e' }}>
            새 계정을 만들어보세요
          </p>
        </div>

        {/* Form */}
        <div
          style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '12px',
            padding: '28px',
          }}
        >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {error && (
              <div
                style={{
                  padding: '10px 14px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(248, 81, 73, 0.1)',
                  border: '1px solid rgba(248, 81, 73, 0.3)',
                  color: '#f85149',
                  fontSize: '13px',
                }}
              >
                {error}
              </div>
            )}

            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#8b949e',
                  marginBottom: '8px',
                }}
              >
                이름
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="홍길동"
                required
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(255, 179, 0, 0.4)')}
                onBlur={(e) => (e.target.style.borderColor = '#30363d')}
              />
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#8b949e',
                  marginBottom: '8px',
                }}
              >
                이메일
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(255, 179, 0, 0.4)')}
                onBlur={(e) => (e.target.style.borderColor = '#30363d')}
              />
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#8b949e',
                  marginBottom: '8px',
                }}
              >
                비밀번호
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="8자 이상"
                required
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(255, 179, 0, 0.4)')}
                onBlur={(e) => (e.target.style.borderColor = '#30363d')}
              />
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#8b949e',
                  marginBottom: '8px',
                }}
              >
                비밀번호 확인
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="비밀번호 재입력"
                required
                style={{
                  ...inputStyle,
                  borderColor:
                    confirmPassword && password !== confirmPassword
                      ? 'rgba(248, 81, 73, 0.4)'
                      : confirmPassword && password === confirmPassword
                      ? 'rgba(46, 160, 67, 0.4)'
                      : '#30363d',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(255, 179, 0, 0.4)')}
                onBlur={(e) => {
                  if (confirmPassword && password !== confirmPassword) {
                    e.target.style.borderColor = 'rgba(248, 81, 73, 0.4)'
                  } else if (confirmPassword && password === confirmPassword) {
                    e.target.style.borderColor = 'rgba(46, 160, 67, 0.4)'
                  } else {
                    e.target.style.borderColor = '#30363d'
                  }
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '11px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '700',
                border: 'none',
                cursor: loading ? 'not-allowed' : 'pointer',
                color: '#0d1117',
                backgroundColor: loading ? '#8b949e' : '#FFB300',
                transition: 'all 0.2s',
                marginTop: '4px',
              }}
            >
              {loading ? '처리 중...' : '회원가입'}
            </button>
          </form>
        </div>

        {/* Login link */}
        <p
          style={{
            textAlign: 'center',
            margin: '20px 0 0',
            fontSize: '14px',
            color: '#8b949e',
          }}
        >
          이미 계정이 있으신가요?{' '}
          <Link
            href="/auth/login"
            style={{ color: '#FFB300', textDecoration: 'none', fontWeight: '600' }}
          >
            로그인
          </Link>
        </p>
      </div>
    </div>
  )
}
