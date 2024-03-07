import { IReqCreateInvitation } from "@/types/invitation";

const InitialData_CreateInvitation: IReqCreateInvitation = {
  date: "",
  address: "",
  wedding_hall: "",
  welcome: "",
  husband: {
    me: {
      name: "",
      bank: "",
      account: "",
      contact: "",
    },
    father: {
      name: "",
      bank: "",
      account: "",
      contact: "",
    },
    mother: {
      name: "",
      bank: "",
      account: "",
      contact: "",
    },
    relationship: "",
  },
  wife: {
    me: {
      name: "",
      bank: "",
      account: "",
      contact: "",
    },
    father: {
      name: "",
      bank: "",
      account: "",
      contact: "",
    },
    mother: {
      name: "",
      bank: "",
      account: "",
      contact: "",
    },
    relationship: "",
  },
  road: {
    subway: "",
    bus: "",
    car: "",
    etc: {
      type: "",
      info: "",
    },
  },
};

export { InitialData_CreateInvitation };
