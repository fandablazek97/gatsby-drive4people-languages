import { StaticImage } from "gatsby-plugin-image";

import SlideUp from "components/scroll-reveal-animations/SlideUp";

export default function Drivers() {
  return (
    <section id="drivers" className="ui-wrapper py-20 md:py-40">
      <SlideUp>
        <h2 className="ui-tagline">Drivers</h2>
        <span className="ui-heading" data-heading="lg">
          Who will be your driver?
        </span>
        <p>
          * The driver will always pick you up appropriately dressed with a
          professional and personal approach.
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
            Lukáš Jiránek, 25 years old
          </h3>
          <h4 className="ui-heading">Experiences</h4>
          <ul className="marker:text-primary ml-8 list-disc">
            <li>6 years of active driving</li>
            <li>60 - 80 thousand. Km per year</li>
            <li>
              Experienced with driving passenger and commercial vehicles over
              short and long distances
            </li>
            <li>Experienced in driving within big cities</li>
            <li>
              He has been working as a driver for passenger transport in Prague
              for a long time
            </li>
            <li>Communication in German and English language</li>
          </ul>
        </SlideUp>
      </div>
    </section>
  );
}
