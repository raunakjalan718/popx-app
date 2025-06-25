import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  
  /* Primary button (purple) */
  background-color: ${props => props.primary ? '#6C25FF' : '#E8E8FC'};
  color: ${props => props.primary ? 'white' : '#6C25FF'};
`;

const Button = ({ primary, children, onClick }) => {
  return (
    <StyledButton primary={primary} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
