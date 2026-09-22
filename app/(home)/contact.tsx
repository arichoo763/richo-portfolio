import Link from 'next/link'
import { ArrowUpRight, FileText, Radio } from 'lucide-react'

export default function Contact() {
  return (
    <section className="border-t border-slate-800 bg-slate-950 py-20">
      <div className="page-shell">
        <div className="tech-panel relative overflow-hidden p-7 sm:p-9 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="absolute inset-y-0 right-0 hidden w-1/3 grid-shell opacity-40 lg:block" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <p className="terminal-label flex items-center gap-2"><Radio size={13} /> Contact channel</p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Open to infrastructure and operations conversations.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              For verified contact details and a fuller professional profile, use the CV included with this portfolio.
            </p>
          </div>
          <div className="relative mt-7 flex shrink-0 flex-wrap gap-3 lg:mt-0">
            <Link
              href="/file/cv.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              <FileText size={17} /> View CV <ArrowUpRight size={15} />
            </Link>
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-200"
            >
              Review experience
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
