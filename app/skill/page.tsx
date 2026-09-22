import {
  Box,
  ChartNoAxesCombined,
  Database,
  MonitorCog,
  Network,
  Server,
  ShieldCheck,
  Terminal,
} from 'lucide-react'

const capabilities = [
  { icon: Server, code: 'DC-01', title: 'Data Center & Hardware', items: ['Physical server deployment', 'Rack, cabling & asset handling'] },
  { icon: Box, code: 'VRT-02', title: 'Virtualization', items: ['Proxmox VE', 'VMware ESXi'] },
  { icon: Terminal, code: 'SYS-03', title: 'Server Platforms', items: ['Linux Server administration', 'Windows Server support'] },
  { icon: Network, code: 'NET-04', title: 'Network Infrastructure', items: ['TCP/IP and IP configuration', 'Network troubleshooting'] },
  { icon: ShieldCheck, code: 'SEC-05', title: 'Network Security', items: ['FortiGate Firewall', 'VPN and access control'] },
  { icon: MonitorCog, code: 'MON-06', title: 'Monitoring', items: ['Zabbix monitoring', 'Alert triage and escalation'] },
  { icon: ChartNoAxesCombined, code: 'OPS-07', title: 'Operations', items: ['Incident response', 'Change documentation'] },
  { icon: Database, code: 'REL-08', title: 'Reliability', items: ['Backup and restore awareness', 'Capacity and health checks'] },
] as const

export default function Skills() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 py-16 lg:py-20">
        <div className="absolute inset-0 grid-shell opacity-55" aria-hidden="true" />
        <div className="page-shell relative grid gap-7 lg:grid-cols-[1fr_.72fr] lg:items-end">
          <div>
            <p className="terminal-label">Technical expertise</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">The infrastructure stack I work with.</h1>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400 lg:justify-self-end">
            Detailed technical capability across hardware, hypervisors, server platforms, networking, security, monitoring, and operational reliability.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 py-20 lg:py-24">
        <div className="page-shell">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(({ icon: Icon, code, title, items }) => (
              <article key={title} className="group rounded-2xl border border-slate-800 bg-slate-950/75 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-950">
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-lg border border-cyan-400/20 bg-cyan-400/5 text-cyan-300"><Icon size={21} /></span>
                  <span className="font-mono text-[9px] tracking-[0.14em] text-slate-600">{code}</span>
                </div>
                <h2 className="mt-6 text-base font-extrabold text-white">{title}</h2>
                <ul className="mt-4 space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex gap-3 text-xs leading-5 text-slate-400">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-950 p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="terminal-label">Stack philosophy</p>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">Tool familiarity matters most when it supports faster diagnosis, safer changes, clearer handovers, and more dependable infrastructure operations.</p>
              </div>
              <div className="flex shrink-0 gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-slate-500">
                <span className="rounded border border-slate-800 px-3 py-2">Monitor</span>
                <span className="rounded border border-slate-800 px-3 py-2">Operate</span>
                <span className="rounded border border-slate-800 px-3 py-2">Secure</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
