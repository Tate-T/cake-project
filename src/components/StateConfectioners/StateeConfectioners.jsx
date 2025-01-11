import styled from "styled-components";
import stateImg1 from "../../imgs/confectioners/bestConfist.png";
import stateImg2 from "../../imgs/confectioners/cake1Kryasan.png";
import stateImg3 from "../../imgs/confectioners/makarynu.png";
import stateImg4 from "../../imgs/confectioners/beze.png";
import stateImg5 from "../../imgs/confectioners/chocolate.png";
import { Link, NavLink } from "react-router-dom";
import sty from "./StateConfectioners.module.css";












export default function ListState() {
  return (
    <>
      <div className={sty.glawBox}>
        <div className={sty.BoxesFlex}>
          <h2 className={sty.GlawTxtState}>Статті</h2>
          <div className={sty.BoxesFlexInfo}>
            <NavLink className={sty.BtnAllPoregl} to="/articles">Переглянути всі</NavLink>
            <button className={sty.StateArrowBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_5811_8201)">
                  <path
                    d="M15.4102 16.59L10.8302 12L15.4102 7.41L14.0002 6L8.00016 12L14.0002 18L15.4102 16.59Z"
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
            <button className={sty.StateArrowBtn}>
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
          </div >
        </div>

        <ul className={sty.listCards}>
          <li>
            <div className={sty.StateCardBox}>
              <Link to="/articles/1">
                <img src={stateImg1} alt="state" />

                <div>
                  <h2 className={sty.StateCardTitle}>Кращі кондитерські Києва</h2 >
                  <p className={sty.StateCardSubtitle}>
                    Ми знаємо, де у Києві готують і подають смачні десерти та
                    фірмові булочки, шоколадні цукерки ручної роботи, а також де
                    можна купити натуральний шоколад. І вам розкажемо...
                  </p >
                </div>
              </Link>
            </div >
          </li>
          <li>
            <div className={sty.StateCardBox}>
              <Link to="/articles/2">
                <img src={stateImg2} alt="state" />

                <div>
                  <h2 className={sty.StateCardTitle}>
                    Як приготувати справжній французький круасан
                  </h2 >
                  <p className={sty.StateCardSubtitle}>
                    Всі, хто любить круасани, мріють одного разу опинитися в
                    маленькій французькій пекарні з гарячим круасаном в руках.
                    Чи це не чудово? Ті, хто там побу...
                  </p >
                </div>
              </Link>
            </div >
          </li>

          <li>
            <div className={sty.StateCardBox}>
              <Link to="/articles/3">
                <img src={stateImg3} alt="state" />

                <div>
                  <h2 className={sty.StateCardTitle}>
                    Рецепти найсмачніших макарунів з незвичними смаками
                  </h2 >
                  <p className={sty.StateCardSubtitle}>
                    Вишукане і неймовірно смачне французьке печиво «Макаронів»
                    за класичним рецептом готується на основі мигдальної муки.
                    Н...{" "}
                  </p >
                </div>
              </Link>
            </div >
          </li>

          <li>
            <div className={sty.StateCardBox}>
              <Link to="/articles/4">
                <img src={stateImg4} alt="state" />

                <div>
                  <h2 className={sty.StateCardTitle}>
                    Малинове безе в домашніх умовах
                  </h2 >
                  <p className={sty.StateCardSubtitle}>
                    Безе, або меренга - це класичний французький десерт з
                    запеченого білкового крему. Неймовірно ніжний, м'який
                    всередині і трохи хрусткий зов...
                  </p >
                </div>
              </Link>
            </div >
          </li>
          <li>
            <div className={sty.StateCardBox}>
              <Link to="/articles/5">
                <img src={stateImg5} alt="state" />

                <div>
                  <h2 className={sty.StateCardTitle}>Рецепти шоколаду без цукру</h2 >
                  <p className={sty.StateCardSubtitle}>
                    Розглянемо популярні способи приготування домашнього
                    шоколаду. Його головна особливість — можливість комбінування
                    різних продуктів...
                  </p >
                </div>
              </Link>
            </div >
          </li>
        </ul>
      </div>
    </>
  );
}