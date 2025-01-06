import React from 'react';
import HeaderComp from '../../components/general-components/Header/Header';
import { Container } from '../../components/general-components/Container/Container.styled';
import { ConfectionersList } from '../../components/general-components/ConfectionersList/ConfectionersList';
import Footerr from '../../components/general-components/Footer/Footer';
import ListState from '../../components/general-components/upFooterListState/ListState';
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
} from './Confecioners.styled';

export const Confecioners = () => {
  return (
    <>
      <HeaderComp />
      <Container>
        <HeroSearchInputBox>
          <HeroSearchInput />
          <HeroSearchBtn type="button">Шукати</HeroSearchBtn>
        </HeroSearchInputBox>
        <HeroPopularSearchList>
          {['Капкейки', 'Торти', 'Кейк-попси', 'Макаруни', 'Печиво', 'Цукерки'].map((item) => (
            <HeroPopularSearchItem key={item}>
              <HeroPopularSearchText>{item}</HeroPopularSearchText>
            </HeroPopularSearchItem>
          ))}
        </HeroPopularSearchList>
        <ConfectionersList />
        <BtnLoading type="button">
          Більше смаколиків
        </BtnLoading>
        <LoadingList>
          {[1, 2, 3, 4, '...', 15].map((item, index) => (
            <li key={index}>
              <LoadingBtn type="button">{item}</LoadingBtn>
            </li>
          ))}
        </LoadingList>
        <ListState />
      </Container>
      <Footerr />
    </>
  );
};