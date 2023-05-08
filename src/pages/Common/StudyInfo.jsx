import React from "react";
import styled, { css } from "styled-components";
import userImg from "../../Images/user.png";

// <StudyInfo
// study_profile={"#fffff"}
// study_name = {"스터디이름"}
// study_tag = {"#태그#태그"}
// study_link={"http://naver.com"}
// study_intro={"스터디 설명입니다."}
// study_mgr_id={"닉네임"}
// study_user_limit={"20"}
// study_user_count={"2"}
// />


const SIZES = {
    s: css`
        --width: 450px;
        --height: 220px;
        --padding-left: 30px;
        --padding-top: 20px;
        --border-bottom: 1.5px solid black;
      `,
      
    l: css`
        --width: 1000px;
        --height : 220px;
        --top: 90px;
        --left:200px;
        --padding-left: 60px;
        --padding-top: 20px;
        --border-bottom: 1px solid gray;

      `
}


// 스터디 정보 Nav
const StyledStudyInfo = styled.div`
    ${(p) => p.sizeStyle}
    width: var(--width);
    border-bottom: var(--border-bottom);
    height: var(--height);
    position: relative;
    background-color: white;
    top: var(--top);
    left:var(--left);
    padding-left: var(--padding-left);
    padding-top: var(--padding-top);
    z-index: 0;

    .StudyProfile {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #E2fff9;
        display: flex;
        margin: 15px;
        margin-left: 0px;
    }

    .StudyName {      
        display: flex;
        align-items: center;
        font-size: 3em;
        font-weight: bold;
    }

    .StudyContainer{
        display: flex;
        align-items: center;
        
    }
    .person{
        width: 15px;
        height: 15px;
        margin-left:10px;
    }

    .item1{
        margin-right: 50px;
        font-size: 1.5em;
        font-weight: bold;
    }

    .item2{
        margin-right: 35px;
    }

    .itemPerson{
        margin-left: auto;
        margin-right: 15px;
        font-size: 18px;
        margin-top:0px;
    }

    .itemText{
        font-size:1.8em;
    }
`;

const StyledInnerContainer = styled.div`
`;

const InnerContainer = ({ study_link, study_mgr_id, study_user_limit, study_user_count }) => {
    return (

        <StyledInnerContainer>
            <div className='StudyContainer'>
                <h2 className='item2'>채팅방</h2>
                <h2>{study_link}</h2>
                <p className='itemPerson'>{study_mgr_id}<img className='person' src={userImg} />{study_user_count}/{study_user_limit}</p>
            </div>
        </StyledInnerContainer>
    )
};

export const StudyInfo = ({ size, study_profile, study_name, study_tag, study_intro, isBasic }) => {
    const sizeStyle = SIZES[size];
    return (
            <StyledStudyInfo sizeStyle={sizeStyle}>
                <div className='StudyName'><div className='StudyProfile' style={{ backgroundColor: `${study_profile}` }}></div>{study_name}</div>
                <p className="itemText">{study_intro}</p>
                <div className='StudyContainer'>
                    <div className='item1'>태그</div>
                    <div className="item1">{study_tag}</div>

                    {/* 값이 있으면 무조건 TRUE */}
                    {isBasic ? <InnerContainer></InnerContainer> : <></>}
                </div>
            </StyledStudyInfo>
    );
};


