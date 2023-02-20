import { Box } from "@mui/material";
import { useEffect } from "react";
import { difference } from "lodash";
import PostsSection from "./postsSection/postsSection";
import PostSkeleton from "./skeleton/postSkeleton";
import FilterSection from "./filterSection/filterSection";
import {
  setCurrentPage,
  setShowCollection,
} from "../../redux/slices/articlesSlice";
import { useDispatch, useSelector } from "react-redux";
import { filtered, filterByDate } from "../utils/utils";
import { Typography } from "@mui/material";

function Home() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.articles.loading);
  const searchValue = useSelector((state) => state.articles.searchingValue);
  const articlesCollection = useSelector((state) => state.articles.collection);
  const showCollection = useSelector((state) => state.articles.showCollection);
  const blackList = useSelector((state) => state.articles.blackList);
  const timeFrame = useSelector((state) => state.articles.timeFrame);

  useEffect(() => {
    const timeFrameArray = filterByDate(articlesCollection, {
      start: timeFrame.start,
      end: timeFrame.end,
    });
    const filteredArray = filtered(
      difference(timeFrameArray, blackList),
      searchValue
    );
    searchValue && dispatch(setCurrentPage(1));
    dispatch(setShowCollection(filteredArray));
  }, [searchValue, blackList, timeFrame]);
  return (
    <Box>
      <Box my={4}>
        <FilterSection />
      </Box>
      <>
        {loading ? (
          <PostSkeleton />
        ) : (
          <>
            {showCollection.length === 0 ? (
              <Typography variant="h5">Articles not found</Typography>
            ) : (
              <PostsSection articles={showCollection} />
            )}
          </>
        )}
      </>
    </Box>
  );
}
export default Home;
