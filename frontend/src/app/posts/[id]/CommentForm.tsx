'use client'

import { useState } from 'react'

export default function CommentForm() {
  const [content, setContent] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim()) return
    // TODO: POST /api/posts/:id/reviews
    console.log('Review submitted:', content)
    setSubmitted(true)
    setContent('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div
      style={{
        backgroundColor: '#161b22',
        border: '1px solid #30363d',
        borderRadius: '12px',
        padding: '24px',
      }}
    >
      <h2
        style={{
          margin: '0 0 16px',
          fontSize: '16px',
          fontWeight: '600',
          color: '#e6edf3',
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        <span style={{ color: '#FFB300' }}>{'// '}</span>
        리뷰 작성
      </h2>

      {submitted ? (
        <div
          style={{
            padding: '16px',
            borderRadius: '8px',
            backgroundColor: 'rgba(46, 160, 67, 0.1)',
            border: '1px solid rgba(46, 160, 67, 0.3)',
            color: '#3fb950',
            fontSize: '14px',
            textAlign: 'center',
          }}
        >
          ✓ 리뷰가 등록되었습니다!
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="코드에 대한 리뷰를 작성해주세요..."
            rows={4}
            style={{
              width: '100%',
              padding: '12px 16px',
              backgroundColor: '#0d1117',
              border: '1px solid #30363d',
              borderRadius: '8px',
              color: '#c9d1d9',
              fontSize: '14px',
              fontFamily: 'inherit',
              lineHeight: '1.6',
              resize: 'vertical',
              outline: 'none',
              boxSizing: 'border-box',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'rgba(255, 179, 0, 0.4)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#30363d'
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="submit"
              disabled={!content.trim()}
              style={{
                padding: '9px 20px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                border: 'none',
                cursor: content.trim() ? 'pointer' : 'not-allowed',
                color: '#0d1117',
                backgroundColor: content.trim() ? '#FFB300' : '#484f58',
                transition: 'all 0.2s',
              }}
            >
              리뷰 등록
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
