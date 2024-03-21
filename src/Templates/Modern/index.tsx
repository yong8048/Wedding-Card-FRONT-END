import { getDateMonthDay, getDateWithDots, getDayWithTime, getFullDate } from "@/utils/parseDate";
import * as S from "./style";
import sampleData from "@/mock/sampleData.json";
import { IoCall } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import Calendar from "react-calendar";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";

import { Fragment, useEffect, useState } from "react";

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
  const [topSwiper, setTopSwiper] = useState<SwiperCore | null>(null);
  const [bottomSwiper, setBottomSwiper] = useState<SwiperCore | null>(null);
  const [swiperIndex, setSwiperIndex] = useState(0);

  useEffect(() => {
    if (topSwiper?.swipeDirection === "next") {
      if (swiperIndex >= 3) {
        bottomSwiper?.slideNext();
      }
    } else {
      if (swiperIndex <= (topSwiper?.slides.length as number) - 4) {
        bottomSwiper?.slidePrev();
      }
    }
  }, [swiperIndex]);

  const handleSlideChange = (e: { realIndex: number }) => {
    setSwiperIndex(e.realIndex);
  };

  const clickBottomImage = (index: number) => {
    if (topSwiper) {
      topSwiper.slideTo(index);
    }
  };

  return (
    <S.Container>
      <S.Page1Div>
        <S.Page1Date>
          <p>
            {date.split("").map((char, index) => (
              <Fragment key={index}>
                {index === 2 ? <span>月</span> : null}
                <span>{char}</span>
                {index === 3 ? <span>日</span> : null}
              </Fragment>
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
        <S.SwiperTop>
          <p>갤러리</p>
          <Swiper
            className="swiper"
            modules={[Navigation, EffectFade]}
            slidesPerView={1}
            effect={"fade"}
            onSlideChange={handleSlideChange}
            onSwiper={setTopSwiper}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <img src={`https://picsum.photos/id/${index * 5}/300/343/`} alt="image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </S.SwiperTop>
        <S.SwiperBottom>
          <Swiper
            className="swiper-bottom"
            modules={[Navigation]}
            watchSlidesProgress={false}
            slidesPerView={5}
            allowTouchMove={false}
            spaceBetween={5}
            onSwiper={setBottomSwiper}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
              <S.SwiperSlideComponent
                $opacity={swiperIndex === index}
                key={index}
                className="swiper-bottom-slide"
                onClick={() => clickBottomImage(index)}
              >
                <img src={`https://picsum.photos/id/${index * 5}/300/343/`} alt="image" />
              </S.SwiperSlideComponent>
            ))}
          </Swiper>
        </S.SwiperBottom>
      </S.Page7Photo>
      <S.Page8YouTube>
        <p>영상보기</p>
        <div>유튜브</div>
        <span>예쁘게 잘 살겠습니다</span>
        <span className="spantext">wedding day</span>
      </S.Page8YouTube>
      <S.Page9Live>
        <p className="title">라이브 웨딩 안내</p>
        <p>참석이 어려운 분들께서는</p>
        <p>온라인 중계로 시청하실 수 있습니다.</p>
        <p className="wedding-date">{getFullDate(new Date(sampleData.date))}</p>
        <button>라이브 웨딩 보러가기</button>
      </S.Page9Live>
      <S.Page10Map>
        <p className="title">오시는 길</p>
        <div>
          <h1>{sampleData.location.wedding_hall}</h1>
          <p>{sampleData.location.address}</p>
        </div>
      </S.Page10Map>
    </S.Container>
  );
};

export default Modern;
