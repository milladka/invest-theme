import FinalCTA from "./partials/layout/home/finalcta";
import HowItWorks from "./partials/layout/home/howItWorks";
import { PdpSection } from "./partials/layout/home/pdp-section";
import Portfolio from "./partials/layout/home/portfolio";
import TopSection from "./partials/layout/home/top-section";
import { Who } from "./partials/layout/home/who";
export default function Home() {
  return (
    <>
      <TopSection />
      <PdpSection />
      <Who />
      <HowItWorks />
      <Portfolio />
      <FinalCTA />
    </>
  );
}