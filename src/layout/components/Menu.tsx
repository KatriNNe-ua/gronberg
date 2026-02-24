import { useState, type ReactElement } from "react";
import { routes } from "../../routes";
import { NavLink } from "react-router";
import Social from "../../components/Social";
import { bodyLock } from "../../utils/bodyLock";
import { getItemsForMenu } from "../../utils/getItemsForMenu";


function Menu(): ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<boolean>(false);

  const labelList = getItemsForMenu(routes, "");

  function onClick() {
    const html = document.documentElement;
    const header = document.querySelector(".header");

    if (!isOpen) {
      setIsOpen(true);
      html.classList.add("menu-open");
      bodyLock(true);
      if (header?.classList.contains("scroll")) {
        header.classList.remove("scroll");
        setIsScroll(true);
      }
    } else {
      setIsOpen(false);
      html.classList.remove("menu-open");
      bodyLock(false);
      if (isScroll) {
        header?.classList.add("scroll");
      }
    }
  }

  return (
    <div className="header__menu menu">
      <button className="menu__icon" onClick={onClick}>
        <small></small>
        <span></span>
      </button>
      <div className="menu__body">
        <nav className="menu__list">
          {labelList.map((item) => (
            <li className="menu__item" key={item.label}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "menu__link menu__link--active" : "menu__link"
                }
                onClick={onClick}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </nav>
        <Social />
      </div>
    </div>
  );
}

export default Menu;
