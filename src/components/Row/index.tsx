import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const FormRow = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export default function Row({ children }: Props): ReactElement {
  return <FormRow>{children}</FormRow>;
}
