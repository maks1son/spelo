/** Pexels CDN helper — every id below was verified to return 200 image/jpeg. */
const PX = "https://images.pexels.com/photos";
export const img = (id: number, w = 1200, h?: number) =>
  `${PX}/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}${
    h ? `&h=${h}` : ""
  }`;

export type Product = {
  id: string;
  name: string;
  farm: string;
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
    farm: "Семья Котовых",
    weight: "500 г",
    price: 390,
    photo: 1765024,
    tag: { label: "Хит", tone: "berry" },
  },
  {
    id: "blueberry-garden",
    name: "Голубика садовая",
    farm: "Хозяйство «Лесная»",
    weight: "300 г",
    price: 450,
    photo: 2539170,
    tag: { label: "Новинка", tone: "blue" },
  },
  {
    id: "raspberry-fresh",
    name: "Малина свежая",
    farm: "КФХ Зорино",
    weight: "250 г",
    price: 380,
    photo: 3429782,
  },
  {
    id: "cherry-revizor",
    name: "Черешня «Ревизор»",
    farm: "Сад «Поляна»",
    weight: "1 кг",
    price: 690,
    photo: 1178610,
    tag: { label: "Сезон", tone: "plum" },
  },
  {
    id: "peach-krasnodar",
    name: "Персики краснодарские",
    farm: "Сад «Южный»",
    weight: "1 кг",
    price: 320,
    photo: 20180751,
  },
  {
    id: "apple-ligol",
    name: "Яблоки «Лигол»",
    farm: "Сад «Поляна»",
    weight: "1 кг",
    price: 210,
    photo: 1510392,
  },
  {
    id: "berry-mix",
    name: "Ягодное ассорти",
    farm: "Сборная корзина",
    weight: "600 г",
    price: 612,
    oldPrice: 720,
    photo: 1379636,
    tag: { label: "−15%", tone: "lime" },
  },
  {
    id: "strawberry-xl",
    name: "Клубника крупная",
    farm: "Семья Котовых",
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
    text: "Фермеры снимают урожай вручную утром того же дня — только спелое, ничего недозрелого с полки.",
  },
  {
    n: "02",
    title: "Холодная цепочка",
    text: "Через час ягода уже в холодильной камере при +2 °C. Так сохраняются вкус, плотность и витамины.",
  },
  {
    n: "03",
    title: "У двери за 24 часа",
    text: "Курьер привозит заказ в день сборки или на следующее утро. Не понравилась свежесть — вернём деньги.",
  },
];

export const farmers = [
  {
    name: "Семья Котовых",
    region: "Тульская область",
    crop: "Клубника · малина",
    since: "с 2011",
    photo: 4975349,
  },
  {
    name: "Хозяйство «Лесная»",
    region: "Карелия",
    crop: "Голубика · жимолость",
    since: "с 2016",
    photo: 7728332,
  },
  {
    name: "Сад «Поляна»",
    region: "Краснодарский край",
    crop: "Черешня · яблоки",
    since: "с 2004",
    photo: 4975353,
  },
];

export const months = [
  "Янв", "Фев", "Мар", "Апр", "Май", "Июн",
  "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек",
];
export const currentMonth = 5; // Июнь
export const ripeNow = ["Клубника", "Черешня", "Жимолость", "Голубика"];

export const faqs = [
  {
    q: "Откуда вы берёте продукты?",
    a: "Напрямую у 40+ проверенных фермерских хозяйств России. У каждого товара указано имя фермера и регион — никаких перекупщиков и складов-долгожителей.",
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
