declare global {
  interface Window {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    daum: any;
  }
}

interface IKakaoUserInfo {
  connected_at: string;
  id: number;
  kakao_account: {
    profile: {
      nickname: string;
    };
    profile_nickname_needs_agreement: boolean;
  };
  properties: {
    nickname: string;
  };
}

interface IKakaoAddress {
  address: string;
  userSelectedType: string;
  jibunAddress: string;
  roadAddress: string;
}

interface ILatLon {
  latitude: number;
  longitude: number;
}

interface IResKakaoLatLon {
  documents: {
    address: string;
    x: number;
    y: number;
  }[];
}

export type { IKakaoUserInfo, IKakaoAddress, ILatLon, IResKakaoLatLon };
