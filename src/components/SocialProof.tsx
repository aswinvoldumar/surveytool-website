// Placeholder marketing figures. Replace with verified product totals before launch.
const metrics = [
  { value: '10K+', label: 'Surveys created' },
  { value: '500K+', label: 'Responses collected' },
  { value: '95%', label: 'Average completion rate' },
]

export function SocialProof() {
  return (
    <section aria-label="Sample results" className="border-y border-line bg-canvas">
      <dl className="shell grid gap-10 py-16 md:grid-cols-3 md:gap-0 md:py-20">
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className={`flex flex-col md:px-8 ${index > 0 ? 'md:border-l md:border-line' : 'md:pl-0'}`}
          >
            <dt className="order-2 mt-3 text-sm text-muted">{metric.label}</dt>
            <dd className="order-1 text-[clamp(2.5rem,4vw,3.5rem)] leading-none font-semibold tracking-[-0.045em]">
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
