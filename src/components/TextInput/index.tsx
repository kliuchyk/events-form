import { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  placeholder: string;
  validate: {
    isRequired: boolean;
    maxLength: number;
  };
  maxLength: number;
}

const Input = styled.input`
  outline: none;
  border: 1px solid #ddd;
  padding: 5px 10px;
  width: 300px;
`;

export default function TextInput({ name, placeholder, validate, maxLength }: Props): ReactElement {
  return <Input type="text" value="" name={name} placeholder={placeholder} />;
}
