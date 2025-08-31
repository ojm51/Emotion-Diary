import "./Editor.css";
import Button from "../components/Button";

const Editor = () => {
  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input type="date" />
      </section>

      <section className="emotion_section">
        <h4>오늘의 감정</h4>
      </section>

      <section className="content_section">
        <h4>오늘의 일기</h4>
      </section>

      <section className="button_section">
        <Button text={"취소하기"} />
        <Button text={"완료하기"} type={"positive"} />
      </section>
    </div>
  );
};

export default Editor;
