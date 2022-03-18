import { StaticImage } from "gatsby-plugin-image";

import SlideUp from "components/scroll-reveal-animations/SlideUp";

export default function Drivers() {
  return (
    <section id="fahrer" className="ui-wrapper py-20 md:py-40">
      <SlideUp>
        <h2 className="ui-tagline">Fahrer</h2>
        <span className="ui-heading" data-heading="lg">
          Wer wird sie oder ihre sendung befördern?
        </span>
        <p>
          * Der Fahrer wird immer dem Anlass entsprechend gekleidet sein und
          verfügt über entsprechende Fähigkeiten.
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
          <h4 className="ui-heading">Erfahrungen</h4>
          <ul className="marker:text-primary ml-8 list-disc">
            <li>6 Jahre aktiver Fahrer</li>
            <li>60 – 80 Tausend km pro Jahr</li>
            <li>
              Erfahrungen beim Fahren von Personen und Nutzfahrzeugen über Kurz
              und Langstrecken
            </li>
            <li>Erfahrungen beim Fahren in Großstädten</li>
            <li>Tätigseit längerem Fahrer für den Personenverkehr in Prag</li>
            <li>Kommunikation in Deutsch und Englisch</li>
          </ul>
        </SlideUp>
      </div>
    </section>
  );
}
