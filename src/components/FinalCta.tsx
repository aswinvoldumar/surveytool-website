import { useOpenSignup } from './SignupDialog.tsx'

export function FinalCta() {
  const openSignup = useOpenSignup()

  return (
    <section id="get-started" className="relative overflow-hidden bg-canvas py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-6%] hidden h-[440px] w-[46%] -translate-y-1/2 bg-gradient-to-br from-glow via-tide to-mint lg:block"
        style={{ clipPath: 'polygon(16% 0, 100% 10%, 90% 100%, 0 76%)' }}
      />
      <p
        aria-hidden="true"
        className="pointer-events-none absolute top-[18%] right-0 mr-[clamp(1.5rem,4vw,4rem)] hidden text-[clamp(6rem,13vw,11rem)] leading-none font-semibold tracking-[-0.07em] text-white select-none lg:block"
      >
        ASK
      </p>

      <div className="shell relative z-10 grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)]">
        <div className="max-w-xl">
          <h2 className="reveal text-[clamp(2.2rem,4.2vw,3.6rem)] leading-[1.02] font-semibold tracking-[-0.045em] text-balance">
            Your next great insight starts with a question.
          </h2>
          <p className="reveal mt-5 max-w-[40ch] text-[17px] leading-relaxed text-pretty text-muted">
            Start creating better surveys and discover what your audience really thinks.
          </p>
          <button type="button" className="btn mt-8" onClick={openSignup}>
            Get started for free
          </button>
          <p className="mt-4 text-sm text-muted">No complicated setup. Just better questions.</p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="shell mt-12 h-24 bg-gradient-to-r from-glow via-tide to-mint lg:hidden"
        style={{ clipPath: 'polygon(0 36%, 100% 0, 100% 100%, 0 78%)' }}
      />
    </section>
  )
}
