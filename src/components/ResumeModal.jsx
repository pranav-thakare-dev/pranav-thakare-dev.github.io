import React from 'react'
import { Printer, Download, X, Mail, Phone, MapPin, Linkedin, Sparkles, Building2, GraduationCap, Award } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export function ResumeModal({ open, onOpenChange }) {
  const handlePrint = () => {
    window.print()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-10">
        <DialogHeader className="flex flex-row items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
          <div>
            <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
              Executive Resume View
            </span>
            <DialogTitle className="text-2xl font-bold text-foreground">
              PRANAV THAKARE
            </DialogTitle>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handlePrint} className="gap-2 text-xs">
              <Printer className="w-3.5 h-3.5" /> Print / Save PDF
            </Button>
          </div>
        </DialogHeader>

        {/* Formatted Printable Resume View */}
        <div className="space-y-8 font-sans text-slate-800 dark:text-slate-200 print:text-black">
          {/* Header Contact Block */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
                PRANAV THAKARE
              </h1>
              <p className="text-base font-semibold text-blue-600 dark:text-blue-400 mt-1">
                Software Engineer @ PhonePe
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Specialized in Microservices, Distributed Systems, AI Agent Orchestration, and High-Scale Backend Architecture.
              </p>
            </div>

            <div className="space-y-1 text-xs font-mono text-muted-foreground text-left sm:text-right">
              <p className="flex items-center gap-1.5 justify-start sm:justify-end">
                <MapPin className="w-3.5 h-3.5 text-blue-500" /> Pune, India
              </p>
              <p className="flex items-center gap-1.5 justify-start sm:justify-end">
                <Phone className="w-3.5 h-3.5 text-emerald-500" /> +91 9767522848
              </p>
              <p className="flex items-center gap-1.5 justify-start sm:justify-end">
                <Mail className="w-3.5 h-3.5 text-purple-500" /> pranavthakare9@gmail.com
              </p>
              <p className="flex items-center gap-1.5 justify-start sm:justify-end">
                <Linkedin className="w-3.5 h-3.5 text-blue-600" /> linkedin.com/in/pthakare
              </p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-blue-500/30 pb-1 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Education
            </h2>
            <div className="flex justify-between items-start text-xs sm:text-sm">
              <div>
                <h3 className="font-bold text-foreground">B.Tech in Computer Science</h3>
                <p className="text-muted-foreground">College of Engineering Pune (COEP)</p>
                <p className="text-xs text-slate-500 mt-1">
                  <strong>Relevant Coursework:</strong> Data Structures, Distributed Systems, Database Management Systems
                </p>
              </div>
              <div className="text-right font-mono text-xs">
                <span>2016 – 2020</span>
                <p className="font-bold text-blue-600 dark:text-blue-400">GPA: 7.31 / 10</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-blue-500/30 pb-1 mb-3">
              Skills
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <p>
                <strong className="text-foreground">Languages:</strong> Java, SQL
              </p>
              <p>
                <strong className="text-foreground">Backend & Infra:</strong> Spring Boot, Kafka, RabbitMQ, Elasticsearch, MySQL, Docker, AWS S3, Git
              </p>
              <p>
                <strong className="text-foreground">Architecture:</strong> Microservices, Event-Driven Systems, Database Sharding, CDC (Maxwell, Debezium), Distributed Workflows, AI Agent Orchestration
              </p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-blue-500/30 pb-1 mb-4 flex items-center gap-2">
              <Building2 className="w-4 h-4" /> Experience
            </h2>

            <div className="space-y-6">
              {/* PhonePe */}
              <div>
                <div className="flex justify-between items-start text-xs sm:text-sm mb-1">
                  <div>
                    <h3 className="font-bold text-foreground">Software Engineer</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">PhonePe, Pune, India</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">Aug 2022 – Present</span>
                </div>
                <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1.5 text-muted-foreground">
                  <li>Architected a multi-agent AI orchestration layer with tool calling, elicitation loops, and per-agent memory, optimizing LLM token usage and API cost while improving response accuracy and task completion rates across production workflows.</li>
                  <li>Migrated multi-tenant ticketing platform from MariaDB to Elasticsearch as the primary datastore, redesigning indexing and query patterns to improve search and retrieval latency by 3–4x at scale.</li>
                  <li>Led a large-scale database sharding initiative, scaling from 2 to 16 shards using Maxwell CDC, Kafka, and Java, enabling zero-downtime migration and improving read/write throughput by 40%.</li>
                  <li>Designed and built a high-traffic conversational platform supporting rich media and API orchestration, scaling to 6M+ daily users and 50–60M API calls per day.</li>
                  <li>Built a dynamic workflow management platform for multi-tenant operations, enabling teams to configure flows without code changes, reducing operational overhead by 50% and increasing system resiliency.</li>
                  <li>Identified and resolved critical memory leaks (DB connection leaks, thread exhaustion, inefficient caches), optimizing GC and connection pools to reduce memory footprint by 30% and improve system stability under peak traffic.</li>
                </ul>
              </div>

              {/* Gainsight */}
              <div>
                <div className="flex justify-between items-start text-xs sm:text-sm mb-1">
                  <div>
                    <h3 className="font-bold text-foreground">Software Engineer</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">Gainsight, Hyderabad, India</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">Aug 2020 – Aug 2022</span>
                </div>
                <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1.5 text-muted-foreground">
                  <li>Built and maintained microservices for a multi-tenant SaaS platform using Java, Spring Boot, RabbitMQ, and AWS, serving thousands of enterprise customers.</li>
                  <li>Improved performance and reliability of the Cockpit module by fixing production bottlenecks and handling critical customer escalations.</li>
                  <li>Designed an asynchronous worker system for bulk operations and background jobs, offloading heavy workloads from web services and improving overall system throughput.</li>
                  <li>Implemented graceful shutdown and retry mechanisms for RabbitMQ consumers, ensuring zero message loss and reliable task execution during deployments and outages.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects & Achievements */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-blue-500/30 pb-1 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" /> Projects & Achievements
            </h2>
            <ul className="list-disc pl-5 text-xs sm:text-sm space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Smart India Hackathon 2020 Finalist</strong> – Selected at the national level for building a real-world problem-solving platform.
              </li>
              <li>
                <strong className="text-foreground">Gainsight Spotlight Award</strong> – Recognized for major architectural and performance improvements in the Cockpit module.
              </li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
