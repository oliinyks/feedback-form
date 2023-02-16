import styled from '@emotion/styled';

export const Main = styled.main`
  @media (min-width: 767px) {
    min-height: calc(100vh - 200px);
  }
`;

export const Section = styled.div`
  display: block;
  align-items: center;

  @media (min-width: 767px) {
    display: flex;
  }
`;

export const Img = styled.img`
  display: none;
  @media (min-width: 767px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Img2 = styled.img`
  display: none;
  @media (min-width: 767px) {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(-50%, 10%);
    z-index: 2;
  }
`;

export const Box = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 80px 10px 50px 10px;
  text-align: center;

  @media (min-width: 767px) {
    width: 40%;
    padding: 100px 20px;
    height: 100vh;
  }
  @media (min-width: 992px) {
    padding: 130px 50px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: ${props => `${props.theme.colors.title}`};

  @media (min-width: 767px) {
    font-size: 40px;
  }
`;

export const MapBox = styled.div`
  display: flex;
  text-align: center;

  padding: 10px;
  overflow: hidden;

  @media (min-width: 767px) {
    display: block;
    padding: 0;
    position: relative;
  }
`;

export const Map = styled.div`
  border-radius: 20px;
  height: 100%;
  width: 100%;
  margin-bottom: 30px;
  overflow: hidden;

  @media (min-width: 767px) {
    overflow: hidden;
    top: 0;
    right: 0;
    transform: translate(40%, 0);
    border-radius: 100%;
  }
`;
