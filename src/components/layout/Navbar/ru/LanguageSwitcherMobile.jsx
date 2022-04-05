import { useState } from "react";
import { Listbox } from "@headlessui/react";
import Link from "components/ui/Link";

// Icons
import { HiChevronDown } from "react-icons/hi";

const langs = [
  { id: 1, label: "Čeština", link: "/" },
  { id: 2, label: "English", link: "/en/" },
  { id: 3, label: "Deutch", link: "/de/" },
  { id: 4, label: "русский", link: "/ru/" },
];

export default function LanguageSwitcherMobile() {
  const [selected, setSelected] = useState(langs[3]);

  return (
    <div className="relative lg:hidden">
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button className="focus-visible:a11y-white flex !outline-none transition-opacity duration-150 hover:opacity-70 ">
          <span className="xs:text-sm text-xs font-semibold uppercase tracking-wider text-white">
            {selected.label}
          </span>
          <HiChevronDown className="scale-130 xs:ml-2 xs:text-lg ml-1 text-base text-white" />
        </Listbox.Button>
        <Listbox.Options className="focus-visible:a11y-white bg-gray-950 absolute left-0 top-8 flex w-36 flex-col items-center justify-between space-y-5 rounded-md p-5 !outline-none">
          {langs.map((lang) => (
            <Listbox.Option
              key={lang.id}
              value={lang.label}
              className="focus-visible:a11y-white xs:text-sm cursor-pointer text-xs font-semibold uppercase tracking-wider text-white !outline-none  transition-opacity duration-150 hover:opacity-70"
            >
              <Link to={lang.link} className="min-w-fit whitespace-nowrap">
                {lang.label}
              </Link>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}
