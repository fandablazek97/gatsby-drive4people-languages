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
    <section id="services" className="ui-wrapper py-24 md:py-48">
      <SlideUp>
        <h2 className="ui-tagline">Services</h2>
        <span className="ui-heading" data-heading="lg">
          What can we do for you?
        </span>
      </SlideUp>

      <div className="mt-16 grid grid-cols-1 gap-16 md:mt-28 md:grid-cols-2">
        <SlideUp className="xs:grid-cols-7 grid grid-cols-1">
          <FaPlane className="text-primary col-span-1 mb-6 text-4xl" />
          <div className="xs:col-span-6 col-span-1">
            <h3 className="ui-heading">
              Transport to / from the airport within europe
            </h3>
            <p>
              Do you need a personal transfer to the airport, but do not want to
              delay planning your trip and parking your car at the airport? Then
              this service is made exactly for you.
            </p>
          </div>
        </SlideUp>

        <SlideUp className="md:reveal-delay-200 xs:grid-cols-7 grid grid-cols-1">
          <FaShoppingBag className="text-primary col-span-1 mb-6 text-4xl" />
          <div className="xs:col-span-6 col-span-1">
            <h3 className="ui-heading">Express courier</h3>
            <p>
              Do you have an important shipment that you need to get to the
              other side of the Republic or Europe quickly and safely? We can
              also arrange such a service for you.
            </p>
          </div>
        </SlideUp>

        <SlideUp className="xs:grid-cols-7 grid grid-cols-1">
          <FaHeart className="text-primary col-span-1 mb-6 text-4xl" />
          <div className="xs:col-span-6 col-span-1">
            <h3 className="ui-heading">Weddings</h3>
            <p>
              Are you looking for a suitable car for newlyweds or wedding
              guests? For this festive occasion, we will provide you with a
              comfortable car including a driver in a suit, which will be
              professionally available to you at all times.
            </p>
          </div>
        </SlideUp>

        <SlideUp className="md:reveal-delay-200 xs:grid-cols-7 grid grid-cols-1">
          <FaGlassMartiniAlt className="text-primary col-span-1 mb-6 text-4xl" />
          <div className="xs:col-span-6 col-span-1">
            <h3 className="ui-heading">Corporate parties and celebrations</h3>
            <p>
              We also provide transportation for corporate or family events.
              From early pickup to safe and comfortable transportation directly
              to the door.
            </p>
          </div>
        </SlideUp>

        <SlideUp className="xs:grid-cols-7 grid grid-cols-1">
          <FaCompass className="text-primary col-span-1 mb-6 text-4xl" />
          <div className="xs:col-span-6 col-span-1">
            <h3 className="ui-heading">Personal driver with our car</h3>
            <p>
              Do you have an important meeting that you need to focus and
              prepare on? We offer the possibility of a professional personal
              driver. He will plan your trip for you and ensure comfortable and
              safe transport within the Czech Republic and Europe.
            </p>
          </div>
        </SlideUp>

        <SlideUp className="md:reveal-delay-200 xs:grid-cols-7 grid grid-cols-1">
          <FaCar className="text-primary col-span-1 mb-6 text-4xl" />
          <div className="xs:col-span-6 col-span-1">
            <h3 className="ui-heading">Personal driver of your car</h3>
            <p>
              More information at{" "}
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
