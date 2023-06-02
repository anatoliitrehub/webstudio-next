const MobileMenu = () => {
  return (
    <>
      <div className="menu-container js-menu-container" id="mobile-menu">
        <button className="menu-toggle js-close-menu">
          <svg width="40" height="40">
            <use href="./images/icons.svg#mobmenu-close"></use>
          </svg>
        </button>

        <ul className="mobile__menu">
          <li>
            <a href="./index.html" className="mobile__link current">
              Студія
            </a>
          </li>
          <li>
            <a href="./portfolio.html" className="mobile__link">
              Портфоліо
            </a>
          </li>
          <li>
            <a href="./contacts.html" className="mobile__link">
              Контакти
            </a>
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
