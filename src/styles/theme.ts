const windowSize = {
  small: "screen and (max-width: 450px)",
  medium: "screen and (max-width: 768px)",
  large: "screen and (min-width: 769px)",
};

const fontSize = {
  xs: "12px",
  sm: "14px",
  base: "16px",
  md: "18px",
  lg: "20px",
};

const color = {
  primary_light: "#fff9eb",
  primary_normal: "#7b5339",
  secondary_light: "#BEAA9E",
};

const theme = {
  windowSize,
  fontSize,
  color,
};
export type Theme = typeof theme;

export default theme;
