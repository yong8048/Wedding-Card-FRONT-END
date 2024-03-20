import { getDateMonthDay, getDateWithDots, getDayWithTime } from "@/utils/parseDate";
import * as S from "./style";
import sampleData from "@/mock/sampleData.json";
import { IoCall } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import Calendar from "react-calendar";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const tileClassName = ({ date, view }: { date: Date; view: string }) => {
  if (view === "month") {
    if (date.getDay() === 6) {
      return "saturday";
    }
  }
};

const formatDay = (_locale: string | undefined, date: Date) => {
  return date.getDate().toString();
};

const Modern = () => {
  const date = getDateMonthDay(new Date(sampleData.date));
  return (
    <S.Container>
      <S.Page1Div>
        <S.Page1Date>
          <p>
            {date.split("").map((char, index) => (
              <>
                {index === 2 ? <span>月</span> : null}
                <span key={index}>{char}</span>
                {index === 3 ? <span>日</span> : null}
              </>
            ))}
          </p>
        </S.Page1Date>
        <img src="/img1.jpg" alt="사진" />
        <S.Page1Info>
          <h1>
            {sampleData.HUSBAND.ME.name} / {sampleData.WIFE.ME.name}
          </h1>
          <h2>{getDayWithTime(new Date(sampleData.date))}</h2>
          <h2>{sampleData.location.wedding_hall}</h2>
        </S.Page1Info>
      </S.Page1Div>
      <S.Page2Div>
        <S.Page2Text>
          {sampleData.welcome.map((data, index) => (
            <h1 key={index}>{data.text}</h1>
          ))}
        </S.Page2Text>
        <S.Page2Name>
          <h2>
            {sampleData.HUSBAND.FATHER.name} · {sampleData.HUSBAND.MOTHER.name}
            <span>의 {sampleData.HUSBAND.relationship}</span>
            {` ${sampleData.HUSBAND.ME.name}`}
          </h2>
          <h2>
            {sampleData.WIFE.FATHER.name} · {sampleData.WIFE.MOTHER.name}
            <span>의 {sampleData.WIFE.relationship}</span>
            {` ${sampleData.WIFE.ME.name}`}
          </h2>
        </S.Page2Name>
      </S.Page2Div>
      <S.Page3Div>
        <p>소중한 당신을 초대합니다.</p>
      </S.Page3Div>
      <S.Page4Div>
        <div>
          <h1>신랑에게 연락하기</h1>
          <button>
            <IoCall color="#fff" />
          </button>
          <button>
            <MdOutlineMessage color="#fff" />
          </button>
        </div>
        <div>
          <h1>신부에게 연락하기</h1>
          <button>
            <IoCall color="#fff" />
          </button>
          <button>
            <MdOutlineMessage color="#fff" />
          </button>
        </div>
      </S.Page4Div>
      <S.Page5Div>
        <p>혼주에게 연락하기</p>
        <S.Page5Data>
          <div>
            <h1>신랑 측 혼주</h1>
            <div>
              <span>
                <span>아버지 </span>
                <span>{sampleData.HUSBAND.FATHER.name}</span>
              </span>
              <div>
                <button>
                  <IoCall color="#fff" />
                </button>
                <button>
                  <MdOutlineMessage color="#fff" />
                </button>
              </div>
            </div>
            <div>
              <span>
                <span>어머니 </span>
                <span>{sampleData.HUSBAND.MOTHER.name}</span>
              </span>
              <div>
                <button>
                  <IoCall color="#fff" />
                </button>
                <button>
                  <MdOutlineMessage color="#fff" />
                </button>
              </div>
            </div>
          </div>
          <div>
            <h1>신부 측 혼주</h1>
            <div>
              <span>
                <span>아버지 </span>
                <span>{sampleData.WIFE.FATHER.name}</span>
              </span>
              <div>
                <button>
                  <IoCall color="#fff" />
                </button>
                <button>
                  <MdOutlineMessage color="#fff" />
                </button>
              </div>
            </div>
            <div>
              <span>
                <span>어머니 </span>
                <span>{sampleData.WIFE.MOTHER.name}</span>
              </span>
              <div>
                <button>
                  <IoCall color="#fff" />
                </button>
                <button>
                  <MdOutlineMessage color="#fff" />
                </button>
              </div>
            </div>
          </div>
        </S.Page5Data>
      </S.Page5Div>

      <S.Page6CalendarWrapper>
        <div className="date">
          <p className="yymmdd">{getDateWithDots(new Date(sampleData.date))}</p>
          <p className="ddhhmm">{getDayWithTime(new Date(sampleData.date))}</p>
        </div>
        <div className="calendar">
          <Calendar
            value={new Date(sampleData.date)}
            formatDay={formatDay}
            calendarType="gregory"
            tileClassName={tileClassName}
          />
        </div>
        <div className="d-day">
          {/* <p>
            {sampleData.HUSBAND.ME.name} <FcLike /> {sampleData.WIFE.ME.name}의 결혼식이{" "}
            <span>{getDday(new Date(sampleData.date))}일</span> 남았습니다.
          </p> */}
        </div>
      </S.Page6CalendarWrapper>
      <S.Page7Photo>
        <p>갤러리</p>
        <Swiper className="swiper" modules={[Navigation]} slidesPerView={1}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <img src="https://picsum.photos/300/343" alt="image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Page7Photo>
      <S.SwiperBottom>
        <Swiper className="swiper-bottom" modules={[Navigation]} slidesPerView={5} spaceBetween={5}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
            <SwiperSlide key={index} className="swiper-bottom-slide">
              <img src="https://picsum.photos/200/300" alt="image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.SwiperBottom>
    </S.Container>
  );
};

export default Modern;
