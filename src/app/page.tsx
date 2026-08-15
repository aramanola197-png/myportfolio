import Image from "next/image";
import { Button } from "@/components/Button";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] flex flex-col justify-center px-5 sm:px-8 pt-24 pb-16">
        <div className="relative z-10 mx-auto max-w-6xl w-full">
          <p className="mono text-[11px] tracking-[0.25em] text-[#6b6b6b] mb-8 uppercase">
            AI Specialist · Design · Code · Writing
          </p>
          <h1 className="heading text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] tracking-tight text-[#f5f5f5] max-w-4xl">
            Raman Ola
          </h1>
          <p className="mt-8 max-w-xl text-lg sm:text-xl text-[#b0b0b0] leading-relaxed font-light">
            Approximately four years working with AI as a serious creative and production tool.
            Moving from idea to visual identity, functional product, and clear communication.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/#work" variant="primary">
              Explore the work
            </Button>
            <Button href="/#contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 mono text-[10px] tracking-[0.3em] text-[#4a4a4a] uppercase">
          Scroll
        </div>
      </section>

      <section id="about" className="relative py-24 sm:py-32 px-5 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.6)]">
                <Image
                  src="/profile.png"
                  alt="Raman Ola"
                  fill
                  className="object-cover"
                  sizes="224px"
                  priority
                />
              </div>
              <div className="absolute -inset-4 rounded-full border border-white/5 pointer-events-none" />
            </div>
            <div>
              <p className="mono text-[11px] tracking-[0.2em] text-[#6b6b6b] uppercase mb-4">About</p>
              <h2 className="heading text-3xl sm:text-4xl text-[#f5f5f5] mb-8 leading-tight">
                An AI Specialist who works across design, product and communication.
              </h2>
              <div className="space-y-6 text-[#b0b0b0] leading-relaxed text-[15px] sm:text-base">
                <p>
                  I have spent approximately four years working extensively with AI — not as a novelty, but as a practical tool across creative, technical and communication work. The core of what I do is simple: take an idea and move it through the layers required to make it real.
                </p>
                <p>
                  That movement usually begins with visual identity. I create logos, brand systems, posters, banners, promotional graphics and digital concepts as an AI-powered graphics designer. The design work is the most visible expression of the process, and it remains the strongest emphasis of this portfolio.
                </p>
                <p>
                  From there I build. Portfolio websites, fully functional frontends and backends, web applications and AI-powered products. The goal is never just code — it is turning an idea into a working digital product that people can actually use.
                </p>
                <p>
                  Writing sits alongside both. X threads, technical and ecosystem content, project explainers and longer articles. Clear communication is part of making the work land. I write for projects such as ChainLift and produce independent pieces that examine how people think with AI.
                </p>
                <p>
                  These three areas are not separate careers. They are connected layers of the same practice: research and thinking, visual identity, functional product, and the language that explains it. AI is present throughout as a serious production tool I have learned to use over years of consistent work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="relative py-24 sm:py-32 px-5 sm:px-8 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <p className="mono text-[11px] tracking-[0.2em] text-[#6b6b6b] uppercase mb-4">Capabilities</p>
          <h2 className="heading text-3xl sm:text-4xl text-[#f5f5f5] mb-16 max-w-2xl leading-tight">
            Three connected disciplines.
          </h2>
          <div className="space-y-6">
            <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10 hover:bg-white/[0.04] transition-colors duration-500">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                <div className="max-w-2xl">
                  <span className="mono text-[11px] text-[#6b6b6b] tracking-wider">01</span>
                  <h3 className="heading text-2xl sm:text-3xl text-[#f5f5f5] mt-2 mb-4">AI Graphics Designer</h3>
                  <p className="text-[#b0b0b0] leading-relaxed text-[15px]">
                    Logos, brand identities, posters, social graphics, banners, promotional work, visual concepts and digital artwork. AI is used as a production tool inside a deliberate design process. This remains the strongest visual emphasis of the portfolio.
                  </p>
                </div>
                <Button href="/graphics" variant="primary" transition className="shrink-0 self-start">See my work</Button>
              </div>
            </div>
            <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10 hover:bg-white/[0.04] transition-colors duration-500">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                <div className="max-w-2xl">
                  <span className="mono text-[11px] text-[#6b6b6b] tracking-wider">02</span>
                  <h3 className="heading text-2xl sm:text-3xl text-[#f5f5f5] mt-2 mb-4">Website & Software Builder</h3>
                  <p className="text-[#b0b0b0] leading-relaxed text-[15px]">
                    Portfolio websites, frontends, backends, fully functional websites, web applications and AI-powered products. The emphasis is on turning ideas into working digital products through coding, product thinking and AI where it fits.
                  </p>
                </div>
                <Button href="/websites" variant="primary" transition className="shrink-0 self-start">See my work</Button>
              </div>
            </div>
            <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10 hover:bg-white/[0.04] transition-colors duration-500">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                <div className="max-w-2xl">
                  <span className="mono text-[11px] text-[#6b6b6b] tracking-wider">03</span>
                  <h3 className="heading text-2xl sm:text-3xl text-[#f5f5f5] mt-2 mb-4">Writer</h3>
                  <p className="text-[#b0b0b0] leading-relaxed text-[15px]">
                    X threads, articles, project explainers, technical and ecosystem content, research-oriented writing. Writing is treated as part of the same practice — the ability to communicate product, technical and strategic ideas with clarity.
                  </p>
                </div>
                <Button href="/writing" variant="primary" transition className="shrink-0 self-start">See my work</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <p className="mono text-[11px] tracking-[0.2em] text-[#6b6b6b] uppercase mb-4">Audience</p>
          <h2 className="heading text-3xl sm:text-4xl text-[#f5f5f5] mb-16 leading-tight">Who I work with</h2>
          <div className="grid sm:grid-cols-2 gap-px bg-white/5 rounded-[1.25rem] overflow-hidden border border-white/8">
            {[
              { title: "Founders", text: "Early-stage and operating founders who need visual identity, a working product, and clear communication without assembling three separate people." },
              { title: "Startups", text: "Teams that require brand systems, interfaces, functional websites or AI-powered tools delivered with intention and consistency." },
              { title: "AI projects & AI-native teams", text: "Groups building with or around AI who need design, product interfaces, documentation and positioning that matches the technical depth of the work." },
              { title: "Web3 / Stacks / DAO projects", text: "Ecosystems and protocols that need visual assets, onboarding experiences, reputation or builder tools, and content that speaks accurately to the community." },
              { title: "Builders & creators", text: "Individuals shipping products, communities or personal brands who want a coherent digital presence — design, site, and the writing that explains it." },
              { title: "Businesses & individuals", text: "Anyone who needs a complete digital layer: branding, a functional website or product, and communication that does not feel generic." },
            ].map((item) => (
              <div key={item.title} className="bg-[#0a0a0a] p-7 sm:p-8 hover:bg-white/[0.03] transition-colors duration-300">
                <h3 className="heading text-lg text-[#f5f5f5] mb-3">{item.title}</h3>
                <p className="text-sm text-[#8a8a8a] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 border-t border-white/5">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading text-3xl sm:text-4xl md:text-5xl text-[#f5f5f5] leading-tight mb-8">
            One specialist who can move from visual identity to working product to the language that carries it.
          </h2>
          <p className="text-[#b0b0b0] text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            If you need the design, the build, and the communication handled with the same level of care, the next step is simple.
          </p>
          <Button href="/#contact" variant="primary" className="px-10 py-4 text-[12px]">
            Start a conversation
          </Button>
        </div>
      </section>

      <section id="contact" className="relative py-24 sm:py-32 px-5 sm:px-8 border-t border-white/5">
        <div className="mx-auto max-w-4xl">
          <p className="mono text-[11px] tracking-[0.2em] text-[#6b6b6b] uppercase mb-4 text-center">Contact</p>
          <h2 className="heading text-3xl sm:text-4xl text-[#f5f5f5] mb-16 text-center leading-tight">Reach out directly.</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <a href="https://x.com/Ramanx_1" target="_blank" rel="noopener noreferrer" className="group rounded-[1.1rem] border border-white/8 bg-white/[0.02] p-6 sm:p-8 hover:bg-white/[0.05] transition-colors">
              <span className="mono text-[10px] tracking-wider text-[#6b6b6b] uppercase">X</span>
              <p className="heading text-xl text-[#f5f5f5] mt-2 group-hover:text-white transition-colors">@Ramanx_1</p>
            </a>
            <a href="https://t.me/ramanola_97" target="_blank" rel="noopener noreferrer" className="group rounded-[1.1rem] border border-white/8 bg-white/[0.02] p-6 sm:p-8 hover:bg-white/[0.05] transition-colors">
              <span className="mono text-[10px] tracking-wider text-[#6b6b6b] uppercase">Telegram</span>
              <p className="heading text-xl text-[#f5f5f5] mt-2 group-hover:text-white transition-colors">@ramanola_97</p>
            </a>
            <a href="mailto:a.ramanola197@gmail.com" className="group rounded-[1.1rem] border border-white/8 bg-white/[0.02] p-6 sm:p-8 hover:bg-white/[0.05] transition-colors">
              <span className="mono text-[10px] tracking-wider text-[#6b6b6b] uppercase">Email</span>
              <p className="heading text-lg sm:text-xl text-[#f5f5f5] mt-2 group-hover:text-white transition-colors break-all">a.ramanola197@gmail.com</p>
            </a>
            <a href="https://wa.me/2349137668833?text=Hi%20Raman%2C%20I%27ll%20like%20to%20work%20with%20you." target="_blank" rel="noopener noreferrer" className="group rounded-[1.1rem] border border-white/8 bg-white/[0.02] p-6 sm:p-8 hover:bg-white/[0.05] transition-colors">
              <span className="mono text-[10px] tracking-wider text-[#6b6b6b] uppercase">WhatsApp</span>
              <p className="heading text-xl text-[#f5f5f5] mt-2 group-hover:text-white transition-colors">Message directly</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
