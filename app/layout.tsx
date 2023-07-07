import './globals.css'
import { Inter } from 'next/font/google'

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
