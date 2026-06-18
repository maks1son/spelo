import { Star } from "lucide-react";
import { Container, Reveal } from "@/components/primitives";

export function Testimonial() {
  return (
    <section className="py-16 md:py-28">
      <Container className="max-w-3xl">
        <Reveal className="flex flex-col items-center text-center">
          <div className="flex gap-1 text-lime">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-lime" />
            ))}
          </div>
          <blockquote className="mt-7 text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl md:text-[2.2rem] md:leading-[1.2]">
            «Заказала клубнику в&nbsp;пятницу — приехала утром в&nbsp;субботу,
            будто только с&nbsp;куста. Дети съели коробку за&nbsp;вечер.
            Теперь это наша семейная подписка».
          </blockquote>
          <div className="mt-8 flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-berry text-sm font-bold text-white">
              МА
            </div>
            <div className="text-left">
              <div className="text-[15px] font-semibold text-ink">
                Мария Ананьева
              </div>
              <div className="text-[13px] text-muted">Москва · с нами 2 года</div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
