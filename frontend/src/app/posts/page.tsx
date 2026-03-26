'use client'

import { useState } from 'react'
import { dummyPosts } from '@/lib/dummyData'
import PostCard from '@/components/post/PostCard'
import Link from 'next/link'

const languages = ['전체', 'Java', 'Python', 'TypeScript', 'JavaScript', 'Go', 'Rust']

export default function PostsPage() {
  const [selectedLanguage, setSelectedLanguage] = useState('전체')
  const [searchQuery, setSearchQuery] = useState('')

  // TODO: const res = await fetch(`/api/posts?language=${selectedLanguage}&q=${searchQuery}`)
  // TODO: const posts = await res.json()
  const filteredPosts = dummyPosts.filter((post) => {
    const matchesLanguage = selectedLanguage === '전체' || post.language === selectedLanguage
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.language.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.description || '').toLowerCase().includes(searchQuery.toLowerCase())
    return matchesLanguage && matchesSearch
  })

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '48px 24px',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginBottom: '36px',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div>
          <h1
            style={{
              margin: '0 0 8px',
              fontSize: '28px',
              fontWeight: '700',
              color: '#e6edf3',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            <span style={{ color: '#FFB300' }}>{'// '}</span>
            코드 리뷰
          </h1>
          <p style={{ margin: 0, fontSize: '14px', color: '#8b949e' }}>
            {filteredPosts.length}개의 코드 리뷰
          </p>
        </div>
        <Link
          href="/posts/new"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '700',
            textDecoration: 'none',
            color: '#0d1117',
            backgroundColor: '#FFB300',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          코드 제출
        </Link>
      </div>

      {/* Search */}
      <div style={{ marginBottom: '20px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 16px',
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            maxWidth: '480px',
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8b949e" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="제목, 언어, 설명으로 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#c9d1d9',
              fontSize: '14px',
              fontFamily: 'inherit',
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{
                background: 'none',
                border: 'none',
                color: '#8b949e',
                cursor: 'pointer',
                padding: '0',
                display: 'flex',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Language filter tabs */}
      <div
        style={{
          display: 'flex',
          gap: '6px',
          flexWrap: 'wrap',
          marginBottom: '28px',
        }}
      >
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => setSelectedLanguage(lang)}
            style={{
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: '500',
              border: `1px solid ${selectedLanguage === lang ? 'rgba(255, 179, 0, 0.5)' : '#30363d'}`,
              backgroundColor: selectedLanguage === lang ? 'rgba(255, 179, 0, 0.12)' : 'transparent',
              color: selectedLanguage === lang ? '#FFB300' : '#8b949e',
              cursor: 'pointer',
              fontFamily: selectedLanguage === lang ? "'JetBrains Mono', monospace" : 'inherit',
              transition: 'all 0.15s',
            }}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Posts grid */}
      {filteredPosts.length > 0 ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}
          className="post-list-grid"
        >
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div
          style={{
            textAlign: 'center',
            padding: '80px 24px',
            color: '#484f58',
          }}
        >
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
          <p style={{ fontSize: '16px', margin: '0 0 8px', color: '#8b949e' }}>
            검색 결과가 없습니다
          </p>
          <p style={{ fontSize: '14px', margin: 0 }}>
            다른 검색어나 언어 필터를 시도해보세요
          </p>
        </div>
      )}
    </div>
  )
}
