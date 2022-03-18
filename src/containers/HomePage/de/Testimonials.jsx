import SlideUp from "components/scroll-reveal-animations/SlideUp";
import TestimonialsCarousel from "./TestimonialsCarousel";

export default function Testimonials() {
  return (
    <section id="referenzen" className="bg-body-200 py-20 md:py-40">
      <div className="ui-wrapper">
        <SlideUp>
          <h2 className="ui-tagline">Referenzen</h2>
          <span className="ui-heading" data-heading="lg">
            Ihre meinung
          </span>
          <p>* Herkunft von Referenzen - Bewertung von Google-Unternehmen</p>
        </SlideUp>

        <SlideUp className="mt-10">
          <TestimonialsCarousel />
        </SlideUp>
      </div>
    </section>
  );
}
