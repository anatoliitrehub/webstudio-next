const Clients = () => {
  return (
    <section className="clients">
      <div className="container">
        <h2 className="clients__title">Постійні клієнти</h2>
        <ul className="clients__list">
          <li className="clients__part">
            <a className="clients__item" href="#" title="клієнт номер 1">
              <svg className="clients__ico">
                <use href="./images/icons.svg#group1"></use>
              </svg>
            </a>
          </li>
          <li className="clients__part">
            <a className="clients__item" href="#" title="клієнт номер 2">
              <svg className="clients__ico">
                <use href="./images/icons.svg#group2"></use>
              </svg>
            </a>
          </li>
          <li className="clients__part">
            <a className="clients__item" href="#" title="клієнт номер 3">
              <svg className="clients__ico">
                <use href="./images/icons.svg#group3"></use>
              </svg>
            </a>
          </li>
          <li className="clients__part">
            <a className="clients__item" href="#" title="клієнт номер 4">
              <svg className="clients__ico">
                <use href="./images/icons.svg#group4"></use>
              </svg>
            </a>
          </li>
          <li className="clients__part">
            <a className="clients__item" href="#" title="клієнт номер 5">
              <svg className="clients__ico">
                <use href="./images/icons.svg#group5"></use>
              </svg>
            </a>
          </li>
          <li className="clients__part">
            <a className="clients__item" href="#" title="клієнт номер 6">
              <svg className="clients__ico">
                <use href="./images/icons.svg#group6"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Clients;
