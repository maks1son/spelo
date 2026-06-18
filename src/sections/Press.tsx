import { press } from "@/data/catalog";
import { Container, Reveal } from "@/components/primitives";

export function Press() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <Reveal className="flex flex-col items-center gap-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">
            О нас пишут
          </p>
          <div className="flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-5 md:gap-x-16">
            {press.map((name) => (
              <span
                key={name}
                className="text-lg font-semibold tracking-tight text-ink/35 transition-colors hover:text-ink/70 md:text-xl"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
