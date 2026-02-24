import type { ReactElement } from "react";
import TogetherSection from "../../components/TogetherSection";
import AboutUpSection from "./components/AboutUpSection";
import AboutInfoSection from "./components/AboutInfoSection";

function About(): ReactElement {
  return (
    <>
     <AboutUpSection/>
     <AboutInfoSection/>
      <TogetherSection />
    </>
  );
}

export default About;
