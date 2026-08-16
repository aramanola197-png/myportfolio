import Image from "next/image";
import { projects } from "@/data/projects";
import { Button } from "@/components/Button";

export default function WebsitesPage() {
  const mainProjects = projects.filter((p) => p.category === "main");
  const portfolioProjects = projects.filter((p) => p.category === "portfolio");

  return (
    <div className="pt-28 pb-24 px-5 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="mono text-[11px] tracking-[0.2em] text-[#6b6b6b] uppercase mb-4">
          Coding & Product
        </p>
        <h1 className="heading text-4xl sm:text-5xl text-[#f5f5f5] mb-6 leading-tight">
          Website & Software
        </h1>
        <p className="text-[#b0b0b0] max-w-2xl mb-20 leading-relaxed">
          Selected digital products and platforms I’ve designed, built, and brought to life. Each project reflects a different challenge, turning ideas into thoughtful, functional experiences with purpose, character, and a clear focus on the people they’re built for.        </p>

        <div className="space-y-16">
          {mainProjects.map((project) => (
            <article
              key={project.id}
              className="rounded-[1.25rem] border border-white/8 bg-white/[0.025] overflow-hidden"
            >
              <div className="relative aspect-[16/9] bg-[#0e0e0e] border-b border-white/5 protected-media select-none">
                <Image
                  src={project.screenshot}
                  alt={`${project.name} homepage`}
                  fill
                  className="object-cover object-top protected-media"
                  sizes="(max-width: 1024px) 100vw, 900px"
                  draggable={false}
                  unoptimized
                />
                {/* Non-interactive shield */}
                <div className="absolute inset-0 z-10" aria-hidden="true" />
              </div>
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/12 bg-white/[0.04]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-[#c0c0c0]" />
                    </svg>
                  </span>
                  <h2 className="heading text-2xl sm:text-3xl text-[#f5f5f5]">
                    {project.name}
                  </h2>
                </div>
                <div className="space-y-4 text-[#b0b0b0] text-[15px] leading-relaxed mb-8">
                  {project.description.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                <Button href={project.url} external variant="primary">
                  See the website
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-70" aria-hidden="true">
                    <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-24 pt-16 border-t border-white/5">
          <h2 className="heading text-2xl text-[#f5f5f5] mb-4">
            Additional portfolios
          </h2>
          <p className="text-[#b0b0b0] max-w-2xl mb-8 leading-relaxed">
            I have built more portfolio websites. Due to ownership agreements and copyright restrictions, only the work I am permitted to display publicly is shown above and below. The publicly visible work represents only what I am allowed to showcase.
          </p>

          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-[1.1rem] border border-white/8 bg-white/[0.025] p-8 mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/12 bg-white/[0.04]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-[#c0c0c0]" />
                    <path d="M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-[#c0c0c0]" />
                  </svg>
                </span>
                <h3 className="heading text-xl text-[#f5f5f5]">{project.name}</h3>
              </div>
              <div className="space-y-3 text-[#b0b0b0] text-[15px] leading-relaxed mb-6">
                {project.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <Button href={project.url} external variant="secondary">
                See portfolio
              </Button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
