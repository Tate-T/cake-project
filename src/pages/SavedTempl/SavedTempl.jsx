import { useEffect } from "react";
import styles from "./SavedTempl.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchTemplates, delTemplate } from "../../redux/templates/templatesAPI";

const SavedTempl = () => {
    const dispatch = useDispatch();
    const temps = useSelector(state => state.templates.templates);
    useEffect(() => {
        dispatch(fetchTemplates());
    }, []);
    return (
      <>
        <section className={styles.savedTempls}>
          <h2 className={styles.title}>Збережені шаблони</h2>
          <ul className={styles.temps}>
            {temps.map((temp) => (
              <li className={styles.temp} id={temp.id}>
                <img alt="Temp photo" src={temp.img} className={styles.img} />
                <div className={styles.cont}>
                  <div className={styles.titleTemp}>
                    <h3 className={styles.name}>{temp.name}</h3>
                    <h3 className={styles.qty}>{temp.qty}</h3>
                  </div>
                  <button className={styles.sendBut}>Надіслати заявку</button>
                </div>
                <p className={styles.filling}>
                  <span className={styles.b}>Начинка</span>
                  {temp.filling}
                </p>
                <button className={styles.show}>Переглянути</button>
                <button
                  onClick={() => dispatch(delTemplate(temp.id))}
                  className={styles.del}
                >
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="delete" clipPath="url(#clip0_5988_5002)">
                      <path
                        id="Vector"
                        d="M4.99984 16.3333C4.99984 17.25 5.74984 18 6.6665 18H13.3332C14.2498 18 14.9998 17.25 14.9998 16.3333V6.33333H4.99984V16.3333ZM15.8332 3.83333H12.9165L12.0832 3H7.9165L7.08317 3.83333H4.1665V5.5H15.8332V3.83333Z"
                        fill="#84A6C2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5988_5002">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </li>
            ))}
          </ul>
          <div className={styles.msgModal}>
            <div>
              <h3 className={styles.mainMsg}>
                {temps.length == 0
                  ? "Ви поки не зберегли жодного шаблону"
                  : "Це поки всі збережені шаблони"}
              </h3>
              <p className={styles.addMsg}>
                {temps.length == 0
                  ? "Але на сайті стільки крутих пропозицій!"
                  : "Але на сайті ще стільки крутих пропозицій!"}
              </p>
            </div>
            <Link to="/">Повернутися на головну</Link>
          </div>
        </section>
      </>
    );
}

export default SavedTempl;