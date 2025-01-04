import React from 'react';
import Header from "../../components/Header/Header";
import Searchbar from "../../components/Searchbar/Searchbar";
import Footer from "../../components/Footer/Footer";
import aboutConfectionerImg from "../../imgs/aboutConfectionerImg.jpg";
import { Link } from 'react-router-dom';
import cakeImg1 from '../../imgs/cakes/cake-1.jpg';
import cakeImg2 from '../../imgs/cakes/cake-2.jpg';
import cakeImg3 from '../../imgs/cakes/cake-3.jpg';
import cakeImg4 from '../../imgs/cakes/cake-4.jpg';
import cakeImg5 from '../../imgs/cakes/cake-5.jpg';
import css from './ConfecionerInfo.module.css';

const safeArr = [];
function createUniqueId() {
    const id = "id" + Math.random().toString(16).slice(2);
    if (!safeArr.includes(id)) {
        safeArr.push(id);
        return id;
    }
    return createUniqueId();
}

export default () => {
    return (
        <>
            <Header />
            <div className={css.container}>
                <div className={css.searchbar}>
                    <Searchbar placeholder="Шоколадний торт з квітами" />
                </div>
                <div className={css.main}>
                    <ul className={css.confectionerList}>
                        <li>
                            <Link to="/confectioner/about">
                                <button className={`${css.menuBtn} ${css['menuBtn--confectionerActive']}`}>
                                    Про кондитера
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/confectioner/desserts">
                                <button className={css.menuBtn}>Товари</button>
                            </Link>
                        </li>
                    </ul>
                    <div style={{ display: "block" }}>
                        <div className={css.info}>
                            <img src={aboutConfectionerImg} alt="confectioner" className={css.userPic} />
                            <div>
                                <div className={css.city}>Київ</div>
                                <div className={css.userName}>Інна Пономаренко</div>
                                <button className={css.contactBtn}>Переглянути контакти</button>
                            </div>
                        </div>
                        <div className={css.infoText}>
                            Вже понад 10 років удосконалюю свої навички. <br></br>
                            З 2011 по 2017 – засновник бренду Марципан у Вінниці зі штатом 35 осіб. Я була шеф-кондитером 3 ресторанів. А також, одним із перших кондитерів, який ввів у моду кенді бари в Чорнозем'ї та спільно з партнерами придумали коробки квіти та макаронів – ідея яка розлетілася по всьому світу.<br></br>
                            Також, я та моя команда займаємося організацією та запуском кондитерських виробництв.<br></br>
                            Маю великий досвід за плечима. За 10 років роботи я створила тисячі та тисячі тортів.<br></br>
                            Пройшовши великий шлях від домашнього кондитера до бренд-шефа, я з великою радістю та впевненістю ділюся з учнями своїми знаннями від випічки тортів та тістечок до масштабних весільних тортів.
                        </div>
                        <div className={css.reviews}>
                            <div className={css.reviewsTitle}>Відгуки</div>
                            <ul className={css.reviewsList}>
                                {[{
                                    name: 'Анна Щедріна', date: '15.11.2020', title: 'Торт “Червоний оксамит”', content: 'Замовляли на мій День народження мусовий торт із маракуєю та залишилися дуже задоволені. Тортик вийшов дуже смачний, з приємною кислинкою за рахунок маракуї та неймовірно ніжною та легкою текстурою. Начинка, на мій смак, просто шикарна: желе маракуйї, бісквіт, хрусткий шар та мус із манго та маракуйї.' 
                                }, {
                                    name: 'Олександр Ольцев', date: '15.11.2020', title: 'Торт весільний з фруктами', content: 'Супер десерти для дому та хореки. Чарівні круасани. Торти, кейки та мусові десерти - це кохання'
                                }, {
                                    name: 'Олександр Ольцев', date: '15.11.2020', title: 'Торт для дня народження з квітами, 5 кг', content: "Найсмачніші торти та тістечка, казкові еклери. У захваті від десертів. Кондитера - чарівниці, доставка завжди на найвищому рівні!!!!! Всій сім'єю обожнюємо Вашу кондитерську , дякую за вашу працю і смакоти!! <3"
                                }].map((review, index) => (
                                    <li key={index} className={css.reviewItem}>
                                        <div className={css.reviewer}>
                                            <span className={css.reviewerName}>{review.name}</span>
                                            <span className={css.reviewDate}>{review.date}</span>
                                        </div>
                                        <div className={css.reviewTitle}>{review.title}</div>
                                        <div className={css.reviewContent}>{review.content}</div>
                                  </li>
                                ))}
                            </ul>
                        </div>
                        <button className={css.loadMore}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                                <g clip-path="url(#clip0_5900_11473)">
                                    <path d="M14.5833 13C14.5833 11.8542 13.6458 10.9167 12.5 10.9167C11.3542 10.9167 10.4167 11.8542 10.4167 13C10.4167 14.1458 11.3542 15.0833 12.5 15.0833C13.6458 15.0833 14.5833 14.1458 14.5833 13ZM12.5 3.625C7.32292 3.625 3.125 7.82292 3.125 13H0L4.16667 17.1667L8.33333 13H5.20833C5.20833 8.96875 8.46875 5.70833 12.5 5.70833C16.5312 5.70833 19.7917 8.96875 19.7917 13C19.7917 17.0312 16.5312 20.2917 12.5 20.2917C10.9271 20.2917 9.46875 19.7812 8.27083 18.9375L6.79167 20.4375C8.375 21.6458 10.3542 22.375 12.5 22.375C17.6771 22.375 21.875 18.1771 21.875 13C21.875 7.82292 17.6771 3.625 12.5 3.625Z" fill="#43607C"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_5900_11473">
                                        <rect width="25" height="25" fill="white" transform="translate(0 0.5)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            Більше відгуків
                        </button>
                        <ul className={css.pagination}>
                            <li className={css.arrow}>&#x3c;</li>
                            {[1, 2, 3, 4, 5].map(page => (
                                <li key={createUniqueId()}>{page}</li>
                            ))}
                            <li className={css.arrow}>&#x3e;</li>
                        </ul>
                    </div>
                </div>
                <div className={css.goods}>
                    <div className={css.good}>
                        <div className={css.goodTitle}>Торти</div>
                        <div className={css.goodActions}>
                            <button className={css.goodBtn}>Переглянути всі</button>
                        </div>
                    </div>
                    <div className={css.goodList}>
                        {[cakeImg1, cakeImg2, cakeImg3, cakeImg4, cakeImg5].map((img, index) => (
                            <div key={index} className={css.goodItem}>
                                <img src={img} alt="cake" className={css.goodItemImg} />
                                <div className={css.goodItemPrice}>520 грн</div>
                                <div className={css.goodItemContent}>Опис торта</div>
                                <div className={css.goodItemOptions}>4 варіанти начинок</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
      <Footer />
    </>
  );
};