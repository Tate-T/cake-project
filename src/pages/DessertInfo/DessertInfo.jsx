import SearchForm from "../../components/SearchForm/SearchForm";
import css from "./DessertInfo.module.css";
import Container from "../../components/Container/Container";

const DessertInfo = () => {
  return (
    <>
      {/* <HeaderComp></HeaderComp> */}

      <Container>
        <SearchForm placeholder="Шоколадний торт з квітами" />
        <div className={css.boxinfo__cake__full}>
          <ul className={css.imgInfo__list}>
            <button className={css.cake__img__button} type="button">
              <svg
                width="12.000000"
                height="7.410156"
                viewBox="0 0 12 7.41016"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Vector"
                  d="M10.59 7.41L6 2.83L1.41 7.41L0 6L6 0L12 6L10.59 7.41Z"
                  fill="#43607C"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
              </svg>
            </button>
            <li>
              <img
                className={css.info__imgS}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLL4fFJ89AKwQvC2IumQE8Ywqij2hMgVRVLw&s"
                alt="1"
              ></img>
            </li>
            <li>
              <img
                className={css.info__imgS}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLL4fFJ89AKwQvC2IumQE8Ywqij2hMgVRVLw&s"
                alt="2"
              ></img>
            </li>
            <li>
              <img
                className={css.info__imgS}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLL4fFJ89AKwQvC2IumQE8Ywqij2hMgVRVLw&s"
                alt="3"
              ></img>
            </li>
            <li>
              <img
                className={css.info__imgS}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLL4fFJ89AKwQvC2IumQE8Ywqij2hMgVRVLw&s"
                alt="4"
              ></img>
            </li>
            <button type="button">
              <svg
                width="12.000000"
                height="7.410156"
                viewBox="0 0 12 7.41016"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Vector"
                  d="M10.59 0L6 4.58L1.41 0L0 1.41L6 7.41L12 1.41L10.59 0Z"
                  fill="#43607C"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
              </svg>
            </button>
          </ul>

          <div className={css.box__info__cake}>
            <img
              className={css.info__imgB}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLL4fFJ89AKwQvC2IumQE8Ywqij2hMgVRVLw&s"
              alt="2"
            ></img>

            <div className={css.BoxInfo__text__Cake}>
              <ul className={css.button__listCake}>
                <li>
                  <button className={css.loading__btn} type="button">
                    Для дівчат
                  </button>
                </li>
                <li>
                  <button className={css.loading__btn} type="button">
                    На день народження
                  </button>
                </li>
                <li>
                  <button className={css.loading__btn} type="button">
                    Класичні рецепти
                  </button>
                </li>
              </ul>
              <h2 className={css.title__cake}>Торт “Червоний оксамит”</h2>
              <h2 className={css.priceText__cake}>670 грн</h2>
              <p className={css.text__cake}>
                2 кг
                <span></span>
                Начинка: червоний оксамит
                <span></span>
                Прикраси з мастики
              </p>

              <p className={css.text__cake}>
                {" "}
                Цей торт особливо актуальний до Дня святого Валентина. Ви тільки
                подивіться, який він пристрасний!) І смачний звичайно. І з
                приготуванням впорається будь-хто! Загалом все, як ми любимо!
                Тому цей «Червоний оксамит» до приготування обов'язковий. Щоб
                отримати такий насичений червоний колір, використовуйте або сухі
                індійські барвники (Roha), або гелевий Americolor Red Red.
              </p>
              <ul className={css.button__listCake}>
                <li>
                  <button className={css.button__cake} type="button">
                    Обрати параметри
                  </button>
                </li>
                <li>
                  <button className={css.button__cake} type="button">
                    Переглянути контакти
                  </button>
                </li>
                <li>
                  <button type="button" className={css.loading__btn}>
                    <svg
                      width="20.000000"
                      height="18.349609"
                      viewBox="0 0 20 18.3496"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                    >
                      <desc>Created with Pixso.</desc>
                      <defs />
                      <path
                        id="Vector"
                        d="M8.58 0.88C7.66 0.32 6.59 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.35 8.55 17.02L10 18.34L11.45 17.03C16.6 12.35 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0C13.4 0 12.33 0.32 11.41 0.88C10.88 1.2 10.4 1.61 10 2.08C9.59 1.61 9.11 1.2 8.58 0.88ZM10 15.65L9.89 15.55L9.89 15.54L9.88 15.53Q8.62 14.4 8.04 13.86Q7.1 12.99 6.42 12.34Q4.81 10.79 3.88 9.66Q2.89 8.44 2.43 7.42Q2 6.44 2 5.5Q2 4.95 2.15 4.44Q2.2 4.27 2.27 4.11Q2.41 3.77 2.6 3.49Q2.78 3.23 3 3Q3.23 2.78 3.49 2.6Q3.77 2.41 4.11 2.27Q4.27 2.2 4.44 2.15Q4.95 2 5.5 2Q5.73 2 5.96 2.02Q6.56 2.1 7.14 2.37Q7.68 2.63 8.11 3.01Q8.3 3.18 8.47 3.38L10 5.17L11.52 3.38Q11.69 3.18 11.88 3.01Q12.31 2.63 12.85 2.37Q13.43 2.1 14.03 2.02Q14.26 2 14.5 2Q15.04 2 15.55 2.15Q15.72 2.2 15.88 2.27Q16.22 2.41 16.5 2.6Q16.76 2.78 16.99 3Q17.21 3.23 17.39 3.49Q17.58 3.77 17.72 4.11Q17.79 4.27 17.84 4.44Q18 4.95 18 5.5Q18 6.44 17.56 7.41Q17.11 8.43 16.11 9.65Q15.19 10.78 13.59 12.33Q12.91 12.98 11.97 13.85Q11.39 14.38 10.14 15.52L10.13 15.53L10.12 15.53L10.12 15.53L10.12 15.54L10.12 15.54L10.11 15.54L10.11 15.54L10.11 15.54L10.11 15.55L10.11 15.55L10.11 15.55L10.1 15.55L10.1 15.55L10.1 15.56L10 15.65Z"
                        fill="#A63A50"
                        fill-opacity="1.000000"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* <Footerr></Footerr> */}
    </>
  );
};

export default DessertInfo;
