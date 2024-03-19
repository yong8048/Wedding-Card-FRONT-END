import { Fragment, useEffect, useRef, useState } from "react";
import * as S from "./style";
import { PiSpeakerHighDuotone, PiSpeakerXDuotone } from "react-icons/pi";
import { Audios } from "@/constants/AudioData";
import { BsTelephoneFill, BsChatText } from "react-icons/bs";
import sampleData from "@/mock/sampleData.json";
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
    if (!element.classList.contains("wrapper")) {
      setIsContactModalOpen(false);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
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
        <div className="roadmap">
          {<LocationCard latitude={sampleData.location.latitude} longitude={sampleData.location.longitude} />}
        </div>
      </S.LocationContainer>
      {isContactModalOpen && (
        <S.ContactModalContainer onClick={handleCloseModal}>
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
    </S.Container>
  );
};

export default TheSimple;
