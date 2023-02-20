import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoading } from "../redux/slices/articlesSlice";
import NewPostSection from "../components/newPostPage/newPostSection/newPostSection";
import axios from "axios";
export default function CreatePostPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const publishNewArticle = (article) => {
    dispatch(setLoading(true));
    axios.post("/api/articles", article).then(() => {
      setTimeout(() => {
        dispatch(setLoading(false));
        navigate("/");
      }, 1000);
    });
  };

  return <NewPostSection publishNewArticle={publishNewArticle} />;
}
