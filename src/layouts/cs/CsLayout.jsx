import Helmet from "react-helmet";

// Layout components
import { Navbar } from "components/layout/Navbar/cs";
import { Footer } from "components/layout/Footer/cs";
import SkipNavLinks from "components/layout/SkipNavLinks";
import FloatingAction from "components/layout/FloatingAction/cs/FloatingAction";

export default function AppLayout({ children }) {
  return (
    <>
      <Helmet>
        <html lang="cs" />
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
