import { Link, NavLink } from 'react-router-dom'
import confectionerProducts from "../confectionerProducts.json";
import loadmore from "../../imgs/svg/loadmore.svg";
import Searchbar from "../../components/Searchbar/Searchbar";
import leftArrow from "../../imgs/svg/leftArrow.svg";
import rightArrow from "../../imgs/svg/rihtAroow.svg";
// import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import BidData from "../../components/BidData/BidData.jsx";
import styled from 'styled-components';
import css from "./ConfectionerDeserts.module.scss";

// const Container = styled.div`
//     max-width: 1502px;
//     margin: 0 auto;
//     padding: 0 15px;
//     width: 100%;
// `;

// const NavCont = styled.div`
//     display: flex;
//     gap: 40px;
// `;

// const Navigation = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 52px;
// `;

// const ConfectionerList = styled.ul`
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
//     button{
//         display: flex;
//         padding-left: 20px;
//         align-items: center;
//         border-radius: 50px;
//         width: 280px;
//         height: 40px;
//         border: 1px solid rgb(200, 230, 255);
//         background-color: #FFF;
//         color: #43607C;
//         font-size: 18px;
//         &[confectionerActive]{
//             background: rgb(67, 96, 124);
//             border: 0;
//             font-weight: 700;
//             color: #fff;
//         }
//     }
// `;

// const Filters = styled.ul`
//     display: flex;
//     gap: 30px;
//     flex-direction: column;
//     font-family: 'Verdana';
//     h2{
//         font-size: 24px;
//         width: 201px;
//         color: #011936;
//         line-height: 30px;
//     }
//     li{
//         display: flex;
//         flex-direction: column;
//         gap: 15px;
//     }
//     h3{
//         font-size: 18px;
//         color: #011936;
//         line-height: 24px;
//     }
// `
// const Themes = styled.ul`
//     display: flex;
//     gap: 8px;
//     flex-direction: column;
//     li{
//         gap: 10px;
//         width: 252px;
//         flex-direction: row;
//         align-items: center;
//         position: relative;
//         height: 30px;
//         padding-left: 40px;
//         input{
//             position: absolute;
//             top: 3.75px;
//             width: 22.5px;
//             height: 22.5px;
//             left: 3.75px;
//             opacity: 0;
//             z-index: 2;
//             cursor: pointer;
//             &:hover ~ div{
//                 border: 2.15px solid #262e7a;
//             }
//             &:checked ~ div:after {
//                 opacity: 1;
//             }
//         }
//         div{
//             position: absolute;
//             width: 22.5px;
//             height: 22.5px;
//             box-sizing: border-box;
//             top: 3.75px;
//             left: 3.75px;
//             border: 2.15px solid #43607C;
//             border-radius: 2.5px;
//             transition: all 0.3s;
//             &:after {
//                 content: "";
//                 position: absolute;
//                 opacity: 0;
//                 left: 6px;
//                 top: 1px;
//                 width: 5px;
//                 height: 10px;
//                 border: solid #43607C;
//                 border-width: 0 3px 3px 0;
//                 transform: rotate(45deg);
//                 transition: all .3s;
//             }
//         }
//         span{
//             font-size: 16px;
//             color: #011936;
//             line-height: 24px;
//         }
//     }
// `;

// const ProductsPart = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 30px;
//     width: 1152px;
// `;

// const ConfectionerTitle = styled.h2`
//     font-size: 35px;
//     line-height: 1.2;
//     color: #011936;
// `;

// const Types = styled.ul`
//     display: flex;
//     gap: 10px;
//     button{
//         padding: 0 20px;
//         height: 40px;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         border-radius: 40px;
//         background-color: #FFF2F2;
//         font-size: 16px;
//         line-height: 1.2;
//         color: #8E4A4E;
//         position: relative;
//         &::before{
//             display: none;
//             width: 5px;
//             height: 10px;
//             content: "";
//             border: solid #A63A50;
//             border-width: 0 2px 2px 0;
//             transform: rotate(45deg);
//             position: absolute;
//             left: 27px;
//             top: 13px;
//         }
//         div{
//             display: none;
//             border-radius: 50%;
//             width: 16.67px;
//             height: 16.67px;
//             background-color: #fff;
//         }
//         &[activeType="1"]{
//             background-color: #A63A50;
//             color: #fff;
//             padding-left: 21.67px;
//             gap: 11.67px;
//             &::before{
//                 display: block;
//             }
//             div{
//                 display: block;
//             }
//         }
//     }
// `;

// const Products = styled.ul`
//     display: flex;
//     flex-wrap: wrap;
//     gap: 20px 10px;
//     button{
//         background-color: transparent;
//         border: 0;
//     }
//     li{
//         border-radius: 5px;
//         box-shadow: 0px 2px 5px 0px rgba(67, 96, 124, 0.15);
//         background-color: #fff;
//         padding: 315px 15px 15px;
//         position: relative;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         width: 280px;
//         height: 424px;
//         box-sizing: border-box;
//         font-family: 'Verdana';
//     }
//     img{
//         width: 280px;
//         height: 300px;
//         border-radius: 5px;
//         position: absolute;
//         top: 0;
//         left: 0;
//     }
//     h4{
//         font-size: 18px;
//         color: #A63A50;
//         font-weight: 700;
//         line-height: 1.2;
//     }
//     p{
//         margin-top: 5px;
//         font-size: 16px;
//         color: #011936;
//         line-height: 20px;
//         height: 50px;
//         display: flex;
//         align-items: center;
//     }
//     span{
//         font-size: 14px;
//         color: #84A6C2;
//         line-height: 1.2;
//     }
// `;

// const Loadmore = styled.button`
//     width: 100%;
//     border: 1px solid #84A6C2;
//     background-color: transparent;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 50px;
//     gap: 15px;
//     font-size: 16px;
//     color: #43607C;
//     line-height: 1.2;
//     border-radius: 49px;
//     img{
//         width: 25px;
//         height: 25px;
//     }
// `;

// const Pages = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 20px;
//     margin: 0 auto;
//     width: 435px;
//     height: 50px;
//     button{
//         background-color: transparent;
//         width: 35px;
//         height: 35px;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         img{
//             width: 24px;
//             height: 24px;
//         }
//     }
//     ul{
//         display: flex;
//         gap: 10px;
//         li{
//             height: 50px;
//             font-size: 18px;
//             font-family: 'Verdana';
//             color: #5E2D07;
//             line-height: 1.2;
//             display: flex;
//             align-items: end;
//             justify-content: center;
//             &[morePages="1"]{
//                 width: 25px;
//             }
//         }
//         button{
//             width: 50px;
//             height: 50px;
//             border: 1px solid rgb(255, 226, 202);
//             border-radius: 50%;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             font-size: 18px;
//             font-family: 'Verdana';
//             line-height: 1.2;
//             color: #5E2D07;
//             background: #fff;
//             &[activePage="1"]{
//                 background: rgb(253, 173, 109);
//                 font-weight: 700;
//                 color: #011936;
//             }
//         }
//     }
// `;

export default () => { 
    const [showModal, setShowModal] = useState(false);
    return (<>
            {showModal && <BidData productName="Торт “Червоний оксамит”" time="21.12.2020 13:42" nameAndSurname="Анна Василенко" mobilePhone="+56 085 345 76 34" Weight="2" filling="Шоколадний бісквіт з крем-чізом, горіховим праліне і велюровим покриттям" additionalServices={["Прикраси з мастики", "Живі квіти"]} additionalWish="Хочу торт на 3 яруси з фігурками котиків, що цілуються зверху. Торт має бути трохи солодкий, трохи кислий, дуже смачний і великий" isCall={true} closeModal={() => setShowModal(false)} />}
            {/* <Header />   */}
            <section>
                <div className={css.container}>
                    <Searchbar placeholder="Шоколадний торт з квітами" />
                    <div className={css.navCont}>
                        <div className={css.navigation}>
                            <ul className={css.confectionerList}>
                                <li>
                                    <Link to="/confectioner/about">
                                        <button>
                                            Про кондитера
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/confectioner/products">
                                        <button confectionerActive="1">
                                            Товари
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                            <ul className={css.filters}>
                                <li>
                                    <h2>Шукаєш <br/> щось особливе?</h2>
                                </li>
                                <li>
                                    <h3>Тематика</h3>
                                    <ul className={css.themes}>
                                        {['Для дівчат','Для чоловіків','Патріотичні','Весільні','До дня народження','Корпоративні'].map(theme => <li>
                                            <input type="checkbox" />
                                            <span>{theme}</span>
                                            <div></div>
                                        </li>)}
                                    </ul>
                                </li>
                                <li>
                                    <h3>Особливості</h3>
                                    <ul className={css.themes}>
                                        {['Класичні рецептиl','Без глютену','Веганські','Без цукру','З фруктами','З квітами'].map(theme => <li>
                                            <input type="checkbox" />
                                            <span>{theme}</span>
                                            <div></div>
                                        </li>)}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className={css.productsPart}>
                            <h2 className={css.confectionerTitle}>Інна Пономаренко</h2>
                            <ul className={css.types}>
                                {['Капкейки','Торти','Кейк-попси','Макаруни','Печиво','Цукерки'].map(type => <li>
                                    <button activeType="0"><div></div>{type}</button>
                                </li>)}
                            </ul>
                            <ul className={css.products}>
                                {confectionerProducts.map(confectionerProduct => <li key={confectionerProduct.id}>
                                    <button onClick={() => setShowModal(true)}>
                                        <img src={confectionerProduct.photo} alt={confectionerProduct.name} />
                                        <h4>{confectionerProduct.price} грн</h4>
                                        <p>{confectionerProduct.name}</p>
                                        <span>{confectionerProduct.variants} варіанти начинок</span>
                                    </button>
                                </li>)}
                            </ul>
                            <button className={css.loadmore}>
                                <img src={loadmore} />
                                Більше смаколиків
                            </button>
                            <div className={css.pages}>
                                <button>
                                    <img src={leftArrow} />
                                </button>
                                <ul>
                                    <li>
                                        <button>
                                            1
                                        </button>
                                    </li>
                                    <li>
                                        <button>
                                            2
                                        </button>
                                    </li>
                                    <li>
                                        <button activePage="1">
                                            3
                                        </button>
                                    </li>
                                    <li>
                                        <button>
                                            4
                                        </button>
                                    </li>
                                    <li morePages="1">
                                        ...
                                    </li>
                                    <li>
                                        <button>
                                            15
                                        </button>
                                    </li>
                                </ul>
                                <button>
                                    <img src={rightArrow} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />    
        </>
    )
}