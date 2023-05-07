import React, {useEffect, useState} from "react";
import Header from "../Header";
import styled from "styled-components";
import {PostTitle} from "../Common/PostTitle";
import CommentsList from "../Common/CommentsList";
import HeaderLounge from "../HeaderLounge";
import {useParams} from "react-router-dom";
import AxiosAPI from "../../api/AxiosAPI";

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  top: 90px;
  

  .content {
    font-size: 1.6rem;
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
    const {postId} = useParams();
    const [post ,setPost] = useState(null);

    useEffect(() => {
        const viewPost = async() => {
            try {
                const rsp = await AxiosAPI.postViewGet(postId);
                setPost(rsp.data);
                console.log(rsp.data);
            } catch (error) {
                console.error(error);
            }
        }
        viewPost();
    }, [postId]);

    return (

        <Container>
            <Header/>
            <HeaderLounge/>

            {post && <PostTitle
                size="l"
                title={post.title}
                nickname={post.nickname}
                recommend={post.recommend}
                date={post.regTime}
            />}
            <div className="content">
            {post && post.contents}
            </div>
            <CommentsList></CommentsList>


        </Container>
    );
};


export default LoungePost;