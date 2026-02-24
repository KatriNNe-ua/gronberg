import { useEffect, type ReactElement } from "react";
import Menu from "./Menu";
import { Link, useMatches } from "react-router";
import type { CustomHandle } from "../../routes";
import { frontRoutes } from "../../routes/frontRoutes";

function Header(): ReactElement {
	
  useEffect(() => {
    function scrollAction() {
      const header = document.querySelector(".header");
      if (header) {
        header.classList.toggle("scroll", scrollY > 40);
      }
    }

    window.addEventListener("scroll", scrollAction);

    return () => {
      window.removeEventListener("scroll", scrollAction);
    };
  }, []);

  const matches = useMatches();
  const item = matches.filter((m) => (m.handle as CustomHandle)?.back);

  return (
    <header className="header">
      <div className="header__logo">
        <Link to={frontRoutes.navigator.home} className="header__link">
          Jacob Grönberg
        </Link>
      </div>

      {item.length > 0 ? (
        <Link
          to={(item[0]?.handle as CustomHandle)?.back?.link ?? "/"}
          className="header__back"
        >
          <svg
            width="32"
            height="15"
            viewBox="0 0 32 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M31.207 7.35355H1.20703" stroke="#101010" />
            <path
              d="M7.70703 0.353554L0.707031 7.35355L7.70703 14.3536"
              stroke="#101010"
            />
          </svg>
          {(item[0]?.handle as CustomHandle)?.back?.name}
        </Link>
      ) : null}
      <Menu />
    </header>
  );
}

export default Header;
