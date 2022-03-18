import { StaticImage } from "gatsby-plugin-image";

import SlideUp from "components/scroll-reveal-animations/SlideUp";

export default function Drivers() {
  return (
    <section id="ridici" className="ui-wrapper py-20 md:py-40">
      <SlideUp>
        <h2 className="ui-tagline">Řidiči</h2>
        <span className="ui-heading" data-heading="lg">
          Kdo Vás poveze?
        </span>
        <p>
          Řidič pro vás vždy přijede vhodně oblečen s profesionálním a osobním
          přístupem.
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
            Lukáš Jiránek, 25 let
          </h3>
          <h4 className="ui-heading">Zkušenosti</h4>
          <ul className="marker:text-primary ml-8 list-disc">
            <li>6 let aktivní řidič</li>
            <li>Roční nájezd 60 – 80 tis. Km</li>
            <li>
              Zkušenosti s řízením jak osobních, tak užitkových vozů na krátké i
              dlouhé vzdálenosti
            </li>
            <li>Zkušenosti s řízením ve velkých městech</li>
            <li>
              Dlouhodobě působí jako řidič pro osobní přepravu osob v Praze
            </li>
            <li>Komunikace v německém a anglickém jazyce</li>
          </ul>
        </SlideUp>
      </div>
    </section>
  );
}
