import "./DiaryList.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "./Button";
import DiaryListItem from "./DiaryListItem";

const DiaryList = ({ diaryData }) => {
  const nav = useNavigate();

  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedDiaryData = () => {
    return diaryData.toSorted((a, b) => {
      if (sortType === "latest")
        return Number(b.createdDate) - Number(a.createdDate);
      return Number(a.createdDate) - Number(b.createdDate);
    });
  };

  const sortedDiaryData = getSortedDiaryData();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value="latest">최신순</option>
          <option value="oldest">오래된 순</option>
        </select>
        <Button
          onClick={() => {
            nav("/new");
          }}
          text={"새 일기 쓰기"}
          type={"positive"}
        />
      </div>

      <div className="list_wrapper">
        {sortedDiaryData.map((item) => (
          <DiaryListItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
