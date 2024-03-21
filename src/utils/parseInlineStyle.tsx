import { Fragment } from "react";

type InlineStyle = {
  offset: number;
  length: number;
  style: string;
};

export const applyStyles = (text: string, styles: InlineStyle[]) => {
  const styleMap: Array<Array<string>> = Array(text.length)
    .fill(null)
    .map(() => []);

  styles.forEach(({ offset, length, style }) => {
    for (let i = offset; i < offset + length; i++) {
      styleMap[i].push(style);
    }
  });

  const result: React.ReactNode[] = [];
  let currentStyledText = "";
  let currentStyles: Array<string> = [];

  styleMap.forEach((stylesAtIndex, index) => {
    const char = text.charAt(index);
    if (stylesAtIndex.join() === currentStyles.join()) {
      currentStyledText += char;
    } else {
      if (currentStyledText) {
        result.push(<Fragment key={index}>{wrapTextWithStyles(currentStyledText, currentStyles)}</Fragment>);
      }
      currentStyledText = char;
      currentStyles = stylesAtIndex;
    }
  });

  if (currentStyledText) {
    result.push(<Fragment key={text.length}>{wrapTextWithStyles(currentStyledText, currentStyles)}</Fragment>);
  }

  return result;
};

const wrapTextWithStyles = (text: string, styles: Array<string>) => {
  return styles.reduce((acc, style) => {
    switch (style) {
      case "BOLD":
        return <strong>{acc}</strong>;
      case "ITALIC":
        return <em>{acc}</em>;
      case "UNDERLINE":
        return <u>{acc}</u>;
      default:
        return acc;
    }
  }, text as React.ReactNode);
};
