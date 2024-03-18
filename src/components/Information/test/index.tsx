import { marked } from "marked";
import parse from "html-react-parser";

const markdownText: string = "**Bold text** \n and _italic text_\n ++included++ \n in markdown example.";
const MarkdownRenderer = () => {
  const test = markdownText.replace("++", "<u>");
  const test2 = test.replace("++", "</u>");
  // 마크다운을 HTML로 변환
  const htmlText = marked.parse(test2);

  // HTML 문자열을 React 컴포넌트로 변환
  const htmlComponents = parse(htmlText as string);

  return <div>{htmlComponents}</div>;
};

export default MarkdownRenderer;
