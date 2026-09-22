import Link from 'next/link'
import {
  Activity,
  ArrowRight,
  Box,
  Cable,
  Database,
  Download,
  Gauge,
  MonitorCog,
  Network,
  Server,
  ShieldCheck,
  Terminal,
} from 'lucide-react'
import Contact from './contact'

const statusRows = [
  ['Data Center', 'Server deployment & hardware'],
  ['Virtualization', 'Proxmox VE / VMware ESXi'],
  ['Network Edge', 'FortiGate / MikroTik'],
  ['Monitoring', 'Zabbix / health checks'],
] as const

const capabilities = [
  { icon: Server, label: 'Server' },
  { icon: Box, label: 'Virtualization' },
  { icon: Network, label: 'Network' },
  { icon: ShieldCheck, label: 'Security' },
  { icon: MonitorCog, label: 'Monitoring' },
] as const

const focusAreas = [
  {
    icon: Activity,
    number: '01',
    title: 'NOC Operations',
    text: 'Monitoring, alert triage, structured escalation, and operational visibility across infrastructure services.',
    href: '/experience',
    label: 'View operational scope',
  },
  {
    icon: Server,
    number: '02',
    title: 'Infrastructure Stack',
    text: 'Physical servers, virtualization, Linux and Windows platforms, network infrastructure, security, and backup awareness.',
    href: '/skill',
    label: 'Explore technical expertise',
  },
  {
    icon: Gauge,
    number: '03',
    title: 'Technical Focus',
    text: 'Practical work across virtualization operations, network troubleshooting, firewall policy support, and Zabbix monitoring.',
    href: '/portfolio',
    label: 'See selected projects',
  },
] as const

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950">
        <div className="absolute inset-0 grid-shell opacity-55" aria-hidden="true" />
        <div className="hero-motion" aria-hidden="true">
          <div className="moving-grid" />
          <div className="network-lines" />
          <div className="node-cloud" />
          <div className="data-pulse" />
          <div className="scan-band" />
        </div>
        <div className="absolute left-[12%] top-[8%] h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden="true" />
        <div className="absolute right-[10%] top-[22%] h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" aria-hidden="true" />

        <div className="page-shell relative grid min-h-[680px] gap-12 py-16 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:py-24">
          <div>
            <p className="terminal-label flex items-center gap-2">
              <span className="status-dot" /> NOC / IT Infrastructure Engineer
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl lg:leading-[1.05]">
              Infrastructure that stays <span className="text-cyan-300">visible, stable, and ready.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              I&apos;m Richo Armando, focused on Network Operations Center work, data center support, server infrastructure, virtualization, network operations, and monitoring.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/experience"
                className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Explore experience <ArrowRight size={17} />
              </Link>
              <Link
                href="/file/cv.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-200"
              >
                <Download size={16} /> Download CV
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-800 pt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
              <span>Data Center</span>
              <span className="hidden size-1 rounded-full bg-slate-700 sm:block" />
              <span>Server Infrastructure</span>
              <span className="hidden size-1 rounded-full bg-slate-700 sm:block" />
              <span>Network Operations</span>
            </div>
          </div>

          <div className="relative lg:pl-6">
            <div className="floating-chip absolute -left-2 top-4 z-10 hidden rounded-xl border border-cyan-400/20 bg-slate-950/85 px-3 py-2 shadow-xl shadow-slate-950/30 md:block">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">Live focus</p>
              <p className="mt-1 text-xs font-bold text-cyan-300">Observe · Respond · Document</p>
            </div>

            <div className="floating-chip absolute -right-1 bottom-4 z-10 hidden rounded-xl border border-slate-800 bg-slate-950/90 px-3 py-2 shadow-xl shadow-slate-950/30 lg:block">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-600">Tooling</p>
              <p className="mt-1 text-xs font-bold text-slate-200">Proxmox · ESXi · Zabbix</p>
            </div>

            <div className="tech-panel overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
                <span className="terminal-label">OPERATIONS STATUS</span>
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-emerald-300">
                  <span className="status-dot" /> Core focus
                </span>
              </div>

              <div className="px-5 py-2">
                {statusRows.map(([name, value], index) => (
                  <div key={name} className="grid grid-cols-[1fr_auto] gap-5 border-b border-slate-800/80 py-4 last:border-b-0">
                    <div>
                      <span className="font-mono text-[9px] text-slate-600">NODE 0{index + 1}</span>
                      <p className="mt-1 text-sm font-bold text-slate-100">{name}</p>
                    </div>
                    <p className="self-center text-right text-xs leading-5 text-slate-400">{value}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-800 bg-slate-950/70 p-5">
                <div className="scanline" />
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    ['OPS', 'Observe'],
                    ['RESP', 'Respond'],
                    ['DOC', 'Document'],
                  ].map(([code, label]) => (
                    <div key={code} className="rounded-lg border border-slate-800 bg-slate-900 p-3">
                      <span className="font-mono text-[9px] text-cyan-400">{code}</span>
                      <p className="mt-1 text-xs font-semibold text-slate-300">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800 bg-slate-900">
        <div className="page-shell grid grid-cols-2 divide-x divide-y divide-slate-800 sm:grid-cols-5 sm:divide-y-0">
          {capabilities.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 px-4 py-5 sm:justify-center">
              <Icon size={18} className="text-cyan-400" />
              <span className="text-xs font-bold text-slate-300">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="page-shell">
          <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
            <div>
              <p className="eyebrow">Operational focus</p>
              <h2 className="section-title">Built around the work that keeps infrastructure dependable.</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-600 lg:justify-self-end">
              The portfolio is organized around infrastructure operations rather than generic software categories: observe service health, investigate issues, maintain core platforms, and document changes clearly.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {focusAreas.map(({ icon: Icon, number, title, text, href, label }) => (
              <article key={title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-900/5">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-lg bg-slate-950 text-cyan-300"><Icon size={22} /></span>
                  <span className="font-mono text-xs text-slate-400">{number}</span>
                </div>
                <h3 className="mt-7 text-xl font-extrabold tracking-tight text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
                <Link href={href} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-cyan-700 transition group-hover:gap-3">
                  {label} <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-950 py-20">
        <div className="page-shell grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <p className="terminal-label">OPERATING PRINCIPLE</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">Reliability starts with disciplined operations.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: Terminal, code: '01', title: 'Observe', text: 'Keep infrastructure health visible through monitoring and structured checks.' },
              { icon: Cable, code: '02', title: 'Respond', text: 'Troubleshoot methodically and escalate incidents with useful context.' },
              { icon: Database, code: '03', title: 'Document', text: 'Make changes, handovers, and operational history easier to follow.' },
            ].map(({ icon: Icon, code, title, text }) => (
              <div key={title} className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
                <div className="flex items-center justify-between"><Icon size={18} className="text-cyan-400" /><span className="font-mono text-[9px] text-slate-600">{code}</span></div>
                <h3 className="mt-5 text-sm font-bold text-slate-100">{title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  )
}
