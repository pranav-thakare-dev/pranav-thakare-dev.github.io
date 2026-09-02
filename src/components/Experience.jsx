import React from 'react'
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Sparkles, Building2 } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function Experience() {
  const experiences = [
    {
      company: 'PhonePe',
      role: 'Software Engineer',
      period: 'Aug 2022 – Present',
      location: 'Pune, India',
      description: 'Leading high-scale backend engineering initiatives, multi-agent AI orchestration, and database sharded microservices supporting tens of millions of active users.',
      tags: ['AI Agent Orchestration', 'Java', 'Elasticsearch', 'Maxwell CDC', 'Kafka', 'Spring Boot', 'Database Sharding', 'GC Optimization'],
      highlights: [
        {
          title: 'Multi-Agent AI Orchestration Layer',
          detail: 'Architected a multi-agent AI orchestration layer with tool calling, elicitation loops, and per-agent memory, optimizing LLM token usage and API cost while improving response accuracy and task completion rates across production workflows.',
          impact: 'LLM token optimization & accuracy boost',
        },
        {
          title: 'MariaDB to Elasticsearch Datastore Migration',
          detail: 'Migrated multi-tenant ticketing platform from MariaDB to Elasticsearch as the primary datastore, redesigning indexing and query patterns to improve search and retrieval latency by 3–4x at scale.',
          impact: '3-4x latency reduction at scale',
        },
        {
          title: 'Zero-Downtime Database Sharding Initiative',
          detail: 'Led a large-scale database sharding initiative, scaling from 2 to 16 shards using Maxwell CDC, Kafka, and Java, enabling zero-downtime migration and improving read/write throughput by 40%.',
          impact: '40% throughput boost & 16-shard scale',
        },
        {
          title: 'High-Traffic Conversational Platform',
          detail: 'Designed and built a high-traffic conversational platform supporting rich media and API orchestration, scaling to 6M+ daily users and 50–60M API calls per day.',
          impact: '6M+ daily users & 50-60M API calls/day',
        },
        {
          title: 'Dynamic Workflow Management Platform',
          detail: 'Built a dynamic workflow management platform for multi-tenant operations, enabling teams to configure flows without code changes, reducing operational overhead by 50% and increasing system resiliency.',
          impact: '50% reduction in operational overhead',
        },
        {
          title: 'Memory Leak & Connection Pool Optimization',
          detail: 'Identified and resolved critical memory leaks (DB connection leaks, thread exhaustion, inefficient caches), optimizing GC and connection pools to reduce memory footprint by 30% and improve system stability under peak traffic.',
          impact: '30% memory footprint drop & peak stability',
        },
      ],
    },
    {
      company: 'Gainsight',
      role: 'Software Engineer',
      period: 'Aug 2020 – Aug 2022',
      location: 'Hyderabad, India',
      description: 'Engineered microservices for enterprise SaaS platform, background job execution engines, and RabbitMQ message consumer reliability.',
      tags: ['Java', 'Spring Boot', 'RabbitMQ', 'AWS S3', 'Microservices', 'SaaS Architecture', 'Graceful Shutdown'],
      highlights: [
        {
          title: 'Multi-Tenant SaaS Microservices Platform',
          detail: 'Built and maintained microservices for a multi-tenant SaaS platform using Java, Spring Boot, RabbitMQ, and AWS, serving thousands of enterprise customers.',
          impact: 'Thousands of enterprise SaaS clients served',
        },
        {
          title: 'Cockpit Module Bottleneck & Reliability Optimization',
          detail: 'Improved performance and reliability of the Cockpit module by fixing production bottlenecks and handling critical customer escalations.',
          impact: 'Spotlight Awarded performance fix',
        },
        {
          title: 'Asynchronous Bulk Worker System',
          detail: 'Designed an asynchronous worker system for bulk operations and background jobs, offloading heavy workloads from web services and improving overall system throughput.',
          impact: 'Offloaded heavy API loads & boosted throughput',
        },
        {
          title: 'RabbitMQ Graceful Shutdown & Retry Engine',
          detail: 'Implemented graceful shutdown and retry mechanisms for RabbitMQ consumers, ensuring zero message loss and reliable task execution during deployments and outages.',
          impact: 'Zero message loss during outages/deployments',
        },
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Career Track
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Professional Work Experience
          </h3>
          <p className="mt-4 text-base text-muted-foreground">
            Demonstrated engineering leadership in building production systems, scaling backend infrastructure, and resolving high-severity performance bottlenecks.
          </p>
        </div>

        {/* Timeline container */}
        <div className="space-y-12 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 sm:before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-indigo-500 before:to-slate-300 dark:before:to-slate-800">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col sm:flex-row items-center ${
                idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline center node */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-background border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-md z-10">
                <Building2 className="w-4 h-4" />
              </div>

              {/* Card wrapper */}
              <div className="w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0">
                <Card className="glass-panel border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-xl transition-all duration-300">
                  <CardHeader className="p-6 pb-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" /> {exp.period}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {exp.location}
                      </span>
                    </div>

                    <CardTitle className="text-2xl font-bold text-foreground">
                      {exp.role}
                    </CardTitle>

                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2 mt-0.5">
                      {exp.company}
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                      {exp.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-6 pt-2 space-y-4">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1 border-t border-slate-200/60 dark:border-slate-800/60">
                      {exp.tags.map((t) => (
                        <Badge key={t} variant="tech" className="text-[11px] py-0.5 px-2">
                          {t}
                        </Badge>
                      ))}
                    </div>

                    {/* Bullet Highlights */}
                    <div className="space-y-3 pt-2">
                      {exp.highlights.map((item, hIdx) => (
                        <div
                          key={hIdx}
                          className="p-3.5 rounded-xl bg-secondary/50 border border-slate-200/50 dark:border-slate-800/50 hover:bg-secondary/80 transition-colors"
                        >
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h4 className="text-xs sm:text-sm font-bold text-foreground flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                              {item.title}
                            </h4>
                            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 whitespace-nowrap">
                              {item.impact}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground leading-normal pl-6">
                            {item.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
