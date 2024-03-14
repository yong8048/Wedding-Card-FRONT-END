import { DraftTextAlignment, IReqInvitationJSON } from "@/types/invitation";
import * as S from "./style";
import { CiTextAlignLeft, CiTextAlignCenter, CiTextAlignRight } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";

const Greeting = ({
  setCreateInvitationData: setCreateInvitaionData,
}: {
  setCreateInvitationData: React.Dispatch<React.SetStateAction<IReqInvitationJSON>>;
}) => {
  const [textAlign, setTextAlign] = useState<DraftTextAlignment>("left");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const chageTextAlign = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.id.split("-")[1] as DraftTextAlignment;
    setTextAlign(value);
    setCreateInvitaionData(previousData => ({
      ...previousData,
      welcome_align: value,
    }));
  };

  const toggleInlineStyle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEditorState(RichUtils.toggleInlineStyle(editorState, e.currentTarget.id));
  };

  useEffect(() => {
    const texts = convertToRaw(editorState.getCurrentContent());

    setCreateInvitaionData(previousData => ({
      ...previousData,
      welcome: texts.blocks.map(txt => ({
        text: txt.text,
        inline_style: txt.inlineStyleRanges.map(inlineStyle => ({
          offset: inlineStyle.offset,
          length: inlineStyle.length,
          style: inlineStyle.style,
        })),
      })),
    }));
  }, [editorState]);

  return (
    <S.Container $textAlign={textAlign}>
      <h1>인사말을 작성해 주세요.</h1>
      <h3>작성한 내용을 토대로 제작됩니다.</h3>
      <h3>띄어쓰기나 줄바꿈에 유의해주세요.</h3>
      <div className="textarea">
        <S.TextEditor>
          <button id="BOLD" onMouseDown={toggleInlineStyle}>
            가
          </button>
          <button id="ITALIC" onMouseDown={toggleInlineStyle}>
            <span>가</span>
          </button>
          <button id="UNDERLINE" onMouseDown={toggleInlineStyle}>
            <span>가</span>
          </button>
          <div id="divider"></div>
          <button id="align-left" onClick={chageTextAlign}>
            <CiTextAlignLeft />
          </button>
          <button id="align-center" onClick={chageTextAlign}>
            <CiTextAlignCenter />
          </button>
          <button id="align-right" onClick={chageTextAlign}>
            <CiTextAlignRight />
          </button>
        </S.TextEditor>
        <S.EditorContainer>
          <Editor
            editorState={editorState}
            onChange={setEditorState}
            textAlignment={textAlign}
            placeholder="인사말을 입력해주세요."
          />
        </S.EditorContainer>
      </div>
    </S.Container>
  );
};

export default Greeting;
