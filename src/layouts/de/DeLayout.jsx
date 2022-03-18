import Helmet from "react-helmet";

// Layout components
import { Navbar } from "components/layout/Navbar/de";
import { Footer } from "components/layout/Footer/de";
import SkipNavLinks from "components/layout/SkipNavLinks";
import FloatingAction from "components/layout/FloatingAction/de/FloatingAction";

export default function AppLayout({ children }) {
  return (
    <>
      <Helmet>
        <html lang="de" />
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
