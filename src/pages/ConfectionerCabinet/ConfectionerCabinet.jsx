import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import React, { useEffect } from "react";
import css from "./ConfectionerCabinet.module.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getContacts, delContact, createContact } from "../../redux/contacts/contactsOperations";

export default ({ }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  // useEffect(dispatch(getContacts({
  //   token: token
  // })), []);
  // const contacts = useSelector((state) => state.contacts.list);
  const contacts = [];
  return (
    <>
      <Header />
      <section>
        <div className={css.container}>
          <div className={css.navCont}>
            <div className={css.navigation}>
              <h2 className={css.navTitle}>Загальне</h2>
              <ul className={css.confectionerList}>
                <li>
                  <button
                    className={`${css.confectionerList__button} ${css["confectionerList__button--active"]}`}
                  >
                    Інформація про кондитера
                  </button>
                </li>
                <li>
                  <button className={css.confectionerList__button}>
                    Заявки
                  </button>
                </li>
                <li>
                  <button className={css.confectionerList__button}>
                    Відгуки
                  </button>
                </li>
              </ul>
              <h2 className={css.navTitle}>Категорії</h2>
              <ul className={css.categories}>
                <li>
                  <NavLink to="/ConfecionerAllTower">
                    {" "}
                    <button className={css.categories__button}>
                      Всі товари
                    </button>
                  </NavLink>
                </li>
                <li>
                  <button className={css.categories__button}>Торти</button>
                </li>
                <li>
                  <button className={css.categories__button}>Макаруни</button>
                </li>
                <li>
                  <button className={css.categories__button}>Капкейки</button>
                </li>
                <li>
                  <button
                    className={`${css.categories__button} ${css["categories__button--add"]}`}
                  >
                    <div className={css.addIcon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                          stroke="#8E4A4E"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.6665 10H13.3332"
                          stroke="#8E4A4E"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 13.3334L10 6.66675"
                          stroke="#8E4A4E"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    Додати категорію
                  </button>
                </li>
              </ul>
            </div>
            <div className={css.mainComps}>
              <h2 className={css.titleSec}>Фото</h2>
              <p className={css.description}>
                Додайте сюди своє фото або логотип компанії. Кондитерів з фото
                обирають частіше
              </p>
              <div className={css.photoCont}>
                <img
                  className={css.photoCont__photo}
                  src="https://i.ibb.co/s5LbyW4/image.png"
                  alt="Фото кондитера"
                />
                <div className={css.butsCont}>
                  <button className={css.photoBut}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_5881_10387)">
                        <path
                          d="M15.8333 5.83341V8.32508C15.8333 8.32508 14.175 8.33341 14.1667 8.32508V5.83341H11.6667C11.6667 5.83341 11.675 4.17508 11.6667 4.16675H14.1667V1.66675H15.8333V4.16675H18.3333V5.83341H15.8333ZM13.3333 9.16675V6.66675H10.8333V4.16675H4.16667C3.25 4.16675 2.5 4.91675 2.5 5.83341V15.8334C2.5 16.7501 3.25 17.5001 4.16667 17.5001H14.1667C15.0833 17.5001 15.8333 16.7501 15.8333 15.8334V9.16675H13.3333ZM4.16667 15.8334L6.66667 12.5001L8.33333 15.0001L10.8333 11.6667L14.1667 15.8334H4.16667Z"
                          fill="#84A6C2"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_5881_10387">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Замінити фото
                  </button>
                  <button className={css.photoBut}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_5881_10113)">
                        <path
                          d="M5.49984 15.8333C5.49984 16.75 6.24984 17.5 7.1665 17.5H13.8332C14.7498 17.5 15.4998 16.75 15.4998 15.8333V5.83333H5.49984V15.8333ZM16.3332 3.33333H13.4165L12.5832 2.5H8.4165L7.58317 3.33333H4.6665V5H16.3332V3.33333Z"
                          fill="#84A6C2"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_5881_10113">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    Видалити
                  </button>
                </div>
              </div>
              <h2 className={css.titleSec}>
                Загальне
                <div className={css.editIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_5881_5007)">
                      <path
                        d="M2.5 14.3749V17.4999H5.625L14.8417 8.28322L11.7167 5.15822L2.5 14.3749ZM17.2583 5.86655C17.5833 5.54155 17.5833 5.01655 17.2583 4.69155L15.3083 2.74155C14.9833 2.41655 14.4583 2.41655 14.1333 2.74155L12.6083 4.26655L15.7333 7.39155L17.2583 5.86655Z"
                        fill="#A63A50"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5881_5007">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </h2>
              <p className={css.label}>
                Ім'я кондитера або назва кондитерської
              </p>
              <p className={css.dataArea}>Інна Пономаренко</p>
              <p className={css.label}>Опис</p>
              <p className={`${css.dataArea} ${css["dataArea--last"]}`}></p>
              <h2 className={css.titleSec}>
                Контакти
                <div className={css.editIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_5881_5007)">
                      <path
                        d="M2.5 14.3749V17.4999H5.625L14.8417 8.28322L11.7167 5.15822L2.5 14.3749ZM17.2583 5.86655C17.5833 5.54155 17.5833 5.01655 17.2583 4.69155L15.3083 2.74155C14.9833 2.41655 14.4583 2.41655 14.1333 2.74155L12.6083 4.26655L15.7333 7.39155L17.2583 5.86655Z"
                        fill="#A63A50"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5881_5007">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </h2>
              <p className={css.label}>Адреса</p>
              <p className={css.dataArea}>Київ, Правди 15</p>
              <p className={css.label}>Номери телефону</p>
              <p className={css.dataArea}>
                +56 085 345 76 34
                <button className={css.butDel}>Видалити</button>
              </p>
              {contacts.map((contact) => (
                <p className={css.dataArea}>
                  {contact.name}: {contact.number}
                  <button className={css.butDel} onClick={() => dispatch(delContact({token: token, id: contact.id}))}>Видалити</button>
                </p>
              ))}
              <p className={css.label}>Пошта</p>
              <p className={`${css.dataArea} ${css["dataArea--last"]}`}>
                Mail@example.com
              </p>
              <h2 className={css.titleSec}>
                Доставка
                <div className={css.editIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_5881_5007)">
                      <path
                        d="M2.5 14.3749V17.4999H5.625L14.8417 8.28322L11.7167 5.15822L2.5 14.3749ZM17.2583 5.86655C17.5833 5.54155 17.5833 5.01655 17.2583 4.69155L15.3083 2.74155C14.9833 2.41655 14.4583 2.41655 14.1333 2.74155L12.6083 4.26655L15.7333 7.39155L17.2583 5.86655Z"
                        fill="#A63A50"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5881_5007">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </h2>
              <p className={`${css.dataArea} ${css["dataArea--moreInfo"]}`}>
                <ul>
                  <li>Cамовивіз, Київ, Симиренка 23а</li>
                  <li>Власна доставка, 150 грн</li>
                </ul>
              </p>
              <h2 className={css.titleSec}>
                Оплата
                <div className={css.editIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_5881_5007)">
                      <path
                        d="M2.5 14.3749V17.4999H5.625L14.8417 8.28322L11.7167 5.15822L2.5 14.3749ZM17.2583 5.86655C17.5833 5.54155 17.5833 5.01655 17.2583 4.69155L15.3083 2.74155C14.9833 2.41655 14.4583 2.41655 14.1333 2.74155L12.6083 4.26655L15.7333 7.39155L17.2583 5.86655Z"
                        fill="#A63A50"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5881_5007">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </h2>
              <p className={`${css.dataArea} ${css["dataArea--moreInfo"]}`}>
                <ul>
                  <li>Передплата 50%</li>
                </ul>
              </p>
              <h2 className={css.titleSec}>
                Соціальні мережі
                <div className={css.editIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_5881_5007)">
                      <path
                        d="M2.5 14.3749V17.4999H5.625L14.8417 8.28322L11.7167 5.15822L2.5 14.3749ZM17.2583 5.86655C17.5833 5.54155 17.5833 5.01655 17.2583 4.69155L15.3083 2.74155C14.9833 2.41655 14.4583 2.41655 14.1333 2.74155L12.6083 4.26655L15.7333 7.39155L17.2583 5.86655Z"
                        fill="#A63A50"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5881_5007">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </h2>
              <p className={css.label}>Instagram</p>
              <p className={css.dataArea}>www.instagram.com</p>
              <p className={css.label}>Facebook</p>
              <p className={`${css.dataArea} ${css["dataArea--last"]}`}>
                www.facebook.com
              </p>
              <div className={css.profFillCont}>
                <h2 className={css.profFillCont__title}>
                  Ваш профіль заповнений на 83%
                </h2>
                <div className={css.barCont}>
                  <div className={css.fieldBar}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="698"
                      height="10"
                      viewBox="0 0 698 10"
                      fill="none"
                    >
                      <path
                        d="M5.5 1H692.5C694.709 1 696.5 2.79086 696.5 5C696.5 7.20914 694.709 9 692.5 9H5.5C3.29086 9 1.5 7.20914 1.5 5C1.5 2.79086 3.29086 1 5.5 1Z"
                        stroke="#84A6C2"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <div className={css.fillBar}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="501"
                      height="10"
                      viewBox="0 0 501 10"
                      fill="none"
                    >
                      <path
                        d="M4.99999 0H496C498.761 0 501 2.23858 501 5C501 7.76142 498.761 10 496 10H5C2.23858 10 0 7.76142 0 5C0 2.23858 2.23857 0 4.99999 0Z"
                        fill="#011936"
                      />
                    </svg>
                  </div>
                </div>
                <p className={css.descrFill}>
                  Розкажіть про себе все, що може бути цікаво користувачам.
                  Заповнені профілі користуються більшою популярністю
                </p>
                <button className={css.fillBut}>Заповнити поле “Опис”</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
