import type { ReactElement } from "react";
import { Link } from "react-router";
import { frontRoutes } from "../../../routes/frontRoutes";
import ExceptionsList from "../../../components/ExhibitionsList";


function ExhibitionSection(): ReactElement {
 return (
	<section className="main__exhibitions exhibitions">
				<div className="exhibitions__container">
					<div className="exhibitions__head head">
						<h2 className="head__title title">Exhibitions <span>‘22</span>
						</h2>
						<Link to={frontRoutes.navigator.exhibitions.base} className="head__link">
							View All
							<svg width="32" height="15" viewBox="0 0 32 15" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M0 7.35352H30" stroke="#101010" />
								<path d="M23.5 0.353516L30.5 7.35352L23.5 14.3535" stroke="#101010" />
							</svg>
						</Link>
					</div>
					<ExceptionsList isPast={true}/>
				</div>
			</section>
 );
}

export default ExhibitionSection;