import { useEffect, useState } from "react";
import * as S from "./style";

const ProgressBar = () => {
  const [curScrollY, setCurSrollY] = useState(0);

  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  const handleScroll = () => {
    const windowHeight = scrollHeight - clientHeight;
    const currentPercent = (scrollTop - 1) / (windowHeight - 2);

    setCurSrollY(currentPercent * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <S.Container>
      <S.CurrentPositionY $curScrollY={curScrollY} />
    </S.Container>
  );
};

export default ProgressBar;
