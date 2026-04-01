'use client'

import { useEffect, useRef, useState } from 'react'

const features = [
  {
    icon: '🤖',
    title: 'AI 즉시 리뷰',
    description:
      '코드를 제출하는 순간 AI가 버그, 성능 문제, 보안 취약점, 코드 스타일을 분석하여 즉각적인 피드백을 제공합니다.',
    highlight: '빠른 응답 속도',
  },
  {
    icon: '👥',
    title: '커뮤니티 리뷰',
    description:
      '경험 많은 개발자들로부터 심층적인 코드 리뷰를 받으세요. 다양한 관점에서 코드의 품질을 높일 수 있습니다.',
    highlight: '전문 개발자 커뮤니티',
  },
  {
    icon: '📈',
    title: '성장 히스토리',
    description:
      '내가 받은 리뷰와 제출한 코드를 한눈에 확인하세요. 시간에 따른 코드 품질 향상을 추적할 수 있습니다.',
    highlight: '성장 트래킹',
  },
]

export default function FeatureCards() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
      }}
    >
      {features.map((feature, i) => (
        <FeatureCard key={feature.title} feature={feature} visible={visible} delay={i * 0.15} />
      ))}
    </div>
  )
}

function FeatureCard({
  feature,
  visible,
  delay,
}: {
  feature: (typeof features)[0]
  visible: boolean
  delay: number
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#161b22',
        border: `1px solid ${hovered ? 'rgba(255, 179, 0, 0.45)' : '#30363d'}`,
        borderRadius: '12px',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        transform: visible
          ? hovered ? 'translateY(-6px)' : 'translateY(0)'
          : 'translateY(24px)',
        opacity: visible ? 1 : 0,
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s, border-color 0.2s ease, box-shadow 0.2s ease`,
        boxShadow: hovered ? '0 8px 24px rgba(0, 0, 0, 0.4)' : 'none',
        cursor: 'default',
      }}
    >
      <div style={{ fontSize: '36px' }}>{feature.icon}</div>
      <div>
        <h3
          style={{
            margin: '0 0 8px',
            fontSize: '18px',
            fontWeight: '700',
            color: '#e6edf3',
          }}
        >
          {feature.title}
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: '14px',
            color: '#8b949e',
            lineHeight: '1.7',
          }}
        >
          {feature.description}
        </p>
      </div>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '4px 10px',
          borderRadius: '6px',
          fontSize: '12px',
          fontWeight: '600',
          backgroundColor: 'rgba(255, 179, 0, 0.1)',
          color: '#FFB300',
          alignSelf: 'flex-start',
        }}
      >
        {feature.highlight}
      </div>
    </div>
  )
}
