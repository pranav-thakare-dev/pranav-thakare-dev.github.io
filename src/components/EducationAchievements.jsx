import React from 'react'
import { GraduationCap, Award, Trophy, BookOpen, CheckCircle2, Calendar, Star } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function EducationAchievements() {
  const awards = [
    {
      title: 'Smart India Hackathon 2020 Finalist',
      organization: 'Government of India / National Level',
      date: '2020',
      description: 'Selected at the national level for building an innovative real-world problem-solving digital platform.',
      icon: Trophy,
      badge: 'National Finalist',
    },
    {
      title: 'Gainsight Spotlight Award',
      organization: 'Gainsight Inc.',
      date: '2021',
      description: 'Recognized for major architectural and performance improvements in the core Cockpit backend module.',
      icon: Star,
      badge: 'Performance Excellence',
    },
  ]

  const coursework = [
    'Data Structures & Algorithms',
    'Distributed Systems',
    'Database Management Systems',
    'Object-Oriented Programming',
    'Operating Systems',
    'Computer Networks',
  ]

  return (
    <section id="education" className="py-24 bg-slate-100/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Academic Background & Recognitions
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Education & Awards
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <Card className="glass-panel border-slate-200/80 dark:border-slate-800/80 shadow-md">
            <CardHeader className="p-6 pb-4 border-b border-slate-200/50 dark:border-slate-800/50">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-600 text-white shadow-md">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    Higher Education
                  </span>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    B.Tech in Computer Science
                  </CardTitle>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h4 className="text-lg font-bold text-foreground">
                    College of Engineering Pune (COEP)
                  </h4>
                  <p className="text-xs text-muted-foreground font-mono flex items-center gap-1.5 mt-0.5">
                    <Calendar className="w-3.5 h-3.5" /> 2016 – 2020 | Pune, India
                  </p>
                </div>

                <div className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center">
                  <span className="text-xs text-muted-foreground block font-mono">GPA Score</span>
                  <span className="text-lg font-extrabold font-mono text-blue-600 dark:text-blue-400">
                    7.31 / 10
                  </span>
                </div>
              </div>

              <div>
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-500" /> Key CS Coursework
                </h5>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <Badge key={course} variant="outline" className="py-1 px-3 text-xs bg-background/50">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements & Awards */}
          <Card className="glass-panel border-slate-200/80 dark:border-slate-800/80 shadow-md">
            <CardHeader className="p-6 pb-4 border-b border-slate-200/50 dark:border-slate-800/50">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                    Honors & Achievements
                  </span>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Recognitions
                  </CardTitle>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6 space-y-4">
              {awards.map((award, idx) => {
                const Icon = award.icon
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-secondary/50 border border-slate-200/60 dark:border-slate-800/60 flex items-start gap-4 hover:bg-secondary/80 transition-colors"
                  >
                    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-base font-bold text-foreground">
                          {award.title}
                        </h4>
                        <Badge variant="tech" className="text-[10px] text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20">
                          {award.badge}
                        </Badge>
                      </div>

                      <p className="text-xs text-blue-600 dark:text-blue-400 font-mono font-medium">
                        {award.organization} • {award.date}
                      </p>

                      <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                        {award.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
