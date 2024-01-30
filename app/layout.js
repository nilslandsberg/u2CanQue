import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import './globals.css'
import Footer from './components/Footer'
import { ModalProvider } from '@/app/contexts/ModalContext';
import { NavBarContextProvider } from '@/app/contexts/NavBarContext';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'U 2 Can Que',
  description: 'BBQ Catering and Education',
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
