import SlideUp from "components/scroll-reveal-animations/SlideUp";
import TestimonialsCarousel from "./TestimonialsCarousel";

export default function Testimonials() {
  return (
    <section id="Ссылка" className="bg-body-200 py-20 md:py-40">
      <div className="ui-wrapper">
        <SlideUp>
          <h2 className="ui-tagline">Ссылка</h2>
          <span className="ui-heading" data-heading="lg">
            Что говорят клиенты
          </span>
          <p>* Происхождение ссылок - рейтинг компаний Google</p>
        </SlideUp>

        <SlideUp className="mt-10">
          <TestimonialsCarousel />
        </SlideUp>
      </div>
    </section>
  );
}
