import { useEffect } from "react";
import ArticleSection from "../components/articlePage/articleSection/articleSection";
import { Box } from "@mui/material";
import axios from "axios";
import { setArticle, setComments } from "../redux/slices/articlesSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/slices/articlesSlice";
export default function ArticlePage() {
  const article = useSelector((state) => state.articles.article);
  const comments = useSelector((state) => state.articles.comments);
  const loading = useSelector((state) => state.articles.loading);
  const dispatch = useDispatch();
  const { id } = useParams();
  const publishNewComment = (comment) => {
    dispatch(setLoading(true));
    axios
      .post("/api/comments", comment)
      .then(() => dispatch(setLoading(false)));
  };
  useEffect(() => {
    axios.get(`/api/articles/${id}`).then((response) => {
      dispatch(setArticle(response.data));
    });
  }, []);
  useEffect(() => {
    axios.get(`/api/comments?article=${id}`).then((response) => {
      dispatch(setComments(response.data));
    });
  }, [loading]);

  return (
    <>
      <Box mt={3} mb={10} px={1}>
        {article && (
          <ArticleSection
            publishNewComment={publishNewComment}
            article={article}
            comments={comments}
          />
        )}
      </Box>
    </>
  );
}
