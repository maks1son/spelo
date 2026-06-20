/** Pexels CDN helper — every id below was verified to return 200 image/jpeg. */
const PX = "https://images.pexels.com/photos";
export const img = (id: number, w = 1200, h?: number) =>
  `${PX}/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}${
    h ? `&h=${h}` : ""
  }`;

export type Product = {
  id: string;
  name: string;
  note: string;
  weight: string;
  price: number;
  oldPrice?: number;
  photo: number;
  tag?: { label: string; tone: "berry" | "lime" | "blue" | "plum" };
};

export const categories = [
  { name: "Ягоды", count: 24, photo: 4038780, accent: "berry" },
  { name: "Голубика и черника", count: 9, photo: 15305308, accent: "blue" },
  { name: "Косточковые", count: 17, photo: 24427996, accent: "plum" },
  { name: "Фруктовые боксы", count: 6, photo: 13277183, accent: "lime" },
] as const;

export const products: Product[] = [
  {
    id: "strawberry-alba",
    name: "Клубника «Альба»",
    note: "грунтовая",
    weight: "500 г",
    price: 390,
    photo: 1765024,
    tag: { label: "Хит", tone: "berry" },
  },
  {
    id: "blueberry-garden",
    name: "Голубика садовая",
    note: "сорт Дюк",
    weight: "300 г",
    price: 450,
    photo: 2539170,
    tag: { label: "Новинка", tone: "blue" },
  },
  {
    id: "raspberry-fresh",
    name: "Малина свежая",
    note: "сорт Полька",
    weight: "250 г",
    price: 380,
    photo: 3429782,
  },
  {
    id: "cherry-revizor",
    name: "Черешня «Ревизор»",
    note: "тёмная, сладкая",
    weight: "1 кг",
    price: 690,
    photo: 1178610,
    tag: { label: "Сезон", tone: "plum" },
  },
  {
    id: "peach-garden",
    name: "Персики садовые",
    note: "медовые",
    weight: "1 кг",
    price: 320,
    photo: 20180751,
  },
  {
    id: "apple-ligol",
    name: "Яблоки «Лигол»",
    note: "сладкие, хрустящие",
    weight: "1 кг",
    price: 210,
    photo: 1510392,
  },
  {
    id: "berry-mix",
    name: "Ягодное ассорти",
    note: "5 видов ягод",
    weight: "600 г",
    price: 612,
    oldPrice: 720,
    photo: 1379636,
    tag: { label: "−15%", tone: "lime" },
  },
  {
    id: "strawberry-xl",
    name: "Клубника крупная",
    note: "отборная",
    weight: "1 кг",
    price: 690,
    photo: 306800,
  },
];

export const press = ["Афиша", "Forbes", "РБК Стиль", "Eda.ru", "The Village", "Сноб"];

export const steps = [
  {
    n: "01",
    title: "Собираем на рассвете",
    text: "Снимаем урожай вручную утром того же дня — только спелое, ничего недозрелого.",
  },
  {
    n: "02",
    title: "Холодная цепочка",
    text: "Через час ягода уже в нашей холодильной камере при +2 °C. Так сохраняются вкус, плотность и витамины.",
  },
  {
    n: "03",
    title: "У двери за 24 часа",
    text: "Привозим заказ своей доставкой в день сборки или на следующее утро. Не понравилась свежесть — вернём деньги.",
  },
];

/** Single farm (sovkhoz) — this is one hozyaystvo's own shop, not a marketplace. */
export const farm = {
  since: "1998",
  region: "Лесная Поляна, Самарская область",
  facts: [
    { value: "с 1998", label: "на своей земле" },
    { value: "120 га", label: "садов и грядок" },
    { value: "без химии", label: "бережный уход" },
    { value: "своя", label: "доставка по городу" },
  ],
  gallery: [4975353, 4975349, 7728332],
};

export const months = [
  "Янв", "Фев", "Мар", "Апр", "Май", "Июн",
  "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек",
];
export const currentMonth = 5; // Июнь
export const ripeNow = ["Клубника", "Черешня", "Жимолость", "Голубика"];

export const faqs = [
  {
    q: "Откуда ваши продукты?",
    a: "Мы — собственное хозяйство. Всё, что продаём, выращиваем на своих полях и в садах, собираем сами и везём напрямую: никаких перекупщиков и складов-долгожителей.",
  },
  {
    q: "Как быстро приедет заказ?",
    a: "По городу — в день сборки или на следующее утро, в интервал по вашему выбору. Ягоды едут в холодильной машине, чтобы доехать такими же плотными, как с грядки.",
  },
  {
    q: "А если ягода окажется не свежей?",
    a: "Вернём деньги за этот товар без вопросов и фотоотчётов. Свежесть — наша ответственность, а не ваша забота.",
  },
  {
    q: "Есть ли регулярная подписка?",
    a: "Да. Соберите свой ягодный бокс, выберите периодичность — раз в неделю или раз в две — и получайте сезонный набор со скидкой 15%. Пауза и отмена в один клик.",
  },
];
