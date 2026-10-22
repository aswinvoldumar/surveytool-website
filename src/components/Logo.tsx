type LogoProps = {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <a
      href="#top"
      className={`inline-flex items-baseline text-[1.15rem] leading-none font-semibold tracking-[-0.05em] whitespace-nowrap text-ink sm:text-[1.35rem] ${className}`}
    >
      survey studio
    </a>
  )
}
