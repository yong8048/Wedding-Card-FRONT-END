import { getUserInfo } from "@/apis/kakao";
import { IKakaoUserInfo } from "@/types/kakao";
import { useQuery } from "@tanstack/react-query";

export const useGetUserInfo = () => {
  const { data: userInfo } = useQuery<IKakaoUserInfo>({
    queryKey: ["userInfo"],
    queryFn: getUserInfo,
    staleTime: Infinity,
  });
  return { userInfo };
};
