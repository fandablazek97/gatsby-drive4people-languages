import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// Components
import { InputFloating, TextareaFloating } from "components/ui/inputs";
import Button from "components/ui/Button";

// Global components
import FormAlertSuccess from "./FormAlertSuccess";
import FormAlertError from "./FormAlertError";
import FormCheckboxGdpr from "./FormCheckboxGdpr";

export default function FormContactTest() {
  // Ref
  const refHoneypot = useRef(null);

  // State
  const [mailSent, setmailSent] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Sending function
  function sendEmail(e) {
    e.preventDefault();
    setIsLoading(true);

    var honeypot = refHoneypot.current.value;

    if (honeypot === "" || honeypot === null) {
      emailjs
        .sendForm(
          "service_kxwxi1a",
          "template_mukthqd",
          e.target,
          "user_2tNsUaIQSULo6wFXKZVCs"
        )
        .then(
          (result) => {
            setmailSent(true);
            e.target.reset();
            setIsLoading(false);
          },
          (error) => {
            setFormError(true);
            setIsLoading(false);
          }
        );
    } else {
      setmailSent(true);
      e.target.reset();
      setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={sendEmail}
      className="space-y-8 pt-6"
      aria-label="Kontaktní formulář"
    >
      <InputFloating
        type="text"
        name="name"
        id="name"
        label="Имя и фамилия"
        isRequired={true}
      />

      {/* Honeypot - anti spam */}
      <div className="lib-input-hp">
        <input
          type="text"
          placeholder="surname"
          id="surname"
          ref={refHoneypot}
        />
        <label htmlFor="website">Příjmení</label>
      </div>
      {/* ---- Honeypot - anti spam ---- */}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <InputFloating
          type="mail"
          name="mail"
          id="mail"
          label="Электронная почта"
          isRequired={true}
        />

        <InputFloating
          type="tel"
          name="tel"
          id="tel"
          label="Телефон"
          isRequired={true}
        />
      </div>

      <TextareaFloating
        name="message"
        id="message"
        cols="30"
        rows="10"
        label="Сообщение"
        isRequired={true}
      />

      <FormCheckboxGdpr id="gdpr" name="gdpr" />

      <Button as="button" type="submit" isLoading={isLoading} text="Отправлять">
        Отправлять
      </Button>

      <div>
        {mailSent ? <FormAlertSuccess /> : null}
        {formError ? <FormAlertError /> : null}
      </div>
    </form>
  );
}
