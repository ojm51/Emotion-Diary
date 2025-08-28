import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { useState } from "react";

const Home = () => {
  const [pivotDate, setPivotDate] = useState(new Date());

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

      <DiaryList />
    </div>
  );
};

export default Home;
