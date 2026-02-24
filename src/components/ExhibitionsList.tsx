import type { ReactElement } from "react";
import { useGetExhibitionsQuery } from "../services/exhibitionAPI";
import { Link } from "react-router";
import { frontRoutes } from "../routes/frontRoutes";

type Props = {
  isPast: boolean;
};

function ExhibitionsList({ isPast }: Props): ReactElement {
  const { data, error, isLoading } = useGetExhibitionsQuery();

  let content;

  if (error) content = <li>Error</li>;
  else if (isLoading)
    content = (
      <li className="loading">
        <div className="loading__img"></div>
        <div className="loading__item"></div>
      </li>
    );
  else if (data)
    content = data
      ?.filter((item) => item.isPast === isPast)
      .map((item) => (
        <li className="exhibitions__item" key={item.id}>
          <Link
            to={frontRoutes.navigator.exhibitions.item(item.id)}
            className="exhibitions__picture"
          >
            <img src={item.image} alt="img" />
          </Link>
          <div className="exhibitions__body">
            <div className="exhibitions__inner">
              <div className="exhibitions__info">
                <span>{item.location}</span>
                <span>{item.venue}</span>
                <span>{new Date(item.date).getFullYear()}</span>
              </div>
              <h3 className="exhibitions__title">
                <Link to={frontRoutes.navigator.exhibitions.item(item.id)}>
                  {item.title}
                  <span> {item.titleRed}</span>
                </Link>
              </h3>
              <div className="exhibitions__description">
                <p>{item.description}</p>
              </div>
            </div>
            <a href={item.ticketLink} className="exhibitions__link">
              Buy Ticket
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.94971 15.9099L15.5563 5.30326" stroke="#DB574D" />
                <path d="M6.01025 4.9499H15.9097V14.8494" stroke="#DB574D" />
              </svg>
            </a>
            <div className="exhibitions__data">
              {new Date(item.date).toLocaleString("en-US", { month: "short" })}
              <span>{new Date(item.date).getDate()}</span>
            </div>
          </div>
        </li>
      ));

  return (
    <div className="exhibitions">
      <ul className="exhibitions__list">{content}</ul>
    </div>
  );
}

export default ExhibitionsList;
