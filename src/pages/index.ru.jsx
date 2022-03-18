// Layout
import AppLayout from "layouts/AppLayout";
import RuLayout from "layouts/ru/RuLayout";

// Global Components
import Seo from "components/Seo";

// Page Components
import Hero from "containers/HomePage/ru/Hero";
import Services from "containers/HomePage/ru/Services";
import PriceTable from "containers/HomePage/ru/PriceTable";
import Testimonials from "containers/HomePage/ru/Testimonials";
import Drivers from "containers/HomePage/ru/Drivers";
import Cars from "containers/HomePage/ru/Cars";
import Contact from "containers/HomePage/ru/Contact";

export default function IndexPage() {
  return (
    <AppLayout>
      <RuLayout>
        <Seo
          title="ПЕРЕВЕЗЕМ ОТКУДАУГОДНО И КУДА УГОДНО"
          description="Предлагаем услуги личного водителя, экспресс-курьера, перевозки на свадьбу, вечеринку или в аэропорт."
          keywords="одитель на свадьбу Пльзень, водитель на свадьбу Прага, курьер, встреча в аэропорту Праги, встреча в аэропорту Вены, водитель Пльзень, водитель Прага, Drive4people, доставка для людей"
        />

        <Hero />

        <Services />

        <PriceTable />

        <Testimonials />

        <Drivers />

        <Cars />

        <Contact />
      </RuLayout>
    </AppLayout>
  );
}
