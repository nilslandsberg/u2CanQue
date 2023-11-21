import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import './globals.css'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'U 2 Can Que',
  description: 'BBQ Catering and Education',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
