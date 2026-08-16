import { getAllGraphics } from "@/lib/graphics";
import { GlassFrame } from "@/components/GlassFrame";
import { Button } from "@/components/Button";
import { GraphicsNavigator } from "@/components/GraphicsNavigator";

export const dynamic = "force-dynamic";

export default function GraphicsPage() {
  const categories = getAllGraphics();

  return (
    <div className="pt-28 pb-24 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <p className="mono text-[11px] tracking-[0.2em] text-[#6b6b6b] uppercase mb-4">
          Graphics Portfolio
        </p>
        <h1 className="heading text-4xl sm:text-5xl text-[#f5f5f5] mb-6 leading-tight">
          AI Graphics Design
        </h1>
        <p className="text-[#b0b0b0] max-w-2xl mb-16 leading-relaxed">
          A collection of visual work I’ve created across branding, product launches, campaigns, and digital storytelling. 
          Each piece is crafted to communicate an idea clearly while giving every project a distinct visual identity and character.
        </p>

        {/* Categories */}
        {categories.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            className="mb-24 scroll-mt-28"
          >
            <div className="flex items-baseline gap-4 mb-10">
              <h2 className="heading text-2xl sm:text-3xl text-[#f5f5f5]">
                {cat.title}
              </h2>
              <span className="mono text-[11px] text-[#6b6b6b]">
                {cat.images.length}{" "}
                {cat.images.length === 1 ? "piece" : "pieces"}
              </span>
            </div>

            {cat.images.length === 0 ? (
              <div className="rounded-[1.1rem] border border-dashed border-white/10 p-12 text-center">
                <p className="mono text-[12px] text-[#6b6b6b]">
                  No images yet. Add files to public/work/graphics/{cat.id}/
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {cat.images.map((src) => (
                  <GlassFrame
                    key={src}
                    src={src}
                    alt={`${cat.title} design`}
                  />
                ))}
              </div>
            )}
          </section>
        ))}

        {/* Closing CTA */}
        <section className="mt-32 pt-16 border-t border-white/5 text-center">
          <h2 className="heading text-2xl sm:text-3xl text-[#f5f5f5] mb-6 max-w-2xl mx-auto leading-tight">
            These are only fragments of what happens when an idea meets the right
            creative process.
          </h2>
          <p className="text-[#b0b0b0] mb-10 max-w-lg mx-auto">
            The work shown here is a selection. If you have something that needs
            to be designed with the same care, the next step is a conversation.
          </p>
          <Button href="/#contact" variant="primary">
            Discuss a project
          </Button>
        </section>
      </div>

      {/* Floating expandable navigator */}
      <GraphicsNavigator categories={categories} />
    </div>
  );
}
