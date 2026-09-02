import React from 'react'
import { ArrowUp, Github, Linkedin, Mail, Heart, Terminal } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Title */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-mono font-bold text-sm">
              PT
            </div>
            <div>
              <span className="font-bold text-sm tracking-tight text-foreground block">
                PRANAV THAKARE
              </span>
              <span className="text-xs text-muted-foreground font-mono">
                Software Engineer • PhonePe
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
            <a
              href="mailto:pranavthakare9@gmail.com"
              className="hover:text-blue-600 flex items-center gap-1 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" /> Email
            </a>
            <span>•</span>
            <a
              href="https://linkedin.com/in/pthakare"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 flex items-center gap-1 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
            <span>•</span>
            <a
              href="https://github.com/pranav-thakare-dev"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 flex items-center gap-1 transition-colors"
            >
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
          </div>

          {/* Scroll to Top */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="gap-2 rounded-xl text-xs"
          >
            Back to Top <ArrowUp className="w-3.5 h-3.5" />
          </Button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-800/50 text-center text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Pranav Thakare. Built with React, Vite & Shadcn UI.</p>
          <p className="flex items-center gap-1 text-[11px]">
            Designed for High-Scale Backend Systems & AI Orchestration
          </p>
        </div>
      </div>
    </footer>
  )
}
