// import MDEditor from "@uiw/react-md-editor";
import * as S from "./style";
// import { useState } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

const Test = () => {
  // const [value, setValue] = useState<string | undefined>("");

  return (
    <S.Container>
      {/* <MDEditor height={300} value={value} onChange={setValue} /> */}
      <Editor initialValue="" />
    </S.Container>
  );
};

export default Test;
