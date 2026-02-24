import type { ReactElement } from "react";
import { Link } from "react-router";
import { frontRoutes } from "../routes/frontRoutes";

function TogetherSection(): ReactElement {
 return (
 <section className="main__together together">
				<div className="together__container">
					<Link to={frontRoutes.navigator.contact} className="together__link link">Get in <br/>Touch</Link>
					<div className="together__content">
						<h2 className="together__title title">Let’s Work <br/><span>Together</span>
						</h2>
					</div>
				</div>
			</section>
 );
}

export default TogetherSection;