import React from 'react';
import Searchbar from "../../components/Searchbar/Searchbar";
import Footer from "../../components/Footer/Footer";
import aboutConfectionerImg from "../../imgs/aboutConfectionerImg.jpg";
import { Link } from 'react-router-dom';
import cakeImg1 from '../../imgs/cakes/cake-1.jpg';
import cakeImg2 from '../../imgs/cakes/cake-2.jpg';
import cakeImg3 from '../../imgs/cakes/cake-3.jpg';
import cakeImg4 from '../../imgs/cakes/cake-4.jpg';
import css from './Confectioners.module.css';

const Confectioners = () => {
    return (
        <>
            <div className={css.container}>
                <div className={css.searchbarWrapper}>
                    <Searchbar placeholder="Шоколадний торт з квітами" />
                </div>
                <div className={css.confectionersSection}>
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className={css.confectionerCard}>
                            <div className={css.confectionerHeader}>
                                <img src={aboutConfectionerImg} alt="confectioner" className={css.confectionerImage} />
                                <div className={css.confectionerDetails}>
                                    <div className={css.confectionerName}>Інна Пономаренко</div>
                                    <div className={css.confectionerExperience}>23 відгуки</div>
                                    <div className={css.confectionerTags}>
                                        <span className={css.tag}>Торти</span>
                                        <span className={css.tag}>Цукерки</span>
                                        <span className={css.tag}>+3</span>
                                    </div>
                                </div>
                            </div>
                            <div className={css.confectionerGoods}>
                                {[cakeImg1, cakeImg2, cakeImg3, cakeImg4].map((cake, idx) => (
                                    <div key={idx} className={css.goodItem}>
                                        <img src={cake} alt="cake" className={css.goodImage} />
                                        <div className={css.goodPrice}>520 грн</div>
                                        <div className={css.goodDescription}>Опис торта</div>
                                        <div className={css.goodVariants}>4 варіанти начинок</div>
                                    </div>
                                ))}
                            </div>
                            <button className={css.viewAllButton}>Переглянути всі</button>
                        </div>
                    ))}
                </div>
                <div className={css.paginationSection}>
                    <button className={css.paginationButton}>1</button>
                    <button className={css.paginationButton}>2</button>
                    <button className={css.paginationButton}>3</button>
                    <span className={css.paginationEllipsis}>...</span>
                    <button className={css.paginationButton}>15</button>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Confectioners;
