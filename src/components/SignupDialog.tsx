import { createContext, useCallback, useContext, useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { startSmoothScroll, stopSmoothScroll } from './SmoothScroll.tsx'

const formSubmitUrl = 'https://formsubmit.co/ajax/support@bizintellis.com'
const OpenSignupContext = createContext<() => void>(() => {})

export function useOpenSignup() {
  return useContext(OpenSignupContext)
}

export function SignupProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [formKey, setFormKey] = useState(0)
  const openSignup = useCallback(() => {
    setFormKey((value) => value + 1)
    setOpen(true)
  }, [])
  const closeSignup = useCallback(() => setOpen(false), [])

  return (
    <OpenSignupContext.Provider value={openSignup}>
      {children}
      {open ? <SignupDialog formKey={formKey} onClose={closeSignup} /> : null}
    </OpenSignupContext.Provider>
  )
}

function SignupDialog({ formKey, onClose }: { formKey: number; onClose: () => void }) {
  const titleId = useId()
  const firstField = useRef<HTMLInputElement>(null)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [sentName, setSentName] = useState('')

  useEffect(() => {
    firstField.current?.focus()
    stopSmoothScroll()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey)
      startSmoothScroll()
    }
  }, [onClose])

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    setSending(true)
    setError('')

    try {
      const response = await fetch(formSubmitUrl, {
        method: 'POST',
        signal: AbortSignal.timeout(60000),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          _subject: 'Survey Studio signup',
          _template: 'box',
          _captcha: 'false',
          message: `${name} asked to get started with Survey Studio.`,
        }),
      })
      const result = (await response.json().catch(() => null)) as { success?: string | boolean; message?: string } | null
      const sent = response.ok && (result?.success === true || result?.success === 'true')
      if (!sent) {
        const message = result?.message ?? ''
        setError(
          message.toLowerCase().includes('activation')
            ? 'Check support@bizintellis.com for FormSubmit’s one-time activation email, then submit again.'
            : 'We couldn’t send that just now. Try again in a moment.',
        )
        return
      }
      setSentName(name)
    } catch {
      setError('We couldn’t send that just now. Try again in a moment.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4" key={formKey}>
      <button
        type="button"
        className="absolute inset-0 bg-ink/40"
        aria-label="Close get started form"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-[0_24px_70px_rgba(17,17,17,0.16)] sm:p-8"
      >
        <button
          type="button"
          className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full text-ink hover:bg-[#F3F3F3]"
          aria-label="Close"
          onClick={onClose}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <path d="M3 3l8 8M11 3 3 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        {sentName ? (
          <div role="status">
            <h2 id={titleId} className="pr-8 text-2xl font-semibold tracking-[-0.04em]">
              You’re on the list.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Thanks, {sentName}. Your details were sent to the Survey Studio team.
            </p>
            <button type="button" className="btn mt-6" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            <h2 id={titleId} className="pr-8 text-2xl font-semibold tracking-[-0.04em]">
              Get started
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">Tell us where to reach you.</p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="signup-name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  ref={firstField}
                  id="signup-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="mt-2 min-h-12 w-full rounded-full border border-line bg-white px-5 text-[15px] text-ink placeholder:text-muted"
                />
              </div>
              <div>
                <label htmlFor="signup-email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Work email"
                  className="mt-2 min-h-12 w-full rounded-full border border-line bg-white px-5 text-[15px] text-ink placeholder:text-muted"
                />
              </div>
              <div>
                <label htmlFor="signup-phone" className="text-sm font-medium">
                  Phone
                </label>
                <input
                  id="signup-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="Phone number"
                  className="mt-2 min-h-12 w-full rounded-full border border-line bg-white px-5 text-[15px] text-ink placeholder:text-muted"
                />
              </div>
              {error ? (
                <p role="alert" className="text-sm text-ink">
                  {error}
                </p>
              ) : null}
              <button type="submit" className="btn w-full" disabled={sending}>
                {sending ? 'Sending…' : 'Get started for free'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
