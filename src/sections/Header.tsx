import { useState } from "react";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { Container } from "@/components/primitives";

const nav = [
  { label: "Ягоды", href: "#catalog" },
  { label: "Боксы", href: "#subscription" },
  { label: "Сезон", href: "#season" },
  { label: "Фермеры", href: "#farmers" },
  { label: "Вопросы", href: "#faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between md:h-[72px]">
        <a
          href="#top"
          aria-label="СПЕЛО — на главную"
          className="group flex items-end leading-none"
        >
          <span className="text-[1.5rem] font-extrabold tracking-tight text-ink">
            СПЕЛО
          </span>
          <span
            aria-hidden
            className="mb-[0.16em] ml-[0.16em] inline-block h-[0.3em] w-[0.3em] rounded-full bg-berry transition-transform duration-300 group-hover:scale-125"
          />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-berry"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            aria-label="Поиск"
            className="grid h-10 w-10 place-items-center rounded-full text-ink-soft transition-colors hover:bg-cream-deep"
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={1.6} />
          </button>
          <button
            aria-label="Избранное"
            className="hidden h-10 w-10 place-items-center rounded-full text-ink-soft transition-colors hover:bg-cream-deep sm:grid"
          >
            <Heart className="h-[18px] w-[18px]" strokeWidth={1.6} />
          </button>
          <button className="ml-1 flex h-10 items-center gap-2 rounded-full bg-ink pl-3.5 pr-2 text-cream transition-transform hover:scale-[1.02]">
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.6} />
            <span className="hidden text-sm font-medium sm:inline">Корзина</span>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-lime text-[13px] font-bold text-ink">
              3
            </span>
          </button>
          <button
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
            className="ml-1 grid h-10 w-10 place-items-center rounded-full text-ink-soft transition-colors hover:bg-cream-deep md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-line bg-cream md:hidden">
          <Container className="flex flex-col py-3">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-base font-medium text-ink last:border-0"
              >
                {n.label}
              </a>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
