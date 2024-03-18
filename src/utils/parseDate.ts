export const getYear = (date: Date) => {
  return date.getFullYear();
};

export const getMonth = (date: Date) => {
  return date.getMonth() + 1;
};

export const getDate = (date: Date) => {
  return date.getDate();
};

export const getDayEng = (date: Date) => {
  return ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"][date.getDay()];
};

export const getDayKor = (date: Date) => {
  return ["월", "화", "수", "목", "금", "토", "일"][date.getDay()];
};

export const getFullDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];

  return `${year}년 ${month}월 ${day}일 ${dayOfWeek}요일 ${hour > 12 ? `오후 ${hour % 12}` : `오전 ${hour}`}시 ${minute ? `${minute}분` : ``}`;
};
