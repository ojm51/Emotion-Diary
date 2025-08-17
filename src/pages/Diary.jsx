import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();

  return (
    <div>
      <h1>Welcome to the {params.id}th Diary Page</h1>
    </div>
  );
};

export default Diary;
