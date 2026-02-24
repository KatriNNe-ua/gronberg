import type { ReactElement } from "react";
import { social } from "../data/socialData";

function Social(): ReactElement {
 return (
   <ul className="menu__social social">
     {social.map((item) => (
       <li className="social__item" key={item.id}>
         <a href={item.path} className="social__link" target="_blank">
           {item.name}
         </a>
       </li>
     ))}
   </ul>
 );
}

export default Social;