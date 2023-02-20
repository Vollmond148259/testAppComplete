import { useNavigate } from "react-router-dom";
import NewPostSection from "../components/newPostPage/newPostSection/newPostSection";
import axios from "axios";
export default function CreatePostPage() {
  const navigate = useNavigate();
  const publishNewArticle = (article) => {
    axios.post("/api/articles", article).then((response) => {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    });
  };

  return (
    <>
      <NewPostSection publishNewArticle={publishNewArticle} />
    </>
  );
}
