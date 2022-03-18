import PropTypes from "prop-types";

import brand from "Assets/svg/brand.svg";

export default function BrandLogo({ className = "" }) {
  return (
    <div className={`xs:h-12 xs:w-28 h-8 w-20 ${className}`}>
      <img
        src={brand}
        alt="Logo značky"
        width="112"
        height="48"
        className="h-full w-full invert"
      />
    </div>
  );
}

BrandLogo.propTypes = {
  className: PropTypes.string,
};
