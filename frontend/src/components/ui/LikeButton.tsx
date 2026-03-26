'use client'

import { useState } from 'react'

interface LikeButtonProps {
  initialCount: number
  size?: 'sm' | 'md' | 'lg'
}

export default function LikeButton({ initialCount, size = 'md' }: LikeButtonProps) {
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(initialCount)

  const handleClick = () => {
    if (liked) {
      setLiked(false)
      setCount(prev => prev - 1)
    } else {
      setLiked(true)
      setCount(prev => prev + 1)
    }
  }

  const iconSize = size === 'sm' ? '14px' : size === 'lg' ? '20px' : '16px'
  const fontSize = size === 'sm' ? '12px' : size === 'lg' ? '16px' : '14px'
  const padding = size === 'sm' ? '5px 10px' : size === 'lg' ? '10px 20px' : '7px 14px'

  return (
    <button
      onClick={handleClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding,
        borderRadius: '8px',
        border: `1px solid ${liked ? 'rgba(255, 179, 0, 0.4)' : '#30363d'}`,
        backgroundColor: liked ? 'rgba(255, 179, 0, 0.1)' : 'transparent',
        color: liked ? '#FFB300' : '#8b949e',
        fontSize,
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.2s',
      }}
      onMouseEnter={(e) => {
        if (!liked) {
          e.currentTarget.style.borderColor = 'rgba(255, 179, 0, 0.3)'
          e.currentTarget.style.color = '#FFB300'
        }
      }}
      onMouseLeave={(e) => {
        if (!liked) {
          e.currentTarget.style.borderColor = '#30363d'
          e.currentTarget.style.color = '#8b949e'
        }
      }}
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill={liked ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
      {count}
    </button>
  )
}
