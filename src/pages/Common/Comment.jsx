import React from 'react';
import styled from "styled-components";

// 접속한 아이디가 댓글 쓴 본인이면 수정/삭제가 보여야 함 => context API 로 유저의 아이디 값을 가져오고 비교한다?


// 가져왔다치고
const ID = 12345;
const StyledComment = styled.div`
  width: 880px;
  height: 124px;
  display: flex;
  align-items: center;
  
  img {
    width: 65px;
    height: 65px;
  }
`;

const Comment = () => {
    return (
        <StyledComment>
            <img src="#" alt="#"/>
            <div className="nickname">{nickname}</div>
        </StyledComment>
    );
};

export default Comment;