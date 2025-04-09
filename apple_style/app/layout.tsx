import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mohammed Saabiq Saha | Portfolio',
  description: 'Portfolio website of Mohammed Saabiq Saha - founder • data scientist • student',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className="font-apple bg-apple-light text-apple-dark">
        {children}
      </body>
    </html>
  )
} 