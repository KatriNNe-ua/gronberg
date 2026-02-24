import type { ReactElement } from "react";

function LoadingPage(): ReactElement {
 return (
   <div className="fallback">
     <div className="fallback__container">
       <h1 className="fallback__title">Jacob <br/>Grønberg</h1>
     </div>
   </div>
 );
}

export default LoadingPage;