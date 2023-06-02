import Link from "next/link";
// import icons from "../public/images/icons.svg";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__wrapper container">
          <nav className="header__nav">
            <Link className="header__logo" href="/" replace>
              <span className="header__logo--start">Web</span>
              <span className="header__logo--end">Studio</span>
            </Link>

            <div className="header__mobmenu js-open-menu">
              <button
                className="menu-toggle js-open-menu"
                aria-expanded="false"
                aria-controls="mobile-menu"
              >
                <svg className="mobmenu__open">
                  <use href="../public/images/icons.svg#icon-menu"></use>
                </svg>
              </button>
            </div>

            <ul className="header__pages">
              <li>
                <Link href="/" className="header__sheet--current">
                  Студія
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="header__sheet">
                  Портфоліо
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="header__sheet">
                  Контакти
                </Link>
              </li>
            </ul>
          </nav>
          <ul className="header__contacts">
            <li>
              <a className="header__mail" href="mailto:info@devstudio.com">
                <svg className="header__icomail">
                  <use href="../public/images/icons.svg#envelope"></use>
                </svg>
                info@devstudio.com
              </a>
            </li>
            <li>
              <a className="header__tel" href="tel:+380961111111">
                <svg className="header__icotel">
                  <use href="/images/icons.svg#smartphone"></use>
                </svg>
                +38 096 111 11 11
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* <header className="container">
      Header
      <Link href="/" index>
        Studio
      </Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/contacts">Contacts</Link>
    </header> */}
    </>
  );
};
export { Header };
