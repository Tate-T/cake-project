//global
import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
//slyle
import styles from './BestConfectioners.module.css'
//other
import topImg1 from '../../imgs/confectioners/Inna.png'
import topImg2 from '../../imgs/confectioners/Ivanna.png'
import topImg3 from '../../imgs/confectioners/homeBakery.png'
import { getListCondist } from '../../redux/BestConditersMain/topCondistWere'
import { retry } from '@reduxjs/toolkit/query'
import { nanoid } from 'nanoid'
const animals = [
	'https://s3-alpha-sig.figma.com/img/bd3b/62a3/a607857a668b3e8860b2eb09434b69a0?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iUPp7htZtWW0p~~fLoAVsxFifaukRTgRq2n1MlIPiCqwWhtabWspldXW7OfmUIvhjiO7iFKAOzM4lBYgyduBiu0dM0cDJ0OqRD7ojS4Jg1l5D~aTzwMwT339nMaB0u8eVcBcg~OQoI-EcXddJKNMjnGGsdMqTkHiD-lEvraitUV7lUtRBSfVOAEh0jXpUOcKRcQIKjWiw5w8Miiv5fxunzqSFp91kNwX9-~93vWh8bcYVoWka7jerCszzYITJRZPdVYuZfXk8J1MM6hbmDkR3zqmxVCw5VnPXOcVx1LoKa44uVJ9plI2qDXm32DyZnrZSr58R2~5gRU2Azqpfi~9SA__',
	'https://s3-alpha-sig.figma.com/img/bd64/539b/df4e425f07e78464cf31f47ca4ae2063?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WS-~dL~~oluScSv0m5OlTHgc6eY5SGSsazcJvTnubRVmu2SdGhSGj06gxbE2d3ZFlvpepAwMWkXRYc1zRjNgUaqcRnMNbXS~imYCqXHJzkzwqY2kiIoZ8Hb-szkeFkNBwvt4v4TapL8SrESLWSvnj1g-mJqupnjaSk0mmuAXjQD4YUWL9D67i2-lBtqyfA3PI6kpIh62LHbmVfpoj~dkjBh~ByhOax6xqAeS4gm9xmKS1Kxo1neWQqMYzAHb6~FmodkJ~Kv4TNJa0J7REhsvexEvqeijWKwrAFB11lkoyHEgNw9oBy1~1PdwVc3-6bibH2PIq65abZcaHcmmdKZBzw__',
	'https://s3-alpha-sig.figma.com/img/93d5/2f12/b50c000528ebc46cd9e446ecf1162816?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hpEzG0xYy6-UegPMDh~sVcIZnFDuBCD~JdLWpbrdOU45UStPx8ZGNskJpUCTTXJYXShaNljYMQ09oIvF3MGXLUHVFbanaN~S57~QxMuHJrrYvLB36uYSpWmNEMCbnZTVR4myks3llMttEa2LQlKUoXr~MqP3t~83Wl~eMQsZCNgTUbCjAUb-unmF7HFiRsE-fphEA~TzVPzHZHpD-F1HsFK35IhVGCzIrDfsGTEryORg~84~7E7V16nyHXkmP6EjgM8OtubBBDbOPjaVc99jxvsLhJMVne-W2ndYE~t4CC3W69cO2kdVPRoekveVIuVX90p4HZkgPaTOYhw6vzCjnA__',
]
export default function ListTopPip() {
	const dispatch = useDispatch()
	const listCond = useSelector((state) => {
		return state.listConditersBest.listCond
	})
	// console.log(listCond)
	useEffect(() => {
		dispatch(getListCondist())
	}, [dispatch])

	const getRandomElement = (arr) => {
		const randomIndex = Math.floor(Math.random() * arr.length);
		return arr[randomIndex];
	  }
	// console.log(cutList)
	return (
		<>
			<div className={styles.glawBox}>
				<div className={styles.boxesFlex}>
					<h2 className={styles.glawTxtState}>Кращі кондитери</h2>
					<div className={styles.boxesFlexInfo}>
						<NavLink className={styles.btnAllPoregl} to="/confecionres">
							Переглянути всі
						</NavLink>
						<button className={styles.stateArrowBtn}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<g clipPath="url(#clip0_5811_8201)">
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
						<button className={styles.stateArrowBtn}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<g clipPath="url(#clip0_5811_8201)">
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
					</div>
				</div>
				<ul className={styles.ul}>
					{listCond.slice(0, 3).map((data) => {
						// console.log(data)
						return (
							<li key={nanoid()}>
								<Link to="/confectioner/about">
									<div className={styles.infoCardBox}>
										<img className={styles.img} src={getRandomElement(animals)} alt="info" />
										<div className={styles.infoBox}>
											<h2 className={styles.titleInfo}>{data.login}</h2>
											<p className={styles.vidgugInfo}>23 відгуки</p>
											<p className={styles.koditerInfo}>
												Кондитер IV розряду та автор «Школа юного кондитера»
												Рекордсмен книги рекордів...
											</p>
											<div className={styles.boxesFlexCoocing}>
												<div className={styles.cookingIfo}>
													<p className={styles.coocTetx}>Торти</p>
												</div>
												<div className={styles.cookingIfo}>
													<p className={styles.coocTetx}>Цукерки</p>
												</div>
												<div className={styles.cookingIfo}>
													<p className={styles.coocTetx}>+3</p>
												</div>
											</div>
										</div>
									</div>
								</Link>
							</li>
						)
					})}

					{/* <li>
						<Link to="/confectioner/about">
							<div className={styles.infoCardBox}>
								<img className={styles.img} src={topImg1} alt="info" />
								<div className={styles.infoBox}>
									<h2 className={styles.titleInfo}>Інна Пономаренко</h2>
									<p className={styles.vidgugInfo}>23 відгуки</p>
									<p className={styles.koditerInfo}>
										Кондитер IV розряду та автор «Школа юного кондитера»
										Рекордсмен книги рекордів...
									</p>
									<div className={styles.boxesFlexCoocing}>
										<div className={styles.cookingIfo}>
											<p className={styles.coocTetx}>Торти</p>
										</div>
										<div className={styles.cookingIfo}>
											<p className={styles.coocTetx}>Цукерки</p>
										</div>
										<div className={styles.cookingIfo}>
											<p className={styles.coocTetx}>+3</p>
										</div>
									</div>
								</div>
							</div>
						</Link>
					</li>
					<li>
						<Link to="/confectioner/about">
							<div className={styles.infoCardBox}>
								<img className={styles.img} src={topImg3} alt="info" />
								<div className={styles.infoBox}>
									<h2 className={styles.titleInfo}>Home Bakery</h2>
									<p className={styles.vidgugInfo}>59 відгуки</p>
									<p className={styles.koditerInfo}>
										Кондитер IV розряду та автор «Школа юного кондитера»
										Рекордсмен книги рекордів...
									</p>
									<div className={styles.boxesFlexCoocing}>
										<div className={styles.cookingIfo}>
											<p className={styles.coocTetx}>Торти</p>
										</div>
										<div className={styles.cookingIfo}>
											<p className={styles.coocTetx}>Капкейки</p>
										</div>
										<div className={styles.cookingIfo}>
											<p className={styles.coocTetx}>+3</p>
										</div>
									</div>
								</div>
							</div>
						</Link>
					</li>
					<li>
						<Link to="/confectioner/about">
							<div className={styles.infoCardBox}>
								<img className={styles.img} src={topImg2} alt="info" />
								<div className={styles.infoBox}>
									<h2 className={styles.titleInfo}>Іванна Марченко</h2>
									<p className={styles.vidgugInfo}>15 відгуки</p>
									<p className={styles.koditerInfo}>
										Кондитер IV розряду та автор «Школа юного кондитера»
										Рекордсмен книги рекордів...
									</p>
									<div className={styles.boxesFlexCoocing}>
										<div className={styles.cookingIfo}>
											<p className={styles.coocTetx}>Макаруни</p>
										</div>
										<div className={styles.cookingIfo}>
											<p className={styles.coocTetx}>Капкейки</p>
										</div>
										<div className={styles.cookingIfo}>
											<p className={styles.coocTetx}>+3</p>
										</div>
									</div>
								</div>
							</div>
						</Link>
					</li> */}
				</ul>
			</div>
		</>
	)
}
