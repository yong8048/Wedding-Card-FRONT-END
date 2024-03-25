import TemplateList from "@/components/Common/TemplateList";
import * as S from "./style";
import { IoOpenOutline } from "react-icons/io5";
import TemplateData from "@/constants/TemplateData.json";

const MyInvitation = () => {
  return (
    <S.Container>
      <S.Header>
        <h1>모바일 청첩장</h1>
        <p>
          ·&nbsp;제작일과 관계없이 예식일 <strong>+30일 후</strong> 청첩장이 삭제됩니다.
        </p>
      </S.Header>
      <S.InvitationWrapper>
        <div className="inform-container">
          <div className="theme">
            <span>더 심플</span>
            <button>테마 변경</button>
          </div>
        </div>
        <div className="iframe-container">
          <img src="/Template/iphone_frame.png" />
          <iframe id="preview" src="http://localhost:5173/u/asdasd"></iframe>
        </div>
        <div className="edit">
          <span>정보 수정</span>
        </div>
        <div className="url">
          <span>모바일 청첩장 바로가기</span>
          <IoOpenOutline />
        </div>
      </S.InvitationWrapper>
      <S.FavoriteWrapper>
        <h2>북마크</h2>
        <ul className="unordered">
          {Object.entries(TemplateData).map(([title, data], index) => (
            <TemplateList key={index} item={{ title, data, index }} />
          ))}
        </ul>
      </S.FavoriteWrapper>
    </S.Container>
  );
};

export default MyInvitation;
