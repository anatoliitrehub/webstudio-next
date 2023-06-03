import Link from "next/link";
import { DataContext } from "./DataContext";
import { useContext } from "react";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const { mobileOpen, mobileIsOpen } = useContext(DataContext);
  const currentPath = usePathname();
  const stateClass =
    "menu-container " + "js-menu-container " + (mobileOpen ? "is-open" : "");
  return (
    <>
      <div className={stateClass} id="mobile-menu">
        <button
          onClick={() => mobileIsOpen(false)}
          className="menu-toggle js-close-menu"
        >
          <svg width="40" height="40">
            <use href="./images/icons.svg#mobmenu-close"></use>
          </svg>
        </button>

        <ul className="mobile__menu">
          <li>
            <Link
              href="/"
              className={`mobile__link ${currentPath == "/" && "current"}`}
              onClick={() => mobileIsOpen(false)}
            >
              Студія
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className={`mobile__link ${
                currentPath == "/portfolio" && "current"
              }`}
              onClick={() => mobileIsOpen(false)}
            >
              Портфоліо
            </Link>
          </li>
          <li>
            <Link
              href="/contacts"
              className={`mobile__link ${
                currentPath == "/contacts" && "current"
              }`}
              onClick={() => mobileIsOpen(false)}
            >
              Контакти
            </Link>
          </li>
        </ul>
        <div className="mobile__wrap">
          <ul className="mobile__contacts">
            <li>
              <a className="mobile__tel" href="tel:+380961111111">
                +38 096 111 11 11
              </a>
            </li>
            <li>
              <a className="mobile__mail" href="mailto:info@devstudio.com">
                info@devstudio.com
              </a>
            </li>
          </ul>
          <ul className="mobile__soc">
            <li>
              <a
                className="mobile__soclink"
                href="https://www.instagram.com/"
                title="лінка на інсту"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className="mobile__soclink"
                href="https://twitter.com/?lang=uk"
                title="лінка на твітер"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                className="mobile__soclink"
                href="https://www.facebook.com/"
                title="лінка на фейсбук"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                className="mobile__soclink"
                href="https://www.linkedin.com/"
                title="лінка на лінкедін"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>

      <script src="./js/modal.js"></script>
      <script src="./js/mobile-menu.js"></script>
    </>
  );
};

export default MobileMenu;
