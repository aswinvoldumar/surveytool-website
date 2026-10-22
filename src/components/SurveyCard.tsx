import { useState } from 'react'

const options = [
  { id: 'quality', label: 'Product quality', share: 41 },
  { id: 'support', label: 'Support experience', share: 36 },
  { id: 'pricing', label: 'Fair pricing', share: 23 },
]

export function SurveyCard() {
  const [selected, setSelected] = useState('support')
  const current = options.find((option) => option.id === selected) ?? options[1]

  return (
    <article className="rounded-[28px] border border-[#E7E7E7] bg-white p-5 shadow-[0_18px_50px_rgba(17,17,17,0.06)] sm:p-6">
      <div className="flex items-center justify-between text-xs text-muted">
        <span>Question 2 of 3</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-tide" />
          Live
        </span>
      </div>

      <fieldset className="mt-4">
        <legend className="text-[1.35rem] leading-snug font-semibold tracking-[-0.03em] text-ink">
          What matters most to your customers?
        </legend>
        <div className="mt-4 space-y-2">
          {options.map((option) => {
            const isSelected = option.id === selected
            return (
              <label
                key={option.id}
                className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-3.5 py-3 text-sm transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ink ${
                  isSelected
                    ? 'border-tide bg-[#F3FBFC] text-ink'
                    : 'border-[#E6E6E6] bg-white text-ink hover:border-[#CFCFCF]'
                }`}
              >
                <input
                  className="sr-only"
                  type="radio"
                  name="customer-priority"
                  value={option.id}
                  checked={isSelected}
                  onChange={() => setSelected(option.id)}
                />
                <span
                  aria-hidden
                  className={`grid h-4 w-4 shrink-0 place-items-center rounded-full border ${
                    isSelected ? 'border-ink' : 'border-[#C8C8C8]'
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full bg-gradient-to-br from-tide to-mint ${
                      isSelected ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </span>
                {option.label}
              </label>
            )
          })}
        </div>
      </fieldset>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="text-muted">Response share</span>
          <span className="font-medium text-ink">{current.share}%</span>
        </div>
        <div
          className="h-1.5 overflow-hidden rounded-full bg-[#EFEFEF]"
          role="meter"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={current.share}
          aria-label="Share of responses for the selected answer"
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-glow via-tide to-mint transition-[width] duration-500 motion-reduce:transition-none"
            style={{ width: `${current.share}%` }}
          />
        </div>
      </div>
    </article>
  )
}
