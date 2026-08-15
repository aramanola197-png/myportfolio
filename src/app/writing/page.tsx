import { writingPieces } from "@/data/projects";
import { Button } from "@/components/Button";

export default function WritingPage() {
  return (
    <div className="pt-28 pb-24 px-5 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="mono text-[11px] tracking-[0.2em] text-[#6b6b6b] uppercase mb-4">
          Writing
        </p>
        <h1 className="heading text-4xl sm:text-5xl text-[#f5f5f5] mb-6 leading-tight">
          Thinking in public
        </h1>
        <p className="text-[#b0b0b0] mb-20 leading-relaxed">
          Articles, threads and ecosystem writing. The focus is on clarity of thought, technical and product communication, and the ability to explain complex ideas without losing precision.
        </p>

        <div className="space-y-10">
          {writingPieces.map((piece) => (
            <article
              key={piece.id}
              className="group rounded-[1.1rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10 hover:bg-white/[0.04] transition-colors"
            >
              <span className="mono text-[10px] tracking-wider text-[#6b6b6b] uppercase">
                {piece.type}
              </span>
              <h2 className="heading text-2xl text-[#f5f5f5] mt-3 mb-4 group-hover:text-white transition-colors">
                {piece.title}
              </h2>
              <p className="text-[#b0b0b0] text-[15px] leading-relaxed mb-6">
                {piece.excerpt}
              </p>
              <Button href={piece.url} external variant="secondary">
                Read
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-70">
                  <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </article>
          ))}
        </div>

        <section className="mt-24 pt-16 border-t border-white/5 text-center">
          <p className="text-[#b0b0b0] mb-8 max-w-md mx-auto">
            More writing appears on X. The pieces above represent the quality of thinking and communication I bring to projects.
          </p>
          <Button href="https://x.com/Ramanx_1" external variant="primary">
            Follow on X
          </Button>
        </section>
      </div>
    </div>
  );
}
