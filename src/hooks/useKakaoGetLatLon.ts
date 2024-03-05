import { IResKakaoLatLon } from "@/types/kakao";
import axios from "axios";

export const GetLatLon = async (address: string): Promise<IResKakaoLatLon> => {
  const res = await axios.get(`https://dapi.kakao.com/v2/local/search/address?query=${address}`, {
    headers: {
      Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
    },
  });
  return res.data;
};
