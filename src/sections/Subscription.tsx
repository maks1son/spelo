import { Check, ArrowRight } from "lucide-react";
import { img } from "@/data/catalog";
import { Container, Reveal } from "@/components/primitives";

const perks = [
  "Сезонный набор ягод каждую неделю",
  "Постоянная скидка 15%",
  "Пауза и отмена в один клик",
];

export function Subscription() {
  return (
    <section id="subscription" className="scroll-mt-20 py-12 md:py-16">
      <Container>
        <Reveal>
          <div className="grid overflow-hidden rounded-[1.75rem] md:grid-cols-2">
            <div className="relative min-h-[280px]">
              <img
                src={img(13277183, 900, 900)}
                alt="Бокс свежих ягод"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="absolute left-5 top-5 rounded-full bg-lime px-3.5 py-1.5 text-[12px] font-bold text-ink">
                −15% всегда
              </span>
            </div>

            <div className="bg-night px-7 py-10 text-cream md:px-12 md:py-14">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-lime">
                Подписка
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-[2.6rem]">
                Ягодный бокс каждую неделю
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-cream/65">
                Соберите свой набор один раз — дальше свежие ягоды приезжают
                сами, на автопилоте и со скидкой.
              </p>

              <ul className="mt-7 space-y-3">
                {perks.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-[14px]">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime/15 text-lime">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.4} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <a
                href="#subscription"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-berry px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-berry-deep"
              >
                Оформить бокс
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
