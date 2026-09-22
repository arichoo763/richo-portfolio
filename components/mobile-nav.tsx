'use client'

import { Download, Menu, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from './ui/button'

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Experience', '/experience'],
  ['Expertise', '/skill'],
  ['Projects', '/portfolio'],
] as const

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          className="border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white md:hidden"
          size="icon"
          variant="outline"
          aria-label="Open navigation"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="border-slate-800 bg-slate-950 text-slate-100">
        <SheetHeader className="border-b border-slate-800 px-6 py-5">
          <SheetTitle className="flex items-center gap-3 text-left text-white">
            <span className="grid size-8 place-items-center rounded-md border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
              <ShieldCheck size={17} />
            </span>
            <span>
              <span className="block text-sm font-bold">RICHO ARMANDO</span>
              <span className="block font-mono text-[9px] tracking-[0.16em] text-slate-400">SYSTEM NAVIGATION</span>
            </span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-2 px-6 pt-4 text-sm font-semibold">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`rounded-lg border px-4 py-3 transition ${pathname === href ? 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300' : 'border-transparent text-slate-300 hover:border-slate-800 hover:bg-slate-900 hover:text-white'}`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/file/cv.pdf"
            target="_blank"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-cyan-400 px-4 py-3 font-bold text-slate-950 hover:bg-cyan-300"
          >
            <Download size={15} /> Download CV
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
