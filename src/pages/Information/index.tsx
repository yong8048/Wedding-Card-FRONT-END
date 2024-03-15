import * as S from "./style";
import MainPhoto from "@/components/Information/MainPhoto";
import HumanInfo from "@/components/Information/HumanInfo";
import Greeting from "@/components/Information/Greeting";
import ProgressBar from "@/components/Information/ProgressBar";
import Contact from "@/components/Information/Contact";
import Account from "@/components/Information/Account";
import SlidePhotos from "@/components/Information/SlidePhotos";
import WeddingSchedule from "@/components/Information/WeddingSchedule";
import MasterPassword from "@/components/Information/MasterPassword";
import BackGroundMusic from "@/components/Information/BackGroundMusic";
import YoutubeVideo from "@/components/Information/YoutubeVideo";
import LiveWedding from "@/components/Information/LiveWedding";
import ShareKakao from "@/components/Information/ShareKakao";
import NextStepButton from "@/components/Common/NextStepButton";
import TempSaveButton from "@/components/Information/TempSaveButton";
import { useEffect, useState } from "react";
import { IReqInvitationJSON, IReqInvitationPhotos } from "@/types/invitation";
import { InitialData_CreateInvitation, InitialData_CreatePhotos } from "@/utils/InitialData";
import { useNavigate } from "react-router-dom";
import { postData, testData } from "@/apis/server";
import Test from "@/components/Information/test";

const Information = () => {
  const [createInvitationData, setCreateInvitationData] = useState<IReqInvitationJSON>(InitialData_CreateInvitation);
  const [invitationPhotos, setInvitationPhotos] = useState<IReqInvitationPhotos>(InitialData_CreatePhotos);

  const navigate = useNavigate();

  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = "";
  };

  useEffect(() => {
    window.addEventListener("beforeunload", preventClose);

    return () => {
      window.removeEventListener("beforeunload", preventClose);
    };
  }, []);

  const handleClickLeft = async () => {
    const res = await postData({
      JsonData: createInvitationData,
      Images: invitationPhotos,
      isTemp: true,
    });
    console.log(res);
    navigate(-1);
  };

  const handleClickRight = async () => {
    const res = await postData({
      JsonData: createInvitationData,
      Images: invitationPhotos,
      isTemp: false,
    });
    console.log(res);
  };

  const handleClickTempSave = async () => {
    console.log(createInvitationData, invitationPhotos);
    // const res = await testData({
    //   JsonData: createInvitationData,
    // });
    // console.log(res);
  };

  return (
    <S.Section>
      <ProgressBar />
      <MainPhoto invitationPhotos={invitationPhotos} setInvitationPhotos={setInvitationPhotos} />
      <Greeting setCreateInvitationData={setCreateInvitationData} />
      <HumanInfo setCreateInvitationData={setCreateInvitationData} />
      <Contact setCreateInvitationData={setCreateInvitationData} />
      <Account setCreateInvitationData={setCreateInvitationData} />
      <SlidePhotos invitationPhotos={invitationPhotos} setInvitationPhotos={setInvitationPhotos} />
      <WeddingSchedule setCreateInvitationData={setCreateInvitationData} />
      <MasterPassword setCreateInvitationData={setCreateInvitationData} />
      <BackGroundMusic setCreateInvitationData={setCreateInvitationData} />
      <YoutubeVideo setCreateInvitationData={setCreateInvitationData} />
      <LiveWedding setCreateInvitationData={setCreateInvitationData} />
      <ShareKakao
        setCreateInvitationData={setCreateInvitationData}
        invitationPhotos={invitationPhotos}
        setInvitationPhotos={setInvitationPhotos}
      />
      <Test />
      <TempSaveButton FuncOnClick={handleClickTempSave} />
      <NextStepButton ArrowDirection="left" FuncOnClick={handleClickLeft} />
      <NextStepButton ArrowDirection="right" FuncOnClick={handleClickRight} />
    </S.Section>
  );
};

export default Information;
