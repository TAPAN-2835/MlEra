import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'MLera — Machine Learning, Finally Structured',
  description: 'Stop jumping between random tutorials. MLera is a structured Machine Learning operating system that guides you step-by-step, builds deep conceptual clarity, and eliminates content chaos.',
  keywords: ['machine learning', 'structured learning', 'ML education', 'AI learning platform'],
  icons: {
    icon: '/mlera-logo.png',
    apple: '/mlera-logo.png',
  },
  openGraph: {
    title: 'MLera — Machine Learning, Finally Structured',
    description: 'A structured ML operating system that guides you step-by-step.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
