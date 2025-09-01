import { useContext } from "react";
import Button from "../components/Button";
import Editor from "../components/Editor";
import Header from "../components/Header";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);

  const onSubmit = (input) => {
    onCreate(input.createdDate, input.emotionId, input.content);
  };

  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button text={"< 뒤로 가기"} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
