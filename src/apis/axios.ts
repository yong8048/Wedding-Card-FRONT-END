import { getCookie } from "@/utils/cookie";
import axios, { AxiosError } from "axios";

const createInstance = () => {
  const instance = axios.create({
    baseURL: "",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    request => {
      const token = getCookie("WECA_access_token");
      if (token) request.headers["authorization"] = `Bearer ${token}`;
      if (!token) request.headers["authorization"] = "";
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
export const instance = createInstance();
