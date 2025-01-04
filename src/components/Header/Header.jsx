import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className={styles.headerBox}>
          <Link to="/" className={styles.headerLogo}>
            MyCake
          </Link>
          <button type="button" className={styles.headerCountryBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_5879_12119)">
                <path
                  d="M12 2C8.13 2 5 5.13 5 9C5 10.74 5.5 12.37 6.41 13.84C7.36 15.38 8.61 16.7 9.57 18.24C10.04 18.99 10.38 19.69 10.74 20.5C11 21.05 11.21 22 12 22C12.79 22 13 21.05 13.25 20.5C13.62 19.69 13.95 18.99 14.42 18.24C15.38 16.71 16.63 15.39 17.58 13.84C18.5 12.37 19 10.74 19 9C19 5.13 15.87 2 12 2ZM12 11.75C10.62 11.75 9.5 10.63 9.5 9.25C9.5 7.87 10.62 6.75 12 6.75C13.38 6.75 14.5 7.87 14.5 9.25C14.5 10.63 13.38 11.75 12 11.75Z"
                  fill="#A63A50"
                />
              </g>
              <defs>
                <clipPath id="clip0_5879_12119">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className={styles.headerCountryText}>Вся Україна</p>
          </button>
          <nav className={styles.headerNav}>
            <ul className={styles.headerList}>
              <li className={styles.headerItem}>
                <Link to="/" className={styles.headerLink}>
                  Десерти
                </Link>
              </li>
              <li className={styles.headerItem}>
                <Link to="/" className={styles.headerLink}>
                  Кращі кондитери
                </Link>
              </li>
              <li className={styles.headerItem}>
                <Link to="/" className={styles.headerLink}>
                  Корисні статті
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.headerSystemBox}>
            <button type="button" className={styles.headerChatBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <g clip-path="url(#clip0_5879_12665)">
                  <path
                    d="M26.25 7.5H23.75V18.75H7.5V21.25C7.5 21.9375 8.0625 22.5 8.75 22.5H22.5L27.5 27.5V8.75C27.5 8.0625 26.9375 7.5 26.25 7.5ZM21.25 15V3.75C21.25 3.0625 20.6875 2.5 20 2.5H3.75C3.0625 2.5 2.5 3.0625 2.5 3.75V21.25L7.5 16.25H20C20.6875 16.25 21.25 15.6875 21.25 15Z"
                    fill="#43607C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5879_12665">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button type="button" className={styles.headerLoginBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <g clip-path="url(#clip0_5879_11818)">
                  <path
                    d="M15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.9 8.1 27.5 15 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 15 2.5ZM15 6.25C17.075 6.25 18.75 7.925 18.75 10C18.75 12.075 17.075 13.75 15 13.75C12.925 13.75 11.25 12.075 11.25 10C11.25 7.925 12.925 6.25 15 6.25ZM15 24C11.875 24 9.1125 22.4 7.5 19.975C7.5375 17.4875 12.5 16.125 15 16.125C17.4875 16.125 22.4625 17.4875 22.5 19.975C20.8875 22.4 18.125 24 15 24Z"
                    fill="#43607C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5879_11818">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className={styles.headerLoginText}>Увійти</p>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
