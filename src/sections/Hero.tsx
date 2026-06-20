import { ArrowRight, Star } from "lucide-react";
import { img } from "@/data/catalog";
import { Container } from "@/components/primitives";

export function Hero() {
  return (
    <section id="top" className="pt-4 md:pt-6">
      <Container>
        <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem]">
          <img
            src={img(1765024, 1700, 1100)}
            alt="Свежая клубника"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          <div className="relative z-10 flex min-h-[470px] flex-col justify-center px-6 py-14 sm:px-10 md:min-h-[620px] md:py-24 lg:px-16">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-lime">
              Наш совхоз · урожай 2026
            </span>

            <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-[4rem]">
              Спелые ягоды и фрукты с&nbsp;нашего поля — к&nbsp;вашему столу
            </h1>

            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/75 md:text-base">
              Выращиваем сами на своих полях. Собираем на рассвете, держим
              холодную цепочку и привозим к&nbsp;двери за&nbsp;24&nbsp;часа.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#catalog"
                className="group inline-flex items-center gap-2 rounded-full bg-berry px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-berry-deep"
              >
                Собрать корзину
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#season"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                Что спелое сейчас
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-lime text-lime" />
                <span className="font-semibold text-white">4.9</span>
                <span>· 12 000 заказов</span>
              </div>
              <div className="h-4 w-px bg-white/25" />
              <span>
                <span className="font-semibold text-white">120 га</span> своих полей
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
