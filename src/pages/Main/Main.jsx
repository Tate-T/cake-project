import { useState, useEffect } from "react";
import styles from "./Main.module.css";
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import heroAdditionalImg1 from "../../imgs/hero-additional/hero-additional-1.png";
import heroAdditionalImg2 from "../../imgs/hero-additional/hero-additional-2.png";
import heroAdditionalImg3 from "../../imgs/hero-additional/hero-additional-3.png";
import { NavLink, Outlet } from "react-router-dom";
import Slider from "../../components/Slider/Slider";

// footer
import Footer from "../../components/Footer/Footer";
import ListState from "../../components/StateConfectioners/StateeConfectioners";
import ListTopPip from "../../components/BestConfectioners/BestConfectioners";

const Main = () => {
  const [typeOfCakes, setTypeOfCakes] = useState([]);
  const [varietyOfProductsIsLoading, setVarietyOfProductsIsLoading] =
    useState(false);
  const [varietyOfProducts, setVarietyOfProducts] = useState([]);

  useEffect(() => {
    setVarietyOfProductsIsLoading(true);
    fetch(`https://6778f8a1482f42b62e90102f.mockapi.io/api/v1/data`)
      .then((res) => res.json())
      .then((data) => {
        setTypeOfCakes(data[0].typesOfCakes);
        setVarietyOfProducts(data[0].varietyOfProducts);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setVarietyOfProductsIsLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroBox}>
            <div>
              <h1 className={styles.heroTitle}>Пошукаємо щось смачненького?</h1>
              <p className={styles.heroDescription}>
                Ми об’єднали кондитерів з різних міст, щоб необхідні смаколики
                можна було замовити ще легше
              </p>
              <div className={styles.heroSearchInputBox}>
                <input className={styles.heroSearchInput} />
                <button type="button" className={styles.heroSearchBtn}>
                  Шукати
                </button>
              </div>
              <div>
                <div className={styles.heroArrowsBox}>
                  <button type="button" className={styles.cakesArrowBtn}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_5811_9696)">
                        <path
                          d="M15.4102 16.59L10.8302 12L15.4102 7.41L14.0002 6L8.00016 12L14.0002 18L15.4102 16.59Z"
                          fill="#43607C"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_5811_9696">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="matrix(-1 0 0 1 24 0)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <button type="button" className={styles.cakesArrowBtn}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_5811_8201)">
                        <path
                          d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z"
                          fill="#43607C"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_5811_8201">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
                <ul className={styles.heroProductsList}>
                  {varietyOfProductsIsLoading === true
                    ? null
                    : varietyOfProducts.map((product) => (
                        <li key={product.id}>
                          <img src={product.src} alt={product.name} />
                          <h2>{product.name}</h2>
                        </li>
                      ))}
                </ul>
              </div>
              <ul className={styles.heroPopularSearchList}>
                {typeOfCakes.map((type) => (
                  <li className={styles.heroPopularSearchItem} key={type.id}>
                    <NavLink
                      to={type.href}
                      className={styles.heroPopularSearchText}
                    >
                      {type.type}
                    </NavLink>
                  </li>
                ))}
                <li className={styles.heroOtherVariantsItem}>
                  <p>Інші варіанти</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_5817_8807)">
                      <path
                        d="M6.175 7.1582L10 10.9749L13.825 7.1582L15 8.3332L10 13.3332L5 8.3332L6.175 7.1582Z"
                        fill="#8E4A4E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5817_8807">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="matrix(0 1 -1 0 20 0)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
              </ul>
            </div>

            <div className={styles.heroImgsBox}>
              <div>
                <img
                  src={heroAdditionalImg1}
                  className={styles.heroAdditionalSmallImg}
                  alt="heroAdditional1"
                />
                <img
                  src={heroAdditionalImg2}
                  className={styles.heroAdditionalSmallImg}
                  alt="heroAdditional2"
                />
              </div>
              <img
                src={heroAdditionalImg3}
                className={styles.heroAdditionalBigImg}
                alt="heroAdditional3"
              />
            </div>
          </div>
          <Outlet />

          {/* <Btn text="Переглянути всі"></Btn> */}
        </Container>
      </section>

      <section className={styles.moreClients}>
        <Container>
          <h2 className={styles.moreClientsTitle}>
            Обожнюєш свою роботу і хочеш більше клієнтів?
          </h2>
          <h3 className={styles.moreClientsDescription}>
            Реєструйся як кондитер, викладай фото своїх смаколиків та отримуй
            замовлення через MyCake
          </h3>
          <button type="button" className={styles.moreClientsBtn}>
            Зареєструватися як кондитер
          </button>
        </Container>
      </section>

      {/* <Container> */}
      <ListState />
      {/* </Container> */}
      <Container>
        <ListTopPip></ListTopPip>
      </Container>

      <Footer></Footer>
    </>
  );
};

export default Main;
