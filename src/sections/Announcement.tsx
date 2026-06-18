const items = [
  "Бесплатная доставка от 2 000 ₽",
  "Собрано этим утром",
  "Вернём деньги, если не свежо",
  "40+ фермерских хозяйств",
];

export function Announcement() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden bg-ink text-cream/90">
      <div className="flex w-max animate-[marquee_32s_linear_infinite] whitespace-nowrap py-2.5">
        {row.map((t, i) => (
          <span
            key={i}
            className="flex items-center text-[12px] font-medium tracking-wide"
          >
            <span className="px-6">{t}</span>
            <span className="text-lime" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
