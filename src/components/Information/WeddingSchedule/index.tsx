import { useEffect, useState } from "react";
import * as S from "./style";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale/ko";
import { setHours, setMinutes } from "date-fns";
import { IKakaoAddress, ILatLon } from "@/types/kakao";
import LocationCard from "@/components/Common/LocationCard";
import { GetLatLon } from "@/hooks/useKakaoGetLatLon";
import { IReqCreateInvitation } from "@/types/invitation";

const roadInfo = { subway: "지하철", bus: "버스", car: "자가용" };

const WeddingSchedule = ({
  setCreateInvitaionData,
}: {
  setCreateInvitaionData: React.Dispatch<React.SetStateAction<IReqCreateInvitation>>;
}) => {
  const [weddingDate, setWeddingDate] = useState(new Date());
  const [address, setAddress] = useState("");
  const [hallData, setHallData] = useState({ hallName: "", hallDetail: "" });
  const [latlon, setLatlon] = useState<ILatLon>({ latitude: 0, longitude: 0 });

  const handleDateChange = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];

    const convertDate = `${year}-${month}-${day}-${dayOfWeek}-${hour}-${minute}`;

    setCreateInvitaionData(previousData => ({
      ...previousData,
      date: convertDate,
    }));

    setWeddingDate(date);
  };

  const handleWeddingHallChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const value = e.target.value;

    setHallData(prevData => ({
      ...prevData,
      [inputName]: value,
    }));
  };

  useEffect(() => {
    setCreateInvitaionData(previousData => ({
      ...previousData,
      wedding_hall: `${hallData.hallName} ${hallData.hallDetail}`,
    }));
  }, [hallData]);

  const handleSearch = () => {
    new window.daum.Postcode({
      oncomplete: async (data: IKakaoAddress) => {
        setAddress(data.userSelectedType === "J" ? data.jibunAddress : data.roadAddress);
        const res = await GetLatLon(data.userSelectedType === "J" ? data.jibunAddress : data.roadAddress);
        setLatlon({ latitude: res.documents[0].y, longitude: res.documents[0].x });

        setCreateInvitaionData(previousData => ({
          ...previousData,
          address: data.userSelectedType === "J" ? data.jibunAddress : data.roadAddress,
        }));
      },
    }).open();
  };

  const handleRoadChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const key = e.target.id;

    setCreateInvitaionData(previousData => ({
      ...previousData,
      road: {
        ...previousData.road,
        [key]: e.target.value,
      },
    }));
  };

  const handleRoadEtcChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    const element = e.target as HTMLInputElement | HTMLTextAreaElement;
    const elementName = element.nodeName;

    setCreateInvitaionData(previousData => ({
      ...previousData,
      road: {
        ...previousData.road,
        etc: {
          ...previousData.road.etc,
          [elementName === "INPUT" ? "type" : "info"]: element.value,
        },
      },
    }));
  };

  return (
    <S.Container>
      <h1>웨딩 정보를 입력해주세요.</h1>
      <h3 className="notice">- 날짜를 클릭하면 달력이 표시됩니다.</h3>
      <S.DatePickerContainer>
        <DatePicker
          selected={weddingDate}
          onChange={handleDateChange}
          locale={ko}
          dateFormat="yyyy년 MM월 dd일 HH시 mm분"
          showTimeSelect
          minTime={setHours(setMinutes(new Date(), 0), 9)}
          maxTime={setHours(setMinutes(new Date(), 0), 20)}
          timeIntervals={30}
        />
      </S.DatePickerContainer>
      <S.WeddingHoleContainer>
        <div className="WeddingHole-Input">
          <input placeholder="예식장 명" name="hallName" onChange={handleWeddingHallChange} />
          <input placeholder="층과 홀" name="hallDetail" onChange={handleWeddingHallChange} />
          <div className="WeddingHole-address">
            <input placeholder="주소" disabled value={address} />
            <button onClick={handleSearch}>검색</button>
          </div>
        </div>
        {latlon.latitude !== 0 && <LocationCard latitude={latlon.latitude} longitude={latlon.longitude} />}
      </S.WeddingHoleContainer>
      <S.TrafficContainer>
        <h2>교통편 및 주차 안내</h2>
        <div>
          {Object.entries(roadInfo).map(([key, value], index) => (
            <div className="Traffic-Input" key={index}>
              <h3>{value}을 이용해 오시는 길</h3>
              <input className="Transportation" value={value} disabled />
              <textarea
                className="Description"
                id={key}
                placeholder="예) 수원역 5번 출구 도보 10분"
                onChange={handleRoadChange}
              />
            </div>
          ))}
          <div className="Etc-Input" onChange={handleRoadEtcChange}>
            <h3>기타 이동수단</h3>
            <input className="Transportation" placeholder="교통수단 or 자가용" />
            <textarea className="Description" placeholder="예) 수원역 5번 출구 도보 10분" />
          </div>
        </div>
      </S.TrafficContainer>
    </S.Container>
  );
};

export default WeddingSchedule;
