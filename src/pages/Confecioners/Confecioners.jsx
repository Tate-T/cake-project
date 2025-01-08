import React from "react";
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
// import { ConfectionersList } from "../../components/general-components/ConfectionersList/ConfectionersList";
import Footer from "../../components/Footer/Footer";
// import ListState from "../../components/general-components/upFooterListState/ListState";
import {
  HeroSearchInputBox,
  HeroSearchInput,
  HeroSearchBtn,
  HeroPopularSearchList,
  HeroPopularSearchItem,
  HeroPopularSearchText,
  BtnLoading,
  LoadingList,
  LoadingBtn,
} from "./Confecioners.styled";

const Confecioners = () => {
  return (
    <>
      <Header />
      <Container>
        <HeroSearchInputBox>
          <HeroSearchInput />
          <HeroSearchBtn type="button">Шукати</HeroSearchBtn>
        </HeroSearchInputBox>
        <HeroPopularSearchList>
          {[
            "Капкейки",
            "Торти",
            "Кейк-попси",
            "Макаруни",
            "Печиво",
            "Цукерки",
          ].map((item) => (
            <HeroPopularSearchItem key={item}>
              <HeroPopularSearchText>{item}</HeroPopularSearchText>
            </HeroPopularSearchItem>
          ))}
        </HeroPopularSearchList>
        {/* <ConfectionersList /> */}
        <BtnLoading type="button">Більше смаколиків</BtnLoading>
        <LoadingList>
          {[1, 2, 3, 4, "...", 15].map((item, index) => (
            <li key={index}>
              <LoadingBtn type="button">{item}</LoadingBtn>
            </li>
          ))}
        </LoadingList>
        {/* <ListState /> */}
      </Container>
      <Footer />
    </>
  );
};

export default Confecioners;