import type { ReactElement } from "react";
import { routes } from "../../routes";
import { getItemsForMenu } from "../../utils/getItemsForMenu";
import { Link } from "react-router";
import Social from "../../components/Social";

function Footer(): ReactElement {
  const labelList = getItemsForMenu(routes, "");

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__body">
          <div className="footer__contain">
            <h2 className="footer__title title">
              Jacob <br />
              Grønberg
            </h2>
            <div className="footer__subtitle">Photograph & Visual Artist</div>
          </div>

          <div className="footer__menu">
            <div className="footer__header">Menu</div>
            <ul className="footer__list">
              <nav className="footer__list">
                {labelList.map((item) => (
                  <li className="footer__item" key={item.label}>
                    <Link className="footer__link" to={item.path}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </nav>
            </ul>
          </div>
          <div className="footer__menu">
            <div className="footer__header">Info</div>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Styleguide
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Licensing
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Changelog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Social />
      </div>
    </footer>
  );
}

export default Footer;
