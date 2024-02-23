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

export type { IKakaoUserInfo };
