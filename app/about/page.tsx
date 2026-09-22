import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Download, RadioTower, Server, ShieldCheck } from 'lucide-react'

const strengths = [
  ['Operational awareness', 'Maintain visibility across alerts, systems, and infrastructure health.'],
  ['Structured response', 'Approach troubleshooting and incident escalation with clear context and sequence.'],
  ['Controlled change', 'Treat documentation, handover, and configuration work as part of reliable operations.'],
] as const

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950">
        <div className="absolute inset-0 grid-shell opacity-70" aria-hidden="true" />
        <div className="hero-motion" aria-hidden="true">
          <div className="moving-grid opacity-70" />
          <div className="network-lines" />
          <div className="node-cloud" />
          <div className="data-pulse" />
          <div className="scan-band opacity-70" />
        </div>

        <div className="page-shell relative grid gap-12 py-16 lg:grid-cols-[1.12fr_.88fr] lg:items-center lg:py-24">
          <div>
            <p className="terminal-label">NOC Engineer / IT Infrastructure</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-extrabold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Keeping infrastructure <span className="text-cyan-300">observable and operational.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
              I&apos;m Richo Armando, a Network Operations Center Engineer focused on day-to-day support for data center, server, virtualization, and network environments.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/experience" className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-300">
                Explore experience <ArrowRight size={17} />
              </Link>
              <Link href="/file/cv.pdf" target="_blank" className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-200 hover:border-cyan-400/50 hover:text-cyan-200">
                <Download size={16} /> View CV
              </Link>
            </div>
          </div>

          <div className="tech-panel overflow-hidden p-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="terminal-label">PROFILE NODE</span>
              <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-emerald-300"><span className="status-dot" /> Active focus</span>
            </div>
            <div className="mt-5 space-y-4">
              {[
                ['Role', 'NOC / Infrastructure'],
                ['Server', 'Physical / Linux / Windows'],
                ['Virtualization', 'Proxmox / ESXi'],
                ['Network', 'FortiGate / MikroTik'],
                ['Monitoring', 'Zabbix'],
              ].map(([name, value]) => (
                <div key={name} className="flex items-center justify-between gap-6 border-b border-slate-800/80 pb-4 text-sm last:border-0 last:pb-0">
                  <span className="text-slate-500">{name}</span>
                  <span className="text-right font-semibold text-slate-200">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-3 rounded-lg border border-cyan-400/10 bg-cyan-400/5 p-3 text-xs leading-5 text-cyan-200">
              <ShieldCheck size={18} className="shrink-0" /> Reliability depends on visibility, disciplined response, and documented change.
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-24">
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-cyan-100/70 to-transparent" aria-hidden="true" />
        <div className="page-shell relative grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
          <div className="profile-wrap mx-auto w-full max-w-sm">
            <div className="profile-backplate" aria-hidden="true" />
            <div className="profile-glow" aria-hidden="true" />

            <div className="profile-card p-4 sm:p-5">
              <div className="profile-grid-overlay" aria-hidden="true" />
              <div className="profile-ring" aria-hidden="true" />
              <Image
                className="relative aspect-[4/5] w-full rounded-2xl object-contain object-center"
                src="/images/profile-richo.png"
                alt="Richo Armando"
                width={900}
                height={1125}
                priority
              />
            </div>

            <div className="profile-badge absolute -bottom-5 right-[-6px] rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 shadow-2xl shadow-slate-900/25 sm:right-[-14px]">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <Server size={19} />
                </span>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">Operations focus</p>
                  <p className="mt-1 text-sm font-bold text-white">NOC / Infrastructure</p>
                </div>
              </div>
            </div>

            <div className="floating-chip absolute -left-3 top-8 rounded-xl border border-cyan-200 bg-white/90 px-3 py-2 shadow-lg shadow-cyan-100 sm:-left-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <RadioTower size={15} className="text-cyan-600" /> Active monitoring
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow">Professional profile</p>
            <h2 className="section-title">Infrastructure work with operational discipline.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              My work spans physical server deployment, hypervisor administration, operating-system support, network operations, and proactive monitoring. I approach each task with clear documentation, controlled changes, and a focus on service continuity.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {strengths.map(([title, text], index) => (
                <article key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-100/50">
                  <div className="flex items-center justify-between">
                    <CheckCircle2 size={19} className="text-cyan-600" />
                    <span className="font-mono text-[9px] text-slate-400">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 text-sm font-extrabold text-slate-950">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
