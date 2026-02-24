import type { ReactElement } from "react";

function AboutUpSection(): ReactElement {
 return (
  <section className="main__about-head about-head main__margin main__margin--not-margin">
		 <div className="about-head__container">
		   <div className="about-head__img">
			 <img src="images/about/1.webp" alt="img" />
		   </div>
		   <div className="about-head__inner">
			 <div className="about-head__label">About</div>
			 <h1 className="about-head__title headline">
			   Jacob
			   <br />
			   Grønberg
			 </h1>
		   </div>
		 </div>
	   </section>
 );
}

export default AboutUpSection;