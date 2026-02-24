import type { ReactElement } from "react";
import { servicesData } from "../../../data/servicesData";

function ServicesSection(): ReactElement {
 return (
   <section className="main__services services ">
     <div className="services__container">
       <h2 className="services__label">Services</h2>
       <ul className="services__list">
         {servicesData.map((item) => (
           <li className="services__item" key={item.id}>
             <a href={item.info} className="services__link">
               <h3 className="services__title">{item.title}</h3>
               <div className="services__text">
                 <p>
                   {item.info}
                 </p>
               </div>
             </a>
           </li>
         ))}

       
       </ul>
     </div>
   </section>
 );
}

export default ServicesSection;