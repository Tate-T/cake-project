import css from "./Articles.module.css";
import Container from "../../components/Container/Container.jsx";
import backup from "../../imgs/svg/backup.svg";
import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import { nanoid } from "nanoid";
import { useState, useEffect, use } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../redux/articlesAPI.js";
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);
  const [topics, setTopics] = useState({
    reception: false,
    selections: false,
    advicesForKitchen: false,
    interestingStories: false,
    workWithClients: false,
  });
  const [selectedArr, setSelectedArr] = useState([]);
  useEffect(() => {
    const arr = [];
    const keys = Object.keys(topics);
    keys.forEach((key) => {
      if (topics[key]) arr.push(key);
    });
    setSelectedArr(arr);
  }, [topics]);
  // const data = useSelector((state) => state.articles.articlesList).filter(article => {
  //   return article.topic.includes(setSelectedArr);
  // });
  const data = useSelector((state) => state.articles.articlesList);
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
                  <input className={css.articles__checkbox} checked={topics.reception} onChange={(e) => setTopics({ ...topics, reception: e.target.checked})} type="checkbox" />
                  Рецепти
                </li>
                <li key={nanoid()}>
                  <input className={css.articles__checkbox} checked={topics.advicesForKitchen} onChange={(e) => setTopics({ ...topics, advicesForKitchen: e.target.checked})} type="checkbox" />
                  Корисні поради на кухні
                </li>
                <li key={nanoid()}>
                  <input className={css.articles__checkbox} checked={topics.selections} onChange={(e) => setTopics({ ...topics, selections: e.target.checked})} type="checkbox" />
                  Підбірки
                </li>
                <li key={nanoid()}>
                  <input className={css.articles__checkbox} checked={topics.workWithClients} onChange={(e) => setTopics({ ...topics, workWithClients: e.target.checked})} type="checkbox" />
                  Робота з клієнтами
                </li>
                <li key={nanoid()}>
                  <input className={css.articles__checkbox} checked={topics.interestingStories} onChange={(e) => setTopics({ ...topics, interestingStories: e.target.checked})} type="checkbox" />
                  Цікаві історії
                </li>
              </ul>
            </div>
            <ul className={css.articles__list}>{
              data.map(card => <li className={css.articles__item} key={nanoid()}>
                <img src={card.url} alt="bakery" />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <Link to={`/articles/${nanoid()}`}>
                  <button>Читати далі</button>
                </Link>
              </li>)
            }</ul>
            <button className={css.articles__loadmore}>
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
