import data from "../confectionerProducts.json";
import { Link } from "react-router-dom";
import css from "./Desserts.module.css";
import Header from "../../components/Header/Header";
const Desserts = () => {
  return (
    <>
      <Header />
      <ul>
        {data.map((item) => {
          return (
            <>
              <li>
                <Link to={`/desserts/${item.id}`}>
                  <img className={css.img} src={item.photo} />
                </Link>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Desserts;
