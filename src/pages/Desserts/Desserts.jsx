import styles from './Desserts.module.css'
import Header from '../../components/Header/Header'
import SearchForm from '../../components/SearchForm/SearchForm.jsx'
import Container from '../../components/Container/Container.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { setValue } from '../../redux/cakes/cakesSlice.js'
import ListState from '../../components/StateConfectioners/StateeConfectioners'
import ListTopPip from '../../components/BestConfectioners/BestConfectioners.jsx'
import { fetchCakes } from '../../redux/cakes/operations.js'
import { selectValue, selectFoundCakes } from '../../redux/cakes/selectors.js'

const Desserts = () => {
	const dispatch = useDispatch()
	const [page, setPage] = useState([0, 1])
	const cakes = useSelector(selectFoundCakes)
	const value = useSelector(selectValue)
	useEffect(() => {
		dispatch(fetchCakes())
	}, [])
	const handleChange = (e) => {
		setPage([0, 1])
		dispatch(setValue(e.target.value))
	}
	return (
		<>
			<Header />
			<Container>
				<section>
					<SearchForm
						placeholder="Шоколадний торт з квітами"
						cb={handleChange}
						value={value}
					/>
					<section className={styles.sectionDesserts}>
						<div className={styles.dessertsListBox}>
							<h2 className={styles.dessertsTitle}>Шукаєш щось особливе?</h2>
							<ul className={styles.dessertsRecipList}>
								<h2 className={styles.dessertsListTitle}>Тематика</h2>
								{[
									'Для дівчат',
									'Для чоловіків',
									'Патріотичні',
									'Весільні',
									'До дня народження',
									'Корпоративні',
								].map((text, index) => (
									<li
										key={`theme-${index}`}
										className={styles.dessertsListItem}
									>
										<input type="checkbox" className={styles.dessertsInput} />
										<p className={styles.dessertsText}>{text}</p>
									</li>
								))}
							</ul>
						</div>
						<div className={styles.dessertsBox}>
							<ul className={styles.dessertsListBtn}>
								{[
									'Капкейки',
									'Торти',
									'Кейк-попси',
									'Макаруни',
									'Печиво',
									'Цукерки',
								].map((btnText, index) => (
									<li
										key={`btn-${index}`}
										className={styles.dessertsListItemBtn}
									>
										<button className={styles.dessertsBtn}>{btnText}</button>
									</li>
								))}
							</ul>
							<ul className={styles.dessertsList}>
								{cakes.slice(page[0] * 8, page[1] * 8).map((item, index) => (
									<li key={`dessert-${index}`} className={styles.dessertsItem}>
										<img
											src={item.src}
											alt="dessert"
											className={styles.dessertsImg}
										/>
										<h2 className={styles.dessertsTextCurrency}>
											{item.price} грн
										</h2>
										<p className={styles.dessertsTextDescription}>
											{item.name}
										</p>
										<p className={styles.dessertsTextNumber}>
											{item.quantityOfFillings} варіанти начинок
										</p>
									</li>
								))}
							</ul>
						</div>
					</section>
					<div className={styles.cakes__pagination}>
						<span className={styles['cakes__arrow--left']}>&#x3c;</span>
						{cakes.map((_, idx) =>
							(idx + 1) % 8 === 0 || idx + 1 === cakes.length ? (
								<li
									key={nanoid()}
									style={
										page[0] + 1 === Math.ceil((idx + 1) / 8)
											? { fontWeight: '700', background: '#FDAD6D' }
											: {}
									}
									onClick={() =>
										setPage([
											Math.ceil((idx + 1) / 8) - 1,
											Math.ceil((idx + 1) / 8),
										])
									}
								>
									{Math.ceil((idx + 1) / 8)}
								</li>
							) : null
						)}
						<span className={styles['cakes__arrow--right']}>&#x3e;</span>
					</div>
					{/* <button type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 26"
              fill="none"
            >
              <g clip-path="url(#clip0_5801_95)">
                <path
                  d="M14.5833 13C14.5833 11.8542 13.6458 10.9167 12.5 10.9167C11.3542 10.9167 10.4167 11.8542 10.4167 13C10.4167 14.1458 11.3542 15.0833 12.5 15.0833C13.6458 15.0833 14.5833 14.1458 14.5833 13ZM12.5 3.625C7.32292 3.625 3.125 7.82292 3.125 13H0L4.16667 17.1667L8.33333 13H5.20833C5.20833 8.96875 8.46875 5.70833 12.5 5.70833C16.5312 5.70833 19.7917 8.96875 19.7917 13C19.7917 17.0312 16.5312 20.2917 12.5 20.2917C10.9271 20.2917 9.46875 19.7812 8.27083 18.9375L6.79167 20.4375C8.375 21.6458 10.3542 22.375 12.5 22.375C17.6771 22.375 21.875 18.1771 21.875 13C21.875 7.82292 17.6771 3.625 12.5 3.625Z"
                  fill="#43607C"
                />
              </g>
              <defs>
                <clipPath id="clip0_5801_95">
                  <rect
                    width="25"
                    height="25"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            Більше смаколиків
          </button>
          <div>
            <ul>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_5801_7076)">
                  <path
                    d="M15.4102 16.59L10.8302 12L15.4102 7.41L14.0002 6L8.00016 12L14.0002 18L15.4102 16.59Z"
                    fill="#011936"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5801_7076">
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
              <li>
                <button type="button">1</button>
              </li>
              <li>
                <button type="button">2</button>
              </li>
              <li>
                <button type="button">3</button>
              </li>
              <li>
                <button type="button">4</button>
              </li>
              <li>...</li>
              <li>
                <button type="button">15</button>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_5801_7093)">
                  <path
                    d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z"
                    fill="#011936"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5801_7093">
                    <rect width="24" height="24" rx="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </ul>
          </div> */}
				</section>
			</Container>
			<Container>
				<ListState></ListState>
			</Container>
			<Container>
				<ListTopPip></ListTopPip>
			</Container>

			<Footer></Footer>
		</>
	)
}
export default Desserts
// import data from "../confectionerProducts.json";
// import { Link } from "react-router-dom";
// import css from "./Desserts.module.css";
// // import Header from "../../components/Header/Header";

// const Desserts = () => {
//   return (
//     <>
//       <Header />
//       <ul>
//         {data.map((item) => {
//           return (
//             <>
//               <li>
//                 <Link to={`/desserts/${item.id}`}>
//                   <img className={css.img} src={item.photo} />
//                 </Link>
//               </li>
//             </>
//           );
//         })}
//       </ul>
//     </>
//   );
// };

// export default Desserts;
