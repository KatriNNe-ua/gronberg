import type { ReactElement } from "react";

function AllExhibitionsUpSection(): ReactElement {
 return (
 <section className="main__all-exhibitions all-exhibitions ">
				<div className="all-exhibitions__container">
					<h1 className="all-exhibitions__title">Exhibitions</h1>
					<div className="all-exhibitions__text">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt.</p>
					</div>
					<div className="all-exhibitions__out">
						<svg width="20" height="164" viewBox="0 0 20 164" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_14_1067)">
								<path
									d="M20 154L18.607 152.57L11 160.15L11 0L9 0L9 160.15L1.427 152.57L0 154L10 164L20 154Z"
									fill="#DB574D" />
							</g>
							<defs>
								<clipPath id="clip0_14_1067">
									<rect width="164" height="20" fill="white" transform="matrix(0 1 -1 0 20 0)" />
								</clipPath>
							</defs>
						</svg>
						<div className="all-exhibitions__inscription">
							Check Out <br/>
							The Dates
						</div>

					</div>
				</div>

			</section>
 );
}

export default AllExhibitionsUpSection;