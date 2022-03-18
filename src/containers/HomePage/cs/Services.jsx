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
    <section id="sluzby" className="ui-wrapper py-24 md:py-48">
      <SlideUp>
        <h2 className="ui-tagline">Služby</h2>
        <span className="ui-heading" data-heading="lg">
          Co pro vás můžeme udělat?
        </span>
      </SlideUp>

      <div className="mt-16 grid grid-cols-1 gap-16 md:mt-28 md:grid-cols-2">
        <SlideUp className="xs:grid-cols-7 grid grid-cols-1">
          <FaPlane className="text-primary col-span-1 mb-6 text-4xl" />
          <div className="xs:col-span-6 col-span-1">
            <h3 className="ui-heading">Přeprava na/z letiště v rámci evropy</h3>
            <p>
              Potřebujete osobní přepravu na letiště, ale nechcete se zdržovat
              plánovaním cesty a parkováním svého auta na letišti? Pak je tato
              služba dělaná přesně Vám na míru.
            </p>
          </div>
        </SlideUp>

        <SlideUp className="md:reveal-delay-200 xs:grid-cols-7 grid grid-cols-1">
          <FaShoppingBag className="text-primary col-span-1 mb-6 text-4xl" />
          <div className="xs:col-span-6 col-span-1">
            <h3 className="ui-heading">Expresní kurýr</h3>
            <p>
              Máte důležitou zásilku, kterou potřebujete rychle a bezpečně
              dostat na druhou stranu republiky nebo Evropy. I takovou službu
              pro Vás zařídíme.
            </p>
          </div>
        </SlideUp>

        <SlideUp className="xs:grid-cols-7 grid grid-cols-1">
          <FaHeart className="text-primary col-span-1 mb-6 text-4xl" />
          <div className="xs:col-span-6 col-span-1">
            <h3 className="ui-heading">Svatby</h3>
            <p>
              Hledáte vhodný vůz pro novomanžele nebo svatební hosty? Pro tuto
              sváteční příležitost Vám zajistíme komfortní vůz s řidičem v
              obleku, který Vám bude po celou dobu profesionálně k dispozici.
            </p>
          </div>
        </SlideUp>

        <SlideUp className="md:reveal-delay-200 xs:grid-cols-7 grid grid-cols-1">
          <FaGlassMartiniAlt className="text-primary col-span-1 mb-6 text-4xl" />
          <div className="xs:col-span-6 col-span-1">
            <h3 className="ui-heading">Firemní večírky a oslavy</h3>
            <p>
              Pro firemní či rodinné akce, zajistíme dopravu od včasného
              vyzvednutí, po bezpečnou a komfortní přepravu přímo ke dveřím.
            </p>
          </div>
        </SlideUp>

        <SlideUp className="xs:grid-cols-7 grid grid-cols-1">
          <FaCompass className="text-primary col-span-1 mb-6 text-4xl" />
          <div className="xs:col-span-6 col-span-1">
            <h3 className="ui-heading">Osobní řidič s naším vozem</h3>
            <p>
              Máte důležité jednání, na které se potřebujete soustředit a
              připravit? Nabízíme možnost profesionálního osobního řidiče, který
              za Vás naplánuje cestu a zajistí komfortní a bezpečnou přepravu v
              rámci České republiky a Evropy
            </p>
          </div>
        </SlideUp>

        <SlideUp className="md:reveal-delay-200 xs:grid-cols-7 grid grid-cols-1">
          <FaCar className="text-primary col-span-1 mb-6 text-4xl" />
          <div className="xs:col-span-6 col-span-1">
            <h3 className="ui-heading">Osobní řidič Vašeho vozu</h3>
            <p>
              Více informací na{" "}
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
