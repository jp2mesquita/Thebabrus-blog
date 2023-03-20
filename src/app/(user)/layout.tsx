import '../../styles/globals.css'

import { ReactNode } from 'react'
import Header from '@/components/Header'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
