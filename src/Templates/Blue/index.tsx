import * as S from "./style";
import SampleData from "@/mock/JSONData.json";
import { IoCall } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { getMonth, getDay, getFullDate } from "@/utils/parseDate";
const Blue = () => {
  return (
    <S.Container>
      <S.Page1Title>
        <div className="date">
          <p>{getMonth(new Date(SampleData.date))}</p>
          <p>{getDay(new Date(SampleData.date))}</p>
          <S.Line></S.Line>
        </div>
        <div className="name">
          <p>{SampleData.HUSBAND.ME.name}</p>
          <p>{SampleData.WIFE.ME.name}</p>
        </div>
      </S.Page1Title>
      <S.Page2Main>
        <img src="/Sample/gallery_sample_01.jpg" alt="main" />
        <div>
          <p>{getFullDate(new Date(SampleData.date))}</p>
          <p>{SampleData.location.wedding_hall}</p>
        </div>
      </S.Page2Main>
      <S.Page3Title>
        <h1>INVITATION</h1>
        <div>
          {SampleData.welcome.map((data, index) => (
            <p key={index}>{data.text}</p>
          ))}
        </div>
      </S.Page3Title>
      <S.Page4Name>
        <h2>
          {SampleData.HUSBAND.FATHER.name} · {SampleData.HUSBAND.MOTHER.name}
          <span>의 {SampleData.HUSBAND.relationship}</span>
          {` ${SampleData.HUSBAND.ME.name}`}
        </h2>
        <h2>
          {SampleData.WIFE.FATHER.name} · {SampleData.WIFE.MOTHER.name}
          <span>의 {SampleData.WIFE.relationship}</span>
          {` ${SampleData.WIFE.ME.name}`}
        </h2>
      </S.Page4Name>
      <S.Page5Img className="observer">
        <p>소중한 당신을 초대합니다.</p>
      </S.Page5Img>
      <S.Page6Call className="observer">
        <div>
          <h1>신랑에게 연락하기</h1>
          <a href={`tel:${SampleData.HUSBAND.ME.contact}`}>
            <button className="call">
              <IoCall color="#fff" />
            </button>
          </a>
          <a href={`sms:${SampleData.HUSBAND.ME.contact}`}>
            <button className="message">
              <MdOutlineMessage color="#fff" />
            </button>
          </a>
        </div>
        <div>
          <h1>신부에게 연락하기</h1>
          <a href={`tel:${SampleData.HUSBAND.ME.contact}`}>
            <button className="call">
              <IoCall color="#fff" />
            </button>
          </a>
          <a href={`sms:${SampleData.HUSBAND.ME.contact}`}>
            <button className="message">
              <MdOutlineMessage color="#fff" />
            </button>
          </a>
        </div>
      </S.Page6Call>
      <S.Page7Div className="observer">
        <p>혼주에게 연락하기</p>
        <S.Page7Data>
          <div>
            <h1>신랑 측 혼주</h1>
            <div>
              <span>
                <span>아버지 </span>
                <span>{SampleData.HUSBAND.FATHER.name}</span>
              </span>
              <div>
                <a href={`tel:${SampleData.HUSBAND.FATHER.contact}`}>
                  <button className="call">
                    <IoCall color="#fff" />
                  </button>
                </a>
                <a href={`sms:${SampleData.HUSBAND.FATHER.contact}`}>
                  <button className="message">
                    <MdOutlineMessage color="#fff" />
                  </button>
                </a>
              </div>
            </div>
            <div>
              <span>
                <span>어머니 </span>
                <span>{SampleData.HUSBAND.MOTHER.name}</span>
              </span>
              <div>
                <a href={`tel:${SampleData.HUSBAND.MOTHER.contact}`}>
                  <button className="call">
                    <IoCall color="#fff" />
                  </button>
                </a>
                <a href={`sms:${SampleData.HUSBAND.MOTHER.contact}`}>
                  <button className="message">
                    <MdOutlineMessage color="#fff" />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h1>신부 측 혼주</h1>
            <div>
              <span>
                <span>아버지 </span>
                <span>{SampleData.WIFE.FATHER.name}</span>
              </span>
              <div>
                <a href={`tel:${SampleData.WIFE.FATHER.contact}`}>
                  <button className="call">
                    <IoCall color="#fff" />
                  </button>
                </a>
                <a href={`sms:${SampleData.WIFE.FATHER.contact}`}>
                  <button className="message">
                    <MdOutlineMessage color="#fff" />
                  </button>
                </a>
              </div>
            </div>
            <div>
              <span>
                <span>어머니 </span>
                <span>{SampleData.WIFE.MOTHER.name}</span>
              </span>
              <div>
                <a href={`tel:${SampleData.WIFE.MOTHER.contact}`}>
                  <button className="call">
                    <IoCall color="#fff" />
                  </button>
                </a>
                <a href={`sms:${SampleData.WIFE.MOTHER.contact}`}>
                  <button className="message">
                    <MdOutlineMessage color="#fff" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </S.Page7Data>
      </S.Page7Div>
    </S.Container>
  );
};

export default Blue;
