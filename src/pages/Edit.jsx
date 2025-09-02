import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const diaryData = useContext(DiaryStateContext);
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const [initData, setInitData] = useState();

  useEffect(() => {
    const currentDiaryData = diaryData.find(
      (item) => String(item.id) === String(params.id)
    );

    if (!currentDiaryData) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setInitData(currentDiaryData);
  }, [params.id]);

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  const onClickSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"negative"} />
        }
      />
      <Editor initData={initData} onSubmit={onClickSubmit} />
    </div>
  );
};

export default Edit;
