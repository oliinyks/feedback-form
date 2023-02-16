import styled from '@emotion/styled';

export const Box = styled.footer`
  display: flex;
  position: relative;
  height: 50px;

  align-items: center;
  justify-content: center;

  background-color: ${props => `${props.theme.colors.footer}`};
  @media (min-width: 767px) {
    height: 200px;
  }
`;

export const Img = styled.img`
  display: none;
  @media (min-width: 767px) {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(-10%);
  }
`;

export const Img2 = styled.img`
  display: none;
  @media (min-width: 767px) {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(-10%, -105%);
  }
`;

export const Link = styled.a`
  padding: 0 10px;
  color: ${props => `${props.theme.colors.link}`};
  :hover {
    color: ${props => `${props.theme.colors.assent}`};
  }
`;
