import { useEffect } from 'react'
import { LineChart } from './LineChart.tsx'

const capabilities = [
  {
    title: 'AI assist',
    body: 'Draft a question, tighten vague wording, or add a follow-up without leaving the builder.',
  },
  {
    title: 'Logic validation',
    body: 'Skip logic, required answers, and dead ends are checked before anyone can hit a broken path.',
  },
  {
    title: 'Easy migration',
    body: 'Bring surveys across from other tools and keep the questions, instead of rebuilding them one by one.',
  },
  {
    title: 'AI on the backend',
    body: 'Open responses are grouped and summarized after they arrive, so you start with the pattern, not the pile.',
  },
  {
    title: 'A calm interface',
    body: 'The controls stay quiet. People see the question, the choices, and a clear way to the next step.',
  },
  {
    title: 'Fast survey creation',
    body: 'Start from a blank page or a short brief and have a survey you can send in a few minutes.',
  },
  {
    title: 'Themes that match your brand',
    body: 'Set color, type, and logo once. Every survey your audience opens looks like your brand.',
  },
  {
    title: 'Test before production',
    body: 'Walk the survey as a respondent, including the logic, and publish only when the path is clean.',
  },
]

export function Features() {
  useEffect(() => {
    const nodes = [...document.querySelectorAll<HTMLElement>('#features .zoom-out')]
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0

    const update = () => {
      const stage = document.querySelector<HTMLElement>('#features .feature-stage')
      if (!stage) return
      const height = window.innerHeight
      const start = height * 0.9
      const end = height * 0.18
      const span = start - end
      const scrolled = (start - stage.getBoundingClientRect().top) / span
      const progress = Math.min(1, Math.max(0, scrolled))

      nodes.forEach((node, index) => {
        if (reduce.matches) {
          node.style.setProperty('--p', '1')
          return
        }
        const slice = 1 / nodes.length
        const local = (progress - index * slice) / slice
        node.style.setProperty('--p', String(Math.min(1, Math.max(0, local))))
      })
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    reduce.addEventListener('change', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      reduce.removeEventListener('change', onScroll)
    }
  }, [])

  return (
    <section id="features" className="bg-canvas py-24 lg:py-32">
      <div className="shell">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <h2 className="reveal max-w-[14ch] text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.02] font-semibold tracking-[-0.045em] text-balance">
            Everything you need to understand people better.
          </h2>
          <p className="reveal max-w-md text-[17px] leading-relaxed text-pretty text-muted lg:pb-2">
            From the first question to the final insight, every step is designed to feel effortless.
          </p>
        </div>

        <div className="feature-stage mt-14 grid items-start gap-4 lg:grid-cols-12 lg:gap-5">
          <article className="zoom-out zoom-out-left flex flex-col rounded-2xl border border-[#E4E4E4] bg-white p-6 sm:p-8 lg:col-span-7">
            <h3 className="text-2xl font-semibold tracking-[-0.03em]">Create beautiful surveys</h3>
            <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-muted">
              Build engaging surveys with flexible question types, customizable themes, and a smooth respondent experience.
            </p>
            <SurveyBuilder />
          </article>

          <article className="zoom-out zoom-out-right flex flex-col rounded-2xl border border-[#E4E4E4] bg-white p-6 sm:p-8 lg:col-span-5">
            <h3 className="text-2xl font-semibold tracking-[-0.03em]">Collect meaningful responses</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Share surveys effortlessly, reach your audience, and track incoming responses in real time.
            </p>
            <ResponseCounter />
          </article>

          <article className="zoom-out zoom-out-up grid items-center gap-8 rounded-2xl border border-[#E4E4E4] bg-white p-6 sm:p-8 lg:col-span-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">Discover actionable insights</h3>
              <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-muted">
                Understand patterns, identify trends, and turn feedback into informed decisions.
              </p>
            </div>
            <div>
              <LineChart
                id="feature-trend"
                label="Two response trends moving across the week"
                className="w-full"
              />
              <div className="mt-2 flex justify-between px-1 text-[10px] tracking-wide text-muted">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </div>
            </div>
          </article>
        </div>

        <div className="mt-20 border-t border-line">
          <h3 className="reveal max-w-[16ch] pt-12 text-[clamp(1.75rem,3vw,2.4rem)] leading-[1.05] font-semibold tracking-[-0.04em]">
            Ready before the link goes out.
          </h3>
          <ul className="mt-8 grid md:grid-cols-2">
            {capabilities.map((item) => (
              <li
                key={item.title}
                className="group border-b border-line px-5 py-6 motion-safe:transition-colors motion-safe:duration-200 hover:bg-ink md:odd:pr-12 md:even:border-l md:even:pl-12"
              >
                <h4 className="text-base font-medium tracking-[-0.02em] group-hover:text-white">{item.title}</h4>
                <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-muted group-hover:text-[#D6D6D6]">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function SurveyBuilder() {
  return (
    <div className="mt-8 rounded-xl bg-[#F6F6F6] p-4">
      <div className="flex flex-wrap gap-2">
        {['Choice', 'Rating', 'Text', 'AI assist'].map((type, index) => (
          <span
            key={type}
            className={`rounded-full px-3 py-1 text-xs ${
              index === 0
                ? 'bg-ink text-white'
                : type === 'AI assist'
                  ? 'border border-tide bg-[#F3FBFC] text-ink'
                  : 'bg-white text-muted'
            }`}
          >
            {type}
          </span>
        ))}
      </div>
      <div className="mt-4 rounded-xl border border-[#E8E8E8] bg-white p-4">
        <div className="flex items-center justify-between text-xs text-muted">
          <span>Question 1</span>
          <span>Choice</span>
        </div>
        <p className="mt-2 text-sm font-medium tracking-[-0.02em]">How was your last visit?</p>
        <p className="mt-2 text-xs text-muted">Suggested: What should we improve first?</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {['Great', 'Okay', 'Poor'].map((answer, index) => (
            <span
              key={answer}
              className={`rounded-full border px-3 py-1 text-xs ${
                index === 0 ? 'border-tide bg-[#F3FBFC] text-ink' : 'border-[#E6E6E6] text-muted'
              }`}
            >
              {answer}
            </span>
          ))}
        </div>
      </div>
      <p className="mt-3 rounded-xl border border-dashed border-[#DDDDDD] bg-white/80 px-4 py-3 text-xs text-muted">
        + Add a question
      </p>
    </div>
  )
}

function ResponseCounter() {
  return (
    <div className="pt-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-6xl leading-none font-semibold tracking-[-0.05em]">128</p>
          <p className="mt-3 text-sm text-muted">responses in the last hour</p>
        </div>
        <ProgressRing />
      </div>
      <div className="mt-6">
        <div className="h-1.5 overflow-hidden rounded-full bg-[#EFEFEF]">
          <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-glow via-tide to-mint" />
        </div>
        <p className="mt-2 text-xs text-muted">72% completion</p>
      </div>
    </div>
  )
}

function ProgressRing() {
  return (
    <svg viewBox="0 0 36 36" className="h-16 w-16 shrink-0" aria-hidden="true">
      <circle cx="18" cy="18" r="14" fill="none" stroke="#EFEFEF" strokeWidth="2.4" />
      <circle
        cx="18"
        cy="18"
        r="14"
        fill="none"
        stroke="#69D0E2"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeDasharray="64 88"
        transform="rotate(-90 18 18)"
      />
    </svg>
  )
}
