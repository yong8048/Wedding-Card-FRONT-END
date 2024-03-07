import * as S from "./style";
import MainPhoto from "@/components/Information/MainPhoto";
import HumanInfo from "@/components/Information/HumanInfo";
import Greeting from "@/components/Information/Greeting";
import ProgressBar from "@/components/Information/ProgressBar";
import Contact from "@/components/Information/Contact";
import Account from "@/components/Information/Account";
import WeddingSchedule from "@/components/Information/WeddingSchedule";
import { useEffect, useState } from "react";
import { IReqCreateInvitation } from "@/types/invitation";
import { InitialData_CreateInvitation } from "@/utils/InitialData";
import TempSaveButton from "@/components/Information/TempSaveButton";

const Information = () => {
  const [createInvitaionData, setCreateInvitaionData] = useState<IReqCreateInvitation>(InitialData_CreateInvitation);

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

  return (
    <S.Section>
      <ProgressBar />
      <MainPhoto />
      <Greeting setCreateInvitaionData={setCreateInvitaionData} />
      <HumanInfo setCreateInvitaionData={setCreateInvitaionData} />
      <Contact setCreateInvitaionData={setCreateInvitaionData} />
      <Account setCreateInvitaionData={setCreateInvitaionData} />
      <WeddingSchedule setCreateInvitaionData={setCreateInvitaionData} />
      <TempSaveButton temporaryData={createInvitaionData} />
    </S.Section>
  );
};

export default Information;
