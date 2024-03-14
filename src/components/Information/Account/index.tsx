import { useEffect, useState } from "react";
import * as S from "./style";
import { IReqInvitationJSON, TconcernedParentType, TconcernedPersonType } from "@/types/invitation";

type TFamily = "신랑" | "신랑 부" | "신랑 모" | "신부" | "신부 부" | "신부 모";
type TFamilyKey = "HUSBAND.ME" | "HUSBAND.FATHER" | "HUSBAND.MOTHER" | "WIFE.ME" | "WIFE.FATHER" | "WIFE.MOTHER";

interface IFamily {
  [key: string]: {
    who: TFamilyKey;
    isChecked: boolean;
  };
}

const family: IFamily = {
  신랑: {
    who: "HUSBAND.ME",
    isChecked: false,
  },
  "신랑 부": {
    who: "HUSBAND.FATHER",
    isChecked: false,
  },
  "신랑 모": {
    who: "HUSBAND.MOTHER",
    isChecked: false,
  },
  신부: {
    who: "WIFE.ME",
    isChecked: false,
  },
  "신부 부": {
    who: "WIFE.FATHER",
    isChecked: false,
  },
  "신부 모": {
    who: "WIFE.MOTHER",
    isChecked: false,
  },
};

const initailData = {
  "HUSBAND.ME": {
    bank: "",
    account: "",
  },
  "HUSBAND.FATHER": {
    bank: "",
    account: "",
  },
  "HUSBAND.MOTHER": {
    bank: "",
    account: "",
  },
  "WIFE.ME": {
    bank: "",
    account: "",
  },
  "WIFE.FATHER": {
    bank: "",
    account: "",
  },
  "WIFE.MOTHER": {
    bank: "",
    account: "",
  },
};

const Account = ({
  setCreateInvitationData: setCreateInvitaionData,
}: {
  setCreateInvitationData: React.Dispatch<React.SetStateAction<IReqInvitationJSON>>;
}) => {
  const [familyMemebers, setFamilyMemebers] = useState(family);
  const [inputValue, setInputValue] = useState(initailData);

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

    setInputValue(previousData => ({
      ...previousData,
      [who]: {
        ...previousData[who as TFamilyKey],
        bank: "",
        account: "",
      },
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, id } = e.target;

    setInputValue(previousData => ({
      ...previousData,
      [id]: {
        ...previousData[id as TFamilyKey],
        [name]: value,
      },
    }));
  };

  useEffect(() => {
    Object.entries(inputValue).map(([key, value]) => {
      const [person, parent] = key.split(".");
      const concernedPerson = person as TconcernedPersonType;
      const concernedParent = parent as TconcernedParentType;

      setCreateInvitaionData(previousData => ({
        ...previousData,
        [concernedPerson]: {
          ...previousData[concernedPerson],
          [concernedParent]: {
            ...previousData[concernedPerson][concernedParent],
            bank: value.bank,
            account: value.account,
          },
        },
      }));
    });
  }, [inputValue]);

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
              <div key={index} className="input-area-box">
                <h2>{key}</h2>
                <div className="account-inputs">
                  <input
                    placeholder="은행"
                    className="bank"
                    name="bank"
                    id={value.who}
                    value={inputValue[value.who].bank}
                    onChange={handleChange}
                  />
                  <input
                    placeholder="계좌번호 ( ' - ' 제외)"
                    name="account"
                    id={value.who}
                    value={inputValue[value.who].account}
                    onChange={handleChange}
                  />
                </div>
              </div>
            ))}
        </div>
      </S.Wrapper>
    </S.Container>
  );
};

export default Account;
