import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const NotFound = () => {
  const nav = useNavigate();

  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Button onClick={() => nav("/")} text={"Home"} type={"positive"} />
    </div>
  );
};

export default NotFound;
