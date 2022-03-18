import PropTypes from "prop-types";

export default function Hero({ title, subtitle }) {
  return (
    <header className="md:h-128 h-96 w-screen bg-indigo-700" role="banner">
      <div
        className="ui-wrapper flex h-full flex-col items-center justify-center"
        data-wrapper="sm"
      >
        <h1 className="ui-heading w-full text-center text-3xl text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="ui-lead self-center text-center text-white">{subtitle}</p>
      </div>
    </header>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
