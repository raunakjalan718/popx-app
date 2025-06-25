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
  background-color: #f8f8f8;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 24px 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 24px;
  font-weight: 600;
  color: #333333;
  line-height: 1.2;
`;

const FormControl = styled.div`
  margin-bottom: 20px;
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

const RadioGroup = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 8px;
`;

const RadioOption = styled.div`
  display: flex;
  align-items: center;
`;

const RadioInput = styled.input`
  width: 20px;
  height: 20px;
  accent-color: #6C38FF;
  margin-right: 8px;
`;

const RadioLabel = styled.label`
  font-size: 16px;
  color: #333333;
`;

const CreateAccountButton = styled.button`
  width: 100%;
  padding: 14px;
  border-radius: 6px;
  border: none;
  background-color: #6C38FF;
  color: white;
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;
  cursor: pointer;
`;

const SignupPage = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    fullName: 'Marry Doe',
    phone: 'Marry Doe',
    email: 'Marry Doe',
    password: 'Marry Doe',
    company: 'Marry Doe',
    isAgency: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'radio' ? name === 'isAgency' ? value === 'yes' : value : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      isAgency: formData.isAgency,
      profilePic: 'https://randomuser.me/api/portraits/women/44.jpg'
    });
    navigate('/profile');
  };

  return (
    <Container>
      <Title>Create your PopX account</Title>
      
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Label>Full Name*</Label>
          <Input 
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required 
          />
        </FormControl>
        
        <FormControl>
          <Label>Phone number*</Label>
          <Input 
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required 
          />
        </FormControl>
        
        <FormControl>
          <Label>Email address*</Label>
          <Input 
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </FormControl>
        
        <FormControl>
          <Label>Password*</Label>
          <Input 
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required 
          />
        </FormControl>
        
        <FormControl>
          <Label>Company name</Label>
          <Input 
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </FormControl>
        
        <FormControl>
          <Label>Are you an Agency?*</Label>
          <RadioGroup>
            <RadioOption>
              <RadioInput 
                type="radio" 
                id="yes" 
                name="isAgency" 
                value="yes" 
                checked={formData.isAgency === true} 
                onChange={handleChange}
              />
              <RadioLabel htmlFor="yes">Yes</RadioLabel>
            </RadioOption>
            
            <RadioOption>
              <RadioInput 
                type="radio" 
                id="no" 
                name="isAgency" 
                value="no" 
                checked={formData.isAgency === false}
                onChange={handleChange}
              />
              <RadioLabel htmlFor="no">No</RadioLabel>
            </RadioOption>
          </RadioGroup>
        </FormControl>
        
        <CreateAccountButton type="submit">Create Account</CreateAccountButton>
      </form>
    </Container>
  );
};

export default SignupPage;
