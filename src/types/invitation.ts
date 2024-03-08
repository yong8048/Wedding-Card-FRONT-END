interface IReqCreateInvitation {
  date: string;
  address: string;
  wedding_hall: string;
  welcome: string;
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
    subway: string;
    bus: string;
    car: string;
    etc: {
      type: string;
      info: string;
    };
  };
}

type TconcernedPersonType = "HUSBAND" | "WIFE";
type TconcernedParentType = "FATHER" | "MOTHER" | "ME";

export type { IReqCreateInvitation, TconcernedPersonType, TconcernedParentType };
