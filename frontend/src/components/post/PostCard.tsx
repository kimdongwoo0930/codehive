import Link from 'next/link'
import { Post } from '@/types'
import LanguageBadge from '@/components/ui/LanguageBadge'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/posts/${post.id}`} style={{ textDecoration: 'none', display: 'block' }}>
      <div
        className="post-card"
        style={{
          backgroundColor: '#161b22',
          border: '1px solid #30363d',
          borderRadius: '12px',
          padding: '20px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <LanguageBadge language={post.language} size="sm" />
          {post.aiReviewed && (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '2px 8px',
                borderRadius: '20px',
                fontSize: '11px',
                fontWeight: '600',
                backgroundColor: 'rgba(255, 179, 0, 0.12)',
                color: '#FFB300',
                border: '1px solid rgba(255, 179, 0, 0.25)',
              }}
            >
              🤖 AI 리뷰
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          style={{
            margin: 0,
            fontSize: '16px',
            fontWeight: '600',
            color: '#e6edf3',
            fontFamily: "'JetBrains Mono', monospace",
            lineHeight: '1.4',
          }}
        >
          {post.title}
        </h3>

        {/* Description */}
        {post.description && (
          <p
            style={{
              margin: 0,
              fontSize: '13px',
              color: '#8b949e',
              lineHeight: '1.6',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              flex: 1,
            }}
          >
            {post.description}
          </p>
        )}

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 'auto',
            paddingTop: '12px',
            borderTop: '1px solid #21262d',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div
              style={{
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                backgroundColor: '#FFB300',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                fontWeight: '700',
                color: '#0d1117',
              }}
            >
              {post.author[0].toUpperCase()}
            </div>
            <span style={{ fontSize: '13px', color: '#8b949e' }}>{post.author}</span>
            <span style={{ fontSize: '13px', color: '#484f58', margin: '0 4px' }}>·</span>
            <span style={{ fontSize: '13px', color: '#484f58' }}>{post.createdAt}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Likes */}
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '12px',
                color: '#8b949e',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {post.likeCount}
            </span>

            {/* Reviews */}
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '12px',
                color: '#8b949e',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              {post.reviewCount}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
