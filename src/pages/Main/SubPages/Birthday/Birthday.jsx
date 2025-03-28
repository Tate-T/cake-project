import styles from "../../Main.module.css";
import Container from "../../../../components/Container/Container";
import { useState, useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import Slider from "../../../../components/Slider/Slider";

const Birthday = () => {
  const [cakes, setCakes] = useState([]);
  const [cakesIsLoading, setCakesIsLoading] = useState(false);
  const [swiper, setSwiper] = useState(null);

  const handlePrev = () => {
    if (swiper) swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiper) swiper.slideNext();
  };

  useEffect(() => {
    setCakesIsLoading(true);
    fetch("https://6778f8a1482f42b62e90102f.mockapi.io/api/v1/data")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setCakes(data[0].cakes);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setCakesIsLoading(false);
      });
  }, []);

  return (
    <section className={styles.cakes}>
      {/* <Container> */}
      <div className={styles.cakesBox}>
        <h2 className={styles.cakesTitle}>Торти</h2>
        <div className={styles.cakesBtnsBox}>
          <button type="button" className={styles.cakesBtnSeeAll}>
            Переглянути всі
          </button>
          <button type="button" className={styles.cakesArrowBtn} onClick={handlePrev}>
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
          <button type="button" className={styles.cakesArrowBtn} onClick={handleNext}>
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
      </div>
      <div className={styles.cakesList}>
        <Slider setSwiperInstance={setSwiper}>
          {cakesIsLoading === true
            ? null
            : cakes.map((cake) => (
                <SwiperSlide key={cake.id}>
                  <img src={cake.src} alt={cake.name} />
                  <div className={styles.cakesCardBox}>
                    <h3 className={styles.cakesCardTitle}>{cake.price} грн</h3>
                    <p className={styles.cakesCardSubtitle}>{cake.name}</p>
                    <p className={styles.cakesCardDescription}>
                      {cake.quantityOfFillings} варіанти начинок
                    </p>
                  </div>
                </SwiperSlide>
              ))}
        </Slider>
      </div>
      {/* <ul className={styles.cakesList}>
          {cakesIsLoading === true
            ? null
            : cakes.map((cake) => (
                <li key={cake.id}>
                  <img src={cake.src} alt={cake.name} />
                  <div className={styles.cakesCardBox}>
                    <h3 className={styles.cakesCardTitle}>{cake.price} грн</h3>
                    <p className={styles.cakesCardSubtitle}>{cake.name}</p>
                    <p className={styles.cakesCardDescription}>
                      {cake.quantityOfFillings} варіанти начинок
                    </p>
                  </div>
                </li>
              ))}
        </ul> */}
      {/* </Container> */}
    </section>
  );
};

export default Birthday;
