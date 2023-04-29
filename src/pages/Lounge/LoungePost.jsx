import React from "react";
import Header from "../Header";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {PostTitle} from "../Common/PostTitle";

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  top: 90px;

  .lounge-nav {
    width: 100%;
    margin: 0 auto;

    .nav {
      background-color: rgb(241, 241, 241);
      display: flex;
      justify-content: center;
      height: 60px;
      align-items: center;
    }

    .board-select {
      width: 35%;
      display: flex;
    }

    .board-select-type {
      color: black;
      font-size: 1.8rem;
      font-weight: bold;
      margin: 23px 22px 22px 22px;
      text-decoration: none;
      height: 100%;
      position: relative;
      top: 1px;
      cursor: pointer;
    }
  }
  
  .content {
    font-size: 1.2rem;
    min-height: 750px;
    border-bottom: 1px solid gray;
    padding: 80px 250px 80px 250px;
  }
`;



//url주소는 어떻게 될까? /lounge/post/4654546546{post-id} 이런식으로 되겠지
// 그럼 네비바는 자유 고민 어떤게 색이 들어가야 하나?
// 1. 게시글의 성질에 따라 할거면 get으로 받아서 DB가져오고 DB의 게시판 정보에 따라 다르게 칠해주자?
// 네비바가 컴포넌트로 구현하지 못해 하쉽다. 근데 구현할 수가 없는걸.... 로직이 복잡해져 어려워 질 것 같다.

const LoungePost = ({title, nickname, recommend, date, content}) => {
    return(
        <Container>
            <Header></Header>
            <div className='lounge-nav'>
                <div className='nav'>
                    <div className='board-select'>
                        <NavLink to="/lounge/free" className='board-select-type'
                                 style={{color: 'var(--maincolor)'}}>자유</NavLink>
                        <NavLink to="/lounge/qna" className='board-select-type'>고민</NavLink>
                    </div>
                </div>
            </div>
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
                <div className="comment-header">댓글</div>
                <div className="comment-list">
                {/*    Comment 컴포넌트를 사용할 예정이다*/}
                </div>
                <div className='comment-input'></div>
            </div>




        </Container>
    );
};




export default LoungePost;