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
        border: 0;
        
        &:focus {
          outline-color: lightgray;
          outline-width: 2px;
        }
      }
      Button {
        margin-left: 20px;
        width: 100px;
        justify-content: center;
      }
    }
`;
// onClick DB  COMMENTS 테이블에 INSERT 해주는 거 만들어야함
// 아이디를 컨텍스트 API로 받아와야 할듯? 그럼 COMMENTS 테이블을 ID로 바꿔야 할 것같은데 흠...


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