import { useState } from "react";
import * as S from "./style";
import { IReqCreateInvitation, TconcernedParentType, TconcernedPersonType } from "@/types/invitation";

type TFamily = "신랑" | "신랑 부" | "신랑 모" | "신부" | "신부 부" | "신부 모";
const family = {
  신랑: {
    who: "husband.me",
    isChecked: false,
  },
  "신랑 부": {
    who: "husband.father",
    isChecked: false,
  },
  "신랑 모": {
    who: "husband.mother",
    isChecked: false,
  },
  신부: {
    who: "wife.me",
    isChecked: false,
  },
  "신부 부": {
    who: "wife.father",
    isChecked: false,
  },
  "신부 모": {
    who: "wife.mother",
    isChecked: false,
  },
};

const Account = ({
  setCreateInvitaionData,
}: {
  setCreateInvitaionData: React.Dispatch<React.SetStateAction<IReqCreateInvitation>>;
}) => {
  const [familyMemebers, setFamilyMemebers] = useState(family);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name as TFamily;
    const who = e.target.id;
    const [person, parent] = who.split(".");
    const concernedPerson = person as TconcernedPersonType;
    const concernedParent = parent as TconcernedParentType;

    setFamilyMemebers(previousData => ({
      ...previousData,
      [key]: { ...previousData[key], isChecked: e.target.checked },
    }));

    setCreateInvitaionData(previousData => ({
      ...previousData,
      [person]: {
        ...previousData[concernedPerson],
        [concernedParent]: {
          ...previousData[concernedPerson][concernedParent],
          account: "",
          bank: "",
        },
      },
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    const divEl = e.currentTarget;
    const inputEl = e.target as HTMLInputElement;
    const [person, parent] = divEl.id.split(".");

    const concernedPerson = person as TconcernedPersonType;
    const concernedParent = parent as TconcernedParentType;
    const { name, value } = inputEl;

    setCreateInvitaionData(previousData => ({
      ...previousData,
      [concernedPerson]: {
        ...previousData[concernedPerson],
        [concernedParent]: {
          ...previousData[concernedPerson][concernedParent],
          [name]: value,
        },
      },
    }));
  };

  return (
    <S.Container>
      <h1>축하의 마음을 전달받을 계좌를 작성해주세요.</h1>
      <h3>계좌번호를 등록하실 분을 선택해주세요.</h3>
      <S.Wrapper>
        <div id="check-box">
          {Object.entries(family).map(([key, value], index) => (
            <label key={index}>
              <input type="checkbox" onChange={handleCheck} name={key} id={value.who} />
              <span>{key}</span>
            </label>
          ))}
        </div>
        <div id="input-area">
          {Object.entries(familyMemebers).filter(([, value]) => value.isChecked).length > 0 && (
            <h3>' - '를 제외하고 입력해주세요.</h3>
          )}
          {Object.entries(familyMemebers)
            .filter(([, value]) => value.isChecked)
            .map(([key, value], index) => (
              <div key={index} className="input-area-box" onChange={handleChange} id={value.who}>
                <h2>{key}</h2>
                <div className="account-inputs">
                  <input placeholder="은행" className="bank" name="bank" />
                  <input placeholder="계좌번호 ( ' - ' 제외)" name="account" />
                </div>
              </div>
            ))}
        </div>
      </S.Wrapper>
    </S.Container>
  );
};

export default Account;
