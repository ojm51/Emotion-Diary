import "./DiaryListItem.css";

import getEmotionImage from "../utils/getEmotionImage";
import Button from "./Button";

const DiaryListItem = () => {
  const emotionId = 5;

  return (
    <div className="DiaryListItem">
      <div className={`img_section img_section_${emotionId}`}>
        <img
          src={getEmotionImage(emotionId)}
          alt={`${emotionId}번 감정 이미지`}
        />
      </div>

      <div className="info_section">
        <div className="created_date">{new Date().toLocaleDateString()}</div>
        <div className="content">content</div>
      </div>

      <div className="button_section">
        <Button text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryListItem;
