import { Fragment, useEffect, useRef, useState } from "react";
import * as S from "./style";
import { PiSpeakerHighDuotone, PiSpeakerXDuotone } from "react-icons/pi";
import { Audios } from "@/constants/AudioData";
import { BsTelephoneFill, BsChatText } from "react-icons/bs";
import {
  IoBusOutline,
  IoSubwayOutline,
  IoCarOutline,
  IoBalloonOutline,
  IoCloseOutline,
  IoCopyOutline,
} from "react-icons/io5";
import { TbMailHeart } from "react-icons/tb";
import { RiKakaoTalkFill } from "react-icons/ri";
import { HiOutlineLink } from "react-icons/hi";
import sampleData from "@/mock/JSONData.json";
import guestBook from "@/mock/GuestBook.json";
import { FcLike } from "react-icons/fc";
import {
  getDate,
  getDateWithDots,
  getDayEng,
  getDayWithTime,
  getDday,
  getFullDate,
  getMonth,
  getYear,
} from "@/utils/parseDate";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import LocationCard from "@/components/Common/LocationCard";
import { Helmet } from "react-helmet";

type InlineStyle = {
  offset: number;
  length: number;
  style: string;
};

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

const applyStyles = (text: string, styles: InlineStyle[]) => {
  const styleMap: Array<Array<string>> = Array(text.length)
    .fill(null)
    .map(() => []);

  styles.forEach(({ offset, length, style }) => {
    for (let i = offset; i < offset + length; i++) {
      styleMap[i].push(style);
    }
  });

  const result: React.ReactNode[] = [];
  let currentStyledText = "";
  let currentStyles: Array<string> = [];

  styleMap.forEach((stylesAtIndex, index) => {
    const char = text.charAt(index);
    if (stylesAtIndex.join() === currentStyles.join()) {
      currentStyledText += char;
    } else {
      if (currentStyledText) {
        result.push(<Fragment key={index}>{wrapTextWithStyles(currentStyledText, currentStyles)}</Fragment>);
      }
      currentStyledText = char;
      currentStyles = stylesAtIndex;
    }
  });

  if (currentStyledText) {
    result.push(<Fragment key={text.length}>{wrapTextWithStyles(currentStyledText, currentStyles)}</Fragment>);
  }

  return result;
};

const wrapTextWithStyles = (text: string, styles: Array<string>) => {
  return styles.reduce((acc, style) => {
    switch (style) {
      case "BOLD":
        return <strong>{acc}</strong>;
      case "ITALIC":
        return <em>{acc}</em>;
      case "UNDERLINE":
        return <u>{acc}</u>;
      default:
        return acc;
    }
  }, text as React.ReactNode);
};

const TheSimple = () => {
  const [isAudioPlay, setIsAudioPlay] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isActiveGuestBook, setIsActiveGuestBook] = useState(1);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isOpenAccount, setIsOpenAccount] = useState("");
  const audioRef = useRef<HTMLAudioElement>(null);
  const containerRef = useRef<HTMLInputElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  const addItemRef = (el: HTMLDivElement) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  const handleClickAudio = () => {
    setIsAudioPlay(!isAudioPlay);
  };

  const handleClickContantModal = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.target as HTMLDivElement;
    if (element.classList.contains("container")) {
      setIsContactModalOpen(false);
      setIsAccountModalOpen(false);
    }
  };

  const handleClickNaverMap = (e: React.MouseEvent<HTMLDivElement>) => {
    let target = e.target as HTMLElement;
    while (target !== null && target.id === "") {
      target = target.parentNode as HTMLElement;
    }
    console.log(target);
    let url = "";
    switch (target.id) {
      case "naver":
        url = `https://map.naver.com/v5/search/${encodeURIComponent(sampleData.location.address)}`;
        break;
      case "kakao":
        url = `https://map.kakao.com/?q=${encodeURIComponent(sampleData.location.address)}`;
        break;
      case "tmap":
        url = `https://apis.openapi.sk.com/tmap/app/routes?appKey=${import.meta.env.VITE_TMAP_APP_KEY}&name=${sampleData.location.address}&lon=${sampleData.location.longitude}&lat=${sampleData.location.latitude}`;
        break;
      default:
        return;
    }
    window.open(url, "_blank");
  };

  const handleClickGuestBookPagination = (index: number) => {
    setIsActiveGuestBook(index);
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

  const handleClickOpenAccount = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsOpenAccount(e.currentTarget.id);
    setIsAccountModalOpen(true);
  };

  const handleClickShareKakao = () => {
    if (window.Kakao) {
      window.Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: sampleData.open_graph.title,
          description: sampleData.open_graph.subtitle,
          imageUrl: "https://avatars.githubusercontent.com/u/75530371?v=4",
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      });
    }
  };

  const handleClickCopyLink = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        alert("링크주소가 클립보드에 복사되었습니다.");
      })
      .catch(err => {
        console.error("클립보드 복사에 실패했습니다.", err);
      });
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
    }
  }, []);

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

  useEffect(() => {
    isAudioPlay ? audioRef.current?.play() : audioRef.current?.pause();
  }, [isAudioPlay]);

  return (
    <S.Container ref={containerRef}>
      <Helmet>
        <title>{sampleData.open_graph.title}</title>
        <meta name="description" content={`${sampleData.open_graph.title} 결혼합니다`} />
        <meta property="og:title" content={sampleData.open_graph.title} />
        <meta property="og:description" content={`${sampleData.open_graph.title} 결혼합니다`} />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/75530371?v=4" />
        <meta property="og:url" content="페이지 URL" />
      </Helmet>
      <S.AudioWrapper>
        <audio src={Audios[sampleData.contents.bgm - 1]} ref={audioRef} />
        <div className="audio-image" onClick={handleClickAudio}>
          {isAudioPlay ? <PiSpeakerHighDuotone size={20} /> : <PiSpeakerXDuotone size={20} />}
        </div>
      </S.AudioWrapper>
      <S.MainWrapper ref={addItemRef}>
        <div className="date">
          <div className="date-yymmdd">
            <span>{getYear(new Date(sampleData.date))}</span>
            <span>{getMonth(new Date(sampleData.date))}</span>
            <span>{getDate(new Date(sampleData.date))}</span>
          </div>
          <div className="date-day">
            <span>{getDayEng(new Date(sampleData.date))}</span>
          </div>
        </div>
        <div className="main-image">
          <img src="/img1.jpg" />
        </div>
        <div className="wedding-info">
          <div className="wedding-info-name">
            <span>{sampleData.HUSBAND.ME.name}</span>
            <div id="divider"></div>
            <span>{sampleData.WIFE.ME.name}</span>
          </div>
          <div className="wedding-info-date">
            <span>{getFullDate(new Date(sampleData.date))}</span>
          </div>
          <div className="wedding-info-hall">
            <span>{sampleData.location.wedding_hall}</span>
          </div>
        </div>
      </S.MainWrapper>
      <S.GreetingWrapper ref={addItemRef}>
        <img src="/Template/icon_flower.png" />
        <div className="text">
          {sampleData.welcome.map(({ text, inline_style }, index) => (
            <p key={index}>{applyStyles(text, inline_style)}</p>
          ))}
        </div>
      </S.GreetingWrapper>
      <S.HumanWrapper ref={addItemRef}>
        <div className="humanInfo">
          <p>
            김장인
            <span className="dot">·</span>
            박장모
            <span className="relation">의 장남</span>
            김신랑
          </p>
        </div>
        <div className="humanInfo">
          <p>
            이사돈
            <span className="dot">·</span>
            김사촌
            <span className="relation">의 차녀</span>
            이신부
          </p>
        </div>
        <button className="contact-button" onClick={handleClickContantModal}>
          <BsTelephoneFill color="cec3c3" />
          연락하기
        </button>
      </S.HumanWrapper>
      <S.CalendarWrapper ref={addItemRef}>
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
          <p>
            {sampleData.HUSBAND.ME.name} <FcLike /> {sampleData.WIFE.ME.name}의 결혼식이{" "}
            <span>{getDday(new Date(sampleData.date))}일</span> 남았습니다.
          </p>
        </div>
      </S.CalendarWrapper>
      <S.LocationContainer ref={addItemRef}>
        <div className="title">
          <span className="eng">LOCATION</span>
          <span className="kor">오시는 길</span>
        </div>
        <div className="subtitle">
          <p className="wedding-hall">{sampleData.location.wedding_hall}</p>
          <p className="address">{sampleData.location.address}</p>
        </div>
        <div className="roadmap">
          {<LocationCard latitude={sampleData.location.latitude} longitude={sampleData.location.longitude} />}
          <div className="roadmap-nav" onClick={handleClickNaverMap}>
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
        </div>
      </S.LocationContainer>
      <S.WayToComeContainer>
        <div ref={addItemRef} className="traffic bus">
          <div className="title">
            <div className="icon">
              <IoBusOutline size={30} color="#ab9da1" />
            </div>
            <span>버스로 오시는길</span>
          </div>
          <div className="description">
            {sampleData.road.bus.map(({ text, inline_style }, index) => (
              <p key={index}>{applyStyles(text, inline_style)}</p>
            ))}
          </div>
        </div>
        <div ref={addItemRef} className="traffic subway">
          <div className="title">
            <div className="icon">
              <IoSubwayOutline size={30} color="#ab9da1" />
            </div>
            <span>지하철로 오시는길</span>
          </div>
          <div className="description">
            {sampleData.road.subway.map(({ text, inline_style }, index) => (
              <p key={index}>{applyStyles(text, inline_style)}</p>
            ))}
          </div>
        </div>
        <div ref={addItemRef} className="traffic car">
          <div className="title">
            <div className="icon">
              <IoCarOutline size={30} color="#ab9da1" />
            </div>
            <span>자가용으로 오시는길</span>
          </div>
          <div className="description">
            {sampleData.road.car.map(({ text, inline_style }, index) => (
              <p key={index}>{applyStyles(text, inline_style)}</p>
            ))}
          </div>
        </div>
        <div ref={addItemRef} className="traffic etc">
          <div className="title">
            <div className="icon">
              <IoBalloonOutline size={30} color="#ab9da1" />
            </div>
            <span>{sampleData.road.etc.transport_type}</span>
          </div>
          <div className="description">
            {sampleData.road.etc.info.map(({ text, inline_style }, index) => (
              <p key={index}>{applyStyles(text, inline_style)}</p>
            ))}
          </div>
        </div>
      </S.WayToComeContainer>
      <S.GalleryContainer ref={addItemRef}>
        <div className="title">
          <span className="eng">GALLERY</span>
          <span className="kor">갤러리</span>
        </div>
        <div className="grid">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((_, index) => (
            <img key={index} src={`https://picsum.photos/200/250`} />
          ))}
        </div>
      </S.GalleryContainer>
      <S.AccountContainer ref={addItemRef}>
        <img src="/Template/icon_flower_account.png" />
        <h2 className="title">마음 전하실 곳</h2>
        <div className="wrapper">
          <div className="title">
            <h3>신랑측 계좌번호</h3>
            <div className="open-button" id="husband" onClick={handleClickOpenAccount}>
              <TbMailHeart color="#ab9da1" />
              <span>보기</span>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="title">
            <h3>신부측 계좌번호</h3>
            <div className="open-button" id="wife" onClick={handleClickOpenAccount}>
              <TbMailHeart color="#ab9da1" />
              <span>보기</span>
            </div>
          </div>
        </div>
      </S.AccountContainer>
      <S.GuestBookContainer ref={addItemRef}>
        <div className="title">
          <span className="eng">GUESTBOOK</span>
          <span className="kor">방명록</span>
        </div>
        <div className="guestbook-container">
          {guestBook.guestbook.map(item => (
            <div key={item.id} className="guestbook-wrapper">
              <h2>{item.name}</h2>
              <p>{item.content}</p>
              <div className="close">
                <span>{getDateWithDots(new Date(item.date))}</span>
                <IoCloseOutline color="#aaa" size={15} />
              </div>
            </div>
          ))}
        </div>
        <div className="tools">
          <div className="pagination">
            {new Array(Math.floor(guestBook.guestbook.length / 5) + 2).fill(0).map((_, index) => (
              <S.GuestBookPaginationSpan
                $isActiveIndex={isActiveGuestBook === index + 1}
                key={index}
                onClick={() => handleClickGuestBookPagination(index)}
                id={index.toString()}
              >
                {index + 1}
              </S.GuestBookPaginationSpan>
            ))}
          </div>
          <button className="write-button">작성하기</button>
        </div>
      </S.GuestBookContainer>
      <S.FooterContainer ref={addItemRef}>
        <div className="wrapper" onClick={handleClickShareKakao}>
          <RiKakaoTalkFill size={24} />
          <span>카카오톡 공유하기</span>
        </div>
        <div className="wrapper" onClick={handleClickCopyLink}>
          <HiOutlineLink size={24} />
          <span>링크주소 복사하기</span>
        </div>
        <p>
          Copyright {new Date().getFullYear()}.<span>WECA&nbsp;</span>All rights reserver
        </p>
      </S.FooterContainer>
      {isContactModalOpen && (
        <S.ContactModalContainer onClick={handleCloseModal} className="container">
          <div className="wrapper">
            <div className="title">
              <span className="eng">CONTACT</span>
              <span className="kor">연락하기</span>
            </div>
            <div className="info">
              <div className="human husband">
                <div className="grid">
                  <span className="who">신랑</span>
                  <span>{sampleData.HUSBAND.ME.name}</span>
                  <div className="icons">
                    <a href={`tel:${sampleData.HUSBAND.ME.contact}`}>
                      <BsTelephoneFill color="#8194d8" size={14} />
                    </a>
                    <a href={`sms:${sampleData.HUSBAND.ME.contact}`}>
                      <BsChatText color="#8194d8" size={14} />
                    </a>
                  </div>
                </div>
                {sampleData.HUSBAND.FATHER.contact && (
                  <div className="grid">
                    <span className="who">신랑 아버지</span>
                    <span>{sampleData.HUSBAND.FATHER.name}</span>
                    <div className="icons">
                      <a href={`tel:${sampleData.HUSBAND.FATHER.contact}`}>
                        <BsTelephoneFill color="#8194d8" size={14} />
                      </a>
                      <a href={`sms:${sampleData.HUSBAND.FATHER.contact}`}>
                        <BsChatText color="#8194d8" size={14} />
                      </a>
                    </div>
                  </div>
                )}
                {sampleData.HUSBAND.MOTHER.contact && (
                  <div className="grid">
                    <span className="who">신랑 어머니</span>
                    <span>{sampleData.HUSBAND.MOTHER.name}</span>
                    <div className="icons">
                      <a href={`tel:${sampleData.HUSBAND.MOTHER.contact}`}>
                        <BsTelephoneFill color="#8194d8" size={14} />
                      </a>
                      <a href={`sms:${sampleData.HUSBAND.MOTHER.contact}`}>
                        <BsChatText color="#8194d8" size={14} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div className="human wife">
                <div className="grid">
                  <span className="who">신부</span>
                  <span>{sampleData.WIFE.ME.name}</span>
                  <div className="icons">
                    <a href={`tel:${sampleData.HUSBAND.ME.contact}`}>
                      <BsTelephoneFill color="#ce7373" size={14} />
                    </a>
                    <a href={`sms:${sampleData.HUSBAND.ME.contact}`}>
                      <BsChatText color="#ce7373" size={14} />
                    </a>
                  </div>
                </div>
                {sampleData.WIFE.FATHER.contact && (
                  <div className="grid">
                    <span className="who">신부 아버지</span>
                    <span>{sampleData.HUSBAND.FATHER.name}</span>
                    <div className="icons">
                      <a href={`tel:${sampleData.HUSBAND.FATHER.contact}`}>
                        <BsTelephoneFill color="#ce7373" size={14} />
                      </a>
                      <a href={`sms:${sampleData.HUSBAND.FATHER.contact}`}>
                        <BsChatText color="#ce7373" size={14} />
                      </a>
                    </div>
                  </div>
                )}
                {sampleData.WIFE.MOTHER.contact && (
                  <div className="grid">
                    <span className="who">신부 어머니</span>
                    <span>{sampleData.HUSBAND.MOTHER.name}</span>
                    <div className="icons">
                      <a href={`tel:${sampleData.HUSBAND.MOTHER.contact}`}>
                        <BsTelephoneFill color="#ce7373" size={14} />
                      </a>
                      <a href={`sms:${sampleData.HUSBAND.MOTHER.contact}`}>
                        <BsChatText color="#ce7373" size={14} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </S.ContactModalContainer>
      )}
      {isAccountModalOpen && (
        <S.AccountModalContainer onClick={handleCloseModal} className="container">
          {isOpenAccount === "husband" ? (
            <div className="wrapper">
              <div className="title">
                <h2>신랑측 계좌번호</h2>
              </div>
              {sampleData.HUSBAND.FATHER.account && (
                <div className="inner">
                  <div className="bank-account">
                    <span className="bank">{sampleData.HUSBAND.FATHER.bank}</span>
                    <span>{sampleData.HUSBAND.FATHER.account}</span>
                  </div>
                  <div className="name">(부) {sampleData.HUSBAND.FATHER.name}</div>
                  <button
                    className="copy-button"
                    onClick={() => handleClickCopyAccount(sampleData.HUSBAND.FATHER.account)}
                  >
                    <IoCopyOutline size={12} />
                    복사
                  </button>
                </div>
              )}
              {sampleData.HUSBAND.MOTHER.account && (
                <div className="inner">
                  <div className="bank-account">
                    <span className="bank">{sampleData.HUSBAND.MOTHER.bank}</span>
                    <span>{sampleData.HUSBAND.MOTHER.account}</span>
                  </div>
                  <div className="name">(모) {sampleData.HUSBAND.MOTHER.name}</div>
                  <button
                    className="copy-button"
                    onClick={() => handleClickCopyAccount(sampleData.HUSBAND.MOTHER.account)}
                  >
                    <IoCopyOutline size={12} />
                    복사
                  </button>
                </div>
              )}
              {sampleData.HUSBAND.ME.account && (
                <div className="inner">
                  <div className="bank-account">
                    <span className="bank">{sampleData.HUSBAND.ME.bank}</span>
                    <span>{sampleData.HUSBAND.ME.account}</span>
                  </div>
                  <div className="name">{sampleData.HUSBAND.ME.name}</div>
                  <button className="copy-button" onClick={() => handleClickCopyAccount(sampleData.HUSBAND.ME.account)}>
                    <IoCopyOutline size={12} />
                    복사
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="wrapper">
              <div className="title">
                <h2>신부측 계좌번호</h2>
              </div>
              {sampleData.WIFE.FATHER.account && (
                <div className="inner">
                  <div className="bank-account">
                    <span className="bank">{sampleData.WIFE.FATHER.bank}</span>
                    <span>{sampleData.WIFE.FATHER.account}</span>
                  </div>
                  <div className="name">(부) {sampleData.WIFE.FATHER.name}</div>
                  <button
                    className="copy-button"
                    onClick={() => handleClickCopyAccount(sampleData.WIFE.FATHER.account)}
                  >
                    <IoCopyOutline size={12} />
                    복사
                  </button>
                </div>
              )}
              {sampleData.WIFE.MOTHER.account && (
                <div className="inner">
                  <div className="bank-account">
                    <span className="bank">{sampleData.WIFE.MOTHER.bank}</span>
                    <span>{sampleData.WIFE.MOTHER.account}</span>
                  </div>
                  <div className="name">(모) {sampleData.WIFE.MOTHER.name}</div>
                  <button
                    className="copy-button"
                    onClick={() => handleClickCopyAccount(sampleData.WIFE.MOTHER.account)}
                  >
                    <IoCopyOutline size={12} />
                    복사
                  </button>
                </div>
              )}
              {sampleData.WIFE.ME.account && (
                <div className="inner">
                  <div className="bank-account">
                    <span className="bank">{sampleData.WIFE.ME.bank}</span>
                    <span>{sampleData.WIFE.ME.account}</span>
                  </div>
                  <div className="name">{sampleData.WIFE.ME.name}</div>
                  <button className="copy-button" onClick={() => handleClickCopyAccount(sampleData.WIFE.ME.account)}>
                    <IoCopyOutline size={12} />
                    복사
                  </button>
                </div>
              )}
            </div>
          )}
        </S.AccountModalContainer>
      )}
    </S.Container>
  );
};

export default TheSimple;
