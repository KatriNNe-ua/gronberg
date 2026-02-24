import type { ReactElement } from "react";
import { Link } from "react-router";
import { frontRoutes } from "../../../routes/frontRoutes";
import { useGetProjectsQuery } from "../../../services/projectAPI";
import ArticleProject from "../../../components/ArticleProject";

function LatestWork(): ReactElement {
  const { data, error, isLoading } = useGetProjectsQuery();

  let content;

  if (error) content = <div>Error</div>;
  else if (isLoading) content = (
      <li className="loading">
        <div className="loading__img"></div>
        <div className="loading__item"></div>
      </li>
    );
  else
    content = (
      <div className="latest-work__content projects">
        <div className="projects__column">
          {data && data.length && (
            <ArticleProject
              size="big"
              title={data[0].title}
              titleRed={data[0].titleRed}
              img={data[0].mainImage}
              location={data[0].location}
              date={data[0].date}
              id={data[0].id}
            />
          )}
        </div>
        <div className="projects__column">
          {data && data.length >= 1 && (
            <ArticleProject
              size="small"
              title={data[1].title}
              titleRed={data[1].titleRed}
              img={data[1].mainImage}
              location={data[1].location}
              date={data[1].date}
              id={data[1].id}
            />
          )}
          {data && data.length >= 2 && (
            <ArticleProject
              size="small"
              title={data[2].title}
              titleRed={data[2].titleRed}
              img={data[2].mainImage}
              location={data[2].location}
              date={data[2].date}
              id={data[2].id}
            />
          )}
        </div>
      </div>
    );

  return (
    <section className="main__latest-work latest-work">
      <div className="latest-work__container">
        <div className="latest-work__head head">
          <h2 className="head__title title">
            Latest <span>Work</span>
          </h2>
          <Link to={frontRoutes.navigator.projects.base} className="head__link">
            View All
            <svg
              width="32"
              height="15"
              viewBox="0 0 32 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 7.35352H30" stroke="#101010" />
              <path
                d="M23.5 0.353516L30.5 7.35352L23.5 14.3535"
                stroke="#101010"
              />
            </svg>
          </Link>
        </div>
        {content}
      </div>
    </section>
  );
}

export default LatestWork;
