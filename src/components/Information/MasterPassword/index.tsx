import React, { Fragment, useEffect, useState } from "react";
import * as S from "./style";
import { GrFormViewHide, GrFormView } from "react-icons/gr";
import { IReqInvitationJSON } from "@/types/invitation";

const properties = ["first", "second"];
const validPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const MasterPassword = ({
  setCreateInvitationData,
}: {
  setCreateInvitationData: React.Dispatch<React.SetStateAction<IReqInvitationJSON>>;
}) => {
  const [isViewPW, setIsViewPW] = useState<boolean[]>([false, false]);
  const [inputValue, setInputValue] = useState<string[]>(["", ""]);
  const [isValid, setIsValid] = useState(false);

  const handleClickViewPW = (stateIndex: number) => {
    setIsViewPW(isViewPW.map((view, index) => (index === stateIndex ? !view : view)));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const stateIndex = name === "first" ? 0 : 1;
    setInputValue(inputValue.map((val, index) => (index === stateIndex ? value : val)));
  };

  useEffect(() => {
    const valid1 = !inputValue.map(value => validPasswordRegex.test(value)).includes(false);
    const valid2 = inputValue.filter(value => value === "").length !== 2;

    setIsValid(valid1 === valid2 && inputValue[0] === inputValue[1]);

    setCreateInvitationData(previousData => ({
      ...previousData,
      management: {
        ...previousData.management,
        management_password: valid1 === valid2 && inputValue[0] === inputValue[1] ? inputValue[0] : "",
      },
    }));
  }, [inputValue]);

  return (
    <S.Container>
      <h1>방명록 삭제를 위한 비밀번호를 입력해주세요.</h1>
      <h3>영어+숫자 형식으로 8자 이상 입력해주세요.</h3>
      <S.Wrapper $isValid={isValid}>
        {properties.map((property, index) => (
          <Fragment key={index}>
            <div>
              <input type={isViewPW[index] ? "text" : "password"} name={property} onChange={handleChange} />
              <button onClick={() => handleClickViewPW(index)}>
                {isViewPW[index] ? <GrFormViewHide size={25} /> : <GrFormView size={25} />}
              </button>
            </div>
          </Fragment>
        ))}
        <p>비밀번호를 확인해주세요.</p>
      </S.Wrapper>
    </S.Container>
  );
};

export default MasterPassword;
