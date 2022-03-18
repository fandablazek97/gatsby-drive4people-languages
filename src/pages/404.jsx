import { navigate } from "gatsby";

// Layout
import AppLayout from "layouts/AppLayout";
import CsLayout from "layouts/cs/CsLayout";

// Global Components
import Seo from "components/Seo";
import Button from "components/ui/Button";

// Icons
import { HiHome } from "react-icons/hi";

export default function NotFoundPage() {
  return (
    <AppLayout>
      <CsLayout>
        <Seo title="404: Stránka nenalezena" robotsEnabled={false} />

        <header className="relative h-screen min-h-[640px] w-screen bg-blue-700">
          <div className="ui-wrapper flex h-full flex-col items-center justify-center">
            <span className="ui-heading" data-heading="xl">
              &#128531;
            </span>
            <h1 className="ui-heading text-3xl text-white sm:text-5xl lg:text-6xl">
              Stránka nenalezena
            </h1>
            <p className="ui-lead mb-16 text-center text-white">
              Ještě nikam neutíkejte! Vypadá to že stránka, kterou se pokoušíte
              nalézt již neexistuje nebo byla přesunuta. Kliknutím na tlačítko
              snadno přejdete na hlavní stránku.
            </p>
            <Button
              as="a"
              onClick={() => {
                navigate("/");
              }}
              IconLeft={<HiHome />}
            >
              Hlavní stránka
            </Button>
          </div>
        </header>
      </CsLayout>
    </AppLayout>
  );
}
