import { months, currentMonth, ripeNow } from "@/data/catalog";
import { Container, Reveal } from "@/components/primitives";
import { cn } from "@/lib/utils";

export function Season() {
  return (
    <section id="season" className="scroll-mt-20 py-12 md:py-16">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[1.75rem] bg-night px-6 py-9 text-cream md:px-12 md:py-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
              <div className="md:max-w-xs">
                <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-lime">
                  <span className="h-px w-6 bg-lime/60" aria-hidden />
                  Сезонный календарь
                </span>
                <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                  Что спелое прямо сейчас
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-cream/60">
                  Покупайте на пике вкуса — когда ягода стоит дешевле всего и
                  пахнет летом.
                </p>
              </div>

              <div className="flex-1">
                <div className="no-scrollbar -mx-1 flex gap-1.5 overflow-x-auto pb-1">
                  {months.map((m, i) => (
                    <div
                      key={m}
                      className={cn(
                        "flex h-16 min-w-[3.1rem] flex-1 flex-col items-center justify-center rounded-xl text-[13px] font-semibold transition-colors",
                        i === currentMonth
                          ? "bg-lime text-ink"
                          : "bg-cream/5 text-cream/55"
                      )}
                    >
                      <span>{m}</span>
                      {i === currentMonth && (
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ink" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2.5">
                  <span className="text-[13px] text-cream/50">На пике:</span>
                  {ripeNow.map((r) => (
                    <span
                      key={r}
                      className="rounded-full border border-cream/15 bg-cream/5 px-3.5 py-1.5 text-[13px] font-medium text-cream"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
