import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Codehive — AI 코드 리뷰 커뮤니티',
  description: '코드를 공유하고 AI와 커뮤니티로부터 즉각적인 리뷰를 받으세요.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={jetbrainsMono.variable}>
      <body
        style={{
          backgroundColor: '#0d1117',
          color: '#c9d1d9',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Navbar />
        <main style={{ flex: 1, paddingTop: '64px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
