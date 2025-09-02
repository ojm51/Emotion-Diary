import "./DiaryListItem.css";

import { useNavigate } from "react-router-dom";
import getEmotionImage from "../utils/getEmotionImage";

import Button from "./Button";

const DiaryListItem = ({ data }) => {
  const { id, emotionId, createdDate, content } = data;

  const nav = useNavigate();

  return (
    <div className="DiaryListItem">
      <div
        onClick={() => nav(`/diary/${id}`)}
        className={`img_section img_section_${emotionId}`}
      >
        <img
          src={getEmotionImage(emotionId)}
          alt={`${emotionId}번 감정 이미지`}
        />
      </div>

      <div onClick={() => nav(`/diary/${id}`)} className="info_section">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>

      <div className="button_section">
        <Button onClick={() => nav(`/edit/${id}`)} text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryListItem;
