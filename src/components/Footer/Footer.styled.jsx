import styled from '@emotion/styled';

export const Box = styled.footer`
  display: flex;
  height: 200px;

  align-items: center;
  justify-content: center;

  background-color: ${props => `${props.theme.colors.footer}`};
`;

export const Link = styled.a`
  padding: 0 10px;
  color: ${props => `${props.theme.colors.link}`};
  :hover {
    color: ${props => `${props.theme.colors.assent}`};
  }
`;