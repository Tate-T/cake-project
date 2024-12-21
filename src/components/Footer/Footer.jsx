import sty from './Footer.module.css'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
// const FooterLink = styled(NavLink)`
// 	font-family: 'Verdana';
// 	color: rgb(255, 255, 255);
// 	font-size: 18px;
// 	font-weight: 400;
// 	line-height: 120%;

// 	&.active {
// 		color: #8e4a4e;
// 	}
// `
export default function Footer() {
	return (
		<>
			<footer className={sty.footer}>
				{/* <Container> */}
				<ul className={sty.listItem}>
					<li>
						<div className={sty.titlePart}>
							<Link to="/">
								<h2 className={sty.title}>MyCake</h2>
							</Link>
							<div className={sty.locationBox}>
								<a href="https://www.google.com/maps/place/%D0%91%D0%B5%D1%80%D0%BB%D1%96%D0%BD,+%D0%9D%D1%96%D0%BC%D0%B5%D1%87%D1%87%D0%B8%D0%BD%D0%B0/@52.4089794,12.6368873,8.55z/data=!4m6!3m5!1s0x47a84e373f035901:0x42120465b5e3b70!8m2!3d52.5200066!4d13.404954!16zL20vMDE1NnE?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D">
									<img className={sty.imgLoacation} />
								</a>

								<p className={sty.textLocations}>Вся Україна</p>
							</div>
						</div>
					</li>
					<li>
						<div className={sty.linkBox}>
							<link className={sty.linksTo} to="/desserts">
								<p className={sty.linkTxt}>Десерти</p>
							</link>
							<link className={sty.linksTo} to="/confecionres">
								<p className={sty.linkTxt}>Кращі кондитери</p>
							</link>
							<link className={sty.linksTo} to="/articles">
								<p className={sty.linkTxt}>Корисні статті</p>
							</link>
						</div>
					</li>
					<li>
						<div className={sty.boxBtn}>
							<button className={sty.btnPrav}>Правила користування</button>
							<button className={sty.btnInfo}>Форма зворотнього зв’язку</button>
						</div>
					</li>
					<li>
						<div className={sty.boxInfoLinks}>
							<p className={sty.textInfo}>© Mycake 2022</p>
							<p className={sty.textInfo}>All rights reserved</p>
							<div className={sty.boxLinksInfo}>
								<a href="https://www.instagram.com/">
									<img />
								</a>
								<a href="https://www.youtube.com/">
									<img />
								</a>
							</div>
						</div>
					</li>
				</ul>
				{/* </Container> */}
			</footer>
		</>
	)
}
