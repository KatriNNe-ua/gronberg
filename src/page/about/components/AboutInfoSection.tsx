import type { ReactElement } from "react";
import { infoData } from "../../../data/aboutData";

function AboutInfoSection(): ReactElement {
 return (
   <section className="main__info info main__margin main__margin--not-margin">
     <div className="info__container">
       <div className="information information__inner">
         <div className="information__item information__item--grid">
           <h2 className="information__title information__title--sticky">
             About
           </h2>
           <div className="information__text">
             {infoData.about.map((p, i) => (
               <p key={i}>{p}</p>
             ))}
           </div>
         </div>
         <div className="information__item information__item--grid">
           <h2 className="information__title information__title--sticky">
             Information
           </h2>
           <ul className="information__list list-information">
             {infoData.information.map((item, i) => (
               <li key={i} className="list-information__item">
                 <div className="list-information__data">
                   {item.role} <span>{item.organization}</span>
                 </div>
                 <div className="list-information__info">{item.period}</div>
               </li>
             ))}
           </ul>
         </div>
         <div className="information__item information__item--grid">
           <h2 className="information__title information__title--sticky">
             Recognitions
           </h2>
           <ul className="information__list list-information">
             {infoData.recognitions.map((item, i) => (
               <li key={i} className="list-information__item">
                 <div className="list-information__data">
                   {item.role} <span>{item.organization}</span>
                 </div>
                 <div className="list-information__info">{item.period}</div>
               </li>
             ))}
           </ul>
         </div>
       </div>
     </div>
   </section>
 );
}

export default AboutInfoSection;