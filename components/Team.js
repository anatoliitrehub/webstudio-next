import Image from "next/image";
// import ihorMob from "../public/images/imgihor_mob.jpg";
// import ihorTabl from "../public/images/imgihor_tab.jpg";
// import ihorDesk from "../public/images/imgihor.jpg";
// import images from "../public/images/icons.svg";

const Team = () => {
  return (
    <section className="team">
      <div className="container">
        <h2 className="team__title">Наша команда</h2>
        <ul className="team__list">
          <li className="team__item">
            <picture>
              <source
                className="team__photo"
                srcSet="/images/imgihor_mob.jpg"
                media="(max-width: 767px)"
              />
              <source
                className="team__photo"
                srcSet="/images/imgihor_tab.jpg"
                media="(max-width: 1199px)"
              />
              <Image
                className="team__photo"
                src="/images/imgihor.jpg"
                alt="Ігор Дем'яненко"
                width="270"
                height="260"
              />
            </picture>

            <div className="team__member">
              <h3 className="team__name">Ігор Дем'яненко</h3>
              <p className="team__position">Product Designer</p>
              <ul className="team__soc">
                <li>
                  <a
                    className="soc__item--grey"
                    href="https://www.instagram.com/"
                    title="лінка на інсту"
                  >
                    <svg className="soc__link">
                      <use href="/images/icons.svg#instagram2"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="soc__item--grey"
                    href="https://twitter.com/?lang=uk"
                    title="лінка на твітер"
                  >
                    <svg className="soc__link">
                      <use href="/images/icons.svg#twitter1"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="soc__item--grey"
                    href="https://www.facebook.com/"
                    title="лінка на фейсбук"
                  >
                    <svg className="soc__link">
                      <use href="/images/icons.svg#facebook1"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="soc__item--grey"
                    href="https://www.linkedin.com/"
                    title="лінка на лінкедін"
                  >
                    <svg className="soc__link">
                      <use href="/images/icons.svg#linkedin1"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="team__item">
            <picture>
              <source
                className="team__photo"
                srcSet="/images/imgolha_mob.jpg"
                media="(max-width: 767px)"
              />
              <source
                className="team__photo"
                srcSet="/images/imgolha_tab.jpg"
                media="(max-width: 1199px)"
              />
              <Image
                className="team__photo"
                src="/images/imgolha.jpg"
                alt="Ольга Рєпіна"
                width={270}
                height={260}
              />
            </picture>

            <div className="team__member">
              <h3 className="team__name">Ольга Рєпіна</h3>
              <p className="team__position">Frontend Developer</p>
              <ul className="team__soc">
                <li>
                  <a
                    className="soc__item--grey"
                    href="https://www.instagram.com/"
                    title="лінка на інсту"
                  >
                    <svg className="soc__link">
                      <use href="/images/icons.svg#instagram2"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="soc__item--grey"
                    href="https://twitter.com/?lang=uk"
                    title="лінка на твітер"
                  >
                    <svg className="soc__link">
                      <use href="/images/icons.svg#twitter1"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="soc__item--grey"
                    href="https://www.facebook.com/"
                    title="лінка на фейсбук"
                  >
                    <svg className="soc__link">
                      <use href="/images/icons.svg#facebook1"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="soc__item--grey"
                    href="https://www.linkedin.com/"
                    title="лінка на лінкедін"
                  >
                    <svg className="soc__link">
                      <use href="/images/icons.svg#linkedin1"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="team__item">
            <picture>
              <source
                className="team__photo"
                srcSet="/images/imgmykola_mob.jpg"
                media="(max-width: 767px)"
              />
              <source
                className="team__photo"
                srcSet="/images/imgmykola_tab.jpg"
                media="(max-width: 1199px)"
              />
              <Image
                className="team__photo"
                src="/images/imgmykola.jpg"
                alt="Микола Тарасов"
                width={270}
                height={260}
              />
            </picture>

            <div className="team__member">
              <h3 className="team__name">Микола Тарасов</h3>
              <p className="team__position">Marketing</p>
              <ul className="team__soc">
                <li>
                  <a
                    className="soc__item--grey"
                    href="https://www.instagram.com/"
                    title="лінка на інсту"
                  >
                    <svg className="soc__link">
                      <use href="/images/icons.svg#instagram2"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="soc__item--grey"
                    href="https://twitter.com/?lang=uk"
                    title="лінка на твітер"
                  >
                    <svg className="soc__link">
                      <use href="/images/icons.svg#twitter1"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="soc__item--grey"
                    href="https://www.facebook.com/"
                    title="лінка на фейсбук"
                  >
                    <svg className="soc__link">
                      <use href="/images/icons.svg#facebook1"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="soc__item--grey"
                    href="https://www.linkedin.com/"
                    title="лінка на лінкедін"
                  >
                    <svg className="soc__link">
                      <use href="/images/icons.svg#linkedin1"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="team__item">
            <picture>
              <source
                className="team__photo"
                srcSet="/images/imgmykhailo_mob.jpg"
                media="(max-width: 767px)"
              />
              <source
                className="team__photo"
                srcSet="/images/imgmykhailo_tab.jpg"
                media="(max-width: 1199px)"
              />
              <Image
                className="team__photo"
                src="/images/imgmykhailo.jpg"
                alt="Михайло Єрмаков"
                width={270}
                height={294}
              />
            </picture>

            <div className="team__member">
              <h3 className="team__name">Михайло Єрмаков</h3>
              <p className="team__position">UI Designer</p>
              <ul className="team__soc">
                <li>
                  <a
                    className="soc__item--grey"
                    href="https://www.instagram.com/"
                    title="лінка на інсту"
                  >
                    <svg className="soc__link">
                      <use href="/images/icons.svg#instagram2"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="soc__item--grey"
                    href="https://twitter.com/?lang=uk"
                    title="лінка на твітер"
                  >
                    <svg className="soc__link">
                      <use href="/images/icons.svg#twitter1"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="soc__item--grey"
                    href="https://www.facebook.com/"
                    title="лінка на фейсбук"
                  >
                    <svg className="soc__link">
                      <use href="/images/icons.svg#facebook1"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="soc__item--grey"
                    href="https://www.linkedin.com/"
                    title="лінка на лінкедін"
                  >
                    <svg className="soc__link">
                      <use href="/images/icons.svg#linkedin1"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Team;
