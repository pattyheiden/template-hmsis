import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HMsis Sistemas • Desenvolvimento de sites',
  description: 'Crie sua loja virtual e aumente seu negócio. Leve sua marca para o mundo digital.',
  keywords: 'Desenvolvimento de sites, Desenvolvimento de lojas virtuais, E-commerce, Web design, Loja online, Plataforma de comércio eletrônico, Catálogo de produtos online',
  openGraph: {
    images: 'https://hmsis.com.br/og.png',
    title: 'HMsis Sistemas • Desenvolvimento de sites',
    description: 'Crie sua loja virtual e aumente seu negócio. Leve sua marca para o mundo digital.',
    url: 'https://hmsis.com.br/',
  },
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
          <div className='w-full top-0 bg-zinc-900'>
            <Header />
          </div>
         <div>
         {children}
         </div>
          <div className='block w-full bottom-0 justify-end items-end'>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
