import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Atlas Tacs',
  description: 'Created with v0Atlas TACS is a leading accounting and advisory firm committed to providing exceptional financial services           to businesses and individuals. With years of experience and a client-centric approach, we help you navigate complex financial landscapes and achieve your goals.',

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
