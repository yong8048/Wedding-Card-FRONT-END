import { IReqCreateInvitation } from "@/types/invitation";

const InitialData_CreateInvitation: IReqCreateInvitation = {
  date: "",
  address: "",
  wedding_hall: "",
  welcome: [],
  HUSBAND: {
    ME: {
      name: "",
      bank: "",
      account: "",
      contact: "",
    },
    FATHER: {
      name: "",
      bank: "",
      account: "",
      contact: "",
    },
    MOTHER: {
      name: "",
      bank: "",
      account: "",
      contact: "",
    },
    relationship: "",
  },
  WIFE: {
    ME: {
      name: "",
      bank: "",
      account: "",
      contact: "",
    },
    FATHER: {
      name: "",
      bank: "",
      account: "",
      contact: "",
    },
    MOTHER: {
      name: "",
      bank: "",
      account: "",
      contact: "",
    },
    relationship: "",
  },
  road: {
    subway: [],
    bus: [],
    car: [],
    etc: {
      type: "",
      info: [],
    },
  },
  management_password: "",
  bgm: 0,
};

export { InitialData_CreateInvitation };
