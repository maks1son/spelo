import { Plus, Heart } from "lucide-react";
import { products, img, type Product } from "@/data/catalog";
import { Container, Eyebrow, Reveal } from "@/components/primitives";
import { cn } from "@/lib/utils";

const toneClass: Record<NonNullable<Product["tag"]>["tone"], string> = {
  berry: "bg-berry text-white",
  lime: "bg-lime text-ink",
  blue: "bg-blueberry text-white",
  plum: "bg-plum text-white",
};

function ProductCard({ p }: { p: Product }) {
  return (
    <div className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream-deep">
        <img
          src={img(p.photo, 700, 880)}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {p.tag && (
          <span
            className={cn(
              "absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide",
              toneClass[p.tag.tone]
            )}
          >
            {p.tag.label}
          </span>
        )}

        <button
          aria-label="В избранное"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/85 text-ink opacity-0 backdrop-blur-sm transition-all duration-300 hover:text-berry group-hover:opacity-100"
        >
          <Heart className="h-[17px] w-[17px]" strokeWidth={1.7} />
        </button>

        <button className="absolute bottom-3 right-3 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-ink text-cream opacity-0 transition-all duration-300 hover:bg-berry group-hover:translate-y-0 group-hover:opacity-100">
          <Plus className="h-5 w-5" strokeWidth={2.2} />
        </button>
      </div>

      <div className="mt-3.5 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-[15px] font-semibold text-ink">
            {p.name}
          </h3>
          <p className="mt-0.5 truncate text-[13px] text-muted">
            {p.farm} · {p.weight}
          </p>
        </div>
        <div className="shrink-0 text-right">
          <div className="text-[15px] font-bold text-ink">
            {p.price.toLocaleString("ru-RU")} ₽
          </div>
          {p.oldPrice && (
            <div className="text-[12px] text-muted line-through">
              {p.oldPrice.toLocaleString("ru-RU")} ₽
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Bestsellers() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-4 md:mb-12">
          <div>
            <Eyebrow>Разбирают первыми</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Хиты этой недели
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <button className="rounded-full bg-ink px-4 py-2 font-semibold text-cream">
              Хиты
            </button>
            <button className="rounded-full px-4 py-2 font-medium text-muted transition-colors hover:text-ink">
              Новинки
            </button>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4 md:gap-x-5 md:gap-y-10">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 0.06}>
              <ProductCard p={p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
