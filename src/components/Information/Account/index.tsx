import { useEffect, useRef, useState } from "react";
import * as S from "./style";

const family = ["신랑", "신랑 부", "신랑 모", "신부", "신부 부", "신부 모"];

const Account = () => {
  const checkBoxRefs = useRef<null[] | HTMLInputElement[]>([]);
  const bankRefs = useRef<null[] | HTMLInputElement[]>([]);
  const accountRefs = useRef<null[] | HTMLInputElement[]>([]);

  const [checkedEls, setCheckedEls] = useState<(number | undefined)[]>([]);

  const handleCheck = () => {
    const checkStatus = checkBoxRefs.current.filter(status => status?.checked);
    const names = checkStatus.map(el => el?.name);
    const index = names.map(item => family.indexOf(item as string));

    setCheckedEls(index);
  };

  useEffect(() => {
    const filledInputs = checkedEls.map(el => bankRefs.current[el as number]);
    console.log(filledInputs);
  }, [checkedEls]);

  return (
    <S.Container>
      <h1>축하의 마음을 전달받을 계좌를 작성해주세요.</h1>
      <h3>계좌번호를 등록하실 분을 선택해주세요.</h3>
      <S.Wrapper>
        <div id="check-box">
          {family.map((value, index) => (
            <label key={index}>
              <input
                type="checkbox"
                ref={element => (checkBoxRefs.current[index] = element)}
                onChange={handleCheck}
                name={value}
              />
              <span>{value}</span>
            </label>
          ))}
        </div>
        <div id="input-area">
          {checkedEls.length > 0 && <h3>' - '를 제외하고 입력해주세요.</h3>}
          {checkedEls.map((order, index) => (
            <div key={index} className="input-area-box">
              <h2>{family[order as number]}</h2>
              <div className="account-inputs">
                <input
                  placeholder="은행"
                  className="account"
                  ref={element => (bankRefs.current[order as number] = element)}
                  name={String(order)}
                />
                <input
                  placeholder="계좌번호 ( ' - ' 제외)"
                  ref={element => (accountRefs.current[order as number] = element)}
                  name={String(order)}
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
