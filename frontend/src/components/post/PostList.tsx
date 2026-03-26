import { Post } from '@/types'
import PostCard from './PostCard'

interface PostListProps {
  posts: Post[]
  columns?: 2 | 3 | 4
}

export default function PostList({ posts, columns = 3 }: PostListProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '16px',
      }}
      className="post-list-grid"
    >
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
