import type { ReactElement } from "react";
import { reviewsData } from "../../../data/reviewsData";
import { Link } from "react-router";
import { frontRoutes } from "../../../routes/frontRoutes";

function ReviewsSection(): ReactElement {
 return (
   <section className="main__reviews reviews main__margin main__margin--not-margin">
     <div className="reviews__container">
       <div className="reviews__content">
         <h2 className="reviews__title title">
           What my Clients <span>Say</span>
         </h2>
         <div className="reviews__info">
           Worked with Over
           <span> 50 clients</span> around the world
         </div>
         <Link to={frontRoutes.navigator.contact} className="reviews__link btn">
           Work With Me
           <svg
             width="32"
             height="15"
             viewBox="0 0 32 15"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path d="M0 7.35352H30" stroke="#DB574D" />
             <path
               d="M23.5 0.353516L30.5 7.35352L23.5 14.3535"
               stroke="#DB574D"
             />
           </svg>
         </Link>
       </div>

       <ul className="reviews__list">
         {reviewsData.map((item) => (
           <li className="reviews__item" key={item.id}>
             <article className="reviews__article">
               <div className="reviews__photo">
                 <img src={item.photo} alt="img" />
               </div>
               <blockquote className="reviews__quote">
                 <div className="reviews__wrapper">
                   <h3 className="reviews__caption">
                     I Really Enjoyed Working <br /> With Jacob
                   </h3>
                 </div>
                 <div className="reviews__text">
                   {item.text.map((p, index) => (
                     <p key={index}>{p}</p>
                   ))}
                 </div>
                 <cite className="reviews__author">
                   <span>{item.author}</span>
                   <span>{item.role}</span>
                 </cite>
               </blockquote>
             </article>
           </li>
         ))}

       </ul>
     </div>
   </section>
 );
}

export default ReviewsSection;