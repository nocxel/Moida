import React,{ useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import HeaderMyPage from "../HeaderMyPage";
import Header from "../Header";
import LOGO_imgOnly from "../../Images/LOGO_imgOnly.png";
// 이거 왜 스크롤 생기지...? 나중에 재확인

const Container = styled.div`
  margin-top: 93px;
  display: flex;
  justify-content: center;
`
const MyPageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 1200px;
  background-color: #F3F3F3;
`;

const Ex = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  padding-bottom: 50px;
`;


const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 15px 15px 30px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #F3F3F3;
  border-radius: 10px;
  margin-bottom: 50px;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
  margin-bottom: 16px;
`;

const InfoText = styled.div`
  font-size: 19px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  margin-left: 20px;
  margin-bottom: 4px;
`;

// 스터디
const StudyContainer = styled.div`
  display: flex;
  width: 1200px;
`;

const StudyItemContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 200px;
  margin-right: 50px;
  border: 1px solid #F3F3F3;
  border-radius: 10px;
`;
// 스터디 내부 라인 1
const Line1 = styled.div`
  justify-content: space-between;
  display: flex;
  width: 350px;
`;
// Line1In-시작
const Line1In = styled.div`
  display: flex;
  width: 350px;
`;
const Round = styled.div`
  margin: 15px;
  display: flex;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  
  background-color: ${props => props.color};
`;/*background-color: ${(props) => getRandomColor()};*/
const StudyName = styled.div`
  margin: 15px;
  display: flex;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  font-size: 20px;
`;
//Line1In End
const People = styled.div`
  width: 180px;
  margin: 15px;
  display: flex;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
`;
// 스터디 콘테이너 내부
const Tags = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: row-reverse;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  font-size: 18px;
`;


const MyInfoTextChangeBox = styled.div`
  display: flex;
  width: 700px;
  flex-direction: column;
  justify-content: center;
  padding: 10px 10px 10px 35px;
`;

//자기소개
const MyInfoTextarea = styled.textarea`
  display: flex;
  width: 650px;
  height: 150px;
  padding: 12px;
  margin-bottom: 12px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  resize: none;
`;

//저장, 수정하기 버튼
const MyInfoButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 540px;
  width: 100px;
  height: 50px;
  background-color: #6E53F4;
  color: #fff;
  font-size: 17px;
  font-family: 'Noto Sans KR', sans-serif;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #543ad4;
  }
`;

// 이미지
const MyImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  justify-items: center;
  border-radius: 100%;
`;

const Profile = styled.div`
  display: flex;
  margin: 20px;
`;

// 자기소개 완성 후
const MyInfo = styled.div`
  font-size: 19px;
  margin: 0px 20px 20px 20px;
`;

// 이미지 초기화
const ResetButton = styled.button`
  width: 100px;
  height: 30px;
  color: white;
  background-color: #6E53F4;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #543ad4;
  }
`;

const FileSelection = styled.input`
  margin-bottom: 20px;
`;





// 랜덤한 색상 생성 함수 : 색 안 겹치게 하려면 랜덤 컬러 다 썼을 경우 반환 색 고려해야해서 우선 제외
// 아니면 차라리 순서대로 색상 입힐까 싶기도...
/*const getRandomColor = () => {
  const colorList = ['#ffadad', '#8effc3', '#89b6ff', '#be90ff', '#ffe19c'];
  const randomIndex = Math.floor(Math.random() * colorList.length);
  return colorList[randomIndex];
};*/




const Mypage = () => {
  return (
      <>
        <Header></Header>
      </>
  )
  //
  // const [studyInfo, setStudyInfo] = useState([]);
  // const [isNotAttach, setIsNotAttach] = useState(false)
  // const [myImg, setMyImg] = useState(null);
  //
  // useEffect(() => {
  //   axios
  //     .get("/study")
  //     .then((response) => {
  //       setStudyInfo(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Failed to fetch study list:", error);
  //     });
  // }, []);
  //
  // const [isEditing, setIsEditing] = useState(false);
  // const [myInfo, setMyInfo] = useState('자기 소개를 입력하세요.');
  //
  // // 수정하기
  // const handleMyInfoChange = (e) => {
  //   setMyInfo(e.target.value);
  // };
  //
  // const handleEditmyInfo = () => {
  //   setIsEditing(true);
  //   setIsNotAttach(true);
  // };
  //
  // const handleSaveMyInfo = () => {
  //   setIsEditing(false);
  //   alert('저장되었습니다: ' + myInfo);
  //   setIsNotAttach(false);
  // };
  //
  // const handleMyImgChange = (event) => {
  //   const myImg = event.target.files[0];
  //   if (myImg) {
  //     setMyImg(myImg); // 선택된 파일 정보를 상태로 저장
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setShowMyImgInPut(reader.result);
  //     };
  //     reader.readAsDataURL(myImg);
  //   } else {
  //     setShowMyImgInPut(null);
  //     setMyImg(null); // 파일이 선택되지 않은 경우 상태 초기화
  //   }
  // };
  //
  // // 이미지 초기화 핸들러
  // const handleReset = () => {
  //   setShowMyImgInPut(null);
  //   setMyImg(null);
  // };
  //
  // const [showMyImgInPut, setShowMyImgInPut] = useState(null);
  //
  // return (
  //   <Container>
  //       <Header />
  //       <HeaderMyPage />
  //       <MyPageContainer>
  //         <Ex>
  //
  //
  //         <Title>내 정보</Title>
  //       <InfoContainer>
  //
  //         <Profile>
  //         {showMyImgInPut ? (
  //           <MyImage src={showMyImgInPut} alt="이미지 미리보기" />
  //         ) : (
  //           myImg ? ( // 선택된 파일이 있으면 파일 미리보기
  //             <MyImage src={URL.createObjectURL(myImg)} alt="이미지 미리보기" />
  //           ) : ( // 선택된 파일이 없으면 기본 이미지 보여주기
  //             <MyImage src={LOGO_imgOnly} alt="기본 이미지"/>
  //           )
  //         )}
  //         <InfoText>님</InfoText>
  //
  //
  //         {isEditing ? (
  //           <>
  //           </>
  //         ) : (
  //             <MyInfoButton onClick={handleEditmyInfo}>수정하기</MyInfoButton>
  //         )}
  //         </Profile>
  //
  //
  //         {isNotAttach && <FileSelection type="file" onChange={handleMyImgChange} /> }
  //         {isNotAttach && <ResetButton onClick={handleReset}>기본 이미지</ResetButton>}
  //         <InfoText>이름 </InfoText>
  //         <InfoText>이메일 </InfoText>
  //         <InfoText>자기소개 </InfoText>
  //         {isEditing ? (
  //           <MyInfoTextChangeBox>
  //           <MyInfoTextarea value={myInfo} onChange={handleMyInfoChange}/>
  //           <MyInfoButton onClick={handleSaveMyInfo}>저장</MyInfoButton>
  //           </MyInfoTextChangeBox>
  //         ) : (
  //             <MyInfo>{myInfo}</MyInfo>
  //         )}
  //       </InfoContainer>
  //       <br />
  //
  //       {/* 내 스터디 */}
  //       <Title>내 스터디</Title>
  //       <StudyContainer>
  //       {studyInfo.map(study => (
  //         <StudyItemContainer key={study.id}>
  //           <Line1><Line1In><Round>코</Round> <StudyName>스터디 1</StudyName></Line1In> <People>회원수/모집인원</People> </Line1>
  //             <p>스터디 소개</p>
  //             <Tags>#태그들</Tags>
  //         </StudyItemContainer>
  //       ))}
  //           <StudyItemContainer>스터디 3</StudyItemContainer>
  //       </StudyContainer>
  //
  //
  //         </Ex>
  //
  //   </MyPageContainer>
  //   </Container>
  //
  //
  // );
};

export default Mypage;