import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/catalog";
import { Container, Eyebrow, Reveal } from "@/components/primitives";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 py-14 md:py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Reveal>
            <Eyebrow>Вопросы</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              Коротко о&nbsp;главном
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink-soft">
              Не нашли ответ? Напишите нам в&nbsp;чат — отвечаем за пару минут с
              8:00 до 22:00.
            </p>
          </Reveal>

          <Reveal className="divide-y divide-line border-y border-line">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[17px] font-semibold text-ink md:text-lg">
                      {f.q}
                    </span>
                    <span
                      className={cn(
                        "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-ink transition-all duration-300",
                        isOpen && "rotate-45 bg-berry text-white border-berry"
                      )}
                    >
                      <Plus className="h-4 w-4" strokeWidth={2} />
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-xl pb-6 pr-10 text-[15px] leading-relaxed text-ink-soft">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
