import * as S from "./style";
import TheSimple from "@/Templates/TheSimple";
import { useParams } from "react-router";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";

const Letter = () => {
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const body = document.querySelector("body");
    const root = document.getElementById("root");

    if (body) {
      body.style.backgroundColor = "#333";
    }

    if (root) {
      root.style.maxWidth = "450px";
      root.style.minWidth = "320px";
    }
  }, []);

  return (
    <S.Main>
      <HelmetProvider>
        <TheSimple />
      </HelmetProvider>
    </S.Main>
  );
};

export default Letter;
