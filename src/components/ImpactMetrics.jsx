import React from 'react'
import { TrendingUp, Zap, ShieldCheck, Layers, Database, Cpu, Activity, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function ImpactMetrics() {
  const metrics = [
    {
      value: '6M+',
      unit: 'Daily Users',
      label: 'Conversational Platform Scale',
      description: 'Architected & scaled high-traffic rich media conversational engine at PhonePe.',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      value: '50-60M',
      unit: 'API Calls / Day',
      label: 'High-Throughput API Volume',
      description: 'Handles massive concurrent payloads with sub-second SLA & resilience.',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500',
    },
    {
      value: '2 → 16',
      unit: 'Shards',
      label: 'Zero-Downtime DB Sharding',
      description: 'Led large-scale database sharding using Maxwell CDC, Kafka, and Java.',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
    },
    {
      value: '3-4x',
      unit: 'Speedup',
      label: 'Elasticsearch Search Latency',
      description: 'Migrated MariaDB datastore to Elasticsearch with redesigned indexing patterns.',
      icon: Zap,
      color: 'from-amber-500 to-orange-500',
    },
    {
      value: '40%',
      unit: 'Throughput Boost',
      label: 'Read/Write Scalability',
      description: 'Optimized query patterns & data routing across sharded storage tiers.',
      icon: Activity,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      value: '50%',
      unit: 'Ops Reduction',
      label: 'Workflow Automation',
      description: 'Built zero-code dynamic multi-tenant workflow engine for operational efficiency.',
      icon: Layers,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      value: '30%',
      unit: 'Memory Saved',
      label: 'GC & Memory Optimization',
      description: 'Fixed critical DB connection leaks, thread exhaustion, & tuned GC pools.',
      icon: Clock,
      color: 'from-violet-500 to-indigo-500',
    },
    {
      value: '0',
      unit: 'Message Loss',
      label: 'RabbitMQ Resilience',
      description: 'Implemented graceful shutdown & consumer retry handlers for zero deployment loss.',
      icon: ShieldCheck,
      color: 'from-emerald-600 to-green-500',
    },
  ]

  return (
    <section id="impact" className="py-20 bg-slate-100/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Engineering Impact
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Key Metric Highlights & High-Scale Systems Deliverables
          </h3>
          <p className="mt-4 text-base text-muted-foreground">
            Proven track record of architecting mission-critical backend microservices, optimizing low-latency data pipelines, and maintaining enterprise-grade SLAs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => (
            <Card
              key={idx}
              className="glass-panel border-slate-200/80 dark:border-slate-800/80 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Subtle top indicator bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${metric.color}`} />

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-foreground group-hover:scale-110 transition-transform">
                    <metric.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-xs font-mono font-medium text-muted-foreground uppercase">
                    {metric.unit}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight font-mono mb-1">
                  {metric.value}
                </div>

                <h4 className="text-sm font-bold text-foreground mb-2">
                  {metric.label}
                </h4>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {metric.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
