import styled from '@emotion/styled';


export const Main = styled.main`
  min-height: calc(100vh - 200px);
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
`;

export const Box = styled.div`
  width: 60%;
  padding: 100px 50px;
  height: 100vh;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  font-weight: 400;
  font-size: 40px;
  color: ${props => `${props.theme.colors.title}`};
`;

export const Map = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(45%, 0);

  border-radius: 100%;
  overflow: hidden;
`;

