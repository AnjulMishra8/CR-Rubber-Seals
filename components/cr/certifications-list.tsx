'use client'

import { LucideIcon } from '@/components/cr/lucide-icon'
import type { Certification } from '@/lib/site-data'

interface CertificationsListProps {
  certifications: Certification[]
}

export function CertificationsList({ certifications }: CertificationsListProps) {
  const handleMouseEnter = (index: number) => {
    const articles = document.querySelectorAll('[data-cert-index]');
    articles.forEach((article) => {
      const articleIndex = parseInt(article.getAttribute('data-cert-index') || '0');
      if (articleIndex > index) {
        (article as HTMLElement).style.borderBottomColor = 'transparent';
      }
    });
  };

  const handleMouseLeave = () => {
    const articles = document.querySelectorAll('[data-cert-index]');
    articles.forEach((article) => {
      (article as HTMLElement).style.borderBottomColor = '';
    });
  };

  return (
    <div className="relative z-20 mt-12 space-y-px border-t border-border">
      {certifications.map((cert, index) => (
        <article
          key={cert.id}
          className="group relative z-0 flex overflow-visible border-b border-border transition-all hover:bg-muted/50 group-hover:z-[1000]"
          data-aos="fade-up"
          data-aos-delay={`${index * 50}`}
          data-cert-index={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left side - Title */}
          <div className="flex flex-1 items-center px-6 py-4 sm:py-5">
            <div className="flex items-center gap-4 w-full">
              <div className="flex shrink-0 size-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <LucideIcon name={cert.icon} className="size-5" />
              </div>
              <h3 className="font-sans text-base font-semibold text-ink">
                {cert.title}
              </h3>
            </div>
          </div>

          {/* Expanded Preview Popup - Shown on hover */}
          {cert.preview && (
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-[9999] w-96 -translate-x-1/2 -translate-y-1/2 scale-95 opacity-0 invisible transition-all duration-300 group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100 group-hover:visible">
              <div className="overflow-hidden rounded-lg border border-border bg-background shadow-2xl">
                <img
                  src={cert.preview}
                  alt={cert.title}
                  className="h-auto w-full object-contain bg-muted"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              </div>
            </div>
          )}

          {/* Download button - Always visible */}
          <div className="flex shrink-0 items-center px-4 sm:px-6">
            <a
              href={cert.file}
              download
              target="_blank"
              rel="noopener noreferrer"
              title={`Download ${cert.title}`}
              className="inline-flex items-center justify-center size-10 rounded-full border border-border bg-background text-ink transition-all hover:border-brand hover:text-brand hover:bg-brand/5"
            >
              <LucideIcon name="Download" className="size-5" />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
