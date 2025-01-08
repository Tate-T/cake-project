import styled from 'styled-components';
// import { List } from '../../components/general-components/List/List.styled';

export const HeroSearchInputBox = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 40px;

  button:hover {
    cursor: pointer;
  }
`;

export const HeroSearchInput = styled.input`
  border-radius: 5px 0 0 5px;
  border: 1px solid #dfdfdf;
  width: 1340px;
  height: 48px;
  padding: 0 20px;
`;

export const HeroSearchBtn = styled.button`
  padding: 14px 30px;
  border-radius: 0 5px 5px 0;
  border: 1px solid #fdad6d;
  background-color: ${(props) => props.theme.colors.buttonsColor};
  color: #8e4a4e;
  font-family: 'Verdana';
  font-size: ${(props) => props.theme.spacings(4.5)};
  height: 50px;
`;

// export const HeroPopularSearchList = styled(List)`
//   max-width: 800px;
//   gap: 10px;
//   margin: 30px auto 40px;
//   justify-content: left;
// `;

export const HeroPopularSearchItem = styled.li`
  border-radius: 40px;
  background-color: #fff2f2;
  padding: 5px 20px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export const HeroPopularSearchText = styled.p`
  color: #8e4a4e;
  font-family: 'Verdana';
  font-size: 16px;
`;

export const BtnLoading = styled.button`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: var(--CTA-blue, #43607C);
  font-family: Inter;
  font-size: 16px;
  border-radius: 49px;
  border: 1px solid var(--CTA-blue-text, #84A6C2);
  padding: 5px 10px;
  width: 100%;
`;

export const LoadingList = styled.ul`
  justify-content: center;
  align-items: center;
  width: 435px;
  gap: 10px;
  margin: 40px auto 80px;
  display: flex;
  flex-wrap: wrap;
`;

export const LoadingBtn = styled.button`
  border-radius: 50px;
  background-color: transparent;
  width: 50px;
  height: 50px;
  font-family: Inter;
  font-size: 18px;
  border: 1px solid var(--CTA-yellow-border, #FFE2CA);
  background: var(--White, #FFF);
`;