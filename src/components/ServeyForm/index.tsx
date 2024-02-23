import React, { useEffect, useState } from "react";
import * as S from "./style";

const ServeyForm: React.FC = () => {
  const questionList = ["질문할게여", "비디오가 있나여?", "라이브웨딩이 있나여?", "이제 청첩장에 적을 내용 적어주세여"];
  const answerList = ["있음", "없음"];

  const [answers, setAnswers] = useState<Array<string | null>>(Array.from({ length: questionList.length }, () => null));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

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
  return (
    <S.ServeyFormContainer>
      <div>
        <ul>
          {questionList.slice(0, currentQuestionIndex + 1).map((question, index) => (
            <>
              <S.ServeyFormQuestionLi>
                <h1>{question}</h1>
              </S.ServeyFormQuestionLi>
              {index !== 0 && index !== questionList.length - 1 ? (
                <S.ServeyFormQuestionLi key={index}>
                  <>
                    <div>
                      <input
                        type="radio"
                        value="1"
                        checked={answers[index] === "1"}
                        onChange={() => handleAnswerChange(index, "1")}
                      />
                      <label>{answerList[0]}</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="2"
                        checked={answers[index] === "2"}
                        onChange={() => handleAnswerChange(index, "2")}
                      />
                      <label>{answerList[1]}</label>
                    </div>
                    <button onClick={clickNext}>다음</button>
                  </>
                </S.ServeyFormQuestionLi>
              ) : null}
            </>
          ))}
        </ul>
      </div>
    </S.ServeyFormContainer>
  );
};

export default ServeyForm;
