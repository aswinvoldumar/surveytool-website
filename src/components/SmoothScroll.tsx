import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

let lenis: Lenis | null = null

export function stopSmoothScroll() {
  lenis?.stop()
}

export function startSmoothScroll() {
  lenis?.start()
}

export function SmoothScroll() {
  useEffect(() => {
    const next = new Lenis({
      autoRaf: true,
      lerp: 0.085,
      anchors: true,
    })
    lenis = next

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href^="#"]')
      if (!(link instanceof HTMLAnchorElement)) return
      const hash = link.getAttribute('href')
      if (!hash || hash === '#' || !document.getElementById(hash.slice(1))) return
      event.preventDefault()
      history.pushState(null, '', hash)
    }
    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      next.destroy()
      if (lenis === next) lenis = null
    }
  }, [])

  return null
}
