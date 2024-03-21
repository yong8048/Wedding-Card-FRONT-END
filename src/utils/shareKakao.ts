export const shareKakao = ({
  title,
  description,
  imageUrl,
  link,
}: {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}) => {
  if (window.Kakao) {
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: title,
        description: description,
        imageUrl: imageUrl,
        link: {
          mobileWebUrl: link,
          webUrl: link,
        },
      },
      buttonTitle: "청첩장 보러가기",
    });
  }
};
