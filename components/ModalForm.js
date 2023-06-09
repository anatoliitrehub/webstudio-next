import { DataContext } from "./DataContext";
import { useContext } from "react";

const ModalForm = () => {
  const { modalOpen, modalIsOpen } = useContext(DataContext);
  const stateWindow = "backdrop " + (!modalOpen ? "is-hidden" : "");

  const modalClose = () => {
    modalIsOpen(false);
  };
  return (
    <div className={stateWindow} data-modal>
      <div className="modal">
        <button
          onClick={() => modalClose()}
          type="button"
          className="modal__close--btn"
          data-modal-close
        >
          <svg className="modal__close--icon">
            <use href="/images/icons.svg#icon-close"></use>
          </svg>
        </button>
        <p className="modal__title">Залиште свої дані, ми вам передзвонимо</p>
        <form className="modalform" onSubmit={modalClose}>
          <div className="formfield">
            <label className="formfield__name" htmlFor="user-name">
              Ім'я
            </label>
            <div className="formfield__wrap">
              <input
                type="text"
                name="user-name"
                className="formfield__input"
                id="user-name"
              />
              <svg className="formfield__icon" width="18" height="18">
                <use href="/images/icons.svg#person-black"></use>
              </svg>
            </div>
          </div>

          <div className="formfield">
            <label className="formfield__name" htmlFor="user-tel">
              Телефон
            </label>
            <div className="formfield__wrap">
              <input
                type="tel"
                name="user-tel"
                className="formfield__input"
                id="user-tel"
              />
              <svg className="formfield__icon" width="18" height="18">
                <use href="/images/icons.svg#phone-black"></use>
              </svg>
            </div>
          </div>

          <div className="formfield">
            <label className="formfield__name" htmlFor="user-email">
              Пошта
            </label>
            <div className="formfield__wrap">
              <input
                type="email"
                name="user-email"
                className="formfield__input"
                id="user-email"
              />
              <svg className="formfield__icon" width="18" height="18">
                <use href="/images/icons.svg#email-black"></use>
              </svg>
            </div>
          </div>

          <div className="formfield">
            <label className="formfield__name" htmlFor="user-comment">
              Коментар
            </label>
            <textarea
              name="comment"
              id="user-comment"
              className="formfield__comment"
              placeholder="Введіть текст"
            ></textarea>
          </div>

          <div className="formfield">
            <input
              type="checkbox"
              name="agreement"
              className="formfield__checkbox visually-hidden"
              id="agreement"
            />
            <label htmlFor="agreement" className="formfield__checktext">
              <span className="formfield__checkdouble">
                <svg className="formfield__checkicon" width="16" height="15">
                  <use href="/images/icons.svg#icon-check"></use>
                </svg>
              </span>
              Погоджуюся з розсилкою та приймаю
              <a href="#" className="formfield__link">
                Умови договору
              </a>
            </label>
          </div>

          <button type="submit" className="modalform__submit">
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
