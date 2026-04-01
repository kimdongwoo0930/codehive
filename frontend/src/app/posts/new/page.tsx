'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const languages = ['Java', 'Python', 'JavaScript', 'TypeScript', 'Go', 'Rust', 'C', 'C++', 'Kotlin', 'Swift']

export default function NewPostPage() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [language, setLanguage] = useState('Java')
  const [code, setCode] = useState('')
  const [description, setDescription] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !code.trim()) return

    // TODO: POST /api/posts
    // const res = await fetch('/api/posts', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ title, language, code, description })
    // })
    // const post = await res.json()
    // router.push(`/posts/${post.id}`)

    console.log('New post:', { title, language, code, description })
    setSubmitted(true)
    setTimeout(() => {
      router.push('/posts')
    }, 1500)
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

  const labelStyle = {
    display: 'block',
    fontSize: '13px',
    fontWeight: '600',
    color: '#8b949e',
    marginBottom: '8px',
    fontFamily: "'JetBrains Mono', monospace",
  }

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '48px 24px',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '36px' }}>
        <h1
          style={{
            margin: '0 0 8px',
            fontSize: '28px',
            fontWeight: '700',
            color: '#e6edf3',
          }}
        >
          <span style={{ color: '#FFB300' }}>{'// '}</span>
          코드 제출
        </h1>
        <p style={{ margin: 0, fontSize: '14px', color: '#8b949e' }}>
          코드를 공유하고 AI와 커뮤니티 리뷰를 받아보세요
        </p>
      </div>

      {submitted ? (
        <div
          style={{
            padding: '32px',
            borderRadius: '12px',
            backgroundColor: 'rgba(46, 160, 67, 0.08)',
            border: '1px solid rgba(46, 160, 67, 0.25)',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
          <h2 style={{ margin: '0 0 8px', color: '#3fb950', fontFamily: "'JetBrains Mono', monospace" }}>
            제출 완료!
          </h2>
          <p style={{ margin: 0, color: '#8b949e', fontSize: '14px' }}>
            코드 리뷰 목록으로 이동합니다...
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '12px',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {/* Title */}
          <div>
            <label style={labelStyle}>
              제목 <span style={{ color: '#FFB300' }}>*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="예: Spring Security JWT 필터 구현"
              required
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(255, 179, 0, 0.4)')}
              onBlur={(e) => (e.target.style.borderColor = '#30363d')}
            />
          </div>

          {/* Language */}
          <div>
            <label style={labelStyle}>
              언어 <span style={{ color: '#FFB300' }}>*</span>
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              style={{
                ...inputStyle,
                cursor: 'pointer',
                appearance: 'none' as const,
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238b949e' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                paddingRight: '36px',
                fontFamily: "'JetBrains Mono', monospace",
              }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(255, 179, 0, 0.4)')}
              onBlur={(e) => (e.target.style.borderColor = '#30363d')}
            >
              {languages.map((lang) => (
                <option key={lang} value={lang} style={{ backgroundColor: '#161b22' }}>
                  {lang}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label style={labelStyle}>설명 (선택)</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="코드에 대한 설명을 입력하세요. 리뷰어가 컨텍스트를 이해하는 데 도움이 됩니다."
              rows={3}
              style={{
                ...inputStyle,
                resize: 'vertical' as const,
                lineHeight: '1.6',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(255, 179, 0, 0.4)')}
              onBlur={(e) => (e.target.style.borderColor = '#30363d')}
            />
          </div>

          {/* Code */}
          <div>
            <label style={labelStyle}>
              코드 <span style={{ color: '#FFB300' }}>*</span>
            </label>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder={`// 여기에 코드를 붙여넣으세요\npublic class Example {\n    // ...\n}`}
              rows={16}
              required
              style={{
                ...inputStyle,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '13px',
                lineHeight: '1.7',
                resize: 'vertical' as const,
              }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(255, 179, 0, 0.4)')}
              onBlur={(e) => (e.target.style.borderColor = '#30363d')}
            />
          </div>

          {/* AI notice */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              padding: '14px 16px',
              backgroundColor: 'rgba(255, 179, 0, 0.05)',
              border: '1px solid rgba(255, 179, 0, 0.2)',
              borderRadius: '8px',
            }}
          >
            <span style={{ fontSize: '16px', marginTop: '1px' }}>🤖</span>
            <p style={{ margin: 0, fontSize: '13px', color: '#8b949e', lineHeight: '1.6' }}>
              제출 후 <span style={{ color: '#FFB300', fontWeight: '600' }}>AI가 자동으로 코드를 분석</span>합니다.
              버그, 성능 문제, 보안 취약점, 코드 스타일에 대한 피드백을 받으실 수 있습니다.
            </p>
          </div>

          {/* Submit button */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={() => window.history.back()}
              style={{
                padding: '10px 20px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
                border: '1px solid #30363d',
                backgroundColor: 'transparent',
                color: '#8b949e',
                cursor: 'pointer',
              }}
            >
              취소
            </button>
            <button
              type="submit"
              disabled={!title.trim() || !code.trim()}
              style={{
                padding: '10px 24px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '700',
                border: 'none',
                cursor: title.trim() && code.trim() ? 'pointer' : 'not-allowed',
                color: '#0d1117',
                backgroundColor: title.trim() && code.trim() ? '#FFB300' : '#484f58',
                transition: 'all 0.2s',
              }}
            >
              코드 제출 및 AI 리뷰 요청
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
