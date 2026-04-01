import Link from 'next/link'
import { dummyPosts } from '@/lib/dummyData'
import PostCard from '@/components/post/PostCard'
import FeatureCards from '@/components/ui/FeatureCards'

export default function HomePage() {
  // TODO: const res = await fetch('/api/posts?limit=4')
  // TODO: const posts = await res.json()
  const recentPosts = dummyPosts.slice(0, 4)

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background SVG honeycomb pattern top-right */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '500px',
          height: '500px',
          opacity: 0.03,
          pointerEvents: 'none',
          zIndex: 0,
        }}
        viewBox="0 0 200 200"
      >
        {[0, 1, 2, 3, 4].map((row) =>
          [0, 1, 2, 3, 4].map((col) => {
            const x = col * 35 + (row % 2 === 0 ? 0 : 17.5)
            const y = row * 30 + 14
            return (
              <polygon
                key={`${row}-${col}`}
                points={`${x},${y - 14} ${x + 12},${y - 7} ${x + 12},${y + 7} ${x},${y + 14} ${x - 12},${y + 7} ${x - 12},${y - 7}`}
                fill="none"
                stroke="#FFB300"
                strokeWidth="1"
              />
            )
          })
        )}
      </svg>

      {/* Background SVG honeycomb pattern bottom-left */}
      <svg
        style={{
          position: 'absolute',
          bottom: '10%',
          left: 0,
          width: '400px',
          height: '400px',
          opacity: 0.025,
          pointerEvents: 'none',
          zIndex: 0,
        }}
        viewBox="0 0 200 200"
      >
        {[0, 1, 2, 3, 4].map((row) =>
          [0, 1, 2, 3, 4].map((col) => {
            const x = col * 35 + (row % 2 === 0 ? 0 : 17.5)
            const y = row * 30 + 14
            return (
              <polygon
                key={`bg2-${row}-${col}`}
                points={`${x},${y - 14} ${x + 12},${y - 7} ${x + 12},${y + 7} ${x},${y + 14} ${x - 12},${y + 7} ${x - 12},${y - 7}`}
                fill="none"
                stroke="#FFB300"
                strokeWidth="1"
              />
            )
          })
        )}

      </svg>

      {/* Hero Section */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 24px 100px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Left: Text content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Badge */}
          <div className="animate-fade-in-up" style={{ display: 'inline-flex', animationDelay: '0.1s' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 14px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '600',
                backgroundColor: 'rgba(255, 179, 0, 0.1)',
                color: '#FFB300',
                border: '1px solid rgba(255, 179, 0, 0.25)',
              }}
            >
              ✨ AI 기반 코드 리뷰 플랫폼
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              margin: 0,
              fontSize: '52px',
              fontWeight: '800',
              lineHeight: '1.15',
              color: '#e6edf3',
              letterSpacing: '-1px',
            }}
          >
            <span className="animate-fade-in-up" style={{ display: 'block', animationDelay: '0.3s' }}>
              코드를 공유하고
            </span>
            <span className="animate-fade-in-up" style={{ display: 'block', animationDelay: '0.55s' }}>
              <span style={{ color: '#FFB300' }}>AI 리뷰</span>를 받으세요
            </span>
          </h1>

          {/* Description */}
          <p
            className="animate-fade-in-up"
            style={{
              margin: 0,
              fontSize: '17px',
              color: '#8b949e',
              lineHeight: '1.8',
              animationDelay: '0.75s',
            }}
          >
            Codehive는 개발자들이 코드를 공유하고 AI와 커뮤니티로부터
            즉각적인 피드백을 받을 수 있는 코드 리뷰 플랫폼입니다.
            더 나은 코드를 작성하고 함께 성장하세요.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', animationDelay: '0.9s' }}>
            <Link
              href="/posts/new"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '700',
                textDecoration: 'none',
                color: '#0d1117',
                backgroundColor: '#FFB300',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              코드 제출하기
            </Link>
            <Link
              href="/posts"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '600',
                textDecoration: 'none',
                color: '#c9d1d9',
                backgroundColor: 'transparent',
                border: '1px solid #30363d',
              }}
            >
              리뷰 둘러보기
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

        </div>

        {/* Right: Code preview card */}
        <div className="animate-fade-in-up" style={{ display: 'flex', flexDirection: 'column', animationDelay: '0.4s' }}>
          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '12px 12px 0 0',
              overflow: 'hidden',
            }}
          >
            {/* Window chrome */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 16px',
                backgroundColor: '#0d1117',
                borderBottom: '1px solid #21262d',
                gap: '8px',
              }}
            >
              <div style={{ display: 'flex', gap: '6px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F57' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#28CA42' }} />
              </div>
              <span
                style={{
                  fontSize: '12px',
                  color: '#8b949e',
                  marginLeft: '8px',
                }}
              >
                UserService.java
              </span>
            </div>
            {/* Code content */}
            <pre
              style={{
                margin: 0,
                padding: '20px',
                fontSize: '13px',
                lineHeight: '1.7',
                fontFamily: "'JetBrains Mono', monospace",
                color: '#c9d1d9',
                overflow: 'auto',
                backgroundColor: '#0d1117',
              }}
            >
              <code>
                <span style={{ color: '#484f58' }}>1  </span>
                <span style={{ color: '#ff7b72' }}>public </span>
                <span style={{ color: '#79c0ff' }}>User </span>
                <span style={{ color: '#d2a8ff' }}>findById</span>
                <span style={{ color: '#c9d1d9' }}>(Long id) {'{'}</span>
                {'\n'}
                <span style={{ color: '#484f58' }}>2  </span>
                {'  '}
                <span style={{ color: '#ff7b72' }}>return </span>
                <span style={{ color: '#c9d1d9' }}>userRepository</span>
                {'\n'}
                <span style={{ color: '#484f58' }}>3  </span>
                {'    '}
                <span style={{ color: '#c9d1d9' }}>.findById(id)</span>
                {'\n'}
                <span style={{ color: '#484f58' }}>4  </span>
                {'    '}
                <span style={{ color: '#c9d1d9' }}>.orElse(</span>
                <span style={{ color: '#79c0ff' }}>null</span>
                <span style={{ color: '#c9d1d9' }}>)</span>
                <span style={{ color: '#8b949e' }}> {'//'} ⚠️</span>
                {'\n'}
                <span style={{ color: '#484f58' }}>5  </span>
                <span style={{ color: '#c9d1d9' }}>{'}'}</span>
              </code>
            </pre>
          </div>

          {/* AI Review box */}
          <div
            style={{
              backgroundColor: 'rgba(255, 179, 0, 0.06)',
              border: '1px solid rgba(255, 179, 0, 0.25)',
              borderTop: 'none',
              borderRadius: '0 0 12px 12px',
              padding: '16px 20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '10px',
              }}
            >
              <span style={{ fontSize: '14px' }}>🤖</span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: '800',
                  color: '#FFB300',
                }}
              >
                AI 코드 리뷰
              </span>
              <span
                style={{
                  padding: '1px 6px',
                  borderRadius: '4px',
                  fontSize: '10px',
                  fontWeight: '700',
                  backgroundColor: 'rgba(255, 179, 0, 0.15)',
                  color: '#FFB300',
                }}
              >
                즉시 분석
              </span>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: '13px',
                color: '#c9d1d9',
                lineHeight: '1.6',
              }}
            >
              <span style={{ color: '#ffa657', fontFamily: "'JetBrains Mono', monospace" }}>
                .orElse(null)
              </span>{' '}
              대신{' '}
              <span style={{ color: '#7ee787', fontFamily: "'JetBrains Mono', monospace" }}>
                .orElseThrow()
              </span>
              를 사용하세요. null 반환은 NPE 위험이 있습니다.
            </p>
          </div>
        </div>
      </section >

      {/* Divider */}
      < div style={{ borderTop: '1px solid #21262d', margin: '0 24px' }
      } />

      {/* Latest Reviews Feed */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 24px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '32px',
          }}
        >
          <div>
            <h2
              style={{
                margin: '0 0 8px',
                fontSize: '26px',
                fontWeight: '600',
                color: '#e6edf3',

              }}
            >
              <span style={{ color: '#FFB300' }}>{'// '}</span>
              최근 코드 리뷰
            </h2>
            <p style={{ margin: 0, fontSize: '14px', color: '#8b949e' }}>
              커뮤니티에서 공유된 최신 코드 리뷰를 확인하세요
            </p>
          </div>
          <Link
            href="/posts"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              textDecoration: 'none',
              color: '#FFB300',
              border: '1px solid rgba(255, 179, 0, 0.3)',
              backgroundColor: 'transparent',
            }}
          >
            전체 보기
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
          }}
        >
          {recentPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderTop: '1px solid #21262d', margin: '0 24px' }} />

      {/* Features Section */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 24px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            style={{
              margin: '0 0 12px',
              fontSize: '32px',
              fontWeight: '700',
              color: '#e6edf3',
            }}
          >
            <span style={{ color: '#FFB300' }}>{'// '}</span>
            주요 기능
          </h2>
          <p style={{ margin: 0, fontSize: '16px', color: '#8b949e' }}>
            Codehive가 제공하는 핵심 기능들을 만나보세요
          </p>
        </div>

        <FeatureCards />
      </section>

      {/* CTA Banner */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto 80px',
          padding: '0 24px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            backgroundColor: '#161b22',
            border: '1px solid rgba(255, 179, 0, 0.3)',
            borderRadius: '16px',
            padding: '48px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #161b22 0%, rgba(255, 179, 0, 0.05) 100%)',
          }}
        >
          <h2
            style={{
              margin: '0 0 12px',
              fontSize: '28px',
              fontWeight: '700',
              color: '#e6edf3',
            }}
          >
            지금 바로 시작하세요
          </h2>
          <p
            style={{
              margin: '0 0 28px',
              fontSize: '16px',
              color: '#8b949e',
            }}
          >
            코드를 제출하고 AI와 커뮤니티의 피드백으로 성장하세요
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <Link
              href="/auth/register"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '700',
                textDecoration: 'none',
                color: '#0d1117',
                backgroundColor: '#FFB300',
              }}
            >
              무료로 시작하기
            </Link>
            <Link
              href="/posts"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '600',
                textDecoration: 'none',
                color: '#c9d1d9',
                border: '1px solid #30363d',
                backgroundColor: 'transparent',
              }}
            >
              둘러보기
            </Link>
          </div>
        </div>
      </section>
    </div >
  )
}
