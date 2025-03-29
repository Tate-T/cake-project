import React, { useState } from "react";
import styles from "./application.module.css";
import img1 from "../../imgs/myApplication/application1.png";
import img2 from "../../imgs/myApplication/application2.png";
import { Link } from "react-router-dom";
import Request from "../../components/Request/Request";

const Application = () => {
  const [isOpen, setIsOpen] = useState();
  const req = {
    title: "Торт “Червоний оксамит”",
    date: new Date(),
    client: {
      firstName: "Анна",
      lastName: "Василенко",
      phone: "+56 085 345 76 34",
    },
    weight: 2,
    filling:
      "Шоколадний бісквіт з крем-чізом, горіховим праліне і велюровим покриттям",
    extraServices: ["Прикраси з мастики", "Живі квіти"],
    doNotCallMe: true,
    wishes: "qwerty",
  };
  const obj = [
    {
      id: 1,
      image: img1,
      title: "Торт",
      weight: "5 кг",
      date: "21.01.2022",
      filling: "Бісквітна з лохиновим конфітюром",
    },
    {
      id: 2,
      image: img2,
      title: "Капкейки",
      weight: "12 шт",
      date: "05.05.2021",
      filling: "Бісквітна з манговим мусом із дзеркальною глазуррю",
    },
  ];

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.layout}>
          {/* <aside className={styles.sidebar}>
            <Link className={`${styles.sidebarButton}`} to="/client/requests">Мої заявки</Link>
            <Link className={styles.sidebarButton} to="/client/temps">Збережені шаблони</Link>
          </aside> */}

          <main className={styles.container}>
            <div className={styles.header}>
              <h2>Особиста інформація</h2>
              <button className={styles.editIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <g clip-path="url(#clip0_5853_4920)">
                    <path
                      d="M2.5 14.8751V18.0001H5.625L14.8417 8.78346L11.7167 5.65846L2.5 14.8751ZM17.2583 6.3668C17.5833 6.0418 17.5833 5.5168 17.2583 5.1918L15.3083 3.2418C14.9833 2.9168 14.4583 2.9168 14.1333 3.2418L12.6083 4.7668L15.7333 7.8918L17.2583 6.3668Z"
                      fill="#A63A50"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5853_4920">
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
            </div>

            <div className={styles.userInfo}>
              <label>
                <input
                  type="text"
                  placeholder="Анна Василенко"
                  className={styles.input}
                />
              </label>
              <label>
                <input
                  type="text"
                  placeholder="+56 085 345 76 34"
                  className={styles.input}
                />
              </label>
            </div>

            <div className={styles.requests}>
              <h3>Мої заявки</h3>
              {obj.map((application) => (
                <div key={application.id} className={styles.requestItem}>
                  <img
                    src={application.image}
                    alt={application.title}
                    className={styles.requestImage}
                  />
                  <div className={styles.requestDetails}>
                    <div className={styles.titleDate}>
                      <p className={styles.requestTitle}>
                        {application.title} {application.weight}
                      </p>
                      <p className={styles.titleDateDeskr}>Начинка</p>
                    </div>
                    <div className={styles.titleDate}>
                      <p className={styles.requestDescription}>
                        {application.date}
                      </p>
                      <p className={styles.requestDate}>
                        {application.filling}
                      </p>
                    </div>
                  </div>
                  <button
                    className={styles.requestButton}
                    onClick={() => setIsOpen(true)}
                  >
                    Переглянути
                  </button>
                </div>
              ))}
            </div>

            <div className={styles.suggestions}>
              <h4>Хочеться ще смачненького?</h4>
              <p>Давайте переглянемо те, що вже сподобалось</p>
              <div className={styles.suggestionButtons}>
                <button className={styles.suggestionButton}>
                  Переглянути збережені шаблони
                </button>
                <button className={styles.suggestionButton}>
                  Повернутися на головну
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
      {isOpen && <Request data={req} closeFn={setIsOpen} />}
    </>
  );
};

export default Application;
