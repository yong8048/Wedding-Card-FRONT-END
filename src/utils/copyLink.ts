export const copyLink = (link: string) => {
  navigator.clipboard
    .writeText(link)
    .then(() => {
      alert("링크주소가 클립보드에 복사되었습니다.");
    })
    .catch(err => {
      console.error("클립보드 복사에 실패했습니다.", err);
    });
};
