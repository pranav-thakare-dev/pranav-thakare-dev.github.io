import React, { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X, Mail, FileText, Sparkles, Terminal } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar({ darkMode, setDarkMode, onOpenContact, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Impact', href: '#impact' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Architecture', href: '#projects' },
    { name: 'Education', href: '#education' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-panel py-3 shadow-lg border-b border-slate-200/50 dark:border-slate-800/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-mono font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
            PT
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              PRANAV THAKARE
            </span>
            <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
              <Terminal className="w-3 h-3 text-blue-500" /> Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-secondary/50 p-1.5 rounded-full border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-xs font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-background/80 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls & Dark Mode Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-muted text-muted-foreground hover:text-foreground transition-all"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <Button variant="outline" size="sm" onClick={onOpenResume} className="gap-2 rounded-xl text-xs font-medium">
            <FileText className="w-3.5 h-3.5" /> Resume
          </Button>

          <Button variant="glow" size="sm" onClick={onOpenContact} className="gap-2 rounded-xl text-xs font-medium">
            <Mail className="w-3.5 h-3.5" /> Contact
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-muted-foreground"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-foreground"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-200 dark:border-slate-800 bg-background/95 backdrop-blur-lg px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2 border-t border-slate-200 dark:border-slate-800">
            <Button variant="outline" className="w-full justify-center gap-2" onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}>
              <FileText className="w-4 h-4" /> View Resume
            </Button>
            <Button variant="glow" className="w-full justify-center gap-2" onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}>
              <Mail className="w-4 h-4" /> Get in Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
