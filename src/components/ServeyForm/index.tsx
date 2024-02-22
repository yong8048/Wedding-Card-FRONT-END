import React from "react";
import * as S from "./style";
const ServeyForm = () => {
  const clickNext = () => {};
  const questionList = ["질문할게여", "비디오가 있나여?", "라이브웨딩이 있나여?", "이제 청첩장에 적을 내용 적어주세여"];
  return (
    <S.ServeyFormContainer>
      <div>
        <ul>
          {questionList.map((question, index) => (
            <S.ServeyFormQuestionLi key={index}>
              <h1>{question}</h1>
            </S.ServeyFormQuestionLi>
          ))}
        </ul>
      </div>
    </S.ServeyFormContainer>
  );
};

export default ServeyForm;
