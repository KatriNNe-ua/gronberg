import type { ReactElement } from "react";
import { Link } from "react-router";
import { frontRoutes } from "../../../routes/frontRoutes";


function HeroSection(): ReactElement {
 return (
   <section className="main__hero hero">
     <div className="hero__container">
       <div className="hero__content">
         <div className="hero__inner">
           <h1 className="hero__title headline">Jacob Grønberg</h1>
           <h2 className="hero__subtitle">
             <span>Photographer</span>
             <span>& Visual artist</span>
           </h2>
         </div>
         <figure className="hero__author">
           <div className="hero__photo">
             <img
               src="/images/home/hero/jacob.webp"
               alt="img"
             />
           </div>
           <figcaption className="hero__name">Hi, Im Jacob</figcaption>
           <Link to={frontRoutes.navigator.contact} className="hero__link">
             Work
             <br />
             With Me
           </Link>
         </figure>
       </div>
       <div className="hero__media">
         <div className="hero__img">
           <img
             src="/images/home/hero/main-image.webp"
             alt="img"
           />
         </div>
         <div className="hero__down down">
           <div className="down__text">
             Scroll Down
             <br />& Explore
           </div>
         </div>
       </div>
     </div>
   </section>
 );
}

export default HeroSection;