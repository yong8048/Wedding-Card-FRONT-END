import { IReqCreateInvitation } from "@/types/invitation";
import { instance } from "./axios";

export const postTemporaryData = async (Data: IReqCreateInvitation) => {
  const res = await instance.post("/save/temp", Data);
  return res;
};
