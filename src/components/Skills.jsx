import React, { useState } from 'react'
import { Code2, Server, Network, Cpu, Search, Sparkles, Database, Shield, Layers } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')

  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: Sparkles },
    { id: 'languages', name: 'Languages & Core', icon: Code2 },
    { id: 'backend', name: 'Backend & Infra', icon: Server },
    { id: 'architecture', name: 'Architecture & AI', icon: Network },
  ]

  const skillsData = [
    {
      name: 'Java',
      category: 'languages',
      level: 'Expert',
      desc: 'Core language for enterprise microservices, concurrency, memory tuning, and multi-threading.',
      icon: Code2,
      color: 'from-orange-500 to-amber-500',
    },
    {
      name: 'SQL',
      category: 'languages',
      level: 'Advanced',
      desc: 'Relational query optimization, indexing strategies, CTEs, and schema migrations.',
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Spring Boot',
      category: 'backend',
      level: 'Expert',
      desc: 'RESTful APIs, Spring Security, Data JPA, Spring Cloud, transaction management.',
      icon: Server,
      color: 'from-emerald-500 to-green-600',
    },
    {
      name: 'Kafka',
      category: 'backend',
      level: 'Advanced',
      desc: 'Event streaming, topic partition design, high-throughput message consumer pipelines.',
      icon: Network,
      color: 'from-slate-700 to-slate-900',
    },
    {
      name: 'Elasticsearch',
      category: 'backend',
      level: 'Advanced',
      desc: 'Full-text indexing, primary datastore migration, custom mapping, sub-second search SLAs.',
      icon: Search,
      color: 'from-amber-500 to-yellow-600',
    },
    {
      name: 'RabbitMQ',
      category: 'backend',
      level: 'Advanced',
      desc: 'AMQP broker, dead-letter queues, graceful consumer shutdown, zero message loss reliability.',
      icon: Layers,
      color: 'from-orange-600 to-red-500',
    },
    {
      name: 'MySQL / MariaDB',
      category: 'backend',
      level: 'Advanced',
      desc: 'High-availability DB design, connection pool optimization, slow query resolution.',
      icon: Database,
      color: 'from-blue-600 to-indigo-600',
    },
    {
      name: 'Docker & AWS S3',
      category: 'backend',
      level: 'Intermediate',
      desc: 'Containerization, cloud object storage integration, microservice deployment setups.',
      icon: Server,
      color: 'from-cyan-500 to-blue-600',
    },
    {
      name: 'Git & Version Control',
      category: 'languages',
      level: 'Expert',
      desc: 'Trunk-based development, rebase workflows, release branching strategies.',
      icon: Code2,
      color: 'from-red-500 to-rose-600',
    },
    {
      name: 'AI Agent Orchestration',
      category: 'architecture',
      level: 'Pioneer',
      desc: 'Multi-agent frameworks, tool calling loops, per-agent memory, token optimization.',
      icon: Cpu,
      color: 'from-purple-500 to-indigo-600',
    },
    {
      name: 'Database Sharding & CDC',
      category: 'architecture',
      level: 'Expert',
      desc: 'Maxwell CDC & Debezium change-data-capture pipelines, scaling 2 to 16 shards zero-downtime.',
      icon: Network,
      color: 'from-indigo-600 to-purple-700',
    },
    {
      name: 'Distributed Workflows',
      category: 'architecture',
      level: 'Advanced',
      desc: 'Dynamic workflow management engines, zero-code state machine flow configuration.',
      icon: Layers,
      color: 'from-teal-500 to-emerald-600',
    },
    {
      name: 'Microservices & Event-Driven Systems',
      category: 'architecture',
      level: 'Expert',
      desc: 'Decoupled domain architecture, pub/sub pipelines, eventual consistency patterns.',
      icon: Shield,
      color: 'from-blue-500 to-violet-600',
    },
  ]

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory)

  return (
    <section id="skills" className="py-24 bg-slate-100/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Technical Competencies
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Skills & Architectural Capabilities
          </h3>
          <p className="mt-4 text-base text-muted-foreground">
            A comprehensive overview of backend technologies, distributed messaging platforms, database scaling solutions, and AI orchestration frameworks.
          </p>
        </div>

        {/* Category Tabs / Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((cat) => {
            const Icon = cat.icon
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'glass-panel text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.name}
              </button>
            )
          })}
        </div>

        {/* Grid of Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => {
            const Icon = skill.icon
            return (
              <Card
                key={idx}
                className="glass-panel border-slate-200/80 dark:border-slate-800/80 hover:-translate-y-1 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${skill.color} text-white shadow-sm group-hover:scale-110 transition-transform`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-lg text-foreground">
                        {skill.name}
                      </h4>
                    </div>

                    <Badge
                      variant="tech"
                      className="text-[10px] uppercase font-mono tracking-wider"
                    >
                      {skill.level}
                    </Badge>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {skill.desc}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
