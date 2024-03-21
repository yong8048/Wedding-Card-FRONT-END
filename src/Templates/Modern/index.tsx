import { getDateMonthDay, getDateWithDots, getDayWithTime, getDday, getFullDate } from "@/utils/parseDate";
import * as S from "./style";
import MockData from "@/mock/JSONData.json";
import { IoCall } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import Calendar from "react-calendar";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { FcLike } from "react-icons/fc";

import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";

import { Fragment, useEffect, useState } from "react";
import LocationCard from "@/components/Common/LocationCard";
import { applyStyles } from "@/utils/parseInlineStyle";

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
  const date = getDateMonthDay(new Date(MockData.date));
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

  const clickRoadMap = (e: React.MouseEvent<HTMLDivElement>) => {
    let target = e.target as HTMLElement;
    while (target !== null && target.id === "") {
      target = target.parentNode as HTMLElement;
    }
    console.log(target);
    let url = "";

    switch (target.id) {
      case "naver":
        url = `https://map.naver.com/v5/search/${encodeURIComponent(MockData.location.address)}`;
        break;
      case "kakao":
        url = `https://map.kakao.com/?q=${encodeURIComponent(MockData.location.address)}`;
        break;
      case "tmap":
        url = `https://apis.openapi.sk.com/tmap/app/routes?appKey=${import.meta.env.VITE_TMAP_APP_KEY}&name=${MockData.location.address}&lon=${MockData.location.longitude}&lat=${MockData.location.latitude}`;
        break;
      default:
        return;
    }
    window.open(url, "_blank");
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
            {MockData.HUSBAND.ME.name} / {MockData.WIFE.ME.name}
          </h1>
          <h2>{getDayWithTime(new Date(MockData.date))}</h2>
          <h2>{MockData.location.wedding_hall}</h2>
        </S.Page1Info>
      </S.Page1Div>
      <S.Page2Div>
        <S.Page2Text>
          {MockData.welcome.map((data, index) => (
            <h1 key={index}>{data.text}</h1>
          ))}
        </S.Page2Text>
        <S.Page2Name>
          <h2>
            {MockData.HUSBAND.FATHER.name} · {MockData.HUSBAND.MOTHER.name}
            <span>의 {MockData.HUSBAND.relationship}</span>
            {` ${MockData.HUSBAND.ME.name}`}
          </h2>
          <h2>
            {MockData.WIFE.FATHER.name} · {MockData.WIFE.MOTHER.name}
            <span>의 {MockData.WIFE.relationship}</span>
            {` ${MockData.WIFE.ME.name}`}
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
                <span>{MockData.HUSBAND.FATHER.name}</span>
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
                <span>{MockData.HUSBAND.MOTHER.name}</span>
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
                <span>{MockData.WIFE.FATHER.name}</span>
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
                <span>{MockData.WIFE.MOTHER.name}</span>
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
          <p className="yymmdd">{getDateWithDots(new Date(MockData.date))}</p>
          <p className="ddhhmm">{getDayWithTime(new Date(MockData.date))}</p>
        </div>
        <div className="calendar">
          <Calendar
            value={new Date(MockData.date)}
            formatDay={formatDay}
            calendarType="gregory"
            tileClassName={tileClassName}
          />
        </div>
        <div className="d-day">
          <p>
            {MockData.HUSBAND.ME.name} <FcLike /> {MockData.WIFE.ME.name}의 결혼식이{" "}
            <span>{getDday(new Date(MockData.date))}일</span> 남았습니다.
          </p>
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
        <p className="wedding-date">{getFullDate(new Date(MockData.date))}</p>
        <button>라이브 웨딩 보러가기</button>
      </S.Page9Live>
      <S.Page10Map>
        <p className="title">오시는 길</p>
        <div className="address">
          <h1>{MockData.location.wedding_hall}</h1>
          <p>{MockData.location.address}</p>
        </div>
        <div className="roadmap">
          <LocationCard latitude={MockData.location.latitude} longitude={MockData.location.longitude} />
        </div>
        <div className="roadmap-nav" onClick={clickRoadMap}>
          <div id="naver">
            <img src="/Template/icon_navermap.png" />
            <span>네이버 지도</span>
          </div>
          <div id="kakao">
            <img src="/Template/icon_kakaonavi.png" />
            <span>카카오 내비</span>
          </div>
          <div id="tmap">
            <img src="/Template/icon_tmap.png" />
            <span>티맵</span>
          </div>
        </div>
      </S.Page10Map>
      <S.Page11Way>
        <div>
          <p className="title">지하철안내</p>
          {MockData.road.subway.map(({ text, inline_style }, index) => (
            <p className="info" key={index}>
              {applyStyles(text, inline_style)}
            </p>
          ))}
        </div>
        <div>
          <p className="title">버스안내</p>
          {MockData.road.bus.map(({ text, inline_style }, index) => (
            <p className="info" key={index}>
              {applyStyles(text, inline_style)}
            </p>
          ))}
        </div>
        <div>
          <p className="title">주차안내</p>
          {MockData.road.car.map(({ text, inline_style }, index) => (
            <p className="info" key={index}>
              {applyStyles(text, inline_style)}
            </p>
          ))}
        </div>
        <div>
          <p className="title">전세버스안내</p>
          {MockData.road.etc.info.map(({ text, inline_style }, index) => (
            <p className="info" key={index}>
              {applyStyles(text, inline_style)}
            </p>
          ))}
        </div>
      </S.Page11Way>
      <S.Page12Account>
        <p className="title">신랑신부에게 마음 전하기</p>
        <p className="text">축하의 마음을 담아 축의금을 전달해보세요.</p>
        <div>
          <p>신랑측 마음</p>
          <button>계좌번호 보기</button>
        </div>
        <div>
          <p>신부측 마음</p>
          <button>계좌번호 보기</button>
        </div>
      </S.Page12Account>
    </S.Container>
  );
};

export default Modern;
