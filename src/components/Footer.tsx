import { Logo } from './Logo.tsx'
import { useOpenSignup } from './SignupDialog.tsx'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Insights', href: '#insights' },
      { label: 'How it works', href: '#how-it-works' },
    ],
  },
  {
    title: 'How it works',
    links: [
      { label: 'Create your survey', href: '#create' },
      { label: 'Share it with your audience', href: '#share' },
      { label: 'Turn responses into insights', href: '#decide' },
    ],
  },
  {
    title: 'Company',
    links: [{ label: 'Get started', href: '#get-started' }],
  },
]

export function Footer() {
  const openSignup = useOpenSignup()

  return (
    <footer id="footer" className="border-t border-line bg-canvas">
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

      <div className="shell border-t border-line py-6 text-sm text-muted">
        <p>© 2026 Survey Studio</p>
      </div>
    </footer>
  )
}
