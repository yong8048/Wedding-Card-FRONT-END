import { IReqInvitationJSON, TconcernedParentType, TconcernedPersonType } from "@/types/invitation";
import * as S from "./style";
import React from "react";

const Contact = ({
  setCreateInvitationData,
}: {
  setCreateInvitationData: React.Dispatch<React.SetStateAction<IReqInvitationJSON>>;
}) => {
  const handleDataChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    const divEl = e.currentTarget;
    const inputEl = e.target as HTMLInputElement;
    const concernedPerson = divEl.id as TconcernedPersonType;

    const { name, value } = inputEl;
    const concernedParent = name as TconcernedParentType;

    setCreateInvitationData(previousData => ({
      ...previousData,
      [concernedPerson]: {
        ...previousData[concernedPerson],
        [concernedParent]: {
          ...previousData[concernedPerson][concernedParent],
          contact: value,
        },
      },
    }));
  };
  return (
    <S.Container>
      {["신랑", "신부"].map((value, index) => (
        <S.Wrapper key={index} $isFirst={value === "신랑"}>
          <h1>{value} 및 혼주의 연락받을 연락처를 작성해주세요.</h1>
          <h3>' - '를 제외하고 입력해주세요.</h3>
          <div onChange={handleDataChange} id={value === "신랑" ? "HUSBAND" : "WIFE"}>
            <input placeholder={`${value} 전화번호`} name="ME" type="number" />
            <input placeholder={`${value} 부 전화번호`} name="FATHER" type="number" />
            <input placeholder={`${value} 모 전화번호`} name="MOTHER" type="number" />
          </div>
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export default Contact;
