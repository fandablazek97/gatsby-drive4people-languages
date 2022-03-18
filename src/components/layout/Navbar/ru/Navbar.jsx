// BUG - při otevření menu a roztažení okna na velikost desktopu a větší
// zmizí křížek a navigace nejde zavřít -> v podstatě nemá vliv na reálnou funkčnost

import { useState, useEffect } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

// Links
import { mainRoutes, callToAction } from "settings/ru/navLinks";

// Hooks & utils
import useScrollListener from "hooks/useScrollListener";
import { isBrowser } from "utils/isBrowser";

// Global components
// import AnchorLink from "components/ui/AnchorLink";
import Button from "components/ui/Button";
import BrandLogo from "components/BrandLogo";
import SocialMedia from "components/SocialMedia";

// Tightly coupled components
import NavbarBurgerButton from "../NavbarBurgerButton";
import NavbarThemeToggler from "../NavbarThemeToggler";
import LanguageSwitcher from "../LanguageSwitcher";

// Icons
import { HiPhone } from "react-icons/hi";

export default function Navbar() {
  // State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  // Funkce pro otevírání / zavírání menu po kliknutí na burger menu
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    if (isBrowser) {
      document.body.classList.toggle("helper-scroll-lock");
    }
  }

  function closeMenu() {
    setIsMenuOpen(false);
    if (isBrowser) {
      document.body.classList.remove("helper-scroll-lock");
    }
  }

  // use Scroll Listener hook
  const scroll = useScrollListener();

  useEffect(() => {
    // Aktivuje třídu po scrollnutí o více než 60px
    if (scroll.y > 60) {
      setIsNavScrolled(true);
    } else {
      setIsNavScrolled(false);
    }

    // Skryje / ukáže navigaci na základě podmínky
    if (scroll.y > 540 && scroll.y - scroll.lastY > 0) {
      setIsNavVisible(false);
    } else {
      setIsNavVisible(true);
    }
  }, [scroll.y, scroll.lastY]);

  return (
    <nav
      aria-label="Hlavní navigace webu"
      className={`z-100 duration-400 fixed w-screen transform-gpu transition-[background,transform,height,box-shadow] ease-in-out will-change-transform ${
        isNavScrolled
          ? "bg-gray-950 bg-opacity-85 shadow-soft-xl h-20 backdrop-blur-md dark:shadow-none"
          : "h-20 md:h-32"
      } ${isNavVisible ? "translate-y-0" : "-translate-y-full shadow-none"}`}
    >
      {/* Vnitřní wrapper navigace - šířku menu upravit zde */}
      <div
        className="ui-wrapper relative flex h-full items-center justify-between"
        data-wrapper="lg"
      >
        {/* Logo navigace */}
        <AnchorLink
          to="/"
          onClick={closeMenu}
          className="z-10 mr-auto xl:mr-16"
        >
          <BrandLogo />
        </AnchorLink>

        {/* Desktop - hlavní list s položkami menu */}
        <ul className="mr-auto hidden list-none space-x-5 xl:flex">
          {mainRoutes.map((item) => (
            <li key={item.label}>
              <AnchorLink
                to={item.path}
                title={item.label}
                stripHash
                className="ui-link data-link-2 text-sm uppercase text-white"
              >
                {item.label}
              </AnchorLink>
            </li>
          ))}
        </ul>

        <LanguageSwitcher className="mr-2 sm:mr-3 xl:mr-5" />

        {/* Desktop & mobile - Theme toggler */}
        <NavbarThemeToggler className="mr-2 sm:mr-3 xl:mr-5" />

        {/* Desktop - Call to action */}
        <Button
          href={callToAction[0].link}
          className="hidden self-center xl:inline-flex"
          IconLeft={<HiPhone />}
          size="sm"
        >
          {callToAction[0].label}
        </Button>

        {/* Burger menu */}
        <NavbarBurgerButton
          onClick={toggleMenu}
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-controls="mobile-menu-list"
          aria-label="Otevřít / zavřít hlavní menu"
          className="z-10 xl:hidden"
          isActivated={isMenuOpen}
        />
      </div>

      {/* ------------------------- */}
      {/* Mobile - Full screen menu */}
      <div
        className={`bg-gray-950 transition-visibility fixed inset-0 block h-screen w-screen transform-gpu ease-out ${
          isMenuOpen
            ? "duration-400 visible opacity-100"
            : "invisible opacity-0 duration-150"
        }`}
      >
        {/* Vnitřní wrapper mobilního menu */}
        <div className="ui-wrapper xs:pt-28 flex h-full flex-col items-center justify-between pt-24 pb-44">
          {/* Mobile - Menu list s položkami */}
          <ul
            id="mobile-menu-list"
            className={`flex transform-gpu list-none flex-col items-center justify-start space-y-5 text-center transition ease-out ${
              isMenuOpen
                ? "translate-y-0 opacity-100 delay-150 duration-500"
                : "duration-0 -translate-y-12 opacity-0 delay-150"
            }`}
          >
            {mainRoutes.map((item) => (
              <li key={item.label}>
                <AnchorLink
                  to={item.path}
                  title={item.label}
                  stripHash
                  onAnchorLinkClick={closeMenu}
                  className="ui-link data-link-2 text-xl font-bold uppercase text-white"
                >
                  {item.label}
                </AnchorLink>
              </li>
            ))}
          </ul>

          {/* Mobile - Call to action list */}
          <ul
            className={`xs:my-14 my-10 flex transform-gpu list-none flex-col items-center justify-start space-y-5 text-center transition ease-out ${
              isMenuOpen
                ? "translate-y-0 opacity-100 delay-300 duration-500"
                : "duration-0 -translate-y-12 opacity-0 delay-150"
            }`}
          >
            {/* Mobile - Call to action items */}
            {callToAction.map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="ui-link text-primary text-2xl font-semibold normal-case"
                  data-link="4"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile - Odkazy na sociální sítě */}
          <SocialMedia
            className={`mt-auto transform-gpu transition ease-out ${
              isMenuOpen
                ? "delay-450 translate-y-0 opacity-100 duration-500"
                : "duration-0 -translate-y-12 opacity-0 delay-150"
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
