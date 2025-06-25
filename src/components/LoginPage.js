import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../UserContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  background-color: white;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 24px 20px;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333333;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  color: #666666;
  margin-bottom: 40px;
  font-size: 16px;
  line-height: 1.4;
`;

const FormControl = styled.div`
  margin-bottom: 22px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #6C38FF;
  font-size: 14px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #dddddd;
  border-radius: 6px;
  font-size: 16px;
  box-sizing: border-box;
  
  &::placeholder {
    color: #999999;
  }

  &:focus {
    outline: none;
    border: 1px solid #6C38FF;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 14px;
  border-radius: 6px;
  border: none;
  background-color: #cccccc;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      name: 'Marry Doe',
      email: email || 'Marry@Gmail.Com',
      phone: '123456789',
      isAgency: true,
      profilePic: 'https://randomuser.me/api/portraits/women/44.jpg'
    });
    navigate('/profile');
  };

  return (
    <Container>
      <Title>Signin to your PopX account</Title>
      <Subtitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </Subtitle>
      
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Label>Email Address</Label>
          <Input 
            type="email" 
            placeholder="Enter email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>
        
        <FormControl>
          <Label>Password</Label>
          <Input 
            type="password" 
            placeholder="Enter password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormControl>
        
        <LoginButton type="submit">Login</LoginButton>
      </form>
    </Container>
  );
};

export default LoginPage;
