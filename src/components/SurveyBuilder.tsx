import type { ReactNode } from 'react'

const steps = [
  { n: '01', title: 'Questions', detail: 'Draft Questions', active: true },
  { n: '02', title: 'Review', detail: 'Survey Logic Lab', active: false },
  { n: '03', title: 'Share', detail: 'Share the Survey', active: false },
  { n: '04', title: 'Response', detail: 'View all responses', active: false },
]

export function SurveyBuilder() {
  return (
    <div
      className="builder-fit overflow-hidden rounded-xl border border-[#E7E7E7] bg-white shadow-[0_18px_50px_rgba(17,17,17,0.06)]"
      role="img"
      aria-label="Survey builder with question types, display logic, preview, and publish"
    >
      <div className="builder-fit-inner">
        <div className="builder-stage flex flex-col bg-white text-[12px] text-[#111]">
          <TopBar />
          <Stepper />
          <div className="flex min-h-0 flex-1">
            <IconRail />
            <BuilderPanel />
            <Canvas />
          </div>
        </div>
      </div>
    </div>
  )
}

function TopBar() {
  return (
    <div className="flex h-11 shrink-0 items-center gap-4 border-b border-[#ECECEC] px-3">
      <div className="flex items-center gap-2 font-semibold">
        <GridMark />
        BI Survey Suit
      </div>
      <div className="flex items-center gap-1.5 text-[#444]">
        <PageIcon />
        testrr
        <Chevron />
      </div>
      <div className="ml-auto flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-[#3B82F6] text-[11px] font-semibold text-white">
          A
        </span>
        <span className="leading-tight">
          <span className="block text-[11px]">aswin@gmail.com</span>
          <span className="block text-[10px] text-[#9AA0A6]">test</span>
        </span>
      </div>
    </div>
  )
}

function Stepper() {
  return (
    <div className="flex h-[52px] shrink-0 items-center gap-3 border-b border-[#ECECEC] px-3">
      <div className="flex min-w-0 flex-1 items-center gap-1">
        {steps.map((step) => (
          <div
            key={step.n}
            className={`flex items-center gap-2 rounded-lg px-2 py-1 ${
              step.active ? 'bg-[#F4F8FF]' : ''
            }`}
          >
            <span
              className={`grid h-6 w-6 place-items-center rounded-full text-[10px] font-semibold ${
                step.active ? 'bg-[#3B82F6] text-white' : 'bg-[#F1F1F1] text-[#8A8A8A]'
              }`}
            >
              {step.n}
            </span>
            <span className="leading-tight">
              <span className={`block text-[11px] font-medium ${step.active ? 'text-[#111]' : 'text-[#666]'}`}>
                {step.title}
              </span>
              <span className="block text-[9px] text-[#9AA0A6]">{step.detail}</span>
            </span>
          </div>
        ))}
      </div>
      <div className="flex shrink-0 items-center gap-1.5">
        <span className="rounded-md bg-[#F3F4F6] px-2.5 py-1.5 text-[11px] font-medium text-[#444]">
          2 Updates
        </span>
        <span className="inline-flex items-center gap-1 rounded-md bg-[#22C55E] px-2.5 py-1.5 text-[11px] font-medium text-white">
          <EyeIcon />
          Preview Survey
        </span>
        <span className="rounded-md bg-[#111] px-3 py-1.5 text-[11px] font-medium text-white">Publish</span>
      </div>
    </div>
  )
}

function IconRail() {
  const icons = [GridMark, PenIcon, BranchIcon, GearIcon]
  return (
    <div className="flex w-10 shrink-0 flex-col items-center gap-1 border-r border-[#ECECEC] py-2">
      {icons.map((Icon, index) => (
        <span
          key={index}
          className={`grid h-8 w-8 place-items-center rounded-md ${index === 0 ? 'bg-[#F3F4F6] text-[#111]' : 'text-[#8A8A8A]'}`}
        >
          <Icon />
        </span>
      ))}
    </div>
  )
}

function BuilderPanel() {
  return (
    <div className="flex w-[210px] shrink-0 flex-col border-r border-[#ECECEC]">
      <div className="flex items-center justify-between border-b border-[#ECECEC] px-3 py-2.5">
        <span className="text-[13px] font-semibold">Builder</span>
        <span className="text-[#9AA0A6]">
          <CloseIcon />
        </span>
      </div>
      <div className="flex items-center justify-between px-3 py-2 text-[12px]">
        <span>Basic</span>
        <Chevron />
      </div>
      <div className="px-3 pb-2">
        <p className="mb-1 text-[10px] text-[#8A8A8A]">Question</p>
        <div className="flex items-center justify-between rounded-md bg-[#F3F4F6] px-2.5 py-2">
          <span>test 2</span>
          <Kebab />
        </div>
      </div>
      <div className="px-3 pb-2">
        <p className="mb-1 text-[10px] text-[#8A8A8A]">Type</p>
        <div className="flex items-center justify-between rounded-md border border-[#ECECEC] px-2.5 py-2">
          <span>Single Select</span>
          <Chevron />
        </div>
      </div>
      <div className="flex items-center gap-2 px-3 py-1.5 text-[12px] text-[#444]">
        <span className="h-3.5 w-3.5 rounded-[3px] border border-[#D0D0D0]" />
        Required
      </div>
      <PanelRow label="Option properties" />
      <PanelRow label="Logic" />
      <PanelRow label="Advanced" />
    </div>
  )
}

function PanelRow({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between border-t border-[#F2F2F2] px-3 py-2.5 text-[12px]">
      <span>{label}</span>
      <Chevron />
    </div>
  )
}

function Canvas() {
  return (
    <div className="relative flex min-w-0 flex-1 flex-col bg-[#F5F6F8]">
      <div className="flex items-center justify-between px-4 py-2">
        <span className="rounded-md bg-[#ECEDEF] px-3 py-1 text-[12px] text-[#666]">testrr</span>
        <span className="inline-flex items-center gap-1.5 rounded-md bg-[#111] px-2.5 py-1.5 text-[11px] font-medium text-white">
          <SwatchIcon />
          Theme & Branding
        </span>
      </div>
      <p className="px-5 text-[11px] text-[#9AA0A6]">Page 1</p>
      <div className="mx-4 mt-1.5 rounded-lg border border-[#ECECEC] bg-white px-3 py-2.5 shadow-[0_1px_2px_rgba(17,17,17,0.04)]">
        <div className="flex items-start justify-between gap-3">
          <p className="font-semibold">
            <span className="text-[#8A8A8A]">Q1:</span> test 2
          </p>
          <div className="flex items-center gap-2 text-[10px]">
            <span className="rounded-full bg-[#F3F4F6] px-2 py-0.5 text-[#666]">Single Select</span>
            <span className="font-medium text-[#F43F5E]">Add Display Logic</span>
            <TrashIcon />
          </div>
        </div>
        <p className="mt-3 text-[11px] text-[#666]">Options:</p>
        <OptionRow label="Column 1" />
        <OptionRow label="Column 2" />
      </div>
      <p className="mt-2 text-center text-[11px] text-[#B0B0B0]">‹ Previous &nbsp; 1 / 1 &nbsp; Next ›</p>
      <div className="min-h-0 flex-1 px-4 pt-2">
        <ElementMenu />
      </div>
      <PageTabs />
    </div>
  )
}

function OptionRow({ label }: { label: string }) {
  return (
    <div className="mt-1.5 flex items-center gap-2 rounded-md bg-[#F4F5F7] px-2.5 py-1.5">
      <span className="h-3 w-3 rounded-full border border-[#C8C8C8]" />
      <span className="text-[12px]">{label}</span>
      <span className="ml-auto">
        <Kebab />
      </span>
    </div>
  )
}

function ElementMenu() {
  return (
    <div className="w-[180px] rounded-lg border border-[#ECECEC] bg-white px-2 py-1.5 shadow-[0_12px_30px_rgba(17,17,17,0.08)]">
      <p className="px-1.5 pb-1.5 text-[10px] font-medium text-[#9AA0A6]">Question Elements</p>
      <MenuItem icon={<RadioOn />} label="Single Select" />
      <MenuItem icon={<CheckOn />} label="Multi Select" />
      <MenuItem icon={<BoxIcon />} label="Open Ended" />
      <MenuItem icon={<MatrixIcon />} label="Matrix Rating" />
      <p className="mt-2 px-1.5 pb-1.5 text-[10px] font-medium text-[#9AA0A6]">Display Elements</p>
      <MenuItem icon={<TextIcon />} label="Text Block" />
      <MenuItem icon={<EmbedIcon />} label="Embed Block" />
    </div>
  )
}

function MenuItem({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-md px-1.5 py-0.5 text-[12px]">
      {icon}
      {label}
    </div>
  )
}

function PageTabs() {
  return (
    <div className="flex items-center gap-1.5 px-3 py-2.5">
      <CircleButton>
        <PlusIcon />
      </CircleButton>
      <CircleButton>
        <ChevronLeft />
      </CircleButton>
      <span className="grid h-7 w-7 place-items-center rounded-md border border-[#E4E4E4] bg-white text-[11px]">1</span>
      <span className="inline-flex items-center gap-1 rounded-md border-2 border-[#3B82F6] bg-white px-2 py-1 text-[11px] font-medium">
        <PageIcon />1 test 2
      </span>
      <span className="grid h-7 w-7 place-items-center rounded-md border border-dashed border-[#F0B27A] text-[#C4C4C4]">
        <Kebab />
      </span>
      <span className="ml-auto flex items-center gap-2">
        <CircleButton>
          <ChevronRight />
        </CircleButton>
        <span className="inline-flex items-center gap-1 rounded-full border border-[#F6C1C1] bg-white px-2.5 py-1 text-[11px] font-medium text-[#F43F5E]">
          <TrashIcon />
          Trash
        </span>
      </span>
    </div>
  )
}

function CircleButton({ children }: { children: ReactNode }) {
  return (
    <span className="grid h-7 w-7 place-items-center rounded-full border border-[#E4E4E4] bg-white text-[#666]">
      {children}
    </span>
  )
}

function GridMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M1 1h5v5H1zM8 1h5v5H8zM1 8h5v5H1zM8 8h5v5H8z" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function PageIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M3 1.5h4L9.5 4v6.5h-6.5z" fill="none" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  )
}

function Chevron() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
      <path d="M2.5 3.5 5 6.5 7.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M1 6s2-3.2 5-3.2S11 6 11 6s-2 3.2-5 3.2S1 6 1 6z" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="6" cy="6" r="1.2" fill="currentColor" />
    </svg>
  )
}

function PenIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M8.2 2.8 11.2 5.8 5 12H2v-3z" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function BranchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <circle cx="3.5" cy="3.5" r="1.4" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="10.5" cy="4" r="1.4" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="6.5" cy="10.5" r="1.4" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <path d="M4.5 4.5 6 9.2M9.4 5 7.2 9.2" fill="none" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  )
}

function GearIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <circle cx="7" cy="7" r="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 1.5v1.6M7 10.9v1.6M1.5 7h1.6M10.9 7h1.6M3 3l1.1 1.1M9.9 9.9 11 11M11 3 9.9 4.1M4.1 9.9 3 11" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M3 3l6 6M9 3 3 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function Kebab() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <circle cx="6" cy="2.5" r="0.9" fill="currentColor" />
      <circle cx="6" cy="6" r="0.9" fill="currentColor" />
      <circle cx="6" cy="9.5" r="0.9" fill="currentColor" />
    </svg>
  )
}

function SwatchIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2 7.5 6.5 3a2 2 0 0 1 2.8 2.8L5 10.2a1.6 1.6 0 0 1-2.3 0 1.6 1.6 0 0 1-.7-2.7z" fill="none" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  )
}

function TrashIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2.5 3.5h7M4.5 3.5V2.5h3v1M4 3.5l.4 6h3.2l.4-6" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  )
}

function RadioOn() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <circle cx="7" cy="7" r="5" fill="none" stroke="#3B82F6" strokeWidth="1.3" />
      <circle cx="7" cy="7" r="2.3" fill="#3B82F6" />
    </svg>
  )
}

function CheckOn() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <rect x="2" y="2" width="10" height="10" rx="2" fill="#111" />
      <path d="M4.2 7.1 6.1 9l3.7-4" fill="none" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function BoxIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <rect x="2.5" y="2.5" width="9" height="9" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function MatrixIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M2.5 4.5h9M2.5 9.5h9M5 2.5v9M9 2.5v9" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  )
}

function TextIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M3 3.5h8M3 7h8M3 10.5h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function EmbedIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M5 4 2.5 7 5 10M9 4l2.5 3L9 10" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M6 2.5v7M2.5 6h7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function ChevronLeft() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
      <path d="M6 2.5 3.5 5 6 7.5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
      <path d="M4 2.5 6.5 5 4 7.5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
