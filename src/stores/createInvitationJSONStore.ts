import { atom } from "recoil";
import { IReqInvitationJSON } from "@/types/invitation";
import { InitialData_CreateInvitationJSON } from "@/utils/InitialData";

export const invitationJSONState = atom<IReqInvitationJSON>({
  key: "invitationJSONState",
  default: InitialData_CreateInvitationJSON,
});
