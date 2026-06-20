import { Instagram, Send, Youtube, ArrowRight } from "lucide-react";
import { Container } from "@/components/primitives";

const columns = [
  {
    title: "Магазин",
    links: ["Ягоды", "Фрукты", "Боксы", "Подписка", "Сертификаты"],
  },
  {
    title: "Компания",
    links: ["О хозяйстве", "Доставка", "Журнал", "Вакансии", "Контакты"],
  },
  {
    title: "Помощь",
    links: ["Доставка", "Оплата", "Возврат", "Вопросы", "Поддержка"],
  },
];

export function Footer() {
  return (
    <footer className="mt-8 bg-night text-cream">
      <Container className="pt-16 md:pt-20">
        {/* Newsletter */}
        <div className="flex flex-col gap-8 border-b border-cream/10 pb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Свежесть — в почту
            </h2>
            <p className="mt-3 text-[15px] text-cream/60">
              Сезонные подборки, ранний доступ к урожаю и −10% на первый заказ.
            </p>
          </div>
          <form
            className="flex w-full max-w-sm items-center gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Ваш e-mail"
              className="h-12 w-full rounded-full border border-cream/15 bg-cream/5 px-5 text-sm text-cream placeholder:text-cream/40 outline-none transition-colors focus:border-lime"
            />
            <button
              type="submit"
              aria-label="Подписаться"
              className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-lime text-ink transition-transform hover:scale-105"
            >
              <ArrowRight className="h-5 w-5" strokeWidth={2.2} />
            </button>
          </form>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {columns.map((c) => (
            <div key={c.title}>
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-cream/40">
                {c.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[14px] text-cream/75 transition-colors hover:text-lime"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-cream/40">
              Мы на связи
            </h3>
            <div className="mt-4 flex gap-2.5">
              {[Instagram, Send, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Соцсеть"
                  className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-cream/75 transition-colors hover:border-lime hover:text-lime"
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.7} />
                </a>
              ))}
            </div>
            <p className="mt-5 text-[14px] text-cream/60">8 800 555-58-58</p>
            <p className="text-[14px] text-cream/60">hello@spelo.ru</p>
          </div>
        </div>
      </Container>

      {/* Brand wordmark */}
      <div className="flex w-full items-end justify-center overflow-hidden px-4 pb-6 select-none">
        <span className="text-[clamp(2.5rem,11vw,8rem)] font-extrabold leading-none tracking-tight text-cream/95">
          СПЕЛО
        </span>
        <span
          aria-hidden
          className="mb-[0.22em] ml-[0.1em] inline-block h-[0.13em] w-[0.13em] rounded-full bg-berry"
        />
      </div>

      <Container className="flex flex-col items-center justify-between gap-3 border-t border-cream/10 py-6 text-[13px] text-cream/45 sm:flex-row">
        <span>© 2026 СПЕЛО · Лесная Поляна, Самарская область</span>
        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-cream/80">
            Политика конфиденциальности
          </a>
          <a href="#" className="transition-colors hover:text-cream/80">
            Оферта
          </a>
        </div>
      </Container>
    </footer>
  );
}
