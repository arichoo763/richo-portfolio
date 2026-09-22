import { ArrowUpRight, Network, Server, ShieldCheck, Telescope } from 'lucide-react'

const projects = [
  {
    icon: Server,
    tag: 'Infrastructure',
    title: 'Virtualization Environment Operations',
    text: 'Support for virtual machine lifecycle, resource awareness, and day-to-day hypervisor administration across Proxmox VE and VMware ESXi.',
    tools: ['Proxmox VE', 'VMware ESXi', 'Linux'],
  },
  {
    icon: Network,
    tag: 'Networking',
    title: 'Network Availability & Troubleshooting',
    text: 'Hands-on operational support for connectivity issues, device health checks, and structured troubleshooting across core network infrastructure.',
    tools: ['MikroTik', 'TCP/IP', 'Network Troubleshooting'],
  },
  {
    icon: ShieldCheck,
    tag: 'Security',
    title: 'Firewall Policy Administration',
    text: 'Support for FortiGate firewall configuration, network access policies, VPN configuration, and operational security practices.',
    tools: ['FortiGate', 'Policies', 'VPN'],
  },
  {
    icon: Telescope,
    tag: 'Observability',
    title: 'Zabbix Monitoring & Alert Response',
    text: 'Monitor infrastructure health, investigate alerts, document findings, and support incident escalation.',
    tools: ['Zabbix', 'Alert Triage', 'Reporting'],
  },
] as const

export default function Portfolio() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 py-16 lg:py-20">
        <div className="absolute inset-0 grid-shell opacity-55" aria-hidden="true" />
        <div className="page-shell relative grid gap-7 lg:grid-cols-[1fr_.72fr] lg:items-end">
          <div>
            <p className="terminal-label">Selected focus areas</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Infrastructure operations and technical projects.</h1>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400 lg:justify-self-end">
            Practical focus records covering virtualization, network troubleshooting, firewall administration, and infrastructure monitoring.
          </p>
        </div>
      </section>

      <section className="bg-slate-100 py-20 lg:py-24">
        <div className="page-shell">
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map(({ icon: Icon, tag, title, text, tools }, index) => (
              <article key={title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-slate-900/5">
                <div className="flex items-center justify-between border-b border-slate-100 px-7 py-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyan-700">CASE 0{index + 1} / {tag}</span>
                  <ArrowUpRight size={16} className="text-slate-300 transition group-hover:text-cyan-600" />
                </div>
                <div className="p-7">
                  <span className="grid size-12 place-items-center rounded-xl bg-slate-950 text-cyan-300"><Icon size={23} /></span>
                  <h2 className="mt-7 text-xl font-extrabold tracking-tight text-slate-950">{title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <span key={tool} className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 font-mono text-[10px] text-slate-600">{tool}</span>
                    ))}
                  </div>
                </div>
                <div className="border-t border-slate-100 bg-slate-50 px-7 py-4">
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-slate-400">Operational capability record</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
