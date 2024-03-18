import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

const ServeyForm: React.FC = () => {
  const questionList = [
    "안녕하세요. 모바일청첩장 간편제작 웨카입니다.",
    "정보입력을 마치면 해당 정보를 토대로 링크가 만들어집니다.",
    "완성 이후, 마이페이지에서 정보 및 템플릿을 수정할 수 있습니다.",
    "이제 청접장을 만들어볼까요?",
  ];
  const answerList = ["네! 이해했습니다."];

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
              {index !== 0 && index !== questionList.length - 1 && (
                <>
                  {index < currentQuestionIndex && (
                    <S.ServeyFormAnsweredItem>
                      <span>{answerList[0]}</span>
                    </S.ServeyFormAnsweredItem>
                  )}
                  {index === currentQuestionIndex && (
                    <S.ServeyFormQuestionItem>
                      <div onClick={() => handleAnswerChange(index, "yes")}>
                        <input type="radio" value="yes" checked={true} />
                        <label>{answerList[0]}</label>
                      </div>
                      <button onClick={clickNext}>다음</button>
                    </S.ServeyFormQuestionItem>
                  )}
                </>
              )}
              {index === questionList.length - 1 && (
                <Link to="/information" id="goto-information">
                  정보 입력 하러가기{" "}
                </Link>
              )}
            </S.ServeyFormQuestionLi>
          ))}
        </S.ServeyFormChatUl>
      </div>
    </S.ServeyFormContainer>
  );
};

export default ServeyForm;
