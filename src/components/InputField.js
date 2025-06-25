import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  margin-bottom: 16px;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #6C25FF;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #DDDDDD;
  border-radius: 6px;
  box-sizing: border-box;
  
  &::placeholder {
    color: #AAAAAA;
  }
`;

const InputField = ({ label, type, placeholder, required }) => {
  return (
    <InputContainer>
      {label && <Label>{label}{required && '*'}</Label>}
      <Input type={type || 'text'} placeholder={placeholder} required={required} />
    </InputContainer>
  );
};

export default InputField;
