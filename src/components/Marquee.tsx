export function Marquee() {
  return (
    <div aria-hidden="true" className="overflow-hidden border-t border-line bg-canvas py-6">
      <div className="marquee-track flex w-max">
        {[0, 1].map((group) => (
          <p
            key={group}
            className="flex shrink-0 text-[clamp(2.5rem,6vw,4.5rem)] leading-none font-semibold tracking-[-0.06em] whitespace-nowrap text-white"
          >
            {Array.from({ length: 4 }, (_, index) => (
              <span key={index} className="pr-[0.55em]">
                survey studio
              </span>
            ))}
          </p>
        ))}
      </div>
    </div>
  )
}
