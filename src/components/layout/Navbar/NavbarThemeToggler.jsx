import { useTheme } from "hooks/useTheme";
import { HiSun, HiMoon } from "react-icons/hi";

// Theme toggler component
export default function NavbarThemeToggler({ className }) {
  let [setting, setSetting] = useTheme();

  return (
    <button
      className={`duration-default focus-visible:a11y-primary flex items-center
      justify-center p-[0.4em] text-[1.7rem]
      leading-none text-white
      opacity-70 transition-opacity will-change-[opacity] hover:opacity-100
      ${className}`}
      onClick={() => setSetting(setting === "dark" ? "light" : "dark")}
      aria-label="zapnout nebo vypnout tmavý vzhled"
    >
      <HiSun className="dark:hidden" />
      <HiMoon className="hidden dark:inline" />
    </button>
  );
}
