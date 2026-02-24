import type { ReactElement } from "react";
import AllExhibitionsUpSection from "./components/AllExhibitionsUpSection";
import AllExhibitionsListSection from "./components/AllExhibitionsListSection";
import TogetherSection from "../../components/TogetherSection";

function Exhibitions(): ReactElement {
 return (
   <>
     <AllExhibitionsUpSection />
     <AllExhibitionsListSection />
	 <TogetherSection/>
   </>
 );
}

export default Exhibitions;