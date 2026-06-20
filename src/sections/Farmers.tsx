import { Calendar, Sprout, Leaf, Truck } from "lucide-react";
import { farm, img } from "@/data/catalog";
import { Container, Eyebrow, Reveal } from "@/components/primitives";

const factIcons = [Calendar, Sprout, Leaf, Truck];

export function Farmers() {
  return (
    <section id="about" className="scroll-mt-20 py-14 md:py-24">
      <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* visuals */}
        <Reveal>
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 aspect-[16/10] overflow-hidden rounded-2xl">
              <img
                src={img(farm.gallery[0], 1000, 620)}
                alt="Наши поля и сады"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img
                src={img(farm.gallery[1], 500, 500)}
                alt="Сбор урожая"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img
                src={img(farm.gallery[2], 500, 500)}
                alt="Наша команда"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        {/* content */}
        <div>
          <Reveal>
            <Eyebrow>Наше хозяйство</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              Один совхоз — всё своё
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft md:text-base">
              «СПЕЛО» — не маркетплейс. Это наше собственное хозяйство в
              Лесной Поляне, Самарская область: свои поля, сады и теплицы. Мы
              сами растим, сами собираем и сами привозим — поэтому отвечаем за
              каждую ягоду.
            </p>
          </Reveal>

          <div className="mt-9 grid grid-cols-2 gap-4">
            {farm.facts.map((f, i) => {
              const Icon = factIcons[i];
              return (
                <Reveal key={f.label} delay={i * 0.06}>
                  <div className="rounded-2xl border border-line bg-card p-5">
                    <Icon className="h-5 w-5 text-berry" strokeWidth={1.8} />
                    <div className="mt-3 text-xl font-extrabold text-ink">
                      {f.value}
                    </div>
                    <div className="mt-0.5 text-[13px] text-muted">{f.label}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
