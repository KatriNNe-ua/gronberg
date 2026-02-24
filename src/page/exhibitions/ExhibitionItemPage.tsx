import type { ReactElement } from "react";
import TogetherSection from "../../components/TogetherSection";
import {
  exhibitionAPI,
  useGetExhibitionByIdQuery,
} from "../../services/exhibitionAPI";
import { useSelector } from "react-redux";
import type { Exhibition } from "../../data/dataDB";
import { useParams } from "react-router";

function ExhibitionItemPage(): ReactElement {
  const { id } = useParams<{ id: string }>();
  const exhibitionsState = useSelector(
    exhibitionAPI.endpoints.getExhibitions.select(),
  );
  const cachedExhibition = exhibitionsState?.data?.find(
    (item) => String(item.id) === String(id),
  );

  const { data, isLoading } = useGetExhibitionByIdQuery(id!, {
    skip: !id || !!cachedExhibition,
  });

    const exhibition:Exhibition|undefined = cachedExhibition || data;
  if (isLoading && !cachedExhibition) return (
    <div>
      <div className="loader"></div>
    </div>
  );
  if (!exhibition) return <div>Not found</div>;
  return (
    <>
      <section className="main__exhibitions-head exhibitions-head main__margin main__margin--not-margin">
        <div className="exhibitions-head__container">
          <div className="exhibitions-head__date">
            {new Date(exhibition.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </div>
          <h1 className="exhibitions-head__title headline">
            {exhibition.title + " " + exhibition.titleRed}
          </h1>
          <div className="exhibitions-head__img">
            <img src={exhibition.image} alt="img" />
          </div>
        </div>
      </section>
      <section className="main__information information main__margin main__margin--not-margin">
        <div className="information__container">
          <a href={exhibition.ticketLink} className="information__link btn">
            Get Tickets
            <svg
              width="32"
              height="15"
              viewBox="0 0 32 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 7.35352H30" stroke="#DB574D" />
              <path
                d="M23.5 0.353516L30.5 7.35352L23.5 14.3535"
                stroke="#DB574D"
              />
            </svg>
          </a>
          <div className="information__inner">
            <div className="information__item">
              <h2 className="information__title">About</h2>
              <div className="information__text">
                {exhibition?.about && exhibition.about.length > 0 ? (
                  exhibition.about.map((p, index) => <p key={index}>{p}</p>)
                ) : (
                  <p>No information available</p>
                )}
              </div>
            </div>
            <div className="information__item">
              <h2 className="information__title">Information</h2>
              <ul className="information__list list-information">
                <li className="list-information__item">
                  <div className="list-information__data">Date</div>
                  <div className="list-information__info">
                    16 Jun 2022 - 18 Oct 2022
                  </div>
                </li>
                <li className="list-information__item">
                  <div className="list-information__data">Opening Hours</div>
                  <div className="list-information__info">
                    {exhibition.openingHours}
                  </div>
                </li>
                <li className="list-information__item">
                  <div className="list-information__data">Location</div>
                  <div className="list-information__info">
                    {exhibition.place}
                    <a
                      className="list-information__link"
                      href={exhibition.directionsLink}
                    >
                      Get Directions
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.94922 15.9101L15.5558 5.3035"
                          stroke="#DB574D"
                        />
                        <path
                          d="M6.00977 4.9499H15.9093V14.8494"
                          stroke="#DB574D"
                        />
                      </svg>
                    </a>
                  </div>
                </li>
                <li className="list-information__item">
                  <div className="list-information__data">Address</div>
                  <div className="list-information__info">{exhibition.address}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <TogetherSection />
    </>
  );
}

export default ExhibitionItemPage;
