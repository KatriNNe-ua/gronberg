import type { ReactElement } from "react";
import { Link, useParams } from "react-router";
import { projectAPI, useGetProjectByIdQuery, useGetProjectsQuery } from "../../services/projectAPI";
import { useSelector } from "react-redux";
import type { Project } from "../../data/dataDB";
import { frontRoutes } from "../../routes/frontRoutes";

function ProjectsItem(): ReactElement {
  const { id } = useParams<{ id: string }>();
  const projectsState = useSelector(projectAPI.endpoints.getProjects.select());
  const cachedProject = projectsState?.data?.find(
    (item) => String(item.id) === String(id),
  );

  const { data, isLoading } = useGetProjectByIdQuery(id!, {
    skip: !id || !!cachedProject,
  });

  const project: Project | undefined = cachedProject || data;

 const { data:dataAll, isLoading:isLoadingAll} = useGetProjectsQuery();

 const projectIndex = dataAll?.findIndex(item=>item.id === project?.id)
let projectNext
 if (projectIndex !== undefined && projectIndex >= 0 && dataAll)
   projectNext = dataAll[projectIndex + 1];

  if (isLoading && !cachedProject && isLoadingAll) return (
      <div>
        <div className="loader"></div>
      </div>
    )

  if (!project) return <div>Not found</div>;

  return (
    <>
      <section className="main__project-hero project-hero main__margin main__margin--not-margin">
        <div className="project-hero__container">
          <div className="project-hero__img">
            <img src={project.mainImage} alt="img" />
          </div>
          <h1 className="project-hero__title headline">
            {project.title + " " + project.titleRed}
          </h1>
        </div>
      </section>
      <section className=" main__details details">
        <div className="details__container">
          <div className="details__inner">
            <h2 className="details__title">About</h2>
            <div className="details__text">
              {project.about.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>
          </div>
          <div className="details__inner">
            <h2 className="details__title">Details</h2>
            <div className="details__data">
              <div className="details__item">
                Year
                <span>{project.details.year}</span>
              </div>
              <div className="details__item">
                Service
                <span>{project.details.service}</span>
              </div>
              <div className="details__item">
                Client
                <span>{project.details.client}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="main__photos photos">
        <ul className="photos__container">
          {project.image.map((img, index) => (
            <li
              className={
                index === 2 ? "photos__item photos__item--full" : "photos__item"
              }
              key={index}
            >
              <img src={img} alt="img" />
            </li>
          ))}
        </ul>
      </div>
      {projectNext && (
        <section className="main__next next">
          <div className="next__container">
            <h2 className="next__label">Next Project</h2>
            <h3 className="next__title headline">
              {projectNext.title + " " + projectNext.titleRed}
            </h3>
            <div className="next__img">
              <img src={projectNext.mainImage} alt="img" />
            </div>
            <Link
              to={frontRoutes.navigator.projects.item(projectNext.id)}
              className="next__link link"
            >
              Discover
            </Link>
          </div>
        </section>
      )}
    </>
  );
}

export default ProjectsItem;
