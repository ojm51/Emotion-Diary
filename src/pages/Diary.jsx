import { useNavigate, useParams } from "react-router-dom";
import useDiaryData from "../hooks/useDiaryData";
import usePageTitle from "../hooks/usePageTitle";
import getStringDate from "../utils/getStringDate";

import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();

  usePageTitle(`${params.id}번 일기`);

  const currentDiaryData = useDiaryData(params.id);
  if (!currentDiaryData) {
    return <div>Loading data...</div>;
  }

  const { createdDate, emotionId, content } = currentDiaryData;
  const titleDate = getStringDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${titleDate} 기록`}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
