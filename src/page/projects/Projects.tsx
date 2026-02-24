import type { ReactElement } from "react";
import TogetherSection from "../../components/TogetherSection";
import AllProjectSection from "./components/AllProjectSection";

function Projects(): ReactElement {
 return (
<>
<AllProjectSection/>
<TogetherSection/>
</>
 );
}

export default Projects;