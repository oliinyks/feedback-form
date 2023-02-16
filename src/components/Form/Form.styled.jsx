import styled from '@emotion/styled';

export const FormBox = styled.form`

`;

export const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 8px;
  padding: 30px 46px;

  border: 1px solid ${props => `${props.theme.colors.border}`};
  border-radius: 10px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  margin-bottom: 23px;
  padding: 30px 46px;
  resize: none;

  border: 1px solid ${props => `${props.theme.colors.border}`};
  border-radius: 10px;
`;

export const Button = styled.button`
  width: 218px;
  height: 73px;
  padding: 27px 52px;

  border: none;
  border-radius: 500px;
  color: ${props => `${props.theme.colors.textSecond}`};
  background-color: ${props => `${props.theme.colors.assent}`};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: ${props => `${props.theme.colors.assent}`};
    background-color: ${props => `${props.theme.colors.textSecond}`};
    border: 1px solid ${props => `${props.theme.colors.assent}`};
  }
`;
