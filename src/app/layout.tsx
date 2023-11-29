import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HMsis Sistemas • Desenvolvimento de sites',
  description: 'Crie sua loja virtual e aumente seu negócio. Leve sua marca para o mundo digital.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div >
        {children}
        </div>
      </body>
    </html>
  )
}
