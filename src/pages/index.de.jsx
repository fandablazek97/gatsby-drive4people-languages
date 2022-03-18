// Layout
import AppLayout from "layouts/AppLayout";
import DeLayout from "layouts/de/DeLayout";

// Global Components
import Seo from "components/Seo";

// Page Components
import Hero from "containers/HomePage/de/Hero";
import Services from "containers/HomePage/de/Services";
import PriceTable from "containers/HomePage/de/PriceTable";
import Testimonials from "containers/HomePage/de/Testimonials";
import Drivers from "containers/HomePage/de/Drivers";
import Cars from "containers/HomePage/de/Cars";
import Contact from "containers/HomePage/de/Contact";

export default function IndexPage() {
  return (
    <AppLayout>
      <DeLayout>
        <Seo
          title="Wir transportieren Sie von überall nach überall"
          description="Wir bieten die Dienste eines persönlichen Fahrers, Express-Kuriers, Transport zu Hochzeiten, Partys oder Flughäfen."
          keywords="Fahrer für Hochzeit Pilsen, Fahrer für Hochzeit Prag, Kurier, Abholung Flughafen Prag, Abholung Flughafen Wien, Fahrer Pilsen, Fahrer Prag, Drive4people, Fahrt für Personen"
        />

        <Hero />

        <Services />

        <PriceTable />

        <Testimonials />

        <Drivers />

        <Cars />

        <Contact />
      </DeLayout>
    </AppLayout>
  );
}
