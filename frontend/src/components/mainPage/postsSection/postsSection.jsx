import { Box, Grid, Pagination } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../../redux/slices/articlesSlice";
import map from "lodash/map";
import { postOnPage } from "./constant";
import PostCard from "./postCard/postCard";
const divideItems = (array, currentPage, postOnPage) => {
  return array.slice((currentPage - 1) * postOnPage, currentPage * postOnPage);
};
function PostsSection({ articles }) {
  const dispatch = useDispatch();
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useSelector((state) => state.articles.currentPage);

  const handlePage = (event, value) => {
    dispatch(setCurrentPage(value));
  };
  useEffect(() => {
    const countPages = (articles) => {
      setPageCount(Math.ceil(articles.length / postOnPage));
    };
    countPages(articles);
  }, [articles]);

  return (
    <>
      <Grid px={1} container rowSpacing={{ xs: 1.5, md: 4 }} columnSpacing={4}>
        {map(
          divideItems(articles, currentPage, postOnPage),
          (article, index) => (
            <Grid key={index} item xs={12} sm={12} md={6}>
              <PostCard article={article} />
            </Grid>
          )
        )}
      </Grid>
      <Box
        sx={{ marginTop: { xs: 2, sm: 3, md: 4 }, marginBottom: 5 }}
        display="flex"
        justifyContent={{ xs: "center", md: "flex-end" }}>
        <Pagination
          page={currentPage}
          count={pageCount}
          color="primary"
          onChange={handlePage}
        />
      </Box>
    </>
  );
}
export default PostsSection;
