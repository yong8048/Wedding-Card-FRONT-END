import React, { useEffect, useState } from "react";
import * as S from "./style";

const ServeyForm: React.FC = () => {
  const questionList = [
    "안녕하세요. 웨딩카드 간편제작 웨카입니다.",
    "포트폴리오 전용",
    "라이브 웨딩 링크가 있나요?",
    "이제 청첩장에 필요한 내용을 작성해주세요.",
  ];
  const answerList = ["있음", "없음"];

  const [answers, setAnswers] = useState<Array<string | null>>(Array.from({ length: questionList.length }, () => "no"));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [opacity, setOpacity] = useState<number[]>([]);
  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const clickNext = () => {
    if (
      answers[currentQuestionIndex] !== null ||
      currentQuestionIndex === 0 ||
      currentQuestionIndex === questionList.length - 1
    ) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("답변을 선택해주세요.");
    }
  };

  useEffect(() => {
    if (currentQuestionIndex === 0) {
      const timer = setTimeout(() => setCurrentQuestionIndex(1), 1000);
      return () => clearTimeout(timer);
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    setOpacity(prev => [...prev, 0]);
    const timer = setTimeout(
      () => setOpacity(prev => prev.map((val, idx) => (idx === currentQuestionIndex ? 1 : val))),
      1000,
    );
    return () => clearTimeout(timer);
  }, [currentQuestionIndex]);

  return (
    <S.ServeyFormContainer>
      <div>
        <S.ServeyFormChatUl>
          {questionList.map((question, index) => (
            <S.ServeyFormQuestionLi key={index} opacity={opacity[index] || 0}>
              <S.ServeyFormQuestionLiItem>{question}</S.ServeyFormQuestionLiItem>
              {index !== 0 && index !== questionList.length - 1 ? (
                <>
                  {index < currentQuestionIndex && (
                    <S.ServeyFormAnsweredItem>
                      <span>{answers[index] === "yes" ? answerList[0] : answerList[1]}</span>
                    </S.ServeyFormAnsweredItem>
                  )}
                  {index === currentQuestionIndex && (
                    <S.ServeyFormQuestionItem>
                      <div onClick={() => handleAnswerChange(index, "yes")}>
                        <input type="radio" value="yes" checked={answers[index] === "yes"} />
                        <label>{answerList[0]}</label>
                      </div>
                      <div onClick={() => handleAnswerChange(index, "no")}>
                        <input type="radio" value="no" checked={answers[index] === "no"} />
                        <label>{answerList[1]}</label>
                      </div>
                      <button onClick={clickNext}>다음</button>
                    </S.ServeyFormQuestionItem>
                  )}
                </>
              ) : null}
            </S.ServeyFormQuestionLi>
          ))}
        </S.ServeyFormChatUl>
      </div>
    </S.ServeyFormContainer>
  );
};

export default ServeyForm;
