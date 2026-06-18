'use client'

import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { heroSlides } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function HeroCarousel({
  onRequestQuote,
  onExplore,
}: {
  onRequestQuote: () => void
  onExplore: () => void
}) {
  const [index, setIndex] = useState(0)
  const count = heroSlides.length

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count])
  const prev = () => setIndex((i) => (i - 1 + count) % count)

  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [next])

  return (
    <section className="relative h-screen min-h-[560px] w-full overflow-hidden bg-ink">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.id}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000',
            i === index ? 'opacity-100' : 'pointer-events-none opacity-0',
          )}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/40" />
          <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="inline-block rounded border border-brand/40 bg-brand/10 px-3 py-1 text-[11px] font-bold tracking-[0.2em] text-brand">
                {slide.tag.toUpperCase()}
              </span>
              <h1 className="mt-5 whitespace-pre-line font-serif text-4xl font-bold leading-[1.1] text-white text-balance sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {slide.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onRequestQuote}
                  className="rounded-full bg-brand px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-brand/30 transition-colors hover:bg-brand-dark"
                >
                  Request a Quote
                </button>
                <button
                  type="button"
                  onClick={onExplore}
                  className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
                >
                  Explore Products
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={prev}
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-2 text-white backdrop-blur transition-colors hover:bg-black/60"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-2 text-white backdrop-blur transition-colors hover:bg-black/60"
        aria-label="Next Slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setIndex(i)}
            className={cn(
              'h-2 rounded-full transition-all',
              i === index ? 'w-8 bg-brand' : 'w-2 bg-white/40 hover:bg-white/70',
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
