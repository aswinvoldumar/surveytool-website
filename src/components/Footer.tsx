import { Logo } from './Logo.tsx'
import { useOpenSignup } from './SignupDialog.tsx'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Solutions', href: '#solutions' },
      { label: 'How it works', href: '#how-it-works' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Question design', href: '#features' },
      { label: 'Reading results', href: '#solutions' },
      { label: 'Three steps', href: '#how-it-works' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Get started', href: '#get-started' },
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
    ],
  },
]

export function Footer() {
  const openSignup = useOpenSignup()

  return (
    <footer id="resources" className="border-t border-line bg-canvas">
      <div className="shell grid gap-12 py-16 md:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Survey Studio helps teams ask clearer questions and turn responses into decisions.
          </p>
        </div>
        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2 className="text-sm font-medium">{column.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.label}>
                  {link.label === 'Get started' ? (
                    <button
                      type="button"
                      className="text-sm text-muted transition-colors hover:text-ink"
                      onClick={openSignup}
                    >
                      Get started
                    </button>
                  ) : (
                    <a href={link.href} className="text-sm text-muted transition-colors hover:text-ink">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="shell grid gap-8 border-t border-line py-10 md:grid-cols-2">
        <section id="privacy">
          <h2 className="text-sm font-medium">Privacy Policy</h2>
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted">
            Name, email, and phone entered in Get started are sent to support@bizintellis.com through FormSubmit so the team can follow up. Survey responses are not collected here.
          </p>
        </section>
        <section id="terms">
          <h2 className="text-sm font-medium">Terms of Service</h2>
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted">
            Survey Studio is a design preview. The figures on this page are sample marketing numbers, not live product totals. Use of the page does not create an account or a paid plan.
          </p>
        </section>
      </div>

      <div className="shell flex flex-col gap-3 border-t border-line py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Survey Studio</p>
        <div className="flex gap-5">
          <a href="#privacy" className="hover:text-ink">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-ink">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}
