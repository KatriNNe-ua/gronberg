import type { ReactElement } from "react";
import { frontRoutes } from "../../../routes/frontRoutes";
import { useGetProjectsQuery } from "../../../services/projectAPI";
import { Link } from "react-router";
import ArticleProject from "../../../components/ArticleProject";

function AllProjectSection(): ReactElement {
  const { data, error, isLoading } = useGetProjectsQuery();
  let content 
  if (error) content = <div>Error</div>;
  else if (isLoading) content = (
    <div>
      <div className="loader"></div>
    </div>
  );
  else if (data) content = (
    <div className="all-projects__content ">
      <div className="all-projects__item projects">
        <div className="projects__column projects__column--center">
          {data?.[0] ? (
            <ArticleProject
              size="big"
              title={data[0].title}
              titleRed={data[0].titleRed}
              img={data[0].mainImage}
              location={data[0].location}
              date={data[0].date}
              id={data[0].id}
            />
          ) : null}
        </div>
        <div className="projects__column">
          {data?.[1] ? (
            <ArticleProject
              size="small"
              title={data[1].title}
              titleRed={data[1].titleRed}
              img={data[1].mainImage}
              location={data[1].location}
              date={data[1].date}
              id={data[1].id}
            />
          ) : null}
          {data?.[2] ? (
            <ArticleProject
              size="small"
              title={data[2].title}
              titleRed={data[2].titleRed}
              img={data[2].mainImage}
              location={data[2].location}
              date={data[2].date}
              id={data[2].id}
            />
          ) : null}
        </div>
      </div>
      <div className="all-projects__item projects">
        <div className="projects__column ">
          {data?.[3] ? (
            <ArticleProject
              size="small"
              title={data[3].title}
              titleRed={data[3].titleRed}
              img={data[3].mainImage}
              location={data[3].location}
              date={data[3].date}
              id={data[3].id}
            />
          ) : null}
        </div>
        <div className="projects__column">
          {data?.[4] ? (
            <ArticleProject
              size="big"
              title={data[4].title}
              titleRed={data[4].titleRed}
              img={data[4].mainImage}
              location={data[4].location}
              date={data[4].date}
              id={data[4].id}
            />
          ) : null}
        </div>
      </div>
      <div className="all-projects__item projects">
        <div className="projects__column">
          {data?.[5] ? (
            <ArticleProject
              size="big"
              title={data[5].title}
              titleRed={data[5].titleRed}
              img={data[5].mainImage}
              location={data[5].location}
              date={data[5].date}
              id={data[5].id}
            />
          ) : null}
        </div>
        <div className="projects__column">
          {data?.[6] ? (
            <ArticleProject
              size="small"
              title={data[6].title}
              titleRed={data[6].titleRed}
              img={data[6].mainImage}
              location={data[6].location}
              date={data[6].date}
              id={data[6].id}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
    return (
      <section className="main__all-projects all-projects main__margin main__margin--not-margin">
        <div className="all-projects__container">
          <div className="all-projects__up">
            <div className="all-projects__inner">
              <h1 className="all-projects__title">Projects</h1>
              <Link
                to={frontRoutes.navigator.contact}
                className="all-projects__link link"
              >
                Get in <br />
                Touch
              </Link>
            </div>
            <div className="all-projects__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
         {content}
        </div>
      </section>
    );
}

export default AllProjectSection;
