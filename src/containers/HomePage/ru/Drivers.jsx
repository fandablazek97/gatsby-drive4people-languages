import { StaticImage } from "gatsby-plugin-image";

import SlideUp from "components/scroll-reveal-animations/SlideUp";

export default function Drivers() {
  return (
    <section id="Водители" className="ui-wrapper py-20 md:py-40">
      <SlideUp>
        <h2 className="ui-tagline">Водители</h2>
        <span className="ui-heading" data-heading="lg">
          Кто будет вашим водителем?
        </span>
        <p>
          * Водитель всегда приедет к вам одетым в формальном стиле и обеспечит
          профессиональный и индивидуальный подход.
        </p>
      </SlideUp>

      <div className="mt-24 grid grid-cols-1 gap-16 md:grid-cols-2">
        <SlideUp>
          <StaticImage
            src="../../../assets/images/golf/golf-1.jpg"
            alt="Lukáš Jiránek"
            placeholder="blurred"
            loading="lazy"
            layout="fullWidth"
            className="aspect-[4/3]"
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </SlideUp>

        <SlideUp className="md:reveal-delay-300">
          <h3 className="ui-heading text-primary" data-heading="lg">
            Lukáš Jiránek, 25 ГОДА
          </h3>
          <h4 className="ui-heading">Опыт</h4>
          <ul className="marker:text-primary ml-8 list-disc">
            <li>6 лет активного вождения</li>
            <li>Пробег 60 - 80 тыс. км в год</li>
            <li>
              Опыт пассажирских и грузовых перевозок на короткие и длинные
              дистанции
            </li>
            <li>Опыт вождения в больших городах</li>
            <li>
              Многолетний опыт предоставления услуг персонального водителя в
              Праге
            </li>
            <li>Общение на немецком и английском языках</li>
          </ul>
        </SlideUp>
      </div>
    </section>
  );
}
