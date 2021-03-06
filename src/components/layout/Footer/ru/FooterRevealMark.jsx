import RevealLogo from "Assets/svg/reveal-logo-signature.svg";

export default function FooterRevealMark({ className }) {
  return (
    <a
      href="https://reveal.cz"
      target="_blank"
      rel="noreferrer author external"
      className={`duration-default focus-visible:a11y-primary my-2 min-w-[161px] self-center rounded-md bg-black py-3 px-5 text-xs font-bold tracking-wider text-white transition-shadow ${className}`}
    >
      <img
        src={RevealLogo}
        alt="Logo autora webu"
        width="10"
        height="10"
        className="mr-3 inline -translate-y-0.5"
      />
      <span>Создан Reveal</span>
    </a>
  );
}
