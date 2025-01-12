import styles from "./Desserts.module.css";
import HeaderComp from "../../components/general-components/Header/Header.jsx";
import { Container } from "../../components/general-components/Container/Container.styled.js";
import { Logo } from "../../components/general-components/Logo/Logo.styled.js";
import Searchbar from "../../components/general-components/Searchbar/Searchbar.jsx";
import Chat from "../../imgs/chat.svg";
import Login from "../../imgs/login.svg";
import Position from "../../imgs/position.svg";
import Footerr from "../../components/general-components/Footer/Footer.jsx";
import ListState from "../../components/general-components/upFooterListState/ListState.jsx";
import ListTopPip from "../../components/general-components/upUpFooterListBestCondeters/ListBestCoditers.jsx";
import cakeImg1 from "../../imgs/cakes/cake-1.jpg";
import cakeImg2 from "../../imgs/cakes/cake-2.jpg";
import cakeImg3 from "../../imgs/cakes/cake-3.jpg";
import cakeImg4 from "../../imgs/cakes/cake-4.jpg";
import cakeImg5 from "../../imgs/cakes/cake-5.jpg";
import cupcakeImg1 from "../../imgs/cupcakes/cupcake-1.jpg";
import cupcakeImg2 from "../../imgs/cupcakes/cupcake-2.jpg";
import cupcakeImg3 from "../../imgs/cupcakes/cupcake-3.jpg";
import cupcakeImg4 from "../../imgs/cupcakes/cupcake-4.jpg";
import cupcakeImg5 from "../../imgs/cupcakes/cupcake-5.jpg";

// const LocationBtn = styled.button`
//   border-radius: 36px;
//   background-color: rgb(255, 242, 242);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 5px 20px 5px 20px;
//   margin-left: 30px;
// `;

// const HeaderList = styled.ul`
//   margin-left: auto;
//   margin-right: auto;
//   gap: 30px;
//   display: flex;
//   align-items: center;
// `;

// const HeaderLink = styled.a`
//   font-family: "Verdana";
//   color: rgb(1, 25, 54);
//   font-size: 18px;
//   font-weight: 400;
//   line-height: 120%;
// `;

// const HeaderLinkSpan = styled.a`
//   font-family: "Verdana";
//   color: rgb(0, 0, 0);
//   font-size: 18px;
//   font-weight: 400;
//   line-height: 120%;
// `;

// const HeaderBlock = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const ChatIcon = styled.img`
//   margin-right: 30px;
//   margin-left: auto;
//   width: 25px;
// `;
// ChatIcon.defaultProps = {
//   src: Chat,
// };

// const LoginIcon = styled.img`
//   width: 25px;
//   margin-right: 12.5px;
// `;
// LoginIcon.defaultProps = {
//   src: Login,
// };

// const PositionIcon = styled.img`
//   width: 14px;
//   margin-right: 15px;
// `;
// PositionIcon.defaultProps = {
//   src: Position,
// };
// const HeaderWrapper = styled.div`
//   display: flex;
//   flex-wrap: nowrap;
//   align-items: center;
// `;

// const SectionDesserts = styled.section`
//   display: flex;
// `;

// const SearchDessertsBtn = styled.button`
//   height: 50px;
//   border-radius: 0px 5px 5px 0px;
//   border: 1px solid var(--CTA-yellow, #fdad6d);
//   padding: 5px 30px;
//   background-color: ${(props) => props.theme.colors.buttonsColor};
//   font-family: Verdana;
//   font-size: 18px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 120%; /* 21.6px */
// `;

// const SearchDessertsInput = styled.input`
//   height: 50px;
//   width: 88%;
//   padding: 0px 20px;
//   border-radius: 5px 0px 0px 5px;
//   border: 1px solid var(--Border, #dfdfdf);
//   color: var(--Placeholder, #c2c2c2);
//   font-family: Verdana;
//   // display: flex;
//   font-style: normal;
//   font-weight: 400;
//   font-size: 18px;
//   line-height: 24px;
// `;

// const DessertsListBox = styled.div`
//   margin-right: 20px;
//   width: 242px;
//   margin-top: 40px;
// `;

// const DessertsBox = styled.div`
//   margin-top: 40px;
// `;

// const SearchDessertsBox = styled.div`
//   margin-top: 40px;
//   // border: 1px solid var(--Border, #DFDFDF);
// `;

// const DessertsRecipList = styled.ul`
//   margin-top: 30px;
//   display: flex;
//   flex-wrap: wrap;

//   width: 242px;
// `;

// const DessertsListItem = styled.li`
//   display: flex;
//   width: 252px;
//   align-items: center;
//   gap: 10px;
//   list-style: none;
//   margin-top: 14px;
// `;
// const DessertsInput = styled.input`
//   width: 30px;
//   height: 20px;
//   color: #43607c;
// `;

// const DessertsText = styled.p`
//   color: var(--Black, #011936);
//   font-family: Verdana;
//   font-size: ${(props) => props.theme.text};
//   font-weight: 400;
//   line-height: 120%;
// `;

// const DessertsTitle = styled.h2`
//   width: 201px;
//   height: 60px;
//   color: var(--Black, #011936);
//   font-family: "Yeseva One";
//   font-size: 24px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 30px; /* 125% */
// `;

// const DessertsListTitle = styled.h2`
//   color: var(--Black, #011936);
//   font-family: Verdana;
//   font-size: 18px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 24px; /* 133.333% */
// `;

// const BtnLoading = styled.button`
//   margin-top: 30px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: transparent;
//   color: var(--CTA-blue, #43607c);
//   font-family: Inter;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 120%; /* 19.2px */
//   border-radius: 49px;
//   border: 1px solid var(--CTA-blue-text, #84a6c2);
//   padding: 5px 10px;
//   width: 100%;
// `;

// const LoadingList = styled.ul`
//   justify-content: center;
//   align-items: center;
//   width: 435px;
//   gap: 10px;
//   margin-right: auto;
//   margin-left: auto;
//   margin-top: 40px;
//   display: flex;
//   flex-wrap: wrap;
// `;

// const LoadingBtn = styled.button`
//   border-radius: 50px;
//   background-color: transparent;
//   width: 50px;
//   height: 50px;
//   font-family: Inter;
//   font-size: 18px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 120%;
//   border-radius: 50px;
//   border: 1px solid var(--CTA-yellow-border, #ffe2ca);
//   background: var(--White, #fff);

//   &:hover {
//     color: var(--Black, #011936);
//     font-weight: 700;
//     background-color: #fdad6d;
//   }
// `;

// const DessertsList = styled.ul`
//   margin-top: 30px;
//   display: flex;
//   flex-wrap: wrap;
// `;

// const DessertsItem = styled.li`
//   gap: 10px;
//   margin-left: 20px;
//   margin-bottom: 20px;
//   width: 280px;
//   flex-direction: column;
//   border-radius: 5px;
//   background: var(--White, #fff);
//   box-shadow: 0px 2px 5px 0px rgba(67, 96, 124, 0.15);
// `;

// const DessertsImg = styled.img`
//   width: 280px;
//   height: 300px;
// `;

// const DessertsTextCurrency = styled.h2`
//   margin-left: 15px;

//   margin-top: 15px;
//   margin-bottom: 10px;
//   color: var(--CTA-red, #a63a50);
//   font-family: Verdana;
//   font-size: 18px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 120%; /* 21.6px */
// `;

// const DessertsTextDescription = styled.p`
//   margin-left: 15px;

//   width: 250px;
//   color: var(--Black, #011936);
//   font-family: Verdana;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 20px;
// `;

// const DessertsTextNumber = styled.p`
//   margin-left: 15px;
//   margin-bottom: 15px;
//   margin-top: 5px;
//   width: 142px;
//   color: var(--CTA-blue-text, #84a6c2);
//   font-family: Verdana;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 120%; /* 16.8px */
// `;

// const DessertsListBtn = styled.ul`
//   gap: 10px;
//   margin-left: 20px;
//   display: flex;
//   flex-wrap: wrap;
// `;
// const DessertsListItemBtn = styled.li`
//   display: flex;
//   flex-wrap: wrap;
// `;

// const DessertsBtn = styled.button`
//   padding: 5px 20px;
//   color: var(--CTA-red-text, #8e4a4e);
//   font-family: Verdana;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 120%; /* 19.2px */
//   border-radius: 40px;
//   background: var(--Pink-BG, #fff2f2);
// `;

export const Desserts = () => {
  return (
    <>
      <HeaderComp />
      <Container>
        <SectionDesserts>
          <Searchbar placeholder="Шоколадний торт з квітами" />
          <section className={styles.sectionDesserts}>
            <div className={styles.dessertsListBox}>
              <h2 className={styles.dessertsTitle}>Шукаєш щось особливе?</h2>
              <ul className={styles.dessertsRecipList}>
                <h2 className={styles.dessertsListTitle}>Тематика</h2>
                {[
                  "Для дівчат",
                  "Для чоловіків",
                  "Патріотичні",
                  "Весільні",
                  "До дня народження",
                  "Корпоративні",
                ].map((text, index) => (
                  <li
                    key={`theme-${index}`}
                    className={styles.dessertsListItem}
                  >
                    <input type="checkbox" className={styles.dessertsInput} />
                    <p className={styles.dessertsText}>{text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.dessertsBox}>
              <ul className={styles.dessertsListBtn}>
                {[
                  "Капкейки",
                  "Торти",
                  "Кейк-попси",
                  "Макаруни",
                  "Печиво",
                  "Цукерки",
                ].map((btnText, index) => (
                  <li
                    key={`btn-${index}`}
                    className={styles.dessertsListItemBtn}
                  >
                    <button className={styles.dessertsBtn}>{btnText}</button>
                  </li>
                ))}
              </ul>
              <ul className={styles.dessertsList}>
                {[
                  {
                    src: cakeImg2,
                    price: "520 грн",
                    description:
                      "Весільний триярусний торт з фруктами та квітами",
                    options: "4 варіанти начинок",
                  },
                ].map((item, index) => (
                  <li key={`dessert-${index}`} className={styles.dessertsItem}>
                    <img
                      src={item.src}
                      alt="dessert"
                      className={styles.dessertsImg}
                    />
                    <h2 className={styles.dessertsTextCurrency}>
                      {item.price}
                    </h2>
                    <p className={styles.dessertsTextDescription}>
                      {item.description}
                    </p>
                    <p className={styles.dessertsTextNumber}>{item.options}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <BtnLoading type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 26"
              fill="none"
            >
              <g clip-path="url(#clip0_5801_95)">
                <path
                  d="M14.5833 13C14.5833 11.8542 13.6458 10.9167 12.5 10.9167C11.3542 10.9167 10.4167 11.8542 10.4167 13C10.4167 14.1458 11.3542 15.0833 12.5 15.0833C13.6458 15.0833 14.5833 14.1458 14.5833 13ZM12.5 3.625C7.32292 3.625 3.125 7.82292 3.125 13H0L4.16667 17.1667L8.33333 13H5.20833C5.20833 8.96875 8.46875 5.70833 12.5 5.70833C16.5312 5.70833 19.7917 8.96875 19.7917 13C19.7917 17.0312 16.5312 20.2917 12.5 20.2917C10.9271 20.2917 9.46875 19.7812 8.27083 18.9375L6.79167 20.4375C8.375 21.6458 10.3542 22.375 12.5 22.375C17.6771 22.375 21.875 18.1771 21.875 13C21.875 7.82292 17.6771 3.625 12.5 3.625Z"
                  fill="#43607C"
                />
              </g>
              <defs>
                <clipPath id="clip0_5801_95">
                  <rect
                    width="25"
                    height="25"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            Більше смаколиків
          </BtnLoading>
          <DessertsBox>
            <LoadingList>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_5801_7076)">
                  <path
                    d="M15.4102 16.59L10.8302 12L15.4102 7.41L14.0002 6L8.00016 12L14.0002 18L15.4102 16.59Z"
                    fill="#011936"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5801_7076">
                    <rect
                      width="24"
                      height="24"
                      rx="12"
                      transform="matrix(-1 0 0 1 24 0)"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
              <li>
                <LoadingBtn type="button">1</LoadingBtn>
              </li>
              <li>
                <LoadingBtn type="button">2</LoadingBtn>
              </li>
              <li>
                <LoadingBtn type="button">3</LoadingBtn>
              </li>
              <li>
                <LoadingBtn type="button">4</LoadingBtn>
              </li>
              <li>...</li>
              <li>
                <LoadingBtn type="button">15</LoadingBtn>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_5801_7093)">
                  <path
                    d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z"
                    fill="#011936"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5801_7093">
                    <rect width="24" height="24" rx="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </LoadingList>
          </DessertsBox>
        </SectionDesserts>
      </Container>
      <Container>
        <ListTopPip></ListTopPip>
      </Container>
      <Container>
        <ListState></ListState>
      </Container>
      <Footerr></Footerr>
    </>
  );
};
