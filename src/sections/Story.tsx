import { steps, img } from "@/data/catalog";
import { Container, Eyebrow, Reveal } from "@/components/primitives";

export function Story() {
  return (
    <section className="py-14 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal className="order-2 md:order-1">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] md:aspect-[5/6]">
                <img
                  src={img(4975353, 900, 1100)}
                  alt="Фермер с корзиной свежего урожая"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-3 hidden rounded-2xl bg-cream px-5 py-4 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.4)] sm:block md:-right-6">
                <div className="text-3xl font-extrabold leading-none text-berry">
                  24ч
                </div>
                <div className="mt-1 text-[13px] text-muted">
                  от грядки до двери
                </div>
              </div>
            </div>
          </Reveal>

          <div className="order-1 md:order-2">
            <Reveal>
              <Eyebrow>Как это работает</Eyebrow>
              <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                От поля до вашей двери
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft md:text-base">
                Никаких складов и перекупщиков. Короткий путь, холодная цепочка
                и честное имя фермера на каждой упаковке.
              </p>
            </Reveal>

            <div className="mt-10 space-y-8">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.08}>
                  <div className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-sm font-bold text-berry">
                        {s.n}
                      </span>
                      {i < steps.length - 1 && (
                        <span className="mt-2 h-full w-px flex-1 bg-line" />
                      )}
                    </div>
                    <div className="pb-1">
                      <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                      <p className="mt-1.5 max-w-sm text-[14px] leading-relaxed text-ink-soft">
                        {s.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
