import { IReqInvitationJSON, IReqInvitationPhotos } from "@/types/invitation";

const InitialData_CreateInvitationJSON: IReqInvitationJSON = {
  date: "",
  address: "",
  wedding_hall: "",
  welcome: [],
  welcome_align: "left",
  contents: {
    video_id: "",
    bgm: 0,
    live_url: "",
  },
  management: {
    management_password: "",
  },
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
  open_graph: {
    title: "",
    subtitle: "",
  },
};

const InitialData_CreateInvitationPhotos: IReqInvitationPhotos = {
  main_photo: undefined,
  slide_photos: [],
  kakao_thumbnail: undefined,
};

export { InitialData_CreateInvitationJSON, InitialData_CreateInvitationPhotos };
