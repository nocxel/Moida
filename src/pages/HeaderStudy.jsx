import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
// import { InputButton } from '../styles/StyledComponent';
// import userImg from "../Images/user.png";
import { StudyInfo } from './Common/StudyInfo';
import logout from '../Images/logout.png';

// Study 왼쪽 Nav
const StudyHeader = styled.div`
    width: 200px;
    background-color: white;
    height : 100vh;
    position : fixed;
    text-align: center;
    top: 85px;
    z-index: 2;
    margin: 0 auto;
    border-right: 1px solid gray;

.indexBox {
  position : fixed;
  left: 0 auto;
  top: 90px;
  background: rgba(243, 243, 243, 0.9);
  width: 200px;
  height : 100vh;
  z-index: 1;
}
`;


const navDefault = {
  color: 'black',
  fontSize: '18px',
  fontWeight: 'bold',
  textDecoration: 'none',
  margin: '40px',
  display: 'block'

};

const navSelect = {
  color: 'rgb(107, 78, 254)',
  fontSize: '18px',
  fontWeight: 'bold',
  textDecoration: 'none',
  margin: '40px',
  display: 'block'
};

//   // 스터디 정보 Nav
//   const StyledStudyInfo = styled.div `
//     width: 1000px;
//     border-bottom: 1px solid gray;
//     height: 300px;
//     position: relative;
//     background-color: white;
//     top: 90px;
//     left:200px;
//     padding-left: 60px;
//     padding-top: 20px;
//     z-index: 0;

//     .StudyProfile {
//         width: 50px;
//         height: 50px;
//         border-radius: 50%;
//         background-color: #E2fff9;
//         display: flex;
//         margin: 15px;
//         margin-left: 0px;
//     }

//     .StudyName {      
//         display: flex;
//         align-items: center;
//     }

//     .StudyContainer{
//         display: flex;
//         align-items: center;

//     }
//     .person{
//         width: 15px;
//         height: 15px;
//         margin-left:10px;

//     }
//     .item1{
//         margin-right: 50px;
//     }
//     .item2{
//         margin-right: 35px;
//     }
//     .itemPerson{
//         margin-left: auto;
//         margin-right: 15px;
//         font-size: 18px;
//         margin-top:0px;
//     }
//     .itemText{
//         font-size:18px;
//     }
// `;

// const StudyInfo = ({study_profile, study_name, study_tag, study_link, study_intro, study_mgr_id, study_user_limit, study_user_count}) => {
//     return(
//         <>
//         <StyledStudyInfo>
//         <div className='StudyName'><div className='StudyProfile' style={{backgroundColor:`${study_profile}`}}></div><h1>{study_name}</h1></div>
//         <p className="itemText">{study_intro}</p>
//         <div className='StudyContainer'>
//             <h2 className='item1'>태그</h2>
//             <h2>{study_tag}</h2>
//             <p className='itemPerson'>{study_mgr_id}<img className='person' src={userImg}/>{study_user_count}/{study_user_limit}</p>
//         </div>
//         <div className='StudyContainer'>
//             <h2 className='item2'>채팅방</h2>
//             <h2>{study_link}</h2>
//         </div> 
//         </StyledStudyInfo>

//         </>
//     );
// };

const StudyDelete = styled.div`
  font-size: 20px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  margin-top: 300px;
  margin-bottom: 30px;

`;

const StudyDeleteLink = styled(Link)`
  text-decoration: none;
  color: #ff4f4f;

  &:hover {
    color: #cc5c5c;
  }
`;

const DeleteImg = styled.img`
  width: 17px;
  margin-right: 5px;
`;

// const Content = styled.div`
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// margin-top: 20vh;

// `;



const HeaderStudy = () => {


  return (
    <>
      <StudyHeader>
        <NavLink to="/Study/StudyRoom" style={({ isActive }) => {
          return isActive ? navSelect : navDefault
        }}>홈</NavLink>
        <NavLink to="/StudyRoom/Schedule" style={({ isActive }) => {
          return isActive ? navSelect : navDefault
        }}>일정</NavLink>
        <NavLink to="/StudyRoom/Board" style={({ isActive }) => {
          return isActive ? navSelect : navDefault
        }}>보드</NavLink>
        <NavLink to="/StudyRoom/Member" style={({ isActive }) => {
          return isActive ? navSelect : navDefault
        }}>멤버</NavLink>
        <StudyDelete>
          <StudyDeleteLink to="/Study/List">
            <DeleteImg src={logout} alt="" />스터디 나가기
          </StudyDeleteLink>
        </StudyDelete>


        {/* 스터디 미가입자에게 보이게 설정 */}
        {/* 백엔드 구현하면서 함께 구현해야 함. */}
        {/* <div className='indexBox'>
          <Content>
            <div className="button" onClick={onClick}>
              <InputButton>스터디 가입</InputButton>
            </div>
          </Content>
        </div> */}

      </StudyHeader>



      <StudyInfo
        size='l'
        study_profile={"#fffff"}
        study_name={"백준방범대"}
        study_tag={"#코딩 #자바"}
        study_intro={"스터디 설명입니다. 스터디 설명입니다. 스터디 설명입니다. 스터디 설명입니다. 스터디 설명입니다. 스터디 설명입니다. 스터디 설명입니다."}
        isBasic={1}
      />

    </>
  )
}
export default HeaderStudy;