import React, { useState } from 'react'
import { Bot, Layers, Database, Cpu, Search, RefreshCw, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: 'Multi-Agent AI Orchestration Layer',
      subtitle: 'Production LLM Orchestration & Token Optimization Framework',
      category: 'AI & LLM Systems',
      icon: Bot,
      color: 'from-blue-600 to-indigo-600',
      badge: 'PhonePe Production',
      metrics: 'Optimized LLM Token Cost & Accuracy',
      summary: 'Architected a multi-agent orchestration layer featuring tool-calling loops, elicitation logic, and per-agent working memory to process complex production workflows efficiently.',
      tags: ['AI Agent Orchestration', 'LLM Tool Calling', 'Elicitation Loops', 'Java', 'Token Optimization'],
      details: [
        'Implemented per-agent contextual memory state to eliminate redundant context window padding.',
        'Structured tool-calling interfaces with dynamic schema validation for agent actions.',
        'Designed fallback elicitation loops when agent output confidence drops below threshold.',
        'Reduced overall API token expenditure while achieving higher task completion fidelity across production workflows.',
      ],
    },
    {
      title: 'Zero-Downtime Database Sharding Pipeline',
      subtitle: 'Horizontal Scalability from 2 to 16 Shards',
      category: 'Distributed Systems',
      icon: Database,
      color: 'from-indigo-600 to-purple-600',
      badge: '40% Throughput Boost',
      metrics: '16 DB Shards Live Scale',
      summary: 'Engineered a horizontal database sharding migration pipeline using Maxwell CDC, Kafka event streams, and Java microservices without single second of downtime.',
      tags: ['Database Sharding', 'Maxwell CDC', 'Kafka', 'Java', 'MySQL', 'Zero Downtime'],
      details: [
        'Streamed change-data-capture (CDC) events via Maxwell from primary database to Kafka.',
        'Constructed custom sharding routers in Java to partition queries dynamically by tenant hash key.',
        'Executed dual-write phase and continuous data parity verification prior to full traffic cutover.',
        'Increased system read/write throughput by 40% while future-proofing database capacity.',
      ],
    },
    {
      title: 'High-Traffic Conversational API Platform',
      subtitle: 'Massive Scale API Engine for 6M+ Daily Users',
      category: 'High-Scale Backend',
      icon: Cpu,
      color: 'from-purple-600 to-pink-600',
      badge: '50-60M API Calls / Day',
      metrics: '6M+ Active Daily Users',
      summary: 'Designed and implemented a resilient conversational engine supporting rich media payloads and complex API orchestration under peak concurrent workloads.',
      tags: ['Spring Boot', 'Microservices', 'Rich Media API', 'Java', 'Low Latency'],
      details: [
        'Built asynchronous dispatch pipelines to absorb spikes in concurrent user traffic.',
        'Integrated multi-tier caching strategy for conversational state and media metadata.',
        'Implemented adaptive rate-limiting and circuit breakers to guarantee core service availability.',
        'Consistently maintained sub-100ms API response SLAs under 50-60M daily invocations.',
      ],
    },
    {
      title: 'Dynamic Multi-Tenant Workflow Platform',
      subtitle: 'Zero-Code Operational Flow Engine',
      category: 'System Architecture',
      icon: Layers,
      color: 'from-emerald-600 to-teal-600',
      badge: '50% Ops Overhead Cut',
      metrics: 'Zero-Code Flow Config',
      summary: 'Developed a dynamic state-machine workflow platform allowing operational teams to configure multi-tenant process flows visually without writing code updates.',
      tags: ['Workflow Engine', 'Multi-Tenancy', 'State Machine', 'Spring Boot', 'Resiliency'],
      details: [
        'Decoupled business logic from codebase by representing flows as executable DAG state machines.',
        'Provided hot-reloading flow definitions with backward compatibility guarantees.',
        'Reduced feature rollout time for operational changes from weeks to minutes.',
        'Lowered internal operational overhead by 50% while improving system failure recovery.',
      ],
    },
    {
      title: 'MariaDB to Elasticsearch Datastore Migration',
      subtitle: 'Search & Retrieval Latency Optimization',
      category: 'Data Engineering',
      icon: Search,
      color: 'from-amber-500 to-orange-600',
      badge: '3-4x Retrieval Speedup',
      metrics: 'Sub-second Search SLA',
      summary: 'Re-architected multi-tenant ticketing platform datastore by replacing legacy relational tables with an Elasticsearch cluster optimized for search latency.',
      tags: ['Elasticsearch', 'MariaDB', 'Datastore Migration', 'Indexing Patterns', 'Search Latency'],
      details: [
        'Redesigned index schemas and query templates tailored for multi-tenant filter patterns.',
        'Built dual-indexing sync workers to maintain consistency during live data migration.',
        'Reduced search query latency by 3-4x across millions of historic ticketing records.',
      ],
    },
    {
      title: 'Asynchronous Worker & Resilient Queue Engine',
      subtitle: 'RabbitMQ Consumer Pipeline with Zero Message Loss',
      category: 'Backend Reliability',
      icon: RefreshCw,
      color: 'from-cyan-600 to-blue-600',
      badge: 'Zero Message Loss',
      metrics: 'Bulk Background Jobs',
      summary: 'Built asynchronous background job workers at Gainsight with graceful shutdown hooks and exponential backoff retry mechanisms to handle heavy bulk operations.',
      tags: ['RabbitMQ', 'Graceful Shutdown', 'Asynchronous Processing', 'SaaS Platform', 'AWS S3'],
      details: [
        'Offloaded heavy bulk computation from web threads to isolated background worker pools.',
        'Implemented sigterm graceful shutdown hooks preventing truncated job processing.',
        'Designed idempotent dead-letter queue (DLQ) retry handlers guaranteeing message delivery.',
      ],
    },
  ]

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Featured Systems & Architectural Deliverables
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Key Architecture Projects & Case Studies
          </h3>
          <p className="mt-4 text-base text-muted-foreground">
            A deep-dive into major distributed systems, AI agent platforms, and database scaling initiatives engineered for high throughput and zero downtime.
          </p>
        </div>

        {/* Grid of Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => {
            const Icon = proj.icon
            return (
              <Card
                key={idx}
                className="glass-panel border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <CardHeader className="p-6 pb-4">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${proj.color} text-white shadow-md group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <Badge variant="tech" className="text-[10px] py-0.5 px-2.5">
                      {proj.badge}
                    </Badge>
                  </div>

                  <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
                    {proj.category}
                  </span>

                  <CardTitle className="text-xl font-bold text-foreground mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {proj.title}
                  </CardTitle>

                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                    {proj.subtitle}
                  </p>
                </CardHeader>

                <CardContent className="p-6 pt-0 flex-1">
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {proj.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground border border-slate-200/60 dark:border-slate-800/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 border-t border-slate-200/40 dark:border-slate-800/40 mt-4 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> {proj.metrics}
                  </span>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProject(proj)}
                    className="text-xs gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 hover:bg-blue-500/10"
                  >
                    Architecture Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Modal for Project Architecture Deep Dive */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-3 rounded-2xl bg-gradient-to-br ${selectedProject.color} text-white`}>
                  <selectedProject.icon className="w-6 h-6" />
                </div>
                <div>
                  <Badge variant="tech" className="text-[10px] mb-1">
                    {selectedProject.badge}
                  </Badge>
                  <DialogTitle className="text-2xl font-bold">
                    {selectedProject.title}
                  </DialogTitle>
                </div>
              </div>
              <DialogDescription className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {selectedProject.subtitle}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-2">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {selectedProject.summary}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                  Key Technical Execution & Highlights
                </h4>
                <div className="space-y-2">
                  {selectedProject.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-secondary/60 text-xs text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((t) => (
                    <Badge key={t} variant="tech" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
