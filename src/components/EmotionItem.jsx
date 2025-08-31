import getEmotionImage from "../util/getEmotionImage";
import "./EmotionItem.css";

const EmotionItem = ({ emotionId, emotionName, isSelected }) => {
  return (
    <div
      className={`EmotionItem ${
        isSelected ? `EmtionItem_on_${emotionId}` : ""
      }`}
    >
      <img
        className="emotion_img"
        src={getEmotionImage(emotionId)}
        alt={`${emotionId}번 감정 이미지`}
      />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
