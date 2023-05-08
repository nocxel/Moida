import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../styles/StyledComponent";



const StyledStudy = styled.div`
  background-color: white;
  width: 1075px;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 25px 25px 50px;
  border-radius: 10px;
  cursor: pointer;
  margin: 30px 0 30px 0;
  text-align: left;
  
  &:hover {
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
  }
  
  div {
    display: flex;
    height: 100%;
    align-items: center;
    /* justify-content: space-between; */
  }
  
  .board-body-text {
    width: 700px;
    padding: 5px 25px 5px 25px;
    display: flex;
    flex-direction: column;
 
    .studyTitle {
      width: 100%;
      margin: 0;
      font-size: 2.5em;
      font-weight: bold;

    }

    .studydesc {
     width: 100%;
      margin: 0;
      font-size: 1.6rem;
      color: gray;
      height: auto;
    }

    .studytag {     width: 100%;
      margin-top: 30px;
      font-size: 1.6rem;
      color: #000;
      height: auto;}



  }
  

    margin-right: 30px;
    vertical-align : middle; 
    
    .side-left{
      display: flex ;
      flex-direction: column;
      align-items: center;
      vertical-align : middle;
    }
`;

export const Study = ({study_title, studydesc, studytag, date}) => {
  const navigate = useNavigate();

  const OnClick = () => {
    navigate(`/Study/${study_title}`)   
  }

  return (
    <StyledStudy>

      <div className="board-body-text">
        <div className="studyTitle">{study_title}</div>
        <div className="studydesc">{studydesc}</div>
        <div className="studytag">{studytag}</div>
        <div className="date">{date}</div>
      </div>


        <div className="side-left">
            <Button>참가하기</Button>
        </div>

      
    </StyledStudy>
  );
};