import { ReactElement } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #2b4491;
  height: 60px;
`;

const Title = styled.div`
  width: 50%;
  color: #fff;
  font-size: 26px;
  font-weight: 300;
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 100%;
`;

export default function Header(): ReactElement {
  return (
    <StyledHeader>
      <Title>New Event</Title>
    </StyledHeader>
  );
}
