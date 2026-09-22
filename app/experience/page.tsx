import { Activity, Cable, FileCheck2, ServerCog, Shield, Waypoints } from 'lucide-react'

const responsibilities = [
  { icon: Activity, title: 'Network Operations Center', text: 'Monitor service health, triage alerts, coordinate incident escalation, and maintain clear operational visibility.' },
  { icon: ServerCog, title: 'Server & Virtualization', text: 'Deploy physical servers and support Proxmox VE, VMware ESXi, Linux, and Windows Server environments.' },
  { icon: Waypoints, title: 'Network Infrastructure', text: 'Maintain reliable connectivity across routing, switching, firewalls, and edge network services.' },
  { icon: Shield, title: 'Security Operations', text: 'Support FortiGate firewall policy administration and secure network access practices.' },
  { icon: Cable, title: 'Data Center Operations', text: 'Assist with rack-and-stack, cabling, asset handling, and disciplined equipment lifecycle work.' },
  { icon: FileCheck2, title: 'Documentation & Change', text: 'Record changes, update operating procedures, and make handovers dependable for the next shift.' },
] as const

export default function Experience() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 py-16 lg:py-20">
        <div className="absolute inset-0 grid-shell opacity-55" aria-hidden="true" />
        <div className="page-shell relative grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <div>
            <p className="terminal-label">Operational scope</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Built for the infrastructure behind the business.</h1>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400 lg:justify-self-end">
            A practical, operations-first toolkit for keeping core systems dependable from the rack to the network edge.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="page-shell">
          <div className="mb-10 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Operations matrix</p>
              <h2 className="section-title">Core responsibility areas.</h2>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">06 operational modules</p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {responsibilities.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="group bg-white p-7 transition hover:bg-slate-950">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.14em] text-cyan-700 group-hover:text-cyan-300">MODULE 0{index + 1}</span>
                  <span className="size-1.5 rounded-full bg-slate-300 group-hover:bg-emerald-400" />
                </div>
                <Icon className="mt-8 text-slate-900 transition group-hover:text-cyan-300" size={28} strokeWidth={1.7} />
                <h3 className="mt-5 text-lg font-extrabold text-slate-950 transition group-hover:text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 transition group-hover:text-slate-400">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-3 rounded-xl border border-slate-200 bg-white p-5 sm:grid-cols-4">
            {['Observe', 'Triage', 'Escalate', 'Document'].map((step, index) => (
              <div key={step} className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-3">
                <span className="grid size-6 place-items-center rounded bg-slate-950 font-mono text-[9px] text-cyan-300">0{index + 1}</span>
                <span className="text-xs font-bold text-slate-700">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
