/**
 *
 * @param {*} id
 * 원하는 일기의 정보를 반환
 *
 */
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";

const useDiaryData = (id) => {
  const nav = useNavigate();
  const diaryData = useContext(DiaryStateContext);

  const [currentDiaryData, setCurrentDiaryData] = useState();

  useEffect(() => {
    const data = diaryData.find((item) => String(item.id) === String(id));

    if (!data) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurrentDiaryData(data);
  }, [id]);

  return currentDiaryData;
};

export default useDiaryData;
