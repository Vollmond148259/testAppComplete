import { Box } from "@mui/material";
import { useEffect } from "react";
import { difference } from "lodash";
import PostsSection from "./postsSection/postsSection";
import FilterSection from "./filterSection/filterSection";
import {
  setCurrentPage,
  setShowCollection,
} from "../../redux/slices/articlesSlice";
import { useDispatch, useSelector } from "react-redux";
import { filtered, filterByDate } from "../utils/utils";
import { Typography } from "@mui/material";

export default function Home() {
  const dispatch = useDispatch();
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
    dispatch(setShowCollection(filteredArray));
    searchValue && dispatch(setCurrentPage(1));
  }, [searchValue, blackList, timeFrame]);
  return (
    <Box>
      <Box my={4}>
        <FilterSection />
      </Box>
      {showCollection.length === 0 ? (
        <Typography variant="h5">Articles not found</Typography>
      ) : (
        <PostsSection articles={showCollection} />
      )}
    </Box>
  );
}
