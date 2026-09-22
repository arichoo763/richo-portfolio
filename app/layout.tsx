import type { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'
import NavBar from '@/components/navbar'
import Footer from './(home)/footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Richo Armando | IT Infrastructure Engineer',
  description: 'Network Operations Center and IT Infrastructure portfolio focused on data center, server, virtualization, network, and monitoring operations.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 antialiased">
        <NavBar />
        <main>{children}</main>
        <NextTopLoader color="#22d3ee" height={2} showSpinner={false} />
        <Footer />
      </body>
    </html>
  )
}
