import { LineChart } from './LineChart.tsx'

const activity = [
  { label: 'Product team finished Pulse', time: '2m' },
  { label: '18 new responses arrived', time: '14m' },
  { label: 'Theme set to Calm', time: '1h' },
]

export function Showcase() {
  return (
    <section id="insights" className="bg-canvas pb-24 lg:pb-32">
      <div className="shell">
        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
          <h2 className="reveal text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.02] font-semibold tracking-[-0.045em]">
            From questions to clarity.
          </h2>
          <p className="reveal max-w-md text-[17px] leading-relaxed text-pretty text-muted lg:pb-2">
            One quiet view of who answered, who finished, and what the answers are starting to say.
          </p>
        </div>

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute top-10 -right-3 -bottom-4 left-[22%] bg-gradient-to-br from-glow via-tide to-mint sm:-right-6"
            style={{ clipPath: 'polygon(14% 0, 100% 4%, 100% 100%, 0 86%)' }}
          />
          <div className="relative border border-[#E6E6E6] bg-white p-5 sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs text-muted">Survey overview</p>
                <h3 className="mt-1 text-xl font-semibold tracking-[-0.03em]">Q4 Customer Pulse</h3>
                <p className="mt-1 text-sm text-muted">6 questions · Open link</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-tide" />
                Collecting
              </span>
            </div>

            <div className="mt-8 grid gap-6 border-y border-[#EFEFEF] py-6 sm:grid-cols-3">
              <Stat value="1,284" label="Responses" />
              <Stat value="95%" label="Completion rate" />
              <Stat value="4.8" label="Average score" />
            </div>

            <div className="mt-8 grid items-end gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(220px,0.7fr)]">
              <div>
                <p className="text-xs text-muted">Response trend</p>
                <LineChart
                  id="showcase-trend"
                  label="Responses climbing through the week, with a midweek peak"
                  marker="+420"
                  className="mt-2 w-full"
                />
              </div>
              <div>
                <p className="text-xs text-muted">Recent activity</p>
                <ul className="mt-2">
                  {activity.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center justify-between gap-4 border-b border-[#F0F0F0] py-3 text-sm"
                    >
                      <span>{item.label}</span>
                      <span className="shrink-0 text-muted">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <p>
      <span className="block text-3xl font-semibold tracking-[-0.04em]">{value}</span>
      <span className="mt-1 block text-sm text-muted">{label}</span>
    </p>
  )
}
