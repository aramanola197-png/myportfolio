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
          Fully functional products and portfolio sites. Each card presents the live work with a description of what was built.
        </p>

        <div className="space-y-16">
          {mainProjects.map((project) => (
            <article
              key={project.id}
              className="rounded-[1.25rem] border border-white/8 bg-white/[0.02] overflow-hidden"
            >
              <div className="relative aspect-[16/9] bg-[#050505] border-b border-white/5 flex items-center justify-center">
                {/* Screenshot will appear once the file is placed at the path below */}
                <Image
                  src={project.screenshot}
                  alt={`${project.name} homepage`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 900px"
                />
              </div>
              <div className="p-8 sm:p-10">
                <h2 className="heading text-2xl sm:text-3xl text-[#f5f5f5] mb-6">
                  {project.name}
                </h2>
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
              className="rounded-[1.1rem] border border-white/8 bg-white/[0.02] p-8 mb-6"
            >
              <h3 className="heading text-xl text-[#f5f5f5] mb-4">{project.name}</h3>
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
