import Link from "components/ui/Link";

export default function LanguageSwitcher({ className }) {
  return (
    <ul className={`flex space-x-3 lg:space-x-5 ${className}`}>
      <li className="text-sm font-semibold uppercase text-white">
        <Link to="/" className="ui-link" data-link="2">
          Cs
        </Link>
      </li>
      <li className="text-sm font-semibold uppercase text-white">
        <Link to="/en/" className="ui-link" data-link="2">
          En
        </Link>
      </li>
      <li className="text-sm font-semibold uppercase text-white">
        <Link to="/de/" className="ui-link" data-link="2">
          De
        </Link>
      </li>
      <li className="text-sm font-semibold uppercase text-white">
        <Link to="/ru/" className="ui-link" data-link="2">
          Ru
        </Link>
      </li>
    </ul>
  );
}
