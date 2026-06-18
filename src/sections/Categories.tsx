import { ArrowUpRight } from "lucide-react";
import { categories, img } from "@/data/catalog";
import { Container, Eyebrow, Reveal } from "@/components/primitives";

export function Categories() {
  return (
    <section id="catalog" className="scroll-mt-20 py-12 md:py-20">
      <Container>
        <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-4 md:mb-12">
          <div>
            <Eyebrow>Что выберете</Eyebrow>
            <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              Каталог по&nbsp;корзинам
            </h2>
          </div>
          <a
            href="#catalog"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-berry"
          >
            Смотреть весь каталог
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {categories.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.07}>
              <a
                href="#catalog"
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-cream-deep"
              >
                <img
                  src={img(c.photo, 700, 880)}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 md:p-5">
                  <div>
                    <h3 className="text-lg font-bold leading-tight text-white md:text-xl">
                      {c.name}
                    </h3>
                    <p className="mt-0.5 text-[13px] text-white/70">
                      {c.count} позиций
                    </p>
                  </div>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/90 text-ink transition-colors group-hover:bg-lime">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
