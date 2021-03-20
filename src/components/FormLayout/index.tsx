import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
  title: string;
}

const FormContainer = styled.div`
  width: 960px;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 15px 20px;
  border: 2px solid #cccbcb;
  border-radius: 5px;
  background: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-top: 20px;

  &:first-of-type {
    margin-top: 30px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: #2b4491;
  padding-bottom: 10px;
`;

const InputsContainer = styled.div`
  border-top: 1px solid #cccbcb;
  padding-top: 16px;
`;

export default function FormLayout({ title, children }: Props): ReactElement {
  return (
    <FormContainer>
      <Title>{title}</Title>
      <InputsContainer>{children}</InputsContainer>
    </FormContainer>
  );
}
