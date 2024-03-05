import * as S from "./style";
import MainPhoto from "@/components/Information/MainPhoto";
import HumanInfo from "@/components/Information/HumanInfo";
import Greeting from "@/components/Information/Greeting";
import ProgressBar from "@/components/Information/ProgressBar";
import Contact from "@/components/Information/Contact";
import Account from "@/components/Information/Account";
import WeddingSchedule from "@/components/Information/WeddingSchedule";

const Information = () => {
  return (
    <S.Section>
      <ProgressBar />
      <MainPhoto />
      <Greeting />
      <HumanInfo />
      <Contact />
      <Account />
      <WeddingSchedule />
    </S.Section>
  );
};

export default Information;
