import React from "react";
import Header from "../Header";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {PostTitle} from "../Common/PostTitle";
import CommentsList from "../Common/CommentsList";
import HeaderLounge from "../HeaderLounge";

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  top: 90px;

  .lounge-nav {
    width: 100%;
    margin: 0 auto;
  }

  .content {
    font-size: 1.6rem;
    min-height: 750px;
    border-bottom: 1px solid gray;
    padding: 80px 250px 80px 250px;
  }

  .comment {
    width: 100%;

    .comment-header {
      padding-left: 50px;
      display: flex;
      align-items: center;
      height: 100px;
      font-size: 3.2rem;
      font-weight: bold;
    }
  }
`;


//url주소는 어떻게 될까? /lounge/post/4654546546{post-id} 이런식으로 되겠지
// 그럼 네비바는 자유 고민 어떤게 색이 들어가야 하나?
// 1. 게시글의 성질에 따라 할거면 get으로 받아서 DB가져오고 DB의 게시판 정보에 따라 다르게 칠해주자?
// 네비바가 컴포넌트로 구현하지 못해 하쉽다. 근데 구현할 수가 없는걸.... 로직이 복잡해져 어려워 질 것 같다.

const LoungePost = ({title, nickname, recommend, date, content}) => {
    return (
        <Container>
            <Header/>
            <HeaderLounge/>

            <PostTitle
                size="l"
                title="요즘 개발하는게 너무 재미따히히"
                nickname="닉네임"
                recommend={-500}
                date={"2023/04/11"}
            ></PostTitle>
            <div className="content"><p>asdsadadsadsadadasdadadas
                adasdsadsad<br/><br/><br/>sadsadadsadsadsadsa<br/>
                sadasd
                sad
                sadsadsa
                dsadsa
                dsadsad
                sad
                sa
                dsa
                dsadasdadadsadsadadadasd</p></div>
            <div className="comment">
                <div className="comment-header">댓글 📑</div>
                <CommentsList></CommentsList>
            </div>


        </Container>
    );
};


export default LoungePost;