import PropTypes from "prop-types";

// Configs
import socialLinks from "settings/socialLinks";

// Icons
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function SocialMedia({ className }) {
  return (
    <div
      className={`social-icons flex space-x-7 text-2xl no-underline ${className}`}
    >
      <a
        href={socialLinks.instagram.link}
        target="blank"
        rel="noreferrer me external"
        aria-label={socialLinks.instagram.ariaLabel}
        className="text-gray-100 p-2 hover:opacity-60 transition-opacity duration-default"
      >
        <FaInstagram aria-label="instagram" />
      </a>
      <a
        href={socialLinks.facebook.link}
        target="blank"
        rel="noreferrer me external"
        aria-label={socialLinks.facebook.ariaLabel}
        className="text-gray-100 p-2 hover:opacity-60 transition-opacity duration-default"
      >
        <FaFacebookF aria-label="facebook" />
      </a>
    </div>
  );
}

SocialMedia.propTypes = {
  className: PropTypes.string,
};
