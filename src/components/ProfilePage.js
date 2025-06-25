import React, { useContext } from 'react';
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
`;

const Header = styled.div`
  background-color: #f2f2f2;
  padding: 16px 20px;
  font-size: 16px;
  color: #666;
  font-weight: 500;
`;

const ProfileSection = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid #f1f1f1;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-right: 20px;
`;

const ProfileImage = styled.div`
  width: 76px;
  height: 76px;
  border-radius: 50%;
  overflow: hidden;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

const BadgeIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #6C38FF;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &::before {
    content: "+";
    color: white;
    font-size: 18px;
  }
`;

const UserInfo = styled.div`
  flex: 1;
`;

const Name = styled.h2`
  font-size: 16px;
  margin-bottom: 4px;
  font-weight: 600;
`;

const Email = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
`;

const Bio = styled.p`
  font-size: 14px;
  line-height: 1.4;
  color: #666;
`;

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  
  React.useEffect(() => {
    if (!user) navigate('/');
  }, [user, navigate]);
  
  if (!user) return null;
  
  return (
    <Container>
      <Header>Account Settings</Header>
      
      <ProfileSection>
        <ImageContainer>
          <ProfileImage src={user.profilePic} />
          <BadgeIcon />
        </ImageContainer>
        
        <UserInfo>
          <Name>{user.name}</Name>
          <Email>{user.email}</Email>
          <Bio>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </Bio>
        </UserInfo>
      </ProfileSection>
    </Container>
  );
};

export default ProfilePage;
