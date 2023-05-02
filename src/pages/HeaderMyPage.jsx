/* 마이페이지에서 적용되는 네비바를 만들 파일입니다. */
import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logout from '../Images/logout.png'

const NavigationContainer = styled.div`
  display: flex;
  width: 20 0px;
  background-color: #fff; /* 네비게이션바 배경색 */
  padding: 16px;
  justify-content: right;
  border-right: 1.5px solid gray;
`;

const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavigationItem = styled.li`
  font-size: 20px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 30px; /* 각 네비게이션 사이 간격 */
  margin-right: 30px;
`;


const NavigationLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    color: #6E53F4;
  }
`;

//회원 탈퇴
const MemDelete = styled.li`
  font-size: 20px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  margin-top: 500px;
  margin-bottom: 30px; /* 각 네비게이션 사이 간격 */
  margin-right: 30px;
`;

const MemDeleteLink = styled(Link)`
  text-decoration: none;
  color: #ff4f4f;

  &:hover {
    color: #cc5c5c;
  }
`;

const MemDeleteImg = styled.img`
  width: 17px;
  margin-right: 5px;
`;



const HeaderMyPage = () => {
  return (
    <NavigationContainer>
      <NavigationList>
        <NavigationItem><NavigationLink to="/MyPage">마이페이지</NavigationLink></NavigationItem>
        <NavigationItem><NavigationLink to="/MyPage/MyPost">나의 작성</NavigationLink></NavigationItem>
        <NavigationItem><NavigationLink to="/Signln">확인용(로그인 연결)</NavigationLink></NavigationItem>
        <MemDelete><MemDeleteLink to="/Mypage/MemberDelete"><MemDeleteImg src={logout} alt="" />회원 탈퇴</MemDeleteLink></MemDelete>
      </NavigationList>
    </NavigationContainer>
  );
};

export default HeaderMyPage;