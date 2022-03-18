import SlideUp from "components/scroll-reveal-animations/SlideUp";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="kontakt" className="ui-wrapper py-16 md:py-32">
      <SlideUp>
        <h2 className="ui-tagline">Kontakt</h2>
        <span className="ui-heading" data-heading="lg">
          Steigen sie ein und fahren sie mit uns
        </span>
      </SlideUp>

      <div className=" mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
        <SlideUp>
          <span className="text-muted mb-2 block text-base dark:text-gray-400 md:text-lg">
            Telefon:
          </span>
          <a
            href="tel:+420773997434"
            className="ui-link text-primary text-xl font-semibold md:text-2xl"
            data-link="4"
          >
            +420 773 997 434
          </a>
        </SlideUp>

        <SlideUp>
          <span className="text-muted mb-2 block text-base dark:text-gray-400 md:text-lg">
            E-mail:
          </span>
          <a
            href="mailto:info@drive4people.cz"
            className="ui-link text-primary text-xl font-semibold md:text-2xl"
            data-link="4"
          >
            Info@drive4people.cz
          </a>
        </SlideUp>
      </div>

      <div className="mt-32 grid grid-cols-1 gap-16 md:grid-cols-3">
        <SlideUp className="col-span-2">
          <h3 className="ui-heading">Haben sie eine frage?</h3>
          <div className="pt-6">
            <ContactForm />
          </div>
        </SlideUp>

        <SlideUp className="col-span-1">
          <h4 className="ui-heading">Abrechnungsdaten</h4>
          <p className="pt-6">
            <span className="font-bold">Lukáš Jiránek</span> <br />
            IČO: 05564867
            <br />
            <br />
            <span className="font-bold">Bankverbindung</span> <br />
            č.ú.: 123-1828880217/0100 <br />
            IBAN: CZ29 0100 0001 2318 2888 0217 <br />
            BIC/SWIFT = KOMBCZPPXXX <br />
            <br />
            Das Einzelunternehmen handelt gemäß dem Gewerbescheingesetz und ist
            nicht im Handelsregister eingetragen
          </p>
        </SlideUp>
      </div>
    </section>
  );
}
