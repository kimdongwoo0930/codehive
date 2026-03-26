export interface Post {
  id: number
  title: string
  language: string
  code: string
  author: string
  createdAt: string
  likeCount: number
  reviewCount: number
  aiReviewed: boolean
  description?: string
}

export interface Review {
  id: number
  postId: number
  content: string
  isAi: boolean
  author: string
  createdAt: string
  likeCount: number
}
