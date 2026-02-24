import type { ReactElement } from "react";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TogetherSection from "../../components/TogetherSection";
import ReviewsSection from "./components/ReviewsSection";
import ExhibitionSection from "./components/ExhibitionSection";
import LatestWork from "./components/LatestWork";



function Home(): ReactElement {
  return (
    <>
    <HeroSection/>
	<ServicesSection />
	<LatestWork/>
	<ExhibitionSection/>
	<ReviewsSection />
	<TogetherSection/>
    </>
  )
}

export default Home;
