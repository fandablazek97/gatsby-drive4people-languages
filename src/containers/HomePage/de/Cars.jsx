import { StaticImage } from "gatsby-plugin-image";
import SlideUp from "components/scroll-reveal-animations/SlideUp";

export default function Cars() {
  return (
    <section
      id="unser-fuhrpark"
      className="dark:bg-gray-950 bg-gray-800 py-20 md:pt-32 md:pb-44"
    >
      <div className="ui-wrapper">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <SlideUp>
            <h2 className="ui-tagline text-gray-300">Unser fuhrpark</h2>
            <span className="ui-heading text-white" data-heading="lg">
              Über welche fahrzeuge verfügen wir?
            </span>
          </SlideUp>
          <SlideUp className="md:reveal-delay-300">
            <h3 className="ui-heading text-primary">
              Der Wagen ist immer perfekt für Sie vorbereitet
            </h3>
            <ul className="ml-8 list-disc text-gray-300">
              <li>
                Der Wagen verflügt über Vollausstattung, mit einem
                Automatikgetriebe
              </li>
              <li>
                Der Wagen ist geräumig und bequem, egal ob Sie alleine oder mit
                mehrer Personen fahren
              </li>
              <li>
                Es ist kein Problem, großes Gepäck zu laden und zu fördern
              </li>
              <li>
                Im Wagen – kosntefrei W-LAN verhingung, Snacks, Tagespresse,
                Sicherheit, Komfort
              </li>
            </ul>
          </SlideUp>
        </div>

        <SlideUp as="h4" className="ui-heading mt-28 text-white">
          Mercedes-Benz E Class 220D - 2019
        </SlideUp>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4 md:grid-rows-3">
          <SlideUp className="col-span-2 row-span-2">
            <StaticImage
              src="../../../assets/images/mercedes/mercedes-1.jpg"
              alt="Mercedes Benz"
              placeholder="blurred"
              loading="lazy"
              layout="fullWidth"
              className="aspect-[4/3]"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </SlideUp>
          {/* <SlideUp className=""></SlideUp> */}

          <SlideUp className="md:reveal-delay-200 col-span-2 row-span-2">
            <StaticImage
              src="../../../assets/images/mercedes/mercedes-29.jpg"
              alt="Mercedes Benz"
              placeholder="blurred"
              loading="lazy"
              layout="fullWidth"
              className="aspect-[4/3]"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </SlideUp>

          <SlideUp className="col-span-1">
            <StaticImage
              src="../../../assets/images/mercedes/mercedes-9.jpg"
              alt="Mercedes Benz"
              placeholder="blurred"
              loading="lazy"
              layout="fullWidth"
              className="aspect-[4/3]"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </SlideUp>

          <SlideUp className="reveal-delay-200 md:reveal-delay-400 col-span-1 ">
            <StaticImage
              src="../../../assets/images/mercedes/mercedes-11.jpg"
              alt="Mercedes Benz"
              placeholder="blurred"
              loading="lazy"
              layout="fullWidth"
              className="aspect-[4/3]"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </SlideUp>

          <SlideUp className="md:reveal-delay-600 col-span-1 ">
            <StaticImage
              src="../../../assets/images/mercedes/mercedes-24.jpg"
              alt="Mercedes Benz"
              placeholder="blurred"
              loading="lazy"
              layout="fullWidth"
              className="aspect-[4/3]"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </SlideUp>

          <SlideUp className="reveal-delay-200 md:reveal-delay-800col-span-1">
            <StaticImage
              src="../../../assets/images/mercedes/mercedes-4.jpg"
              alt="Mercedes Benz"
              placeholder="blurred"
              loading="lazy"
              layout="fullWidth"
              className="aspect-[4/3]"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </SlideUp>
        </div>

        <SlideUp as="h4" className="ui-heading mt-28 text-white">
          Volkswagen Golf VII Variant - 2017
        </SlideUp>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4 md:grid-rows-3">
          <SlideUp className="col-span-2 row-span-2">
            <StaticImage
              src="../../../assets/images/golf/golf-9.jpg"
              alt="Volkswagen Golf VII"
              placeholder="blurred"
              loading="lazy"
              layout="fullWidth"
              className="aspect-[4/3]"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </SlideUp>

          <SlideUp className="md:reveal-delay-200 col-span-2 row-span-2">
            <StaticImage
              src="../../../assets/images/golf/golf-2.jpg"
              alt="Volkswagen Golf VII"
              placeholder="blurred"
              loading="lazy"
              layout="fullWidth"
              className="aspect-[4/3]"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </SlideUp>

          <SlideUp className="col-span-1">
            <StaticImage
              src="../../../assets/images/golf/golf-6.jpg"
              alt="Volkswagen Golf VII"
              placeholder="blurred"
              loading="lazy"
              layout="fullWidth"
              className="aspect-[4/3]"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </SlideUp>

          <SlideUp className="reveal-delay-200 col-span-1">
            <StaticImage
              src="../../../assets/images/golf/golf-7.jpg"
              alt="Volkswagen Golf VII"
              placeholder="blurred"
              loading="lazy"
              layout="fullWidth"
              className="aspect-[4/3]"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </SlideUp>

          <SlideUp className="md:reveal-delay-400 col-span-1">
            <StaticImage
              src="../../../assets/images/golf/golf-10.jpg"
              alt="Volkswagen Golf VII"
              placeholder="blurred"
              loading="lazy"
              layout="fullWidth"
              className="aspect-[4/3]"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </SlideUp>

          <SlideUp className="reveal-delay-200 md-reveal-delay-600 col-span-1">
            <StaticImage
              src="../../../assets/images/golf/golf-8.jpg"
              alt="Volkswagen Golf VII"
              placeholder="blurred"
              loading="lazy"
              layout="fullWidth"
              className="aspect-[4/3]"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
