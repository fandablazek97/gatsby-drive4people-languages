import SlideUp from "components/scroll-reveal-animations/SlideUp";

// Data
import { prices } from "./prices/prices";
import { pricesAirport } from "./prices/pricesAirport";

export default function PriceTable() {
  return (
    <section
      id="preisliste"
      className="from-primary dark:from-primary bg-gradient-to-r to-indigo-800 py-24 dark:to-indigo-900 md:py-48"
    >
      <div className="ui-wrapper">
        <SlideUp>
          <h2 className="ui-tagline text-gray-300">Preisliste</h2>
          <span className="ui-heading text-white" data-heading="lg">
            Wie viel wird es kosten?
          </span>
          <p className="text-white">
            * Die Preise dienen nur zur Orientierung und werden an die
            Anforderungen des Kunde oder der Kundin angepasst
          </p>
        </SlideUp>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <SlideUp as="h3" className="ui-heading mt-16 text-white">
              Standarddienste
            </SlideUp>
            <ul className="mt-8 space-y-6">
              {prices.map((item) => (
                <SlideUp
                  as="li"
                  className="rounded-default flex w-full overflow-hidden"
                  key={item.caption}
                >
                  <div className=" text-default bg-body-100 flex w-full items-center py-3 px-5 leading-snug">
                    <span>{item.caption}</span>
                  </div>
                  <div className="flex w-1/2 items-center justify-end bg-gray-900 bg-opacity-60 py-3 px-5 text-white">
                    <span>{item.price}</span>
                  </div>
                </SlideUp>
              ))}
            </ul>
          </div>

          <div>
            <SlideUp as="h3" className="ui-heading mt-16 text-white">
              Flughafen
            </SlideUp>
            <ul className="mt-8 space-y-6">
              {pricesAirport.map((item) => (
                <SlideUp
                  as="li"
                  className="rounded-default flex w-full overflow-hidden"
                  key={item.caption}
                >
                  <div className=" text-default bg-body-100 flex w-full items-center py-3 px-5 leading-snug">
                    <span>{item.caption}</span>
                  </div>
                  <div className=" flex w-1/2 items-center justify-end bg-gray-900 bg-opacity-60 py-3 px-5 text-white">
                    <span>{item.price}</span>
                  </div>
                </SlideUp>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
