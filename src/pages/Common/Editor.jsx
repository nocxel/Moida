import React from "react";
import styled from "styled-components";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { InputLabel, Input } from "../../styles/StyledComponent";

const StyledEditor = styled.div`

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
  min-height: 600px;
  width: 1000px;
  margin-bottom: 20px;
}
`;

const StyledTitle = styled.div`
`;

const Title = () => {
    return (

        <StyledTitle>
            <InputLabel>제목</InputLabel>
            <Input type="post_title" placeholder="제목을 입력해주세요." required />
        </StyledTitle>
    )
};

export const Editor = ({ isTitle }) => {

    return (
        < StyledEditor >

            {isTitle ? <Title></Title> : <></>}

            <InputLabel>내용</InputLabel>
            <CKEditor
                editor={ClassicEditor}
                data="<p>내용을 입력하세요.</p>"
                onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            />

        </StyledEditor>
    )
}