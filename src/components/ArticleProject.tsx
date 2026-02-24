import type { ReactElement } from "react";
import { Link } from "react-router";
import { frontRoutes } from "../routes/frontRoutes";

type Props = {
  size: "small" | "big" ;
  title: string;
  titleRed: string;
  img: string;
  location: string;
  date: string;
  id: string | number;
};

function ArticleProject({
  size,
  title,
  titleRed,
  img,
  location,
  date,
  id
}: Props): ReactElement {
  return (
    <article className={`work-projects projects__item work-projects--${size}`}>
      <Link to={frontRoutes.navigator.projects.item(id)} className="work-projects__link">
        <figure className="work-projects__media">
          <figcaption className="work-projects__caption">
            <h3 className="work-projects__title">
              {title} <span>{titleRed}</span>
            </h3>
          </figcaption>
          <div className="work-projects__img">
            <img src={img} alt={`${title} ${titleRed}`} />
          </div>
          <div className="work-projects__info">
            <span>{location}</span>
            <span>{date}</span>
          </div>
        </figure>
      </Link>
    </article>
  );
}

export default ArticleProject;
