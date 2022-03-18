// Settings
import globalSettings from "settings/globalSettings";

// Global components
import Link from "components/ui/Link";

// Tightly coupled components
import FooterRevealMark from "./FooterRevealMark";

export default function Footer() {
  return (
    <footer className="dark:bg-gray-950 w-screen bg-gray-900">
      <div
        className="ui-wrapper flex flex-col items-center justify-between space-y-6 py-10 text-center lg:flex-row lg:space-y-0 lg:py-16"
        data-wrapper="lg"
      >
        <span className="block text-white lg:mr-auto">
          Copyright © {new Date().getFullYear()} {globalSettings.meta.shortUrl}
        </span>
        <ul className="flex list-none flex-col space-y-4 lg:mr-8 lg:flex-row lg:space-y-0 lg:space-x-6 xl:mr-16 xl:space-x-10">
          <li>
            <Link
              to="/de/cookies"
              className="ui-link font-normal text-white"
              data-link="2"
            >
              Cookies
            </Link>
          </li>
          <li>
            <Link
              to="/de/gdpr"
              className="ui-link font-normal text-white"
              data-link="2"
            >
              Zpracování osobních údajů
            </Link>
          </li>
        </ul>
        <FooterRevealMark />
      </div>
    </footer>
  );
}
