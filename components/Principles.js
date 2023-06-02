const Principles = () => {
  return (
    <section className="principles">
      <div className="container">
        <h2 className="visually-hidden">peculiarities</h2>
        <ul className="principles__wrapper">
          <li className="principles__item">
            <div className="principles__part">
              <svg className="principles__icon">
                <use href="./images/icons.svg#antenna1"></use>
              </svg>
            </div>
            <h3 className="principles__title">УВАГА ДО ДЕТАЛЕЙ</h3>
            <p className="principles__description">
              Ідейні міркування, і навіть початок повсякденної роботи з
              формування позиції.
            </p>
          </li>
          <li className="principles__item">
            <div className="principles__part">
              <svg className="principles__icon">
                <use href="./images/icons.svg#clock1"></use>
              </svg>
            </div>
            <h3 className="principles__title">ПУНКТУАЛЬНІСТЬ</h3>
            <p className="principles__description">
              Завдання організації, особливо рамки і місце навчання кадрів тягне
              у себе.
            </p>
          </li>
          <li className="principles__item">
            <div className="principles__part">
              <svg className="principles__icon">
                <use href="./images/icons.svg#diagram1"></use>
              </svg>
            </div>
            <h3 className="principles__title">ПЛАНУВАННЯ</h3>
            <p className="principles__description">
              Так само консультація з широким активом значною мірою зумовлює.
            </p>
          </li>
          <li className="principles__item">
            <div className="principles__part">
              <svg className="principles__icon">
                <use href="./images/icons.svg#astronaut1"></use>
              </svg>
            </div>
            <h3 className="principles__title">СУЧАСНІ ТЕХНОЛОГІЇ</h3>
            <p className="principles__description">
              Значимість цих проблем настільки очевидна, що реалізація планових
              завдань.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Principles;
