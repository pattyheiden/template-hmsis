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
      <head>
        <title>HMsis Sistemas • Desenvolvimento de sites</title>
        <meta name="description" content="Crie sua loja virtual e aumente seu negócio. Leve sua marca para o mundo digital." />
          <meta name="google-site-verification" content="I_yi9LXA_q33rXwmYWgsPFlXCm6WkapYPfpz-184pIw" />
          <script dangerouslySetInnerHTML={{
          __html: ` 
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PLL2K4ZQ');`}}>
        </script>
      </head>
      <body className={montserrat.className}>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PLL2K4ZQ" height="0" width="0"></iframe>
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
