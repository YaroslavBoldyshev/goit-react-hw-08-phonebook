import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  @media screen and (min-width: 480px) {
    width: 320px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
