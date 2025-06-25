import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  background-color: white;
  height: 100vh;
  box-sizing: border-box;
  padding: 0 20px;
  padding-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 26px;
  margin-bottom: 6px;
  font-weight: 600;
  color: #333333;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const Subtitle = styled.p`
  color: #7e7e7e;
  margin-bottom: 24px;
  font-size: 15px;
  line-height: 1.5;
  max-width: 310px;
  font-weight: normal;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const CreateAccountButton = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 6px;
  border: none;
  background-color: #8c52ff;
  color: white;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 6px;
  border: none;
  background-color: #e6d6ff;
  color: #8c52ff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const WelcomePage = () => {
  const navigate = useNavigate();
  
  return (
    <Container>
      <Title>Welcome to PopX</Title>
      <Subtitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Subtitle>
      
      <CreateAccountButton onClick={() => navigate('/signup')}>
        Create Account
      </CreateAccountButton>
      
      <LoginButton onClick={() => navigate('/login')}>
        Already Registered? Login
      </LoginButton>
    </Container>
  );
};

export default WelcomePage;
