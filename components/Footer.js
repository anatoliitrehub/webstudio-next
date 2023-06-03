import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contacts container">
        <div className="footer__address">
          <Link href="/" className="footer__logo">
            <span className="footer__logo--start">Web</span>
            <span className="footer__logo--end">Studio</span>
          </Link>

          <address className="address">
            <ul className="address__list">
              <li>
                <a
                  href="https://www.google.com/maps/d/embed?mid=1e3wCGSf0WLV-87OjVt8506W0S_s&hl=en&ehbc=2E312F"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="відкриється у новому віконці"
                  className="address__map"
                >
                  м. Київ, пр-т Лесі Українки, 26
                </a>
              </li>
              <li>
                <a href="mailto:info@devstudio.com" className="address__call">
                  info@devstudio.com
                </a>
              </li>
              <li>
                <a href="tel:+380961111111" className="address__call">
                  +38 096 111 11 11
                </a>
              </li>
            </ul>
          </address>
        </div>

        <div className="footer__signup">
          <p className="signup__title">приєднуйтесь</p>
          <ul className="signup__soc">
            <li>
              <a
                className="soc__item--white"
                href="https://www.instagram.com/"
                title="лінка на інсту"
              >
                <svg className="soc__link">
                  <use href="./images/icons.svg#instagram2"></use>
                </svg>
              </a>
            </li>

            <li>
              <a
                className="soc__item--white"
                href="https://twitter.com/?lang=uk"
                title="лінка на твітер"
              >
                <svg className="soc__link">
                  <use href="./images/icons.svg#twitter1"></use>
                </svg>
              </a>
            </li>
            <li>
              <a
                className="soc__item--white"
                href="https://www.facebook.com/"
                title="лінка на фейсбук"
              >
                <svg className="soc__link">
                  <use href="./images/icons.svg#facebook1"></use>
                </svg>
              </a>
            </li>
            <li>
              <a
                className="soc__item--white"
                href="https://www.linkedin.com/"
                title="лінка на лінкедін"
              >
                <svg className="soc__link">
                  <use href="./images/icons.svg#linkedin1"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="subscribe">
          <p className="subscribe__title">Підпишіться на розсилку</p>
          <form className="subscribe__form">
            <input
              type="email"
              name="email"
              className="subscribe__input"
              placeholder="E-mail"
            />
            <button type="submit" className="subscribe__btn">
              Підписатися
              <svg className="subscribe__icon">
                <use href="./images/icons.svg#icon-send"></use>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};
export { Footer };
