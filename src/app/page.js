import { PdpSection } from "./partials/layout/home/pdp-section";
import TopSection from "./partials/layout/home/top-section";
import { Who } from "./partials/layout/home/who";
export default function Home() {
  return (
    <>
      <TopSection />
      <PdpSection />
      <Who />
    </>
  );
}