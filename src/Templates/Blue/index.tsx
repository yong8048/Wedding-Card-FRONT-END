import * as S from "./style";
import SampleData from "@/mock/JSONData.json";
import { IoCall } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { getMonth, getDay, getFullDate, getDateWithDots, getDayWithTime, getDday } from "@/utils/parseDate";
import Calendar from "react-calendar";
import { useEffect, useRef, useState } from "react";
import { FcLike } from "react-icons/fc";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import SwiperCore from "swiper";
import galleryImages from "@/mock/GalleryImages.json";
import SwiperModal from "@/components/Template/SwiperModal";
import YouTube from "react-youtube";
import LocationCard from "@/components/Common/LocationCard";
import { applyStyles } from "@/utils/parseInlineStyle";
import { IoIosClose } from "react-icons/io";
import guestBook from "@/mock/GuestBook.json";
import { RiKakaoTalkFill } from "react-icons/ri";
import { HiOutlineLink } from "react-icons/hi";
import { copyLink } from "@/utils/copyLink";
import { shareKakao } from "@/utils/shareKakao";
const Blue = () => {
  const containerRef = useRef<HTMLInputElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const [topSwiper, setTopSwiper] = useState<SwiperCore | null>(null);
  const [bottomSwiper, setBottomSwiper] = useState<SwiperCore | null>(null);
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [curSwiperImageIndex, setCurSwiperImageIndex] = useState(0);
  const [accountModal, setAccountModal] = useState(false);
  const [accountInfo, setAccountInfo] = useState(false);
  const [currentGuestBookPage, setCurrentGuestBookPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentGuestBookPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = guestBook.guestbook.slice(indexOfFirstItem, indexOfLastItem);
  const addItemRef = (el: HTMLDivElement) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };
  const handleClickGuestBookPagination = (index: number) => {
    setCurrentGuestBookPage(index);
  };

  const clickBottomImage = (index: number) => {
    if (topSwiper) {
      topSwiper.slideTo(index);
    }
  };

  const clickCloseModal = () => {
    setAccountModal(!accountModal);
  };
  const formatDay = (_locale: string | undefined, date: Date) => {
    return date.getDate().toString();
  };
  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      if (date.getDay() === 6) {
        return "saturday";
      }
    }
  };
  const handleSlideChange = (e: { realIndex: number }) => {
    setSwiperIndex(e.realIndex);
  };

  const clickOpenImageModal = (index: number) => {
    setCurSwiperImageIndex(index);
  };
  useEffect(() => {
    if (topSwiper?.swipeDirection === "next") {
      if (swiperIndex >= 3) {
        bottomSwiper?.slideNext();
      }
    } else {
      if (topSwiper?.slides) {
        if (swiperIndex <= (topSwiper?.slides.length as number) - 4) {
          bottomSwiper?.slidePrev();
        }
      }
    }
  }, [swiperIndex]);
  useEffect(() => {
    if (itemRefs.current.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px", threshold: 0.2 },
    );

    itemRefs.current.forEach(el => {
      observer.observe(el);
    });

    return () => {
      itemRefs.current.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, [itemRefs.current.length]);
  const clickAccountModal = (e: boolean) => {
    setAccountModal(!accountModal);
    setAccountInfo(e);
  };
  const handleClickShareKakao = () => {
    shareKakao({
      title: SampleData.open_graph.title,
      description: SampleData.open_graph.subtitle,
      imageUrl: "https://avatars.githubusercontent.com/u/75530371?v=4",
      link: window.location.href,
    });
  };
  const handleClickCopyAccount = (account: string) => {
    navigator.clipboard
      .writeText(account)
      .then(() => {
        alert("계좌 번호가 클립보드에 복사되었습니다.");
      })
      .catch(err => {
        console.error("클립보드 복사에 실패했습니다.", err);
      });
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
        url = `https://map.naver.com/v5/search/${encodeURIComponent(SampleData.location.address)}`;
        break;
      case "kakao":
        url = `https://map.kakao.com/?q=${encodeURIComponent(SampleData.location.address)}`;
        break;
      case "tmap":
        url = `https://apis.openapi.sk.com/tmap/app/routes?appKey=${import.meta.env.VITE_TMAP_APP_KEY}&name=${SampleData.location.address}&lon=${SampleData.location.longitude}&lat=${SampleData.location.latitude}`;
        break;
      default:
        return;
    }
    window.open(url, "_blank");
  };

  const clickPostMessage = () => {};
  const clickRemoveWrite = () => {};

  return (
    <S.Container ref={containerRef}>
      <S.Page1Title ref={addItemRef}>
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
      <S.Page2Main ref={addItemRef}>
        <img src="/Sample/gallery_sample_01.jpg" alt="main" />
        <div>
          <p>{getFullDate(new Date(SampleData.date))}</p>
          <p>{SampleData.location.wedding_hall}</p>
        </div>
      </S.Page2Main>
      <S.Page3Title ref={addItemRef}>
        <h1>INVITATION</h1>
        <div>
          {SampleData.welcome.map((data, index) => (
            <p key={index}>{data.text}</p>
          ))}
        </div>
      </S.Page3Title>
      <S.Page4Name ref={addItemRef}>
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
      <S.Page5Img className="observer" ref={addItemRef}>
        <p>소중한 당신을 초대합니다.</p>
      </S.Page5Img>
      <S.Page6Call className="observer" ref={addItemRef}>
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
      <S.Page7Div className="observer" ref={addItemRef}>
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
      <S.Page8CalendarWrapper ref={addItemRef} className="observer">
        <div className="date">
          <p className="yymmdd">{getDateWithDots(new Date(SampleData.date))}</p>
          <p className="ddhhmm">{getDayWithTime(new Date(SampleData.date))}</p>
        </div>
        <div className="calendar">
          <Calendar
            value={new Date(SampleData.date)}
            formatDay={formatDay}
            tileClassName={tileClassName}
            calendarType="gregory"
          />
        </div>
        <div className="d-day">
          <p>
            {SampleData.HUSBAND.ME.name} <FcLike /> {SampleData.WIFE.ME.name}의 결혼식이{" "}
            <span>{getDday(new Date(SampleData.date))}일</span> 남았습니다.
          </p>
        </div>
      </S.Page8CalendarWrapper>
      <S.Page9Photo ref={addItemRef} className="observer">
        <S.SwiperTop>
          <p>GALLERY</p>
          <Swiper
            className="swiper"
            modules={[Navigation, EffectFade]}
            slidesPerView={1}
            effect={"fade"}
            onSlideChange={handleSlideChange}
            onSwiper={setTopSwiper}
          >
            {galleryImages.GalleryImages.map((data, index) => (
              <SwiperSlide key={index} className="swiper-slide" onClick={() => clickOpenImageModal(index + 1)}>
                <img src={data} alt="image" />
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
            {galleryImages.GalleryImages.map((data, index) => (
              <S.SwiperSlideComponent
                $opacity={swiperIndex === index}
                key={index}
                className="swiper-bottom-slide"
                onClick={() => clickBottomImage(index)}
              >
                <img src={data} alt="image" />
              </S.SwiperSlideComponent>
            ))}
          </Swiper>
        </S.SwiperBottom>
      </S.Page9Photo>
      {curSwiperImageIndex !== 0 && (
        <SwiperModal
          curSwiperImageIndex={curSwiperImageIndex}
          images={galleryImages.GalleryImages}
          setCurSwiperImageIndex={setCurSwiperImageIndex}
        />
      )}
      <S.Page10YouTube ref={addItemRef} className="observer">
        <p>MOVIE</p>
        <div>
          <YouTube
            videoId={SampleData.contents.video_id}
            className="youtube"
            opts={{
              width: "100%",
              height: "300px",
              playerVars: {
                autoplay: false,
              },
            }}
          />
        </div>
        <img src="/tbanner.png" alt="" />
      </S.Page10YouTube>
      <S.Page11Live ref={addItemRef} className="observer">
        <p className="title">LIVE</p>
        <div>
          <p>참석이 어려운 분들께서는</p>
          <p>온라인 중계로 시청하실 수 있습니다.</p>
          <p className="wedding-date">{getFullDate(new Date(SampleData.date))}</p>
          <button>라이브 웨딩 보러가기</button>
        </div>
      </S.Page11Live>
      <S.Page12Map ref={addItemRef} className="observer">
        <p className="title">LOCATION</p>
        <div className="address">
          <h1>{SampleData.location.wedding_hall}</h1>
          <p>{SampleData.location.address}</p>
        </div>
        <div className="roadmap">
          <LocationCard latitude={SampleData.location.latitude} longitude={SampleData.location.longitude} />
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
      </S.Page12Map>
      <S.Page13Way ref={addItemRef} className="observer">
        <div>
          <p className="title">지하철안내</p>
          {SampleData.road.subway.map(({ text, inline_style }, index) => (
            <p className="info" key={index}>
              {applyStyles(text, inline_style)}
            </p>
          ))}
        </div>
        <div>
          <p className="title">버스안내</p>
          {SampleData.road.bus.map(({ text, inline_style }, index) => (
            <p className="info" key={index}>
              {applyStyles(text, inline_style)}
            </p>
          ))}
        </div>
        <div>
          <p className="title">주차안내</p>
          {SampleData.road.car.map(({ text, inline_style }, index) => (
            <p className="info" key={index}>
              {applyStyles(text, inline_style)}
            </p>
          ))}
        </div>
        <div>
          <p className="title">전세버스안내</p>
          {SampleData.road.etc.info.map(({ text, inline_style }, index) => (
            <p className="info" key={index}>
              {applyStyles(text, inline_style)}
            </p>
          ))}
        </div>
      </S.Page13Way>
      <S.Page14Account ref={addItemRef} className="observer">
        <p className="title">ACCOUNT</p>
        <p className="text">축하의 마음을 담아 축의금을 전달해보세요.</p>
        <div>
          <p>신랑측 마음</p>
          <button onClick={() => clickAccountModal(true)}>계좌번호 보기</button>
        </div>
        <div>
          <p>신부측 마음</p>
          <button onClick={() => clickAccountModal(false)}>계좌번호 보기</button>
        </div>
      </S.Page14Account>
      {accountModal ? (
        <S.AccountModal>
          <div>
            {accountInfo ? <p>신랑측 계좌정보</p> : <p>신부측 계좌정보</p>}
            <div className="close" onClick={clickCloseModal}>
              <IoIosClose size={50} />
            </div>
            <div>
              <div>
                {accountInfo ? (
                  <>
                    {" "}
                    <p>{SampleData.HUSBAND.FATHER.bank}은행</p>
                    <p>예금주 : {SampleData.HUSBAND.FATHER.name}</p>
                  </>
                ) : (
                  <>
                    {" "}
                    <p>{SampleData.WIFE.FATHER.bank}은행</p>
                    <p>예금주 : {SampleData.WIFE.FATHER.name}</p>
                  </>
                )}
              </div>
              <div>
                {accountInfo ? (
                  <input type="text" value={SampleData.HUSBAND.FATHER.account} readOnly />
                ) : (
                  <input type="text" value={SampleData.WIFE.FATHER.account} readOnly />
                )}
                <button
                  onClick={() =>
                    handleClickCopyAccount(
                      accountInfo ? SampleData.HUSBAND.FATHER.account : SampleData.WIFE.FATHER.account,
                    )
                  }
                >
                  복사
                </button>
              </div>
            </div>
            <div>
              <div>
                {accountInfo ? (
                  <>
                    {" "}
                    <p>{SampleData.HUSBAND.MOTHER.bank}은행</p>
                    <p>예금주 : {SampleData.HUSBAND.MOTHER.name}</p>
                  </>
                ) : (
                  <>
                    {" "}
                    <p>{SampleData.WIFE.MOTHER.bank}은행</p>
                    <p>예금주 : {SampleData.WIFE.MOTHER.name}</p>
                  </>
                )}
              </div>
              <div>
                {accountInfo ? (
                  <input type="text" value={SampleData.HUSBAND.MOTHER.account} readOnly />
                ) : (
                  <input type="text" value={SampleData.WIFE.MOTHER.account} readOnly />
                )}
                <button
                  onClick={() =>
                    handleClickCopyAccount(
                      accountInfo ? SampleData.HUSBAND.MOTHER.account : SampleData.WIFE.MOTHER.account,
                    )
                  }
                >
                  복사
                </button>
              </div>
            </div>
          </div>
        </S.AccountModal>
      ) : null}
      <S.Page15Message ref={addItemRef} className="observer">
        <p className="title">MESSAGE</p>
        <div className="write">
          <p>축하 메세지를 남겨주세요.</p>
          <div>
            <input type="text" placeholder="이름" />
            <input type="password" placeholder="비밀번호" />
          </div>
          <textarea name="message" id="messages" placeholder="축하 메세지"></textarea>
          <button onClick={clickPostMessage}>등록하기</button>
        </div>

        {currentItems.map(item => (
          <div key={item.id} className="guestbook-wrapper">
            <div>
              <h2>{item.name}</h2>
              <span>{getDateWithDots(new Date(item.date))}</span>
            </div>
            <p>{item.content}</p>
            <div className="close" onClick={clickRemoveWrite}>
              <IoIosClose />
            </div>
          </div>
        ))}
        <div className="pagination">
          {new Array(Math.floor(guestBook.guestbook.length / 5) + 1).fill(0).map((_, index) => (
            <S.GuestBookPaginationSpan
              $isActiveIndex={currentGuestBookPage === index + 1}
              key={index}
              onClick={() => handleClickGuestBookPagination(index + 1)}
              id={index.toString()}
            >
              {index + 1}
            </S.GuestBookPaginationSpan>
          ))}
        </div>
      </S.Page15Message>
      <S.Page16Share ref={addItemRef} className="observer">
        <p className="title">Link</p>
        <div>
          <div className="wrapper" onClick={handleClickShareKakao}>
            <RiKakaoTalkFill size={24} />
            <span>
              카카오톡
              <br />
              공유하기
            </span>
          </div>
          <div className="wrapper" onClick={() => copyLink(window.location.href)}>
            <HiOutlineLink size={24} />
            <span>
              링크주소
              <br />
              복사하기
            </span>
          </div>
        </div>
        <p className="copyright">
          Copyright {new Date().getFullYear()}.<span>WECA&nbsp;</span>All rights reserved
        </p>
      </S.Page16Share>
    </S.Container>
  );
};

export default Blue;
