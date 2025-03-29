//global
import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
//slyle
import styles from './bestConfectioners.module.css'
import topImg1 from '../../imgs/confectioners/Inna.png'
import topImg2 from '../../imgs/confectioners/Ivanna.png'
import topImg3 from '../../imgs/confectioners/homeBakery.png'
import { getListCondist } from '../../redux/BestConditersMain/topCondistWere'
import { nanoid } from 'nanoid'
import { listCondSelector } from '../../redux/BestConditersMain/selectors'
const animals = [topImg1, topImg2, topImg3]

export default function ListTopPip() {
	const dispatch = useDispatch()
	const [showAll, setShowAll] = useState(false)
  useEffect(() => {
    dispatch(getListCondist())
  }, [dispatch])
  const listCond = useSelector(listCondSelector)
	const getRandomElement = (arr) => {
		const randomIndex = Math.floor(Math.random() * arr.length)
		return arr[randomIndex]
	}
	function changeShoeAll(e) {
		setShowAll(true)
	}
	return (
		<>
			<div className={styles.glawBox}>
				<div className={styles.boxesFlex}>
					<h2 className={styles.glawTxtState}>Кращі кондитери</h2>
					<div className={styles.boxesFlexInfo}>
						{/* to="/confecionres" */}
						<button
							onClick={() => changeShoeAll()}
							className={styles.btnAllPoregl}
						>
							<NavLink className={styles.btnAllPoreglIn}>
								Переглянути всі
							</NavLink>
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
					{(showAll ? listCond : listCond.slice(0, 3)).map((data) => {
						// console.log(data)
						return (
							<li className={styles.item} key={nanoid()}>
								<Link to="/confectioner/about">
									<div className={styles.infoCardBox}>
										<img
											className={styles.img}
											src={getRandomElement(animals)}
											alt="info"
										/>
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
				</ul>
			</div>
		</>
	)
}
