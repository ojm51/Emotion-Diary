import { useState } from "react";
import "./Editor.css";
import Button from "./Button";
import EmotionItem from "./EmotionItem";
import getStringDate from "../utils/getStringDate";

const emotionList = [
  { emotionId: 1, emotionName: "완전 좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "그럭저럭" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "끔찍함" },
];

const Editor = ({ onSubmit }) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 0,
    content: "",
  });

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") value = new Date(value);

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          value={getStringDate(input.createdDate)}
          onChange={onChangeInput}
          type="date"
        />
      </section>

      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              onClick={() => {
                onChangeInput({
                  target: { name: "emotionId", value: item.emotionId },
                });
              }}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>

      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          onChange={onChangeInput}
          name="content"
          value={input.content}
          placeholder="오늘은 어땠나요?"
        />
      </section>

      <section className="button_section">
        <Button text={"취소하기"} />
        <Button
          onClick={onClickSubmitButton}
          text={"완료하기"}
          type={"positive"}
        />
      </section>
    </div>
  );
};

export default Editor;
