import { useContext, useState } from "react";
import { DiaryStateContext } from "../App";
import getMonthlyDiaryData from "../utils/getMonthlyDiaryData";
import usePageTitle from "../hooks/usePageTitle";

import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

const Home = () => {
  const [pivotDate, setPivotDate] = useState(new Date());

  usePageTitle("감정 일기장");

  const diaryData = useContext(DiaryStateContext);
  const monthlyDiaryData = getMonthlyDiaryData(pivotDate, diaryData);

  const handleDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  const handleIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={"<"} onClick={handleDecreaseMonth} />}
        rightChild={<Button text={">"} onClick={handleIncreaseMonth} />}
      />
      <DiaryList diaryData={monthlyDiaryData} />
    </div>
  );
};

export default Home;
