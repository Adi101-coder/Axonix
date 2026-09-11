import type { ReactNode } from 'react'

function Glyph({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {children}
    </svg>
  )
}

const stroke = {
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export const icons = {
  nodes: (
    <Glyph>
      <rect x="3" y="3" width="6" height="6" rx="1.6" {...stroke} />
      <rect x="15" y="3" width="6" height="6" rx="1.6" {...stroke} />
      <rect x="3" y="15" width="6" height="6" rx="1.6" {...stroke} />
      <rect x="15" y="15" width="6" height="6" rx="1.6" {...stroke} />
      <path d="M9 6h6M6 9v6M18 9v6M9 18h6" {...stroke} />
    </Glyph>
  ),
  rocket: (
    <Glyph>
      <path
        d="M12 3c2.2 2.4 3.8 5.2 4.2 8.4-1.7.6-3 .6-4.2.6s-2.5 0-4.2-.6C8.2 8.2 9.8 5.4 12 3Z"
        {...stroke}
      />
      <path d="M9.2 12.6c-.8 1.5-1.4 3.4-1.5 5.2 1.4-.4 2.6-.6 4.3-.6s2.9.2 4.3.6c-.1-1.8-.7-3.7-1.5-5.2" {...stroke} />
      <path d="M9.4 14.8c-1.6.3-2.8 1.2-3.6 2.6 1.4.2 2.4 0 3.4-.6M14.6 14.8c1.6.3 2.8 1.2 3.6 2.6-1.4.2-2.4 0-3.4-.6" {...stroke} />
      <circle cx="12" cy="9.2" r="1.15" {...stroke} />
    </Glyph>
  ),
  headset: (
    <Glyph>
      <path d="M4.5 13.5V12A7.5 7.5 0 0 1 12 4.5 7.5 7.5 0 0 1 19.5 12v1.5" {...stroke} />
      <path d="M4.5 13.2c0-1.1.9-2 2-2h.8v6.1h-.8a2 2 0 0 1-2-2zM16.7 11.2h.8a2 2 0 0 1 2 2v2.1a2 2 0 0 1-2 2h-.8z" {...stroke} />
      <path d="M19.5 17.4v.9A3.6 3.6 0 0 1 15.9 22h-1.2" {...stroke} />
    </Glyph>
  ),
  bolt: (
    <Glyph>
      <path d="M13.2 2.8 6.4 13.1h4.7l-.8 8.1 7.2-11.2h-4.8z" {...stroke} />
    </Glyph>
  ),
  monitor: (
    <Glyph>
      <rect x="3" y="4" width="18" height="12.2" rx="2.2" {...stroke} />
      <path d="M8 20h8M12 16.2V20" {...stroke} />
    </Glyph>
  ),
  radar: (
    <Glyph>
      <path d="M4.2 6.2A9 9 0 1 0 12 3" {...stroke} />
      <path d="M6.6 12a5.4 5.4 0 1 0 5.4-5.4" {...stroke} />
      <path d="M9.4 12a2.6 2.6 0 1 0 2.6-2.6" {...stroke} />
    </Glyph>
  ),
  star: (
    <Glyph>
      <path
        d="m12 3.2 2.05 4.9 5.35.5-4.1 3.4 1.25 5.2L12 14.9 7.45 17.2l1.25-5.2-4.1-3.4 5.35-.5z"
        {...stroke}
      />
    </Glyph>
  ),
  shield: (
    <Glyph>
      <path
        d="M12 3.2 5.4 5.6A2.6 2.6 0 0 0 3.7 8v6.3c0 1.1.7 2.5 1.6 3.2l4.1 3.1c1.3 1 3.5 1 4.8 0l4.1-3.1c.9-.7 1.6-2.1 1.6-3.2V8a2.6 2.6 0 0 0-1.7-2.4L12 3.2Z"
        {...stroke}
      />
      <path d="m8.7 12 2.1 2.1 4.4-4.4" {...stroke} />
    </Glyph>
  ),
}
