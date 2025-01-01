const Main = () => {
  const [typeOfCakes, setTypeOfCakes] = useState([]);
  const [varietyOfProductsIsLoading, setVarietyOfProductsIsLoading] =
    useState(false);
  const [varietyOfProducts, setVarietyOfProducts] = useState([]);
  const [cakes, setCakes] = useState([]);
  const [cakesIsLoading, setCakesIsLoading] = useState(false);
  const [cupcakes, setCupcakes] = useState([]);
  const [cupcakesIsLoading, setCupcakesIsLoading] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/typesOfCakes`)
      .then((res) => res.json())
      .then((data) => {
        setTypeOfCakes(data);
      });
  }, []);

  useEffect(() => {
    setVarietyOfProductsIsLoading(true);
    fetch("http://localhost:3000/varietyOfProducts")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setVarietyOfProducts(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setVarietyOfProductsIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setCakesIsLoading(true);
    fetch("http://localhost:3000/cakes")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setCakes(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setCakesIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setCupcakesIsLoading(true);
    fetch("http://localhost:3000/cupcakes")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setCupcakes(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setCupcakesIsLoading(false);
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
              <ul className={styles.heroPopularSearchList}>
                {typeOfCakes.map((type) => (
                  <li className={styles.heroPopularSearchItem} key={type.id}>
                    <p className={styles.heroPopularSearchText}>{type.type}</p>
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
          {/* <Btn text="Переглянути всі"></Btn> */}
        </Container>
      </section>
      <section className={styles.cakes}>
        <Container>
          <div className={styles.cakesBox}>
            <h2 className={styles.cakesTitle}>Торти</h2>
            <div className={styles.cakesBtnsBox}>
              <button type="button" className={styles.cakesBtnSeeAll}>
                Переглянути всі
              </button>
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
          </div>
          <ul className={styles.cakesList}>
            {cakesIsLoading === true
              ? null
              : cakes.map((cake) => (
                  <li>
                    <img src={cake.src} alt={cake.name} />
                    <div className={styles.cakesCardBox}>
                      <h3 className={styles.cakesCardTitle}>
                        {cake.price} грн
                      </h3>
                      <p className={styles.cakesCardSubtitle}>{cake.name}</p>
                      <p className={styles.cakesCardDescription}>
                        {cake.quantityOfFillings} варіанти начинок
                      </p>
                    </div>
                  </li>
                ))}
          </ul>
        </Container>
      </section>
      <section className={styles.cakes}>
        <Container>
          <div className={styles.cakesBox}>
            <h2 className={styles.cakesTitle}>Капкейки</h2>
            <div className={styles.cakesBtnsBox}>
              <button type="button" className={styles.cakesBtnSeeAll}>
                Переглянути всі
              </button>
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
          </div>
          <ul className={styles.cakesList}>
            {cupcakesIsLoading === true
              ? null
              : cupcakes.map((cupcake) => (
                  <li>
                    <img src={cupcake.src} alt={cupcake.name} />
                    <div className={styles.cakesCardBox}>
                      <h3 className={styles.cakesCardTitle}>
                        {cupcake.price} грн
                      </h3>
                      <p className={styles.cakesCardSubtitle}>{cupcake.name}</p>
                      <p className={styles.cakesCardDescription}>
                        {cupcake.quantityOfFillings} варіанти начинок
                      </p>
                    </div>
                  </li>
                ))}
          </ul>
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
    </>
  );
};

export default Main;
