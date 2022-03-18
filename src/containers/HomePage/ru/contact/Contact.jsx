import SlideUp from "components/scroll-reveal-animations/SlideUp";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="контакт" className="ui-wrapper py-16 md:py-32">
      <SlideUp>
        <h2 className="ui-tagline">контакт</h2>
        <span className="ui-heading" data-heading="lg">
          Приезжайте кататься с нами
        </span>
      </SlideUp>

      <div className=" mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
        <SlideUp>
          <span className="text-muted mb-2 block text-base dark:text-gray-400 md:text-lg">
            Телефон:
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
            Электронная почта:
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
          <h3 className="ui-heading">У вас есть вопрос?</h3>
          <div className="pt-6">
            <ContactForm />
          </div>
        </SlideUp>

        <SlideUp className="col-span-1">
          <h4 className="ui-heading">Задать вопрос</h4>
          <p className="pt-6">
            <span className="font-bold">Lukáš Jiránek</span> <br />
            ИЧО: 05564867
            <br />
            <br />
            <span className="font-bold">Bankovní spojení</span> <br />
            č.ú.: 123-1828880217/0100 <br />
            IBAN: CZ29 0100 0001 2318 2888 0217 <br />
            BIC/SWIFT = KOMBCZPPXXX <br />
            <br />
            Физическое лицо, ведущее бизнес в соответствии с Законом о
            лицензировании торговли, не зарегистрированное в коммерческом
            регистре.
          </p>
        </SlideUp>
      </div>
    </section>
  );
}
