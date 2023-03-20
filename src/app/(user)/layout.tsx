import '../../styles/globals.css'

import { ReactNode } from 'react'
import Header from '@/components/Header'
import Banner from '@/components/Banner'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  )
}
