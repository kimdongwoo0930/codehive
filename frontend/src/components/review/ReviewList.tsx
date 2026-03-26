import { Review } from '@/types'
import ReviewCard from './ReviewCard'

interface ReviewListProps {
  reviews: Review[]
}

export default function ReviewList({ reviews }: ReviewListProps) {
  if (reviews.length === 0) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '48px',
          color: '#484f58',
          fontSize: '14px',
          border: '1px dashed #30363d',
          borderRadius: '12px',
        }}
      >
        아직 리뷰가 없습니다. 첫 번째 리뷰를 남겨보세요!
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  )
}
