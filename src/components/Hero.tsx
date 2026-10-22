import { useOpenSignup } from './SignupDialog.tsx'
import { SurveyBuilder } from './SurveyBuilder.tsx'

export function Hero() {
  const openSignup = useOpenSignup()

  return (
    <section id="top" className="relative isolate overflow-hidden bg-canvas pt-[72px]">
      <p
        aria-hidden="true"
        className="pointer-events-none absolute right-[2vw] bottom-3 z-20 text-right text-[18vw] leading-[0.82] font-semibold tracking-[-0.07em] text-white select-none lg:right-[3vw] lg:bottom-8 lg:text-[clamp(5.5rem,9.5vw,9.75rem)]"
      >
        survey
        <span className="block">studio</span>
      </p>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1]">
        <div
          className="absolute top-[42%] left-1/2 h-[300px] w-[min(88vw,420px)] -translate-x-1/2 bg-gradient-to-br from-glow via-tide to-mint lg:hidden"
          style={{ clipPath: 'polygon(10% 8%, 90% 0, 100% 68%, 70% 100%, 0 76%)' }}
        />
        <div
          className="absolute top-[16%] right-[2%] hidden h-[54%] w-[42%] bg-gradient-to-br from-glow via-tide to-mint lg:block"
          style={{ clipPath: 'polygon(14% 4%, 94% 0, 100% 62%, 64% 100%, 0 72%)' }}
        />
        <div
          className="absolute top-[22%] right-[30%] hidden h-[42%] w-[24%] bg-mint lg:block"
          style={{ clipPath: 'polygon(16% 0, 100% 14%, 84% 100%, 0 70%)' }}
        />
      </div>

      <div className="shell relative z-10 flex flex-col pb-8 lg:min-h-[calc(100svh-72px)] lg:pb-10">
        <div className="flex flex-1 flex-col justify-center gap-12 py-12 lg:grid lg:grid-cols-[minmax(280px,0.82fr)_minmax(0,1.18fr)] lg:items-center lg:gap-10 lg:py-8">
          <div className="hero-in min-w-0">
            <h1 className="pb-8 text-[clamp(2.7rem,4.7vw,4.9rem)] leading-[0.96] font-semibold tracking-[-0.045em] text-ink lg:pb-12">
              Ask better questions.
              <span className="block">Get smarter insights.</span>
            </h1>
            <p className="mt-6 max-w-[36ch] text-[17px] leading-relaxed text-pretty text-muted">
              Create beautiful surveys, collect meaningful feedback, and turn every response into a clearer path forward.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <button type="button" className="btn" onClick={openSignup}>
                Create your first survey
              </button>
              <a href="#features" className="link-arrow">
                Explore features
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="hero-in min-w-0 [animation-delay:120ms]">
            <div className="mx-auto w-full max-w-[720px] lg:ml-auto">
              <SurveyBuilder />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
