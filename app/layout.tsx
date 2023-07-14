import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Valentin Schnabl',
  description: 'Valentin Schnabl (B.Sc.), full stack software engineer, currently in Master Software Engineering & Internet Computing at TU Wien',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className='scroll-smooth'>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NQ6JBNL8JY"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
      <head>
      <meta property="og:site_name" content="Valentin Schnabl" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
