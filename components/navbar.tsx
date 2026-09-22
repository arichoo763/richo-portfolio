'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Download, ShieldCheck } from 'lucide-react'
import { MobileNav } from './mobile-nav'

const links = [
  ['About', '/about'],
  ['Experience', '/experience'],
  ['Expertise', '/skill'],
  ['Projects', '/portfolio'],
] as const

export default function NavBar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/90 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Richo Armando home">
          <span className="grid size-9 place-items-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 transition group-hover:border-cyan-300/60 group-hover:bg-cyan-400/15">
            <ShieldCheck size={19} />
          </span>
          <span>
            <span className="block text-sm font-bold tracking-tight text-white">RICHO ARMANDO</span>
            <span className="block font-mono text-[9px] font-medium tracking-[0.17em] text-slate-400">INFRASTRUCTURE OPERATIONS</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(([label, href]) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${active ? 'bg-cyan-400/10 text-cyan-300' : 'text-slate-400 hover:bg-slate-900 hover:text-white'}`}
              >
                {label}
              </Link>
            )
          })}
          <Link
            className="ml-3 inline-flex items-center gap-2 rounded-md border border-cyan-400/30 bg-cyan-400 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            href="/file/cv.pdf"
            target="_blank"
          >
            <Download size={15} /> Download CV
          </Link>
        </div>

        <MobileNav />
      </div>
    </nav>
  )
}
