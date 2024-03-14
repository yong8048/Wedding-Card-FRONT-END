import * as S from "./style";
import MainPhoto from "@/components/Information/MainPhoto";
import HumanInfo from "@/components/Information/HumanInfo";
import Greeting from "@/components/Information/Greeting";
import ProgressBar from "@/components/Information/ProgressBar";
import Contact from "@/components/Information/Contact";
import Account from "@/components/Information/Account";
import SlidePhotos from "@/components/Information/SlidePhotos";
import WeddingSchedule from "@/components/Information/WeddingSchedule";
import TempSaveButton from "@/components/Information/TempSaveButton";
import { useEffect, useState } from "react";
import { IReqCreateInvitation } from "@/types/invitation";
import { InitialData_CreateInvitation } from "@/utils/InitialData";
import MasterPassword from "@/components/Information/MasterPassword";
import BackGroundMusic from "@/components/Information/BackGroundMusic";
import YoutubeVideo from "@/components/Information/YoutubeVideo";
import NextStepButton from "@/components/Common/NextStepButton";
import { useNavigate } from "react-router-dom";
import { postData, testData } from "@/apis/server";
import LiveWedding from "@/components/Information/LiveWedding";
import Test from "@/components/Information/test";

const Information = () => {
  const [createInvitaionData, setCreateInvitaionData] = useState<IReqCreateInvitation>(InitialData_CreateInvitation);
  const [mainImage, setMainImage] = useState<File | undefined>();
  const [galleryImages, setGalleryImages] = useState<{ file: File; index: number }[]>([]);

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
      JsonData: createInvitaionData,
      MainImage: mainImage,
      GalleryImages: galleryImages,
      isTemp: true,
    });
    console.log(res);
    navigate(-1);
  };

  const handleClickRight = async () => {
    const res = await postData({
      JsonData: createInvitaionData,
      MainImage: mainImage,
      GalleryImages: galleryImages,
      isTemp: false,
    });
    console.log(res);
  };

  const handleClickTempSave = async () => {
    const res = await testData({
      JsonData: createInvitaionData,
    });
    console.log(res);
  };

  return (
    <S.Section>
      <ProgressBar />
      <MainPhoto mainImage={mainImage} setMainImage={setMainImage} />
      <Greeting setCreateInvitaionData={setCreateInvitaionData} />
      <HumanInfo setCreateInvitaionData={setCreateInvitaionData} />
      <Contact setCreateInvitaionData={setCreateInvitaionData} />
      <Account setCreateInvitaionData={setCreateInvitaionData} />
      <SlidePhotos galleryImages={galleryImages} setGalleryImages={setGalleryImages} />
      <WeddingSchedule setCreateInvitaionData={setCreateInvitaionData} />
      <MasterPassword setCreateInvitaionData={setCreateInvitaionData} />
      <BackGroundMusic setCreateInvitaionData={setCreateInvitaionData} />
      <YoutubeVideo setCreateInvitaionData={setCreateInvitaionData} />
      <LiveWedding setCreateInvitaionData={setCreateInvitaionData} />
      <Test />
      <TempSaveButton FuncOnClick={handleClickTempSave} />
      <NextStepButton ArrowDirection="left" FuncOnClick={handleClickLeft} />
      <NextStepButton ArrowDirection="right" FuncOnClick={handleClickRight} />
    </S.Section>
  );
};

export default Information;
