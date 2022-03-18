import Alert from "components/ui/Alert";
import { IoAlertCircle } from "react-icons/io5";

export default function FormAlertError() {
  return (
    <Alert color="error" className="flex items-center">
      <IoAlertCircle className="mr-4 shrink-0 text-3xl md:text-4xl" />
      <span className="text-lg">
        Email was not sent. Please try again later or choose another contact
        option.
      </span>
    </Alert>
  );
}
