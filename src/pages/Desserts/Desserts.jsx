import data from "../confectionerProducts.json";
import { Link } from "react-router-dom";
import css from "./Desserts.module.css";
const Desserts = () => {
    return (
        <>
            <ul>
                {data.map(item => {
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