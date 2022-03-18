import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

// Components
import Button from "components/ui/Button";

// icons
import { MdArrowDownward } from "react-icons/md";

export default function Hero() {
  return (
    <header
      id="domu"
      className="relative h-screen min-h-[36rem] w-screen overflow-hidden"
    >
      <div className="ui-wrapper z-3 relative flex h-full flex-col items-start justify-center">
        <h1
          className="ui-separator mb-10 text-4xl font-bold leading-tight text-white md:text-6xl xl:text-7xl"
          data-separator="left"
        >
          Wir transportieren sie von überall nach überall
        </h1>
        <p className="mb-10 max-w-4xl text-xl text-gray-200">
          Wir sind ein junges, wachsendes Unternehmen, das sich auf bequeme,
          sichere und schnelle Personenbeförderung innerhalb Europas
          konzentriert.
        </p>
        <div>
          <AnchorLink to="/de/#dienstleistungen" title="zjistit více">
            <Button as="span" IconLeft={<MdArrowDownward />}>
              Ich interessiere mich
            </Button>
          </AnchorLink>
        </div>
      </div>

      <div className="z-1 dark:bg-gray-950/80 absolute inset-0 h-full w-full bg-gray-900/[0.65]"></div>

      <StaticImage
        src="../../../assets/images/hero-1.jpg"
        alt="Lukáš Jiránek"
        placeholder="blurred"
        loading="eager"
        layout="fullWidth"
        style={{
          position: "absolute",
          inset: "0",
          width: "100%",
          height: "100%",
        }}
        objectFit="cover"
        objectPosition="50% 50%"
      />
    </header>
  );
}
