import { getCookie } from "@/utils/cookie";
import axios, { AxiosError } from "axios";

const createInstance = (isServer: boolean, ContentType: string) => {
  const instance = axios.create({
    baseURL: isServer ? import.meta.env.VITE_SERVER_URL : "https://kapi.kakao.com",
    timeout: 10000,
    headers: isServer
      ? {
          "Content-Type": ContentType,
        }
      : {
          "Content-Type": ContentType,
        },
  });

  instance.interceptors.request.use(
    request => {
      if (!isServer) {
        const token = getCookie("WECA_access_token");
        if (token) request.headers["authorization"] = `Bearer ${token}`;
        else if (!token) request.headers["authorization"] = "";
      }
      return request;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );

  // instance.interceptors.response.use(
  //   response => {
  //     return response;
  //   },
  //   async error => {
  //     const {
  //       config,
  //       response: { status, data },
  //     } = error;
  //     if (status === 500 && data.data === "토큰을 재발급할 수 없습니다. 다시 로그인 해주세요") {
  //       const accessToken = getCookie("Authorization");
  //       if (accessToken) {
  //         removeCookie("Authorization");
  //       }
  //     }
  //     if (status === 401 && data.msg === "unAuthorized") {
  //       const accessToken = getCookie("Authorization");
  //       if (accessToken) {
  //         const originalRequest = config;
  //         const { data } = await reissueToken();
  //         const maxAge = 1209600000;
  //         setCookie("Authorization", data.headers.authorization, { maxAge });
  //         return axios(originalRequest);
  //       } else {
  //         removeCookie("refreshToken");
  //       }
  //     }

  //     return Promise.reject(error);
  //   },
  // );

  return instance;
};
export const instance = createInstance(true, "application/json");
export const formInstance = createInstance(true, "multipart/form-data");
export const kakaoInstance = createInstance(false, "application/x-www-form-urlencoded;charset=utf-8");
