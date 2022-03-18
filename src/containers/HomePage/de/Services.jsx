// Hooks
// import useClipboard from "hooks/useClipboard";

// Components
// import AlertCopy from "components/AlertCopy";

// Scroll reveal animations
import SlideUp from "components/scroll-reveal-animations/SlideUp";

// Icons
import {
  FaPlane,
  FaHeart,
  FaShoppingBag,
  FaGlassMartiniAlt,
  FaCompass,
  FaCar,
} from "react-icons/fa";

export default function Services() {
  // const [isCopied, setCopied] = useClipboard("info@drive4people.cz", {
  //   successDuration: 3000,
  // });
  return (
    <section id="dienstleistungen" className="ui-wrapper py-24 md:py-48">
      <SlideUp>
        <h2 className="ui-tagline">Dienstleistungen</h2>
        <span className="ui-heading" data-heading="lg">
          Was können wir für sie machen?
        </span>
      </SlideUp>

      <div className="mt-16 grid grid-cols-1 gap-16 md:mt-28 md:grid-cols-2">
        <SlideUp className="xs:grid-cols-7 grid grid-cols-1">
          <FaPlane className="text-primary col-span-1 mb-6 text-4xl" />
          <div className="xs:col-span-6 col-span-1">
            <h3 className="ui-heading">
              Flughafentransporte innerhalb europas
            </h3>
            <p>
              Brauchen Sie persönlichen Transport zum Flughafen, wollen aber
              keine Zeit mit der Reiseplanung und dem Parken Ihres Wagens
              vergruden? Dann ist dieser Service genau für Sie gemacht.
            </p>
          </div>
        </SlideUp>

        <SlideUp className="md:reveal-delay-200 xs:grid-cols-7 grid grid-cols-1">
          <FaShoppingBag className="text-primary col-span-1 mb-6 text-4xl" />
          <div className="xs:col-span-6 col-span-1">
            <h3 className="ui-heading">Express-kurier</h3>
            <p>
              Sie haben eine wichtige Sendung, die Sie auf die andere Seite der
              Tschechischen Republik oder quer durch Europa schnell und sicher
              verschicken müssen? Wir werden auch diese Dienstleistung für Sie
              arrangieren.
            </p>
          </div>
        </SlideUp>

        <SlideUp className="xs:grid-cols-7 grid grid-cols-1">
          <FaHeart className="text-primary col-span-1 mb-6 text-4xl" />
          <div className="xs:col-span-6 col-span-1">
            <h3 className="ui-heading">Hochzeiten</h3>
            <p>
              Suchen Sie einen geeigneten Wagen für das Brautpaar oder
              Hochzeitsgäste? Zu diesem festlichen Anlass stellen wir Ihnen den
              passenden Wagen mit einem Fahrer in entsprechender Bekleidung zur
              Verfügung, der Ihnen jederzeit professionell bereit steht.
            </p>
          </div>
        </SlideUp>

        <SlideUp className="md:reveal-delay-200 xs:grid-cols-7 grid grid-cols-1">
          <FaGlassMartiniAlt className="text-primary col-span-1 mb-6 text-4xl" />
          <div className="xs:col-span-6 col-span-1">
            <h3 className="ui-heading">Firmenfeiern und feste</h3>
            <p>
              Für Firmen- oder Familienveranstaltungen bieten wir Ihnen
              Transport beginend mit einer frühen Abholung bis zum sicheren und
              bequemen Transport direkt vor Ihre Haustüre.
            </p>
          </div>
        </SlideUp>

        <SlideUp className="xs:grid-cols-7 grid grid-cols-1">
          <FaCompass className="text-primary col-span-1 mb-6 text-4xl" />
          <div className="xs:col-span-6 col-span-1">
            <h3 className="ui-heading">
              Persönlicher fahrer mit unserem wagen
            </h3>
            <p>
              Haben Sie ein wichtiges Meeting, auf das Sie sich konzentrieren
              sowie vorbereiten müssen? Wir bieten Ihnen die Dienstleistung
              eines professionellen persönlichen Fahrers, der Ihre Reise für Sie
              plant, und einen komfortablen und sicheren Transport in der
              Tschechischen Republik und innerhalb Europas für Sie
              gewährleistet.
            </p>
          </div>
        </SlideUp>

        <SlideUp className="md:reveal-delay-200 xs:grid-cols-7 grid grid-cols-1">
          <FaCar className="text-primary col-span-1 mb-6 text-4xl" />
          <div className="xs:col-span-6 col-span-1">
            <h3 className="ui-heading">Persönlicher fahrer ihres wagens</h3>
            <p>
              Mehr Informationen{" "}
              <a
                href="mailto:info@drive4people.cz"
                className="ui-link text-primary"
                data-link="2"
              >
                info@drive4people.cz
              </a>
              {/* <span className="text-muted ml-2 text-xs">
                (kliknutím zkopírovat)
              </span> */}
            </p>
          </div>
        </SlideUp>
      </div>
      {/* <AlertCopy isCopied={isCopied}>E-mail zkopírován do schránky</AlertCopy> */}
    </section>
  );
}
