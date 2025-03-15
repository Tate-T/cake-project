import React from "react";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Confecioners.module.css";
import Confecioner1Img from "../../imgs/aboutConfectionerImg.jpg";
import cake1 from "../../imgs/cakes/cake-1.jpg";
import cake2 from "../../imgs/cakes/cake-2.jpg";
import cake3 from "../../imgs/cakes/cake-3.jpg";
import cake4 from "../../imgs/cakes/cake-4.jpg";
import arrowLeft from "../../imgs/svg/leftArrow.svg";
import arrowRight from "../../imgs/svg/rihtAroow.svg";
import SearchForm from "../../components/SearchForm/SearchForm";

const Confecioners = () => {
  return (
    <>
      <Header />
      <Container>
        <SearchForm />
        <div className={styles.confBtnList}>
          <button className={styles.recomendationBtn}>Капкейки</button>
          <button className={styles.recomendationBtn}>Торти</button>
          <button className={styles.recomendationBtn}>Кейк-попси</button>
          <button className={styles.recomendationBtn}>Макаруни</button>
          <button className={styles.recomendationBtn}>Печиво</button>
          <button className={styles.recomendationBtn}>Цукерки</button>
        </div>
        <div className={styles.confItem}>
          <div className={styles.confAvatar}>
            <div className={styles.confAvatarImg}>
              <img src={Confecioner1Img} alt="User" />
            </div>
            <h2 className={styles.confAvatarName}>Інна Пономаренко</h2>
            <p className={styles.confAvatarComments}>23 відгуки</p>
            <p className={styles.confAvatarInfo}>
              Кондитер IV разряда и автор «Школа юного кондитера» Рекордсмен
              книги рекордов...
            </p>
            <div className={styles.confAvatarButtonList}>
              <button>Торти</button>
              <button>Цукерки</button>
              <button>+3</button>
            </div>
          </div>
          <div className={styles.ConfInfo}>
            <div className={styles.confSubInfo}>
              <h2 className={styles.confTitle}>Інна Пономаренко</h2>
              <div className={styles.confBtnList}>
                <button className={styles.confViewBtn}>Переглянути всі</button>
                <div className={styles.confBtnContainer}>
                  <button className={styles.confNextBtn}>
                    <img src={arrowLeft} alt="Arrow Left" />
                  </button>
                  <button className={styles.confNextBtn}>
                    <img src={arrowRight} alt="Arrow Right" />
                  </button>
                </div>
              </div>
            </div>
            <ul className={styles.ConfCakeList}>
              <li className={styles.ConfCakeItem}>
                <div className={styles.confCakeItemImg}>
                  <img src={cake1} />
                </div>
                <div className={styles.ConfCakeItemWrap}>
                  <h2>520 грн</h2>
                  <h3>Весільний триярусний торт з фруктами та квітами</h3>
                  <p>4 варіанти начинок</p>
                </div>
              </li>
              <li className={styles.ConfCakeItem}>
                <div className={styles.ConfCakeItemImg}>
                  <img src={cake2} />
                </div>
                <div className={styles.ConfCakeItemWrap}>
                  <h2>520 грн</h2>
                  <h3>Бісквітний торт з ягодами</h3>
                  <p>4 варіанти начинок</p>
                </div>
              </li>
              <li className={styles.ConfCakeItem}>
                <div className={styles.ConfCakeItemImg}>
                  <img src={cake3} />
                </div>
                <div className={styles.ConfCakeItemWrap}>
                  <h2>520 грн</h2>
                  <h3>Ванільно-карамельний торт з печивом Орео</h3>
                  <p>4 варіанти начинок</p>
                </div>
              </li>
              <li className={styles.ConfCakeItem}>
                <div className={styles.ConfCakeItemImg}>
                  <img src={cake4} />
                </div>
                <div className={styles.ConfCakeItemWrap}>
                  <h2>520 грн</h2>
                  <h3>Торт рожевий з макарунами</h3>
                  <p>4 варіанти начинок</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.confItem}>
          <div className={styles.confAvatar}>
            <div className={styles.confAvatarImg}>
              <img src={Confecioner1Img} alt="User" />
            </div>
            <h2 className={styles.confAvatarName}>Інна Пономаренко</h2>
            <p className={styles.confAvatarComments}>23 відгуки</p>
            <p className={styles.confAvatarInfo}>
              Кондитер IV разряда и автор «Школа юного кондитера» Рекордсмен
              книги рекордов...
            </p>
            <div className={styles.confAvatarButtonList}>
              <button>Торти</button>
              <button>Цукерки</button>
              <button>+3</button>
            </div>
          </div>
          <div className={styles.ConfInfo}>
            <div className={styles.confSubInfo}>
              <h2 className={styles.confTitle}>Інна Пономаренко</h2>
              <div className={styles.confBtnList}>
                <button className={styles.confViewBtn}>Переглянути всі</button>
                <div className={styles.confBtnContainer}>
                  <button className={styles.confNextBtn}>
                    <img src={arrowLeft} alt="Arrow Left" />
                  </button>
                  <button className={styles.confNextBtn}>
                    <img src={arrowRight} alt="Arrow Right" />
                  </button>
                </div>
              </div>
            </div>
            <ul className={styles.ConfCakeList}>
              <li className={styles.ConfCakeItem}>
                <div className={styles.confCakeItemImg}>
                  <img src={cake1} />
                </div>
                <div className={styles.ConfCakeItemWrap}>
                  <h2>520 грн</h2>
                  <h3>Весільний триярусний торт з фруктами та квітами</h3>
                  <p>4 варіанти начинок</p>
                </div>
              </li>
              <li className={styles.ConfCakeItem}>
                <div className={styles.ConfCakeItemImg}>
                  <img src={cake2} />
                </div>
                <div className={styles.ConfCakeItemWrap}>
                  <h2>520 грн</h2>
                  <h3>Бісквітний торт з ягодами</h3>
                  <p>4 варіанти начинок</p>
                </div>
              </li>
              <li className={styles.ConfCakeItem}>
                <div className={styles.ConfCakeItemImg}>
                  <img src={cake3} />
                </div>
                <div className={styles.ConfCakeItemWrap}>
                  <h2>520 грн</h2>
                  <h3>Ванільно-карамельний торт з печивом Орео</h3>
                  <p>4 варіанти начинок</p>
                </div>
              </li>
              <li className={styles.ConfCakeItem}>
                <div className={styles.ConfCakeItemImg}>
                  <img src={cake4} />
                </div>
                <div className={styles.ConfCakeItemWrap}>
                  <h2>520 грн</h2>
                  <h3>Торт рожевий з макарунами</h3>
                  <p>4 варіанти начинок</p>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.confCakeList}></div>
        </div>
        <div className={styles.confItem}>
          <div className={styles.confAvatar}>
            <div className={styles.confAvatarImg}>
              <img src={Confecioner1Img} alt="User" />
            </div>
            <h2 className={styles.confAvatarName}>Інна Пономаренко</h2>
            <p className={styles.confAvatarComments}>23 відгуки</p>
            <p className={styles.confAvatarInfo}>
              Кондитер IV разряда и автор «Школа юного кондитера» Рекордсмен
              книги рекордов...
            </p>
            <div className={styles.confAvatarButtonList}>
              <button>Торти</button>
              <button>Цукерки</button>
              <button>+3</button>
            </div>
          </div>
          <div className={styles.ConfInfo}>
            <div className={styles.confSubInfo}>
              <h2 className={styles.confTitle}>Інна Пономаренко</h2>
              <div className={styles.confBtnList}>
                <button className={styles.confViewBtn}>Переглянути всі</button>
                <div className={styles.confBtnContainer}>
                  <button className={styles.confNextBtn}>
                    <img src={arrowLeft} alt="Arrow Left" />
                  </button>
                  <button className={styles.confNextBtn}>
                    <img src={arrowRight} alt="Arrow Right" />
                  </button>
                </div>
              </div>
            </div>
            <ul className={styles.ConfCakeList}>
              <li className={styles.ConfCakeItem}>
                <div className={styles.confCakeItemImg}>
                  <img src={cake1} />
                </div>
                <div className={styles.ConfCakeItemWrap}>
                  <h2>520 грн</h2>
                  <h3>Весільний триярусний торт з фруктами та квітами</h3>
                  <p>4 варіанти начинок</p>
                </div>
              </li>
              <li className={styles.ConfCakeItem}>
                <div className={styles.ConfCakeItemImg}>
                  <img src={cake2} />
                </div>
                <div className={styles.ConfCakeItemWrap}>
                  <h2>520 грн</h2>
                  <h3>Бісквітний торт з ягодами</h3>
                  <p>4 варіанти начинок</p>
                </div>
              </li>
              <li className={styles.ConfCakeItem}>
                <div className={styles.ConfCakeItemImg}>
                  <img src={cake3} />
                </div>
                <div className={styles.ConfCakeItemWrap}>
                  <h2>520 грн</h2>
                  <h3>Ванільно-карамельний торт з печивом Орео</h3>
                  <p>4 варіанти начинок</p>
                </div>
              </li>
              <li className={styles.ConfCakeItem}>
                <div className={styles.ConfCakeItemImg}>
                  <img src={cake4} />
                </div>
                <div className={styles.ConfCakeItemWrap}>
                  <h2>520 грн</h2>
                  <h3>Торт рожевий з макарунами</h3>
                  <p>4 варіанти начинок</p>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.confCakeList}></div>
        </div>
        <div className={styles.confItem}>
          <div className={styles.confAvatar}>
            <div className={styles.confAvatarImg}>
              <img src={Confecioner1Img} alt="User" />
            </div>
            <h2 className={styles.confAvatarName}>Інна Пономаренко</h2>
            <p className={styles.confAvatarComments}>23 відгуки</p>
            <p className={styles.confAvatarInfo}>
              Кондитер IV разряда и автор «Школа юного кондитера» Рекордсмен
              книги рекордов...
            </p>
            <div className={styles.confAvatarButtonList}>
              <button>Торти</button>
              <button>Цукерки</button>
              <button>+3</button>
            </div>
          </div>
          <div className={styles.ConfInfo}>
            <div className={styles.confSubInfo}>
              <h2 className={styles.confTitle}>Інна Пономаренко</h2>
              <div className={styles.confBtnList}>
                <button className={styles.confViewBtn}>Переглянути всі</button>
                <div className={styles.confBtnContainer}>
                  <button className={styles.confNextBtn}>
                    <img src={arrowLeft} alt="Arrow Left" />
                  </button>
                  <button className={styles.confNextBtn}>
                    <img src={arrowRight} alt="Arrow Right" />
                  </button>
                </div>
              </div>
            </div>
            <ul className={styles.ConfCakeList}>
              <li className={styles.ConfCakeItem}>
                <div className={styles.confCakeItemImg}>
                  <img src={cake1} />
                </div>
                <div className={styles.ConfCakeItemWrap}>
                  <h2>520 грн</h2>
                  <h3>Весільний триярусний торт з фруктами та квітами</h3>
                  <p>4 варіанти начинок</p>
                </div>
              </li>
              <li className={styles.ConfCakeItem}>
                <div className={styles.ConfCakeItemImg}>
                  <img src={cake2} />
                </div>
                <div className={styles.ConfCakeItemWrap}>
                  <h2>520 грн</h2>
                  <h3>Бісквітний торт з ягодами</h3>
                  <p>4 варіанти начинок</p>
                </div>
              </li>
              <li className={styles.ConfCakeItem}>
                <div className={styles.ConfCakeItemImg}>
                  <img src={cake3} />
                </div>
                <div className={styles.ConfCakeItemWrap}>
                  <h2>520 грн</h2>
                  <h3>Ванільно-карамельний торт з печивом Орео</h3>
                  <p>4 варіанти начинок</p>
                </div>
              </li>
              <li className={styles.ConfCakeItem}>
                <div className={styles.ConfCakeItemImg}>
                  <img src={cake4} />
                </div>
                <div className={styles.ConfCakeItemWrap}>
                  <h2>520 грн</h2>
                  <h3>Торт рожевий з макарунами</h3>
                  <p>4 варіанти начинок</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};
export default Confecioners;
