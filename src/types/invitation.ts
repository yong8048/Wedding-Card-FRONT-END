interface IReqInvitationJSON {
  date: string;
  address: string;
  wedding_hall: string;
  welcome: IEditorState[];
  welcome_align: DraftTextAlignment;
  contents: {
    video_id: string;
    bgm: number;
    live_url: string;
  };
  management: {
    management_password: string;
  };
  HUSBAND: {
    ME: {
      name: string;
      bank: string;
      account: string;
      contact: string;
    };
    FATHER: {
      name: string;
      bank: string;
      account: string;
      contact: string;
    };
    MOTHER: {
      name: string;
      bank: string;
      account: string;
      contact: string;
    };
    relationship: string;
  };
  WIFE: {
    ME: {
      name: string;
      bank: string;
      account: string;
      contact: string;
    };
    FATHER: {
      name: string;
      bank: string;
      account: string;
      contact: string;
    };
    MOTHER: {
      name: string;
      bank: string;
      account: string;
      contact: string;
    };
    relationship: string;
  };
  road: {
    subway: IEditorState[];
    bus: IEditorState[];
    car: IEditorState[];
    etc: {
      type: string;
      info: IEditorState[];
    };
  };
  open_graph: {
    title: string;
    subtitle: string;
  };
}

interface IReqInvitationPhotos {
  main_photo: File | undefined;
  slide_photos: {
    file: File;
    index: number;
  }[];
  kakao_thumbnail: File | undefined;
}

interface IEditorState {
  text: string;
  inline_style: {
    offset: number;
    length: number;
    style: string;
  }[];
}

type TconcernedPersonType = "HUSBAND" | "WIFE";
type TconcernedParentType = "FATHER" | "MOTHER" | "ME";
type DraftTextAlignment = "left" | "center" | "right";

export type {
  IReqInvitationJSON,
  IReqInvitationPhotos,
  IEditorState,
  TconcernedPersonType,
  TconcernedParentType,
  DraftTextAlignment,
};
