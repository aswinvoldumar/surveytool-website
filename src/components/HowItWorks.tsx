const steps = [
  {
    number: '01',
    title: 'Create your survey.',
    body: 'Choose a question type, write in plain language, and preview what people will see.',
  },
  {
    number: '02',
    title: 'Share it with your audience.',
    body: 'Send a link and follow responses as they come in.',
  },
  {
    number: '03',
    title: 'Turn responses into insights.',
    body: 'Read the pattern, then decide what to do next.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-canvas py-8 pb-24 lg:pb-32">
      <div className="shell">
        <h2 className="reveal text-lg font-medium tracking-[-0.02em]">How it works</h2>
        <ol className="relative mt-10 grid gap-12 md:mt-14 md:grid-cols-3 md:gap-8">
          <div
            aria-hidden="true"
            className="absolute top-7 right-0 left-0 hidden h-px bg-gradient-to-r from-glow via-tide to-mint md:block"
          />
          {steps.map((step) => (
            <li key={step.number} className="relative">
              <p className="relative z-10 w-fit bg-canvas pr-4 text-[clamp(2.75rem,4vw,4rem)] leading-none font-semibold tracking-[-0.05em]">
                {step.number}
              </p>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em]">{step.title}</h3>
              <p className="mt-2 max-w-[32ch] text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
