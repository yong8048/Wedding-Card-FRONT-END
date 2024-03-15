import { TconcernedParentType, TconcernedPersonType } from "@/types/invitation";
import * as S from "./style";
import { useSetRecoilState } from "recoil";
import { invitationJSONState } from "@/stores/createInvitationJSONStore";

const HumanInfo = () => {
  const setInvitationData = useSetRecoilState(invitationJSONState);
  const handleDataChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    const divEl = e.currentTarget;
    const inputEl = e.target as HTMLInputElement;
    const concernedPerson = divEl.id as TconcernedPersonType;

    const { name, value } = inputEl;
    const concernedParent = name as TconcernedParentType;

    if (name === "relationship") {
      setInvitationData(previousData => ({
        ...previousData,
        [concernedPerson]: {
          ...previousData[concernedPerson],
          relationship: value,
        },
      }));
    } else {
      setInvitationData(previousData => ({
        ...previousData,
        [concernedPerson]: {
          ...previousData[concernedPerson],
          [concernedParent]: { ...previousData[concernedPerson][concernedParent], name: value },
        },
      }));
    }
  };
  return (
    <S.Container>
      {["신랑", "신부"].map((value, index) => (
        <S.Wrapper key={index} $isFirst={value === "신랑"}>
          <h1>
            {value} 및 {value}측 혼주 정보를 작성해주세요.
          </h1>
          {/* <h3>반드시 반드시 반드시 설명 설명 설명</h3> */}
          <div onChange={handleDataChange} id={value === "신랑" ? "HUSBAND" : "WIFE"}>
            <input placeholder={`${value} 부`} name="FATHER" />
            <input placeholder={`${value} 모`} name="MOTHER" />
            <input placeholder="관계" name="relationship" />
            <input placeholder="본인" name="ME" />
          </div>
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export default HumanInfo;
