import { Announcement } from "@/sections/Announcement";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Press } from "@/sections/Press";
import { Categories } from "@/sections/Categories";
import { Bestsellers } from "@/sections/Bestsellers";
import { Story } from "@/sections/Story";
import { Season } from "@/sections/Season";
import { Farmers } from "@/sections/Farmers";
import { Subscription } from "@/sections/Subscription";
import { Testimonial } from "@/sections/Testimonial";
import { Faq } from "@/sections/Faq";
import { Footer } from "@/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Announcement />
      <Header />
      <main>
        <Hero />
        <Press />
        <Categories />
        <Bestsellers />
        <Story />
        <Season />
        <Farmers />
        <Subscription />
        <Testimonial />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
