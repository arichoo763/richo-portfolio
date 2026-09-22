import Link from 'next/link'
import { Download, ShieldCheck } from 'lucide-react'

const footerLinks = [
  ['About', '/about'],
  ['Experience', '/experience'],
  ['Expertise', '/skill'],
  ['Projects', '/portfolio'],
] as const

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="page-shell grid gap-10 py-10 md:grid-cols-[1.25fr_.75fr] md:items-end">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 text-cyan-300"><ShieldCheck size={18} /></span>
            <div>
              <h3 className="text-sm font-bold text-white">Richo Armando</h3>
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">NOC / IT Infrastructure Engineer</p>
            </div>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
            Portfolio focused on data center operations, server infrastructure, virtualization, network support, and monitoring.
          </p>
        </div>

        <div className="md:text-right">
          <div className="flex flex-wrap gap-x-5 gap-y-3 md:justify-end">
            {footerLinks.map(([label, href]) => <Link key={href} href={href} className="text-sm font-semibold text-slate-400 transition hover:text-cyan-300">{label}</Link>)}
          </div>
          <Link href="/file/cv.pdf" target="_blank" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 hover:text-cyan-200">
            <Download size={15} /> Contact details available in CV
          </Link>
        </div>
      </div>
      <div className="border-t border-slate-900">
        <div className="page-shell flex flex-col gap-2 py-5 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <span>Infrastructure portfolio / operational profile</span>
          <span>© {new Date().getFullYear()} Richo Armando</span>
        </div>
      </div>
    </footer>
  )
}
