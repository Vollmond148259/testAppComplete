import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setArticlesCollection,
  setShowCollection,
  setLoading,
} from "../redux/slices/articlesSlice";
import axios from "axios";
import Home from "../components/mainPage/home";
export default function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    axios.get("/api/articles").then((response) => {
      dispatch(setArticlesCollection(response.data));
      dispatch(setShowCollection(response.data));
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 800);
    });
  }, []);
  return <Home />;
}
