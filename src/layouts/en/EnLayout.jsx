import Helmet from "react-helmet";

// Layout components
import { Navbar } from "components/layout/Navbar/en";
import { Footer } from "components/layout/Footer/en";
import SkipNavLinks from "components/layout/SkipNavLinks";
import FloatingAction from "components/layout/FloatingAction/en/FloatingAction";

export default function AppLayout({ children }) {
  return (
    <>
      <Helmet>
        <html lang="en" />
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
