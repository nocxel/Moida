import Comment from "./Comment";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
    width: 1200px;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px auto;
    padding-top: 30px;

    .comment-write {
      height: 215px;
      width: 880px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      
      input {
        height: 125px;
        width: 760px;
        border-radius: 10px;
      }
      Button {
        margin-left: 20px;
        width: 100px;
        justify-content: center;
      }
    }
`;


const CommentsList = () => {

    return (
        <Container>
            <Comment 
                isChild={null}
                nickname={"윤홍비"}
                content={"우왕 저도 가고 싶어요 성적은 잘 나오셨나요?"}
                time={"2023.04.29. 14시 23분"}>
            </Comment>
            <Comment
                isChild={1}
                nickname={"윤홍비"}
                content={"우왕 저도 가고 싶어요 성적은 잘 나오셨나요?"}
                time={"2023.04.29. 14시 23분"}>
            </Comment>
            <Comment
                isChild={1}
                nickname={"윤홍비"}
                content={"우왕 저도 가고 싶어요 성적은 잘 나오셨나요?"}
                time={"2023.04.29. 14시 23분"}>
            </Comment>
            <Comment
                isChild={1}
                nickname={"윤홍비"}
                content={"우왕 저도 가고 싶어요 성적은 잘 나오셨나요?"}
                time={"2023.04.29. 14시 23분"}>
            </Comment>
            <Comment
                isChild={1}
                nickname={"윤홍비"}
                content={"우왕 저도 가고 싶어요 성적은 잘 나오셨나요?"}
                time={"2023.04.29. 14시 23분"}>
            </Comment>

            <div className="comment-write">
                <input type="text" name="" placeholder="댓글 내용을 입력해 주세요"/>
                <Button>확인</Button>


            </div>
        </Container>

    )
}

export default CommentsList;