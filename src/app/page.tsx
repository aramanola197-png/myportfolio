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
                  className="object-cover protected-media"
                  sizes="224px"
                  priority
                  draggable={false}
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
              <div key={item.title} className="bg-[#161616] p-7 sm:p-8 hover:bg-white/[0.03] transition-colors duration-300">
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
        <div className="mx-auto max-w-3xl">
          <p className="mono text-[11px] tracking-[0.2em] text-[#6b6b6b] uppercase mb-4 text-center">Contact</p>
          <h2 className="heading text-3xl sm:text-4xl text-[#f5f5f5] mb-6 text-center leading-tight">Reach out directly.</h2>
          <p className="text-center text-[#8a8a8a] text-sm mb-14 max-w-md mx-auto">
            Choose a channel. No usernames exposed — just branded, direct links.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* X */}
            <a
              href="https://x.com/Ramanx_1"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 rounded-[1.15rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 hover:bg-white/[0.06] hover:border-white/20 transition-all"
              aria-label="Contact on X"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-xl border border-white/12 bg-white/[0.04] group-hover:border-white/25 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#e8e8e8]" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </span>
              <span className="mono text-[11px] tracking-[0.16em] uppercase text-[#9a9a9a] group-hover:text-[#e8e8e8] transition-colors">X</span>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/ramanola_97"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 rounded-[1.15rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 hover:bg-white/[0.06] hover:border-white/20 transition-all"
              aria-label="Contact on Telegram"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-xl border border-white/12 bg-white/[0.04] group-hover:border-white/25 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#e8e8e8]" aria-hidden="true">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </span>
              <span className="mono text-[11px] tracking-[0.16em] uppercase text-[#9a9a9a] group-hover:text-[#e8e8e8] transition-colors">Telegram</span>
            </a>

            {/* Email */}
            <a
              href="mailto:a.ramanola197@gmail.com"
              className="group flex flex-col items-center gap-4 rounded-[1.15rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 hover:bg-white/[0.06] hover:border-white/20 transition-all"
              aria-label="Send email"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-xl border border-white/12 bg-white/[0.04] group-hover:border-white/25 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-[#e8e8e8]" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2"/>
                  <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="mono text-[11px] tracking-[0.16em] uppercase text-[#9a9a9a] group-hover:text-[#e8e8e8] transition-colors">Email</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2349137668833?text=Hi%20Raman%2C%20I%27ll%20like%20to%20work%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 rounded-[1.15rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 hover:bg-white/[0.06] hover:border-white/20 transition-all"
              aria-label="Message on WhatsApp"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-xl border border-white/12 bg-white/[0.04] group-hover:border-white/25 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#e8e8e8]" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </span>
              <span className="mono text-[11px] tracking-[0.16em] uppercase text-[#9a9a9a] group-hover:text-[#e8e8e8] transition-colors">WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
