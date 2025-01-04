import css from "./Articles.module.css";
import Container from "../../components/Container/Container.jsx";
import backup from "../../imgs/svg/backup.svg";
import data from "../../articles.json";
import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import { nanoid } from "nanoid";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
// const Filter = styled.div``;

// const Card = styled.li`

// `;

// const List = styled.ul`

// `;

// const LoadMore = styled.button`

// `;

// const Pagination = styled.ul`

// `;

// const LeftArrow = styled.div`

// `;
// const RightArrow = styled.div`

// `;

// const Checkbox = styled.input`

// `;

export default function Articles() {
  const [list, setList] = useState(
    data.map((card) => {
      return (
        <li className={css.articles__item} key={nanoid()}>
          <img src={card.url} alt="bakery" />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <Link to={`/articles/${nanoid()}`}>
            <button>Читати далі</button>
          </Link>
        </li>
      );
    })
  );
  return (
    <>
      <section>
        <Header />
        <Container>
          <SearchForm placeholder={"Як приготувати чізкейк"} />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              paddingLeft: "20px",
              boxSizing: "border-box",
            }}
          >
            <div className={css.articles__filter}>
              <h2>Цікаві та корисні статті</h2>
              <ul>
                Тематика
                <li key={nanoid()}>
                  <input className={css.articles__checkbox} type="checkbox" />
                  Рецепти
                </li>
                <li key={nanoid()}>
                  <input className={css.articles__checkbox} type="checkbox" />
                  Корисні поради на кухні
                </li>
                <li key={nanoid()}>
                  <input className={css.articles__checkbox} type="checkbox" />
                  Підбірки
                </li>
                <li key={nanoid()}>
                  <input className={css.articles__checkbox} type="checkbox" />
                  Робота з клієнтами
                </li>
                <li key={nanoid()}>
                  <input className={css.articles__checkbox} type="checkbox" />
                  Цікаві історії
                </li>
              </ul>
            </div>
            <ul className={css.articles__list}>{list}</ul>
            <button
              className={css.articles__loadmore}
              onClick={() => {
                setList([
                  ...list,
                  ...data.map((card) => {
                    return (
                      <li className={css.articles__item} key={nanoid()}>
                        <img src={card.url} alt="bakery" />
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                        <Link to={`/articles/${nanoid()}`}>
                          <button>Читати далі</button>
                        </Link>
                      </li>
                    );
                  }),
                ]);
              }}
            >
              <img src={backup} alt="LoadMore" />
              Більше статей
            </button>
            <div className={css.articles__pagination}>
              <span className={css["articles__arrow--left"]}>&#x3c;</span>
              <li key={nanoid()}>1</li>
              <li key={nanoid()}>2</li>
              <li
                key={nanoid()}
                style={{ fontWeight: "700", background: "#FDAD6D" }}
              >
                3
              </li>
              <li key={nanoid()}>4</li>
              <li key={nanoid()}>5</li>
              <span className={css["articles__arrow--right"]}>&#x3e;</span>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
