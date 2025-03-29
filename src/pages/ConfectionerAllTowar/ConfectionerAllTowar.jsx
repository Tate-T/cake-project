import { Link, NavLink } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import React from 'react'
import css from './ConfectionerAllTowar.module.css'
import backup from '../../imgs/svg/backup.svg'
import imgDef from '../../imgs/aboutConfectionerImg.jpg'


import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getListProduct } from '../../redux/ConfectionerAllTowar/allTowarWere'
export default function AllProduct() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListProduct())
      }, [dispatch])
     const listTowar = useSelector( (state) => state.listAllTowar.listAllTowar)
     console.log(listTowar)
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
										className={`${css.confectionerList__button} ${css['confectionerList__button--active']}`}
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
									<button className={css.categories__button}>Всі товари</button>
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
										className={`${css.categories__button} ${css['categories__button--add']}`}
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
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
										>
											<path
												d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
												stroke="white"
												stroke-width="2"
												stroke-miterlimit="10"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M6.6665 10H13.3332"
												stroke="white"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M10 13.3334L10 6.66675"
												stroke="white"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
										Додати категорію
									</button>
								</li>
							</ul>
						</div>
						<div className={css.mainComps}>
							<div className={css.tophatList}>
								<div className={css.dupBox}>
									<h2 className={css.titleTophat}>Всі товари </h2>
									<button className={css.btnTophat}>додати новий товар</button>
								</div>
								<div className={css.dupBox}>
									<button className={css.btnsearhTophat}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
										>
											<g clip-path="url(#clip0_7812_8909)">
												<path
													d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
													fill="#5E2D07"
												/>
											</g>
											<defs>
												<clipPath id="clip0_7812_8909">
													<rect width="24" height="24" fill="white" />
												</clipPath>
											</defs>
										</svg>
									</button>
									<div className={css.boxTophat}>
										<p className={css.textTophat}>За датою публікації</p>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="25"
											height="26"
											viewBox="0 0 25 26"
											fill="none"
										>
											<g clip-path="url(#clip0_7812_5018)">
												<path
													d="M17.2812 9.448L12.5 14.2188L7.71875 9.448L6.25 10.9167L12.5 17.1667L18.75 10.9167L17.2812 9.448Z"
													fill="#5E2D07"
												/>
											</g>
											<defs>
												<clipPath id="clip0_7812_5018">
													<rect
														width="25"
														height="25"
														fill="white"
														transform="translate(0 0.5)"
													/>
												</clipPath>
											</defs>
										</svg>
									</div>
								</div>
							</div>
							<ul>
                                {listTowar.map((data) => {
                                    return (
                                        <li className={css.itemListrend}>
									
									<div className={css.imgItem}>
                                        <img className={css.imgItem} src={imgDef}></img>
                                        <div className={css.txtbox}>
                                            <h3 className={css.TitleItem}>{data.name}</h3>
										<p className={css.txtItem}>{data.price} грн</p>
                                        </div>
										
									</div>
									<div className={css.boxEdit}>
										<button className={css.btnView}>Перегланути</button>
										<button className={css.itemEdit}>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
											>
												<g clip-path="url(#clip0_7812_9792)">
													<path
														d="M2.5 14.3749V17.4999H5.625L14.8417 8.28322L11.7167 5.15822L2.5 14.3749ZM17.2583 5.86655C17.5833 5.54155 17.5833 5.01655 17.2583 4.69155L15.3083 2.74155C14.9833 2.41655 14.4583 2.41655 14.1333 2.74155L12.6083 4.26655L15.7333 7.39155L17.2583 5.86655Z"
														fill="#43607C"
													/>
												</g>
												<defs>
													<clipPath id="clip0_7812_9792">
														<rect width="20" height="20" fill="white" />
													</clipPath>
												</defs>
											</svg>
										</button>
									</div>
								</li>
                                    )
                                })}
								
							</ul>
							<div>
								<button className={css.articles__loadmore}>
									<img src={backup} alt="LoadMore" />
									Більше статей
								</button>

								<ul className={css.listpaginathon}>
									<li>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
										>
											<g clip-path="url(#clip0_7812_1009)">
												<path
													d="M15.4102 16.59L10.8302 12L15.4102 7.41L14.0002 6L8.00016 12L14.0002 18L15.4102 16.59Z"
													fill="#011936"
												/>
											</g>
											<defs>
												<clipPath id="clip0_7812_1009">
													<rect
														width="24"
														height="24"
														rx="12"
														transform="matrix(-1 0 0 1 24 0)"
														fill="white"
													/>
												</clipPath>
											</defs>
										</svg>
									</li>
									<li className={css.itempagin}>1</li>
									<li className={css.itempagin}>2</li>
									<li className={css.itempagin}>3</li>
									<li>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
										>
											<g clip-path="url(#clip0_7812_1026)">
												<path
													d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z"
													fill="#011936"
												/>
											</g>
											<defs>
												<clipPath id="clip0_7812_1026">
													<rect width="24" height="24" rx="12" fill="white" />
												</clipPath>
											</defs>
										</svg>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}
