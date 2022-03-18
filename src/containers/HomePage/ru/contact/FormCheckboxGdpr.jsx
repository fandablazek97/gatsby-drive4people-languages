import PropTypes from "prop-types";

import Link from "components/ui/Link";
import Checkbox from "components/ui/inputs/Checkbox";

export default function FormCheckboxGdpr({ id, name, ...rest }) {
  return (
    <Checkbox id={id} name={name} isRequired={true} {...rest}>
      Я согласен с условиями{" "}
      <Link
        to="/gdpr"
        className="ui-link text-primary font-normal"
        data-link="2"
      >
        защита персональных данных..
      </Link>
    </Checkbox>
  );
}

FormCheckboxGdpr.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
