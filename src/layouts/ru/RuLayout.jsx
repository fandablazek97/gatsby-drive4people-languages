import Helmet from "react-helmet";

// Layout components
import { Navbar } from "components/layout/Navbar/ru";
import { Footer } from "components/layout/Footer/ru";
import SkipNavLinks from "components/layout/SkipNavLinks";
import FloatingAction from "components/layout/FloatingAction/ru/FloatingAction";

export default function AppLayout({ children }) {
  return (
    <>
      <Helmet>
        <html lang="ru" />
      </Helmet>
      <header>
        <SkipNavLinks />
        <Navbar />
        <FloatingAction />
      </header>
      <main id="start">{children}</main>
      <Footer />
    </>
  );
}
