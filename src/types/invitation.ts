interface IReqCreateInvitation {
  date: string;
  address: string;
  wedding_hall: string;
  welcome: string;
  husband: {
    me: {
      name: string;
      bank: string;
      account: string;
      contact: string;
    };
    father: {
      name: string;
      bank: string;
      account: string;
      contact: string;
    };
    mother: {
      name: string;
      bank: string;
      account: string;
      contact: string;
    };
    relationship: string;
  };
  wife: {
    me: {
      name: string;
      bank: string;
      account: string;
      contact: string;
    };
    father: {
      name: string;
      bank: string;
      account: string;
      contact: string;
    };
    mother: {
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

type TconcernedPersonType = "husband" | "wife";
type TconcernedParentType = "father" | "mother" | "me";

export type { IReqCreateInvitation, TconcernedPersonType, TconcernedParentType };
