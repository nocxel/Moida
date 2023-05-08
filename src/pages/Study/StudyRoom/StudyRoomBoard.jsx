import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";
import HeaderStudy from "../../HeaderStudy";
import { BigTitle, BoardBox, BoardContainerWrapper, Profile, SmallTitle, StudyRoom } from "../../../styles/StyledComponent";
import styled from "styled-components";
import { Button } from "../../../styles/StyledComponent";
import like from "../../../Images/like.png"
import { Board } from "../../Common/Board";




const Title = styled.div`
    display: flex;
    width: 900px;
    justify-content: space-between;
    align-items:center;
    .button {
        height: 40px;
    }
`;


const StudyRoomBoard = () => {
    return(
        <>
        <Header/>
        <HeaderStudy/>
        
        <StudyRoom>
            <Title><h1>스터디 보드 📋</h1> <Button className="button">글쓰기</Button></Title>
            <BoardBox>
                    <BoardContainerWrapper> 
                        <Board
                        board_name={"board"} 
                        post_id={1}
                        nickname={"윤홍비"}
                        title={"회의록 정리"}
                        content={"4월 회의록 정리본입니다."}
                        img_url={"test.png"}
                        date={"2020/04/02"}
                        recommend={"4"}
                        size={900}
                        />
                         <Board
                        board_name={"board"} 
                        post_id={1}
                        nickname={"윤홍비"}
                        title={"회의록 정리"}
                        content={"4월 회의록 정리본입니다."}
                        img_url={"test.png"}
                        date={"2020/04/02"}
                        recommend={"4"}
                        size={900}
                        />
                         <Board
                        board_name={"board"} 
                        post_id={1}
                        nickname={"윤홍비"}
                        title={"회의록 정리"}
                        content={"4월 회의록 정리본입니다."}
                        img_url={"test.png"}
                        date={"2020/04/02"}
                        recommend={"4"}
                        size={900}
                        />
                    </BoardContainerWrapper>
                    
                    
                </BoardBox>
        </StudyRoom>
       
        </>
    );
};




export default StudyRoomBoard;