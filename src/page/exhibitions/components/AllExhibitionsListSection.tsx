import type { ReactElement } from "react";
import ExhibitionsList from "../../../components/ExhibitionsList";

function AllExhibitionsListSection(): ReactElement {
 return (
   <section className="main__date date main__margin main__margin--not-margin">
     <div className="date__container ">
       <div className="date__item">
         <h2 className="date__title">
           Current <span>Exhibitions</span>
         </h2>
         <ExhibitionsList isPast={true} />

       </div>
       <div className="date__item">
         <h2 className="date__title">
           Past <span>Exhibitions</span>
         </h2>
         <ExhibitionsList isPast={false} />

       </div>
     </div>
   </section>
 );
}

export default AllExhibitionsListSection;