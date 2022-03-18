// Layout
import AppLayout from "layouts/AppLayout";
import EnLayout from "layouts/en/EnLayout";

// Global Components
import Seo from "components/Seo";

// Page Components
import Hero from "containers/HomePage/en/Hero";
import Services from "containers/HomePage/en/Services";
import PriceTable from "containers/HomePage/en/PriceTable";
import Testimonials from "containers/HomePage/en/Testimonials";
import Drivers from "containers/HomePage/en/Drivers";
import Cars from "containers/HomePage/en/Cars";
import Contact from "containers/HomePage/en/Contact";

export default function IndexPage() {
  return (
    <AppLayout>
      <EnLayout>
        <Seo
          title="We will transport you from anywhere to everywhere"
          description="We offer the services of a personal driver, express courier, transportation to weddings, parties or airports."
          keywords="Driver for wedding Pilsen, driver for wedding Prague, courier, pick-up Prague airport, pick-up Vienna airport, driver Pilsen, driver Prague, Drive4people, drive for people"
        />

        <Hero />

        <Services />

        <PriceTable />

        <Testimonials />

        <Drivers />

        <Cars />

        <Contact />
      </EnLayout>
    </AppLayout>
  );
}
