import { dummyPosts, dummyReviews } from '@/lib/dummyData'
import CodeBlock from '@/components/post/CodeBlock'
import ReviewList from '@/components/review/ReviewList'
import LanguageBadge from '@/components/ui/LanguageBadge'
import LikeButton from '@/components/ui/LikeButton'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CommentForm from './CommentForm'

export default async function PostDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params

  // TODO: const res = await fetch(`/api/posts/${id}`)
  // TODO: const post = await res.json()
  const post = dummyPosts.find((p) => p.id === Number(id))

  if (!post) {
    notFound()
  }

  // TODO: const reviewsRes = await fetch(`/api/posts/${id}/reviews`)
  // TODO: const reviews = await reviewsRes.json()
  const reviews = dummyReviews.filter((r) => r.postId === post.id)
  const aiReview = reviews.find((r) => r.isAi)
  const communityReviews = reviews.filter((r) => !r.isAi)

  return (
    <div
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '48px 24px',
      }}
    >
      {/* Back */}
      <Link
        href="/posts"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '14px',
          color: '#8b949e',
          textDecoration: 'none',
          marginBottom: '28px',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        코드 리뷰 목록
      </Link>

      {/* Post Header */}
      <div
        style={{
          backgroundColor: '#161b22',
          border: '1px solid #30363d',
          borderRadius: '12px',
          padding: '28px',
          marginBottom: '24px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '14px',
            flexWrap: 'wrap',
          }}
        >
          <LanguageBadge language={post.language} />
          {post.aiReviewed && (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '3px 10px',
                borderRadius: '20px',
                fontSize: '11px',
                fontWeight: '700',
                backgroundColor: 'rgba(255, 179, 0, 0.12)',
                color: '#FFB300',
                border: '1px solid rgba(255, 179, 0, 0.25)',
              }}
            >
              🤖 AI 리뷰 완료
            </span>
          )}
        </div>

        <h1
          style={{
            margin: '0 0 16px',
            fontSize: '26px',
            fontWeight: '700',
            color: '#e6edf3',
            lineHeight: '1.4',
          }}
        >
          {post.title}
        </h1>

        {post.description && (
          <p
            style={{
              margin: '0 0 16px',
              fontSize: '14px',
              color: '#8b949e',
              lineHeight: '1.7',
            }}
          >
            {post.description}
          </p>
        )}

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            paddingTop: '16px',
            borderTop: '1px solid #21262d',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#FFB300',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '13px',
                fontWeight: '700',
                color: '#0d1117',
              }}
            >
              {post.author[0].toUpperCase()}
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: '#e6edf3' }}>
                {post.author}
              </div>
              <div style={{ fontSize: '12px', color: '#484f58' }}>{post.createdAt}</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <LikeButton initialCount={post.likeCount} />
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '14px',
                color: '#8b949e',
                padding: '7px 14px',
                border: '1px solid #30363d',
                borderRadius: '8px',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              {reviews.length}
            </span>
          </div>
        </div>
      </div>

      {/* Code Block */}
      <div style={{ marginBottom: '24px' }}>
        <h2
          style={{
            margin: '0 0 16px',
            fontSize: '16px',
            fontWeight: '700',
            color: '#e6edf3',
          }}
        >
          <span style={{ color: '#FFB300' }}>{'// '}</span>
          코드
        </h2>
        <CodeBlock code={post.code} language={post.language} />
      </div>

      {/* AI Review Section */}
      {aiReview && (
        <div
          style={{
            backgroundColor: 'rgba(255, 179, 0, 0.05)',
            border: '1px solid rgba(255, 179, 0, 0.3)',
            borderLeft: '4px solid #FFB300',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '14px',
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#FFB300',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
              }}
            >
              🤖
            </div>
            <div>
              <div
                style={{
                  fontSize: '15px',
                  fontWeight: '700',
                  color: '#FFB300',
                }}
              >
                AI 코드 리뷰
              </div>
              <div style={{ fontSize: '12px', color: '#8b949e' }}>{aiReview.createdAt}</div>
            </div>
            <span
              style={{
                marginLeft: 'auto',
                padding: '3px 8px',
                borderRadius: '6px',
                fontSize: '11px',
                fontWeight: '700',
                backgroundColor: 'rgba(255, 179, 0, 0.15)',
                color: '#FFB300',
              }}
            >
              자동 분석
            </span>
          </div>
          <p
            style={{
              margin: 0,
              fontSize: '14px',
              color: '#c9d1d9',
              lineHeight: '1.8',
            }}
          >
            {aiReview.content}
          </p>
        </div>
      )}

      {/* Community Reviews */}
      <div style={{ marginBottom: '32px' }}>
        <h2
          style={{
            margin: '0 0 16px',
            fontSize: '18px',
            fontWeight: '600',
            color: '#e6edf3',
          }}
        >
          <span style={{ color: '#FFB300' }}>{'// '}</span>
          커뮤니티 리뷰
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
            {communityReviews.length}
          </span>
        </h2>
        <ReviewList reviews={communityReviews} />
      </div>

      {/* Comment Form */}
      <CommentForm />
    </div >
  )
}
