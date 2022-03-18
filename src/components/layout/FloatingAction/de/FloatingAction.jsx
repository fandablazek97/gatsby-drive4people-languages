import { AnchorLink } from "gatsby-plugin-anchor-links";

import { HiChat } from "react-icons/hi";

export default function FloatingAction() {
  return (
    <AnchorLink
      to="/de/#kontakt"
      stripHash
      title="Kontakt"
      className="group duration-default focus-visible:a11y-primary fixed right-7 bottom-8 z-[90] flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full no-underline transition-shadow"
      aria-label="Kontakt"
      role="button"
    >
      <span className="bg-primary group-hover:scale-115 duration-default ease-out-back absolute inset-0 h-full w-full transform-gpu rounded-full shadow-md transition-transform"></span>
      <span className="sr-only">Kontakt</span>
      <HiChat className="z-1 text-4xl text-white" aria-label="Kontakt" />
    </AnchorLink>
  );
}
