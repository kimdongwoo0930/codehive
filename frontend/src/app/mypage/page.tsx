import { dummyPosts, dummyReviews } from '@/lib/dummyData'
import PostCard from '@/components/post/PostCard'
import ReviewCard from '@/components/review/ReviewCard'
import Link from 'next/link'

const MY_USERNAME = 'kim_dev'

export default function MyPage() {
  // TODO: const res = await fetch('/api/mypage', { headers: { Authorization: `Bearer ${token}` } })
  // TODO: const { posts, reviews } = await res.json()
  const myPosts = dummyPosts.filter((p) => p.author === MY_USERNAME)
  const myReviews = dummyReviews.filter(
    (r) => !r.isAi && myPosts.some((p) => p.id === r.postId)
  )

  return (
    <div
      style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '48px 24px',
      }}
    >
      {/* Profile Header */}
      <div
        style={{
          backgroundColor: '#161b22',
          border: '1px solid #30363d',
          borderRadius: '12px',
          padding: '32px',
          marginBottom: '32px',
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        <div
          style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            backgroundColor: '#FFB300',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            fontWeight: '800',
            color: '#0d1117',
            flexShrink: 0,
          }}
        >
          {MY_USERNAME[0].toUpperCase()}
        </div>
        <div style={{ flex: 1 }}>
          <h1
            style={{
              margin: '0 0 4px',
              fontSize: '22px',
              fontWeight: '700',
              color: '#e6edf3',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {MY_USERNAME}
          </h1>
          <p style={{ margin: '0 0 16px', fontSize: '14px', color: '#8b949e' }}>
            Java / Spring 개발자 · Codehive 멤버
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {[
              { value: myPosts.length, label: '코드 제출' },
              { value: myReviews.length, label: '받은 리뷰' },
              { value: myPosts.reduce((acc, p) => acc + p.likeCount, 0), label: '총 좋아요' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontSize: '20px',
                    fontWeight: '800',
                    color: '#FFB300',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: '12px', color: '#8b949e' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <Link
          href="/posts/new"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '9px 18px',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: '600',
            textDecoration: 'none',
            color: '#0d1117',
            backgroundColor: '#FFB300',
            flexShrink: 0,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          코드 제출
        </Link>
      </div>

      {/* My Posts */}
      <section style={{ marginBottom: '48px' }}>
        <h2
          style={{
            margin: '0 0 20px',
            fontSize: '18px',
            fontWeight: '700',
            color: '#e6edf3',
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          <span style={{ color: '#FFB300' }}>{'// '}</span>
          내 코드
          <span
            style={{
              marginLeft: '8px',
              padding: '2px 8px',
              borderRadius: '20px',
              fontSize: '12px',
              backgroundColor: '#21262d',
              color: '#8b949e',
            }}
          >
            {myPosts.length}
          </span>
        </h2>

        {myPosts.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
            }}
          >
            {myPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '48px',
              border: '1px dashed #30363d',
              borderRadius: '12px',
              color: '#484f58',
            }}
          >
            <p style={{ margin: '0 0 12px', fontSize: '16px' }}>아직 제출한 코드가 없습니다</p>
            <Link
              href="/posts/new"
              style={{ color: '#FFB300', textDecoration: 'none', fontSize: '14px' }}
            >
              첫 코드 제출하기 →
            </Link>
          </div>
        )}
      </section>

      {/* Received Reviews */}
      <section>
        <h2
          style={{
            margin: '0 0 20px',
            fontSize: '18px',
            fontWeight: '700',
            color: '#e6edf3',
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          <span style={{ color: '#FFB300' }}>{'// '}</span>
          받은 커뮤니티 리뷰
          <span
            style={{
              marginLeft: '8px',
              padding: '2px 8px',
              borderRadius: '20px',
              fontSize: '12px',
              backgroundColor: '#21262d',
              color: '#8b949e',
            }}
          >
            {myReviews.length}
          </span>
        </h2>

        {myReviews.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {myReviews.map((review) => {
              const post = myPosts.find((p) => p.id === review.postId)
              return (
                <div key={review.id}>
                  {post && (
                    <Link
                      href={`/posts/${post.id}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        color: '#8b949e',
                        textDecoration: 'none',
                        marginBottom: '6px',
                        padding: '3px 8px',
                        backgroundColor: '#161b22',
                        border: '1px solid #21262d',
                        borderRadius: '4px',
                      }}
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      {post.title}
                    </Link>
                  )}
                  <ReviewCard review={review} />
                </div>
              )
            })}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '48px',
              border: '1px dashed #30363d',
              borderRadius: '12px',
              color: '#484f58',
              fontSize: '14px',
            }}
          >
            아직 받은 리뷰가 없습니다
          </div>
        )}
      </section>
    </div>
  )
}
