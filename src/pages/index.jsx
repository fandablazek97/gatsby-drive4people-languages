// Layout
import AppLayout from "layouts/AppLayout";
import CsLayout from "layouts/cs/CsLayout";

// Global Components
import Seo from "components/Seo";

// Page Components
import Hero from "containers/HomePage/cs/Hero";
import Services from "containers/HomePage/cs/Services";
import PriceTable from "containers/HomePage/cs/PriceTable";
import Testimonials from "containers/HomePage/cs/Testimonials";
import Drivers from "containers/HomePage/cs/Drivers";
import Cars from "containers/HomePage/cs/Cars";
import Contact from "containers/HomePage/cs/Contact";

export default function IndexPage() {
  return (
    <AppLayout>
      <CsLayout>
        <Seo
          title="Přepravíme odkudkoli kamkoli"
          description="Drive4people se zaměřuje se na přepravu osob v rámci Evropy. Nabízíme služby osobního řidiče, expresního kurýra, přepravu na svatby, večírky nebo letiště."
          keywords="Řidič na svatbu Plzeň, řidič na svatbu Praha, kurýr, odvoz letiště Praha, odvoz letiště Vídeň, řidič Plzeň, řidič Praha, Drive4people, drive for people"
        />

        <Hero />

        <Services />

        <PriceTable />

        <Testimonials />

        <Drivers />

        <Cars />

        <Contact />
      </CsLayout>
    </AppLayout>
  );
}
