import { Review } from '@/types'

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div
      style={{
        backgroundColor: review.isAi ? 'rgba(255, 179, 0, 0.04)' : '#161b22',
        border: `1px solid ${review.isAi ? 'rgba(255, 179, 0, 0.25)' : '#30363d'}`,
        borderLeft: `3px solid ${review.isAi ? '#FFB300' : '#30363d'}`,
        borderRadius: '12px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: review.isAi ? '#FFB300' : '#21262d',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: review.isAi ? '14px' : '13px',
              fontWeight: '700',
              color: review.isAi ? '#0d1117' : '#8b949e',
              border: review.isAi ? 'none' : '1px solid #30363d',
            }}
          >
            {review.isAi ? '🤖' : review.author[0].toUpperCase()}
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: review.isAi ? '#FFB300' : '#e6edf3',
                }}
              >
                {review.author}
              </span>
              {review.isAi && (
                <span
                  style={{
                    padding: '1px 7px',
                    borderRadius: '20px',
                    fontSize: '10px',
                    fontWeight: '700',
                    backgroundColor: 'rgba(255, 179, 0, 0.15)',
                    color: '#FFB300',
                    letterSpacing: '0.04em',
                  }}
                >
                  AI
                </span>
              )}
            </div>
            <span style={{ fontSize: '12px', color: '#484f58' }}>{review.createdAt}</span>
          </div>
        </div>

        {/* Like count */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            fontSize: '13px',
            color: '#8b949e',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          {review.likeCount}
        </div>
      </div>

      {/* Content */}
      <p
        style={{
          margin: 0,
          fontSize: '14px',
          color: '#c9d1d9',
          lineHeight: '1.7',
        }}
      >
        {review.content}
      </p>
    </div>
  )
}
