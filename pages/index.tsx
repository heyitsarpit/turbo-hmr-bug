import { HMR_Works } from "@/components/HMR_Works";
import { HMR_Error } from "@/components/HMR_Error";

export default function Home() {
  return (
    <div>
      <HMR_Works />
      <br />
      <br />
      <HMR_Error />
    </div>
  );
}
