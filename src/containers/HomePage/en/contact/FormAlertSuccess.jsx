import Alert from "components/ui/Alert";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function FormAlertSuccess() {
  return (
    <Alert color="success" className="flex items-center">
      <IoCheckmarkCircle className="mr-4 shrink-0 text-3xl md:text-4xl" />
      <span className="text-lg">E-mail was sent successfully.</span>
    </Alert>
  );
}
