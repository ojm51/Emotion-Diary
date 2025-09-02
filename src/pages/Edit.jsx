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

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={<Button text={"삭제하기"} type={"negative"} />}
      />
      <Editor initData={initData} />
    </div>
  );
};

export default Edit;
