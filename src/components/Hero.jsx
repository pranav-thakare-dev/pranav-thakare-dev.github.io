import React from 'react'
import { ArrowRight, Download, Mail, Cpu, Server, Database, Sparkles, MapPin, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Hero({ onOpenContact, onOpenResume }) {
  const highlights = [
    { label: '6M+ Daily Active Users', icon: Server },
    { label: '50-60M Daily API Calls', icon: Cpu },
    { label: '16 Shards DB Scale', icon: Database },
  ]

  const keyTech = [
    'Java',
    'Spring Boot',
    'AI Agent Orchestration',
    'Kafka',
    'Elasticsearch',
    'RabbitMQ',
    'Maxwell CDC',
    'MySQL',
    'Docker',
    'AWS S3',
  ]

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Ambient background blur elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-purple-600/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-3 duration-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Software Engineer @ PhonePe</span>
          <span className="text-slate-400 dark:text-slate-600">•</span>
          <span className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="w-3 h-3 text-slate-400" /> Pune, India
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
          Architecting <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">High-Scale Backend</span> & AI Systems
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
          Specialized in building high-throughput distributed microservices, event-driven architectures, and multi-agent AI orchestration layers processing <strong className="text-foreground font-semibold">60M+ daily API requests</strong> at PhonePe & Gainsight.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button variant="glow" size="lg" onClick={onOpenContact} className="gap-2 text-sm rounded-xl">
            <Mail className="w-4 h-4" /> Get in Touch <ArrowRight className="w-4 h-4" />
          </Button>

          <Button variant="outline" size="lg" onClick={onOpenResume} className="gap-2 text-sm rounded-xl border-slate-300 dark:border-slate-700">
            <Download className="w-4 h-4" /> View Resume
          </Button>

          <a href="#experience">
            <Button variant="ghost" size="lg" className="text-sm rounded-xl text-muted-foreground hover:text-foreground">
              Explore Experience
            </Button>
          </a>
        </div>

        {/* Highlight Quick Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="glass-panel p-4 rounded-2xl flex items-center justify-center gap-3 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-blue-500/40 transition-all"
            >
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <h.icon className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-foreground tracking-tight">
                {h.label}
              </span>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800/60 max-w-4xl mx-auto">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" /> Core Tech & Infrastructure Stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {keyTech.map((tech) => (
              <Badge key={tech} variant="tech" className="py-1 px-3 text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
