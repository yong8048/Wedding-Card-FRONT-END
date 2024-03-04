import MainPhoto from "@/components/Information/MainPhoto";
import * as S from "./style";
import HumanInfo from "@/components/Information/HumanInfo";
import Greeting from "@/components/Information/Greeting";
import ProgressBar from "@/components/Information/ProgressBar";
import Contact from "@/components/Information/Contact";
const Information = () => {
  return (
    <S.Section>
      <ProgressBar />
      <MainPhoto />
      <Greeting />
      <HumanInfo />
      <Contact />
    </S.Section>
  );
};

export default Information;
