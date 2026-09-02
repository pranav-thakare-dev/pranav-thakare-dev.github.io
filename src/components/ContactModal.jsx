import React, { useState } from 'react'
import { Mail, Phone, MapPin, Copy, Check, Linkedin, Github, Send, Sparkles } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export function ContactModal({ open, onOpenChange }) {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const email = 'pranavthakare9@gmail.com'
  const phone = '+91 9767522848'

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text)
    if (type === 'email') {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onOpenChange(false)
      setFormData({ name: '', email: '', message: '' })
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl p-6 sm:p-8">
        <DialogHeader className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium w-max">
            <Sparkles className="w-3.5 h-3.5" /> Let's Connect
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Get in Touch with Pranav
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Whether you have a technical opportunity, backend scaling query, or collaboration idea, feel free to reach out.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 my-2">
          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Email Card */}
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-secondary/50 flex items-center justify-between">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] text-muted-foreground font-mono block">Email</span>
                  <a href={`mailto:${email}`} className="text-xs font-bold text-foreground hover:text-blue-600 truncate block">
                    {email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(email, 'email')}
                className="p-1.5 rounded-md hover:bg-muted text-muted-foreground shrink-0"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-secondary/50 flex items-center justify-between">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] text-muted-foreground font-mono block">Phone</span>
                  <span className="text-xs font-bold text-foreground truncate block">{phone}</span>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(phone, 'phone')}
                className="p-1.5 rounded-md hover:bg-muted text-muted-foreground shrink-0"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center justify-center gap-4 pt-1 border-t border-slate-200 dark:border-slate-800">
            <a
              href="https://linkedin.com/in/pthakare"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-medium hover:bg-muted transition-all"
            >
              <Linkedin className="w-4 h-4 text-blue-600" /> LinkedIn
            </a>
            <a
              href="https://github.com/pranav-thakare-dev"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-medium hover:bg-muted transition-all"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>

          {/* Quick Message Form */}
          {submitted ? (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center text-emerald-600 dark:text-emerald-400 font-semibold text-sm animate-in fade-in">
              <Check className="w-6 h-6 mx-auto mb-1" />
              Thank you! Your message has been sent successfully.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 pt-2">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea
                  required
                  rows="3"
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <Button type="submit" variant="glow" className="w-full justify-center gap-2 text-xs">
                <Send className="w-3.5 h-3.5" /> Send Quick Message
              </Button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
