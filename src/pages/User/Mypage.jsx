import React from "react";
import styled from "styled-components";
import HeaderMyPage from "../HeaderMyPage";
import Header from "../Header";
import MyInformationEdit from "../Common/MyInformationEdit";
//import { MyInformation } from "../Common/MyInformation";
//import { Profile } from "../Common/Profile";

const Container = styled.div`
  margin-top: 93px;
  margin-left: 200px;

  .myPageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 1000px;
    background-color: #F3F3F3;
  }

  .infoContainer {
    display: flex;
    flex-direction: column;
    width: 800px;
    padding: 15px 15px 15px 30px;
    background-color: white;
    border-radius: 10px;
    border: 1px solid #F3F3F3;
    border-radius: 10px;
    margin-bottom: 50px;
  }

  .studyContainer {
    display: flex;
    width: 800px;
    margin-bottom: 50px;
  }

  .studyItemContainer{
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 200px;
    margin-right: 50px;
    border: 1px solid #F3F3F3;
    border-radius: 10px;
  }
  
`

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
  margin-bottom: 16px;
`;



const MyPage = () => {

  return (
  <>
  <Header />
  <HeaderMyPage />
    <Container>
        <div className="myPageContainer">
        <MyInformationEdit/>

        {/* 내 스터디 */}
        <div>
        <Title>내 스터디</Title>
        <div className="studyContainer">
          <div className="studyItemContainer">스터디 받아오기</div> 
        </div>
        </div>
          
  </div>
    </Container>
    </>
  
    
    
  );
};

export default MyPage;