import { useContext } from "react";
import {
  LanguageContext,
  LanguageContextUpdate,
} from "context/LanguageContext";
import Button from "components/ui/Button";
import Group from "components/ui/Group";

export default function ContextTest() {
  const language = useContext(LanguageContext);
  const { updateToCs, updateToEn, updateToDe, updateToRu } = useContext(
    LanguageContextUpdate
  );
  return (
    <div className="w-screen py-28">
      <Group className="mb-6">
        <Button as="button" onClick={updateToCs}>
          Čeština
        </Button>
        <Button as="button" onClick={updateToEn}>
          English
        </Button>
        <Button as="button" onClick={updateToDe}>
          Deutch
        </Button>
        <Button as="button" onClick={updateToRu}>
          Rusky
        </Button>
      </Group>
      {language === "cs" && <h1>Česky heyyy</h1>}
      {language === "en" && <h1>Anglicky heyyy</h1>}
      {language === "de" && <h1>Německy heyyy</h1>}
      {language === "ru" && <h1>Rusky heyyy</h1>}
    </div>
  );
}
