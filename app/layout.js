import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import './globals.css'
import Footer from './components/Footer'
import { ModalProvider } from '@/app/contexts/ModalContext';
import { NavBarContextProvider } from '@/app/contexts/NavBarContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'U 2 Can Que',
  description: 'BBQ Catering and Education',
  openGraph: {
    title: "U 2 Can Que Premium BBQ",
    description: "BBQ Takeout, Catering, and Education",
    url: "https://www.u2canque-takeout.com",
    images: 
      [
        {
        url: "https://www.u2canque-takeout.com/_next/image?url=%2Fimages%2FMeatloaf.jpeg&w=640&q=75",
        width: 800,
        height: 800,
        alt: "Smoked Meatloaf"
        }
      ],
    siteName: 'U 2 Can Que',
    locale: 'en_US',
    type: "website"
  }
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBarContextProvider>
          <NavBar />
        </NavBarContextProvider>
        <ModalProvider>
          {children}
        </ModalProvider>
        <Footer />
      </body>
    </html>
  )
}
