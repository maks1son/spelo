import { MapPin } from "lucide-react";
import { farmers, img } from "@/data/catalog";
import { Container, Eyebrow, Reveal } from "@/components/primitives";

export function Farmers() {
  return (
    <section id="farmers" className="scroll-mt-20 py-14 md:py-24">
      <Container>
        <Reveal className="mb-9 max-w-xl md:mb-14">
          <Eyebrow>Прозрачность</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Знай своего фермера
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-soft md:text-base">
            За каждой корзиной — реальные люди и хозяйства. Мы лично знакомы с
            каждым и проверяем поля.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {farmers.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.08}>
              <article className="group overflow-hidden rounded-[1.4rem] border border-line bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={img(f.photo, 800, 600)}
                    alt={f.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-ink">{f.name}</h3>
                    <span className="rounded-full bg-cream-deep px-2.5 py-1 text-[11px] font-semibold text-ink-soft">
                      {f.since}
                    </span>
                  </div>
                  <p className="mt-2 flex items-center gap-1.5 text-[13px] text-muted">
                    <MapPin className="h-3.5 w-3.5" strokeWidth={1.8} />
                    {f.region}
                  </p>
                  <p className="mt-3 inline-block rounded-full border border-line px-3 py-1 text-[13px] font-medium text-ink">
                    {f.crop}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
