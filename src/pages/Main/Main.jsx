// import { useState, useEffect } from "react";
// import HeaderComp from "../../components/general-components/Header/Header";
// import { Container } from "../../components/general-components/Container/Container.styled";
// import { Logo } from "../../components/general-components/Logo/Logo.styled";
// import Chat from "../../imgs/chat.svg";
// import Login from "../../imgs/login.svg";
// // import Position from "../../imgs/position.svg";
// // import styled from "styled-components";
// import { Link, NavLink } from "react-router-dom";
// // import Articles from "../Articles.jsx";
// // import {GoodsPage} from "../Goods/GoodsPage.jsx";

// // import ConfectionerProducts from "../ConfectionerProducts/ConfectionerProducts.jsx";
// // !hero imgs
// import heroAdditionalImg1 from "../../imgs/hero-additional/hero-additional-1.png";
// import heroAdditionalImg2 from "../../imgs/hero-additional/hero-additional-2.png";
// import heroAdditionalImg3 from "../../imgs/hero-additional/hero-additional-3.png";

// // !cupcakes imgs
// import cupcakeImg1 from "../../imgs/cupcakes/cupcake-1.jpg";
// import cupcakeImg2 from "../../imgs/cupcakes/cupcake-2.jpg";
// import cupcakeImg3 from "../../imgs/cupcakes/cupcake-3.jpg";
// import cupcakeImg4 from "../../imgs/cupcakes/cupcake-4.jpg";
// import cupcakeImg5 from "../../imgs/cupcakes/cupcake-5.jpg";

// import { Hero } from "../../components/main-page/Hero/Hero.styled";
// import { Cakes } from "../../components/main-page/Cakes/Cakes-styled";
// import { Cupcakes } from "../../components/main-page/Cupcakes/Cupcakes.styled";
// import { MoreClients } from "../../components/main-page/More-clients/MoreClients.styled";
// import { List } from "../../components/general-components/List/List.styled";
// // import Btn from "../../components/general-components/Btn/Btn";

// // import Footerr from "../../components/general-components/Footer/Footer";
// import ListState from "../../components/general-components/upFooterListState/ListState";
// import ListTopPip from "../../components/general-components/upUpFooterListBestCondeters/ListBestCoditers";
// //! header
// // import shablonModal from "../../components/shablonForm/shablonForm"

// // routers
// // import { Desserts } from "../Desserts/desserts";
// const LocationBtn = styled.button`
//   border-radius: 36px;
//   background-color: rgb(255, 242, 242);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 5px 20px 5px 20px;
//   margin-left: 30px;
// `;

// const ChatIcon = styled.img`
//   margin-right: 30px;
//   margin-left: auto;
//   width: 25px;
// `;
// ChatIcon.defaultProps = {
//   src: Chat,
// };

// const LoginIcon = styled.img`
//   width: 25px;
//   margin-right: 12.5px;
// `;
// LoginIcon.defaultProps = {
//   src: Login,
// };

// const PositionIcon = styled.img`
//   width: 14px;
//   margin-right: 15px;
// `;
// PositionIcon.defaultProps = {
//   src: Position,
// };

// // !hero
// const HeroTitle = styled.h1`
//   font-family: "Yeseva One";
//   font-size: 42px;
//   font-weight: 400;
//   line-height: 120%;
//   margin-bottom: 15px;
//   max-width: 463px;
//   color: #011936;
// `;

// const HeroDescription = styled.p`
//   font-family: "Verdana";
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 24px;
//   color: ${(props) => props.theme.colors.textColor};
//   max-width: 463px;
// `;

// const HeroSearchInputBox = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 30px;

//   button:hover {
//     cursor: pointer;
//   }
// `;

// const HeroSearchInput = styled.input`
//   display: block;
//   border-radius: 5px 0px 0px 5px;
//   border: 1px solid #dfdfdf;
//   width: 720px;
//   height: 48px;
//   padding: 0 20px 0 20px;
// `;

// const HeroSearchBtn = styled.button`
//   display: block;
//   padding: 14px 30px;
//   border-radius: 0px 5px 5px 0px;
//   border: 1px solid #fdad6d;
//   background-color: ${(props) => props.theme.colors.buttonsColor};
//   color: #8e4a4e;
//   font-family: "Verdana";
//   font-size: ${(props) => props.theme.spacings(4.5)};
//   font-weight: 400;
//   line-height: 120%;
//   height: 50px;
// `;

// const HeroPopularSearchList = styled(List)`
//   max-width: 800px;
//   gap: 10px;
//   margin-top: 30px;
// `;

// const HeroPopularSearchItem = styled.li`
//   border-radius: 40px;
//   background-color: #fff2f2;
//   padding: 5px 20px;
//   height: 36px;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   *:hover {
//     cursor: pointer;
//   }
// `;

// const HeroPopularSearchText = styled.p`
//   color: #8e4a4e;
//   font-family: "Verdana";
//   font-size: 16px;
//   font-weight: 400;
//   line-height: 120%;
// `;

// const HeroOtherVariantsItem = styled.li`
//   padding: 5px 20px;
//   height: 36px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: transparent;

//   p {
//     color: #8e4a4e;
//     font-family: Verdana;
//     font-size: 16px;
//     font-weight: 400;
//     line-height: 120%;
//     margin-right: 5px;
//   }

//   *:hover {
//     cursor: pointer;
//   }
// `;

// const HeroArrowsBox = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-top: 60px;
//   margin-left: 795px;
// `;

// const HeroProductsList = styled.ul`
//   display: flex;
//   align-items: center;
//   gap: 20px;
//   margin-top: 15px;

//   li {
//     display: flex;
//     align-content: center;
//     justify-content: center;
//     flex-direction: column;

//     img {
//       max-width: 153px;
//     }

//     h2 {
//       color: ${(props) => props.theme.colors.textColor};
//       font-family: Verdana;
//       font-size: ${(props) => props.theme.spacings(4.5)};
//       font-weight: 700;
//       line-height: 24px; /* 133.333% */
//       text-align: center;
//       margin-top: 10px;
//     }

//     h2:hover {
//       cursor: pointer;
//       text-decoration: underline;
//     }
//   }
// `;

// const HeroFlexBox = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const HeroImgsBox = styled.div`
//   display: flex;
//   gap: 20px;
//   flex-wrap: nowrap;
//   margin-left: auto;

//   div {
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     gap: 20px;
//   }
// `;

// const HeroAdditionalSmallImg = styled.img`
//   width: 175px;
//   height: 333px;
// `;

// const HeroAdditionalBigImg = styled.img`
//   width: 355px;
//   height: 684px;
// `;

// const CakesTitle = styled.h2`
//   color: ${(props) => props.theme.colors.titleColor};
//   font-family: "Yeseva One";
//   font-size: ${(props) => props.theme.fontSizes.title};
//   font-style: normal;
//   font-weight: 400;
//   line-height: 120%; /* 42px */
// `;

// const CakesBox = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const CakesBtnsBox = styled.div`
//   margin-left: auto;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const CakesBtnSeeAll = styled.button`
//   padding: 5px 20px;
//   border-radius: 30px;
//   background-color: #dcebf8;
//   color: ${(props) => props.theme.colors.textColor};
//   font-family: Verdana;
//   font-size: ${(props) => props.theme.spacings(3.5)};
//   font-style: normal;
//   font-weight: 400;
//   line-height: 24px; /* 171.429% */
// `;

// const CakesArrowBtn = styled.button`
//   background-color: transparent;
//   border: none;
// `;

// const CakesList = styled.ul`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 18px;
//   margin-top: 20px;

//   li {
//     max-width: 280px;
//   }
// `;

// const CakeCardTitle = styled.h2`
//   color: ${(props) => props.theme.colors.accentColor};
//   font-family: Verdana;
//   font-size: ${(props) => props.theme.spacings(4.5)};
//   font-weight: 700;
//   line-height: 120%;
//   /* margin-top: 15px; */
// `;

// const CakeCardSubtitle = styled.p`
//   color: ${(props) => props.theme.colors.titleColor};
//   font-family: Verdana;
//   font-size: ${(props) => props.theme.spacings(4)};
//   font-weight: 400;
//   line-height: 20px;
//   /* margin-top: 10px; */
//   max-width: 250px;
// `;

// const CakeCardDescription = styled.p`
//   color: #84a6c2;
//   font-family: Verdana;
//   font-size: ${(props) => props.theme.spacings(3.5)};
//   font-weight: 400;
//   line-height: 120%;
//   /* margin-top: 5px; */
// `;

// const CakesCardBox = styled.div`
//   padding: 15px 15px 15px 15px;
//   box-shadow: ${(props) => props.theme.shadows.cupcakesCard};
//   border-radius: 5px;
//   height: 114px;
//   display: flex;
//   /* align-items: center; */
//   justify-content: space-between;
//   flex-direction: column;
// `;

// const MoreClientsTitle = styled.h2`
//   color: ${(props) => props.theme.colors.titleColor};
//   font-family: "Yeseva One";
//   font-size: ${(props) => props.theme.fontSizes.title};
//   font-weight: 400;
//   line-height: 120%;
//   text-align: center;
// `;

// const MoreClientsDescription = styled.h3`
//   color: ${(props) => props.theme.colors.textColor};
//   text-align: center;
//   font-family: Verdana;
//   font-size: ${(props) => props.theme.spacings(4)};
//   font-weight: 400;
//   line-height: 24px;
//   margin-top: 10px;
// `;

// const MoreClientsBtn = styled.button`
//   display: block;
//   border-radius: 30px;
//   background-color: ${(props) => props.theme.colors.textColor};
//   padding: 8px 20px;
//   color: #fff;
//   font-family: Verdana;
//   font-size: ${(props) => props.theme.spacings(3.5)};
//   font-weight: 700;
//   line-height: 24px;
//   margin-top: 20px;
//   margin-left: auto;
//   margin-right: auto;
// `;

// export const Main = ({ func }) => {
//   const [typesOfCakes, setTypesOfCakes] = useState([]);
//   const [typesOfCakesisLoading, setTypesOfCakesIsLoading] = useState(false);
//   const [varietyOfProducts, setVarietyOfProducts] = useState([]);
//   const [varietyOfProductsIsLoading, setVarietyOfProductsIsLoading] =
//     useState(false);
//   const [cakes, setCakes] = useState([]);
//   const [cakesIsLoading, setCakesIsLoading] = useState(false);

//   useEffect(() => {
//     setTypesOfCakesIsLoading(true);
//     fetch("http://localhost:3000/typesOfCakes")
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data);
//         setTypesOfCakes(data);
//         // console.log(typesOfCakes);
//       })
//       .catch((err) => console.log(err))
//       .finally(() => {
//         setTypesOfCakesIsLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     setVarietyOfProductsIsLoading(true);
//     fetch("http://localhost:3000/varietyOfProducts")
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data);
//         setVarietyOfProducts(data);
//       })
//       .catch((err) => console.log(err))
//       .finally(() => {
//         setVarietyOfProductsIsLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     setCakesIsLoading(true);
//     fetch("http://localhost:3000/cakes")
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data)
//         setCakes(data);
//       })
//       .catch((err) => console.log(err))
//       .finally(() => {
//         setCakesIsLoading(false);
//       });
//   }, []);

//   return (
//     <>
//       <HeaderComp></HeaderComp>
//       {/* <Articles></Articles> */}
//       {/* <ConfectionerProducts></ConfectionerProducts> */}
//       <Hero>
//         {/* <shablonModal></shablonModal>     */}
//         <Container>
//           <HeroFlexBox>
//             <div>
//               <HeroTitle>Пошукаємо щось смачненького?</HeroTitle>
//               <HeroDescription>
//                 Ми об’єднали кондитерів з різних міст, щоб необхідні смаколики
//                 можна було замовити ще легше
//               </HeroDescription>
//               <HeroSearchInputBox>
//                 <HeroSearchInput />
//                 <HeroSearchBtn type="button">Шукати</HeroSearchBtn>
//               </HeroSearchInputBox>
//               <HeroPopularSearchList>
//                 {typesOfCakesisLoading === true
//                   ? null
//                   : typesOfCakes.map((type) => (
//                       <HeroPopularSearchItem key={type.id}>
//                         <HeroPopularSearchText>
//                           {type.type}
//                         </HeroPopularSearchText>
//                       </HeroPopularSearchItem>
//                     ))}
//                 <HeroOtherVariantsItem>
//                   <p>Інші варіанти</p>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 20 20"
//                     fill="none"
//                   >
//                     <g clip-path="url(#clip0_5817_8807)">
//                       <path
//                         d="M6.175 7.1582L10 10.9749L13.825 7.1582L15 8.3332L10 13.3332L5 8.3332L6.175 7.1582Z"
//                         fill="#8E4A4E"
//                       />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_5817_8807">
//                         <rect
//                           width="20"
//                           height="20"
//                           fill="white"
//                           transform="matrix(0 1 -1 0 20 0)"
//                         />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                 </HeroOtherVariantsItem>
//               </HeroPopularSearchList>
//               <HeroArrowsBox>
//                 <CakesArrowBtn type="button">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                   >
//                     <g clip-path="url(#clip0_5811_9696)">
//                       <path
//                         d="M15.4102 16.59L10.8302 12L15.4102 7.41L14.0002 6L8.00016 12L14.0002 18L15.4102 16.59Z"
//                         fill="#43607C"
//                       />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_5811_9696">
//                         <rect
//                           width="24"
//                           height="24"
//                           fill="white"
//                           transform="matrix(-1 0 0 1 24 0)"
//                         />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                 </CakesArrowBtn>
//                 <CakesArrowBtn type="button">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                   >
//                     <g clip-path="url(#clip0_5811_8201)">
//                       <path
//                         d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z"
//                         fill="#43607C"
//                       />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_5811_8201">
//                         <rect width="24" height="24" fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                 </CakesArrowBtn>
//               </HeroArrowsBox>
//               <HeroProductsList>
//                 {varietyOfProductsIsLoading === true
//                   ? null
//                   : varietyOfProducts.map((product) => (
//                       <li key={product.id}>
//                         <img src={product.src} alt={product.name} />
//                         <h2>{product.name}</h2>
//                       </li>
//                     ))}
//                 {/* <li>
//                   <img src={heroProductImg1} alt="cake" />
//                   <h2>Торти</h2>
//                 </li>
//                 <li>
//                   <img src={heroProductImg2} alt="cake" />
//                   <h2>Цукерки</h2>
//                 </li>
//                 <li>
//                   <img src={heroProductImg3} alt="cake" />
//                   <h2>Капкейки</h2>
//                 </li>
//                 <li>
//                   <img src={heroProductImg4} alt="cake" />
//                   <h2>Макаруни</h2>
//                 </li>
//                 <li>
//                   <img src={heroProductImg5} alt="cake" />
//                   <h2>Печиво</h2>
//                 </li> */}
//               </HeroProductsList>
//             </div>
//             <HeroImgsBox>
//               <div>
//                 <HeroAdditionalSmallImg src={heroAdditionalImg1} />
//                 <HeroAdditionalSmallImg src={heroAdditionalImg2} />
//               </div>
//               <HeroAdditionalBigImg src={heroAdditionalImg3} />
//             </HeroImgsBox>
//           </HeroFlexBox>
//           {/* <Btn text="Переглянути всі"></Btn> */}
//         </Container>
//       </Hero>
//       <Cakes>
//         <Container>
//           <CakesBox>
//             <CakesTitle>Торти</CakesTitle>
//             <CakesBtnsBox>
//               <CakesBtnSeeAll type="button">Переглянути всі</CakesBtnSeeAll>
//               <CakesArrowBtn type="button">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                 >
//                   <g clip-path="url(#clip0_5811_9696)">
//                     <path
//                       d="M15.4102 16.59L10.8302 12L15.4102 7.41L14.0002 6L8.00016 12L14.0002 18L15.4102 16.59Z"
//                       fill="#43607C"
//                     />
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_5811_9696">
//                       <rect
//                         width="24"
//                         height="24"
//                         fill="white"
//                         transform="matrix(-1 0 0 1 24 0)"
//                       />
//                     </clipPath>
//                   </defs>
//                 </svg>
//               </CakesArrowBtn>
//               <CakesArrowBtn type="button">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                 >
//                   <g clip-path="url(#clip0_5811_8201)">
//                     <path
//                       d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z"
//                       fill="#43607C"
//                     />
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_5811_8201">
//                       <rect width="24" height="24" fill="white" />
//                     </clipPath>
//                   </defs>
//                 </svg>
//               </CakesArrowBtn>
//             </CakesBtnsBox>
//           </CakesBox>
//           <CakesList>
//             {cakesIsLoading === true
//               ? null
//               : cakes.map((cake) => (
//                   <li>
//                     <img src={cake.src} alt={cake.name} />
//                     <CakesCardBox>
//                       <CakeCardTitle>{cake.price} грн</CakeCardTitle>
//                       <CakeCardSubtitle>{cake.name}</CakeCardSubtitle>
//                       <CakeCardDescription>
//                         {cake.quantityOfFillings} варіанти начинок
//                       </CakeCardDescription>
//                     </CakesCardBox>
//                   </li>
//                 ))}
//             {/* <li>
//               <img src={cakeImg1} alt="cake-1" />
//               <CakesCardBox>
//                 <CakeCardTitle>520 грн</CakeCardTitle>
//                 <CakeCardSubtitle>
//                   Торт “Літнє бажання” з шоколадом та макарунами
//                 </CakeCardSubtitle>
//                 <CakeCardDescription>4 варіанти начинок</CakeCardDescription>
//               </CakesCardBox>
//             </li>
//             <li>
//               <img src={cakeImg2} alt="cake-2" />
//               <CakesCardBox>
//                 <CakeCardTitle>520 грн</CakeCardTitle>
//                 <CakeCardSubtitle>
//                   Весільний триярусний торт з фруктами та квітами
//                 </CakeCardSubtitle>
//                 <CakeCardDescription>4 варіанти начинок</CakeCardDescription>
//               </CakesCardBox>
//             </li>
//             <li>
//               <img src={cakeImg3} alt="cake-3" />
//               <CakesCardBox>
//                 <CakeCardTitle>520 грн</CakeCardTitle>
//                 <CakeCardSubtitle>Бісквітний торт з ягодами</CakeCardSubtitle>
//                 <CakeCardDescription>4 варіанти начинок</CakeCardDescription>
//               </CakesCardBox>
//             </li>
//             <li>
//               <img src={cakeImg4} alt="cake-4" />
//               <CakesCardBox>
//                 <CakeCardTitle>520 грн</CakeCardTitle>
//                 <CakeCardSubtitle>
//                   Ванільно-карамельний торт з печивом Орео
//                 </CakeCardSubtitle>
//                 <CakeCardDescription>4 варіанти начинок</CakeCardDescription>
//               </CakesCardBox>
//             </li>
//             <li>
//               <img src={cakeImg5} alt="cake-5" />
//               <CakesCardBox>
//                 <CakeCardTitle>520 грн</CakeCardTitle>
//                 <CakeCardSubtitle>Торт рожевий з макарунами</CakeCardSubtitle>
//                 <CakeCardDescription>4 варіанти начинок</CakeCardDescription>
//               </CakesCardBox>
//             </li> */}
//           </CakesList>
//         </Container>
//       </Cakes>
//       <Cupcakes>
//         <Container>
//           <CakesBox>
//             <CakesTitle>Капкейки</CakesTitle>
//             <CakesBtnsBox>
//               <CakesBtnSeeAll>Переглянути всі</CakesBtnSeeAll>
//               <CakesArrowBtn>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                 >
//                   <g clip-path="url(#clip0_5811_9696)">
//                     <path
//                       d="M15.4102 16.59L10.8302 12L15.4102 7.41L14.0002 6L8.00016 12L14.0002 18L15.4102 16.59Z"
//                       fill="#43607C"
//                     />
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_5811_9696">
//                       <rect
//                         width="24"
//                         height="24"
//                         fill="white"
//                         transform="matrix(-1 0 0 1 24 0)"
//                       />
//                     </clipPath>
//                   </defs>
//                 </svg>
//               </CakesArrowBtn>
//               <CakesArrowBtn>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                 >
//                   <g clip-path="url(#clip0_5811_8201)">
//                     <path
//                       d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z"
//                       fill="#43607C"
//                     />
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_5811_8201">
//                       <rect width="24" height="24" fill="white" />
//                     </clipPath>
//                   </defs>
//                 </svg>
//               </CakesArrowBtn>
//             </CakesBtnsBox>
//           </CakesBox>
//           <CakesList>
//             <li>
//               <img src={cupcakeImg1} alt="cupcake-1" />
//               <CakesCardBox>
//                 Senya, [12.10.2024 12:01]
//                 <CakeCardTitle>520 грн</CakeCardTitle>
//                 <CakeCardSubtitle>
//                   Пасхальні капкейки шоколадні та ванільні
//                 </CakeCardSubtitle>
//                 <CakeCardDescription>4 варіанти начинок</CakeCardDescription>
//               </CakesCardBox>
//             </li>
//             <li>
//               <img src={cupcakeImg2} alt="cupcake-2" />
//               <CakesCardBox>
//                 <CakeCardTitle>520 грн</CakeCardTitle>
//                 <CakeCardSubtitle>
//                   Оригінальні капкейки з кремом та печивом
//                 </CakeCardSubtitle>
//                 <CakeCardDescription>4 варіанти начинок</CakeCardDescription>
//               </CakesCardBox>
//             </li>
//             <li>
//               <img src={cupcakeImg3} alt="cupcake-3" />
//               <CakesCardBox>
//                 <CakeCardTitle>520 грн</CakeCardTitle>
//                 <CakeCardSubtitle>Капкейки з карамеллю 3 шт</CakeCardSubtitle>
//                 <CakeCardDescription>4 варіанти начинок</CakeCardDescription>
//               </CakesCardBox>
//             </li>
//             <li>
//               <img src={cupcakeImg4} alt="cupcake-4" />
//               <CakesCardBox>
//                 <CakeCardTitle>520 грн</CakeCardTitle>
//                 <CakeCardSubtitle>Капкейки з ніжним кремом</CakeCardSubtitle>
//                 <CakeCardDescription>4 варіанти начинок</CakeCardDescription>
//               </CakesCardBox>
//             </li>
//             <li>
//               <img src={cupcakeImg5} alt="cupcake-5" />
//               <CakesCardBox>
//                 <CakeCardTitle>520 грн</CakeCardTitle>
//                 <CakeCardSubtitle>
//                   Чорні капкейки з шоколадом та печивом
//                 </CakeCardSubtitle>
//                 <CakeCardDescription>4 варіанти начинок</CakeCardDescription>
//               </CakesCardBox>
//             </li>
//           </CakesList>
//         </Container>
//       </Cupcakes>
//       <MoreClients>
//         <Container>
//           <MoreClientsTitle>
//             Обожнюєш свою роботу і хочеш більше клієнтів?
//           </MoreClientsTitle>
//           <MoreClientsDescription>
//             Реєструйся як кондитер, викладай фото своїх смаколиків та отримуй
//             замовлення через MyCake
//           </MoreClientsDescription>
//           <MoreClientsBtn type="button">
//             Зареєструватися як кондитер
//           </MoreClientsBtn>
//         </Container>
//       </MoreClients>
//       <Container>
//         <ListTopPip></ListTopPip>
//       </Container>
//       <Container>
//         <ListState></ListState>
//       </Container>
//       <Container>
//         <Footerr></Footerr>
//       </Container>
//     </>
//   );
// };

// export default Main;

import Header from "../../components/Header/Header";
import styles from "./Main.module.css";
import Container from "../../components/Container/Container";
import { useEffect, useState } from "react";

//   *:hover {
//     cursor: pointer;
//   }
// `;


//   *:hover {
//     cursor: pointer;
//   }
// `;

// const HeroArrowsBox = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-top: 60px;
//   margin-left: 795px;
// `;

// const HeroProductsList = styled.ul`
//   display: flex;
//   align-items: center;
//   gap: 20px;
//   margin-top: 15px;

//   li {
//     display: flex;
//     align-content: center;
//     justify-content: center;
//     flex-direction: column;

//     img {
//       max-width: 153px;
//     }

//     h2 {
//       color: ${(props) => props.theme.colors.textColor};
//       font-family: Verdana;
//       font-size: ${(props) => props.theme.spacings(4.5)};
//       font-weight: 700;
//       line-height: 24px; /* 133.333% */
//       text-align: center;
//       margin-top: 10px;
//     }

//     h2:hover {
//       cursor: pointer;
//       text-decoration: underline;
//     }
//   }
// `;

// const HeroFlexBox = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const HeroImgsBox = styled.div`
//   display: flex;
//   gap: 20px;
//   flex-wrap: nowrap;
//   margin-left: auto;

//   div {
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     gap: 20px;
//   }
// `;

// const HeroAdditionalSmallImg = styled.img`
//   width: 175px;
//   height: 333px;
// `;

// const HeroAdditionalBigImg = styled.img`
//   width: 355px;
//   height: 684px;
// `;

const Main = () => {
  const [typeOfCakes, setTypeOfCakes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/typesOfCakes`)
      .then((res) => res.json())
      .then((data) => {
        setTypeOfCakes(data);
      });
  }, []);
  return (
    <>
      <Header />
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroBox}>
            <div>
              <h1 className={styles.heroTitle}>Пошукаємо щось смачненького?</h1>
              <p className={styles.heroDescription}>
                Ми об’єднали кондитерів з різних міст, щоб необхідні смаколики
                можна було замовити ще легше
              </p>
              <div className={styles.heroSearchInputBox}>
                <input className={styles.heroSearchInput} />
                <button type="button" className={styles.heroSearchBtn}>
                  Шукати
                </button>
              </div>
              <ul className={styles.heroPopularSearchList}>
                {typeOfCakes.map((type) => (
                  <li className={styles.heroPopularSearchItem} key={type.id}>
                    <p className={styles.heroPopularSearchText}>{type.type}</p>
                  </li>
                ))}
                <li className={styles.heroOtherVariantsItem}>
                  <p>Інші варіанти</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_5817_8807)">
                      <path
                        d="M6.175 7.1582L10 10.9749L13.825 7.1582L15 8.3332L10 13.3332L5 8.3332L6.175 7.1582Z"
                        fill="#8E4A4E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5817_8807">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="matrix(0 1 -1 0 20 0)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
              </ul>
              <HeroArrowsBox>
                <CakesArrowBtn type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_5811_9696)">
                      <path
                        d="M15.4102 16.59L10.8302 12L15.4102 7.41L14.0002 6L8.00016 12L14.0002 18L15.4102 16.59Z"
                        fill="#43607C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5811_9696">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="matrix(-1 0 0 1 24 0)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </CakesArrowBtn>
                <CakesArrowBtn type="button">
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
                </CakesArrowBtn>
              </HeroArrowsBox>
              <HeroProductsList>
                {varietyOfProductsIsLoading === true
                  ? null
                  : varietyOfProducts.map((product) => (
                      <li key={product.id}>
                        <img src={product.src} alt={product.name} />
                        <h2>{product.name}</h2>
                      </li>
                    ))}
                {/* <li>
                  <img src={heroProductImg1} alt="cake" />
                  <h2>Торти</h2>
                </li>
                <li>
                  <img src={heroProductImg2} alt="cake" />
                  <h2>Цукерки</h2>
                </li>
                <li>
                  <img src={heroProductImg3} alt="cake" />
                  <h2>Капкейки</h2>
                </li>
                <li>
                  <img src={heroProductImg4} alt="cake" />
                  <h2>Макаруни</h2>
                </li>
                <li>
                  <img src={heroProductImg5} alt="cake" />
                  <h2>Печиво</h2>
                </li> */}
              </HeroProductsList>
            </div>
            <HeroImgsBox>
              <div>
                <HeroAdditionalSmallImg src={heroAdditionalImg1} />
                <HeroAdditionalSmallImg src={heroAdditionalImg2} />
              </div>
              <HeroAdditionalBigImg src={heroAdditionalImg3} />
            </HeroImgsBox>
          </div>
          {/* <Btn text="Переглянути всі"></Btn> */}
        </Container>
      </section>
    </>
  );
};

export default Main;
