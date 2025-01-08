import css from "./Auth.module.css";
import CloseIcon from "../../icons/close.svg";
import CupcakeIcon from "../../icons/cupcake.svg";
import CookieIcon from "../../icons/cookie.svg";
import { Link } from "react-router-dom";

const Auth = ({ setIsOpen }) => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <button
          className={css["auth__close-btn"]}
          onClick={() => setIsOpen(false)}
        >
          <img src={CloseIcon} alt="Кнопка закриття" />
        </button>
        <h2 className={css.auth__title}>Реєстрація</h2>
        <ul className={css.auth__list}>
          <li className={css.auth__item}>
            <Link>
              <img
                className={css.auth__img}
                src={CookieIcon}
                alt="cookie icon"
              />
              <div className={css.auth__box}>
                <h3 className={css.auth__subtitle}>Покупець</h3>
                <p className={css.auth__text}>
                  Хочу купувати, дарувати та їсти
                </p>
              </div>
            </Link>
          </li>
          <li className={css.auth__item}>
            <Link to="/confectioner/login">
              <img
                className={css.auth__img}
                src={CupcakeIcon}
                alt="cupcake icon"
              />
              <div className={css.auth__box}>
                <h3 className={css.auth__subtitle}>Кондитер</h3>
                <p className={css.auth__text}>
                  Хочу випікати, прикрашати та продавати
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Auth;
