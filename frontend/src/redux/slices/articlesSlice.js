import { DateTime } from "luxon";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  collection: [],
  showCollection: [],
  blackList: [],
  article: null,
  loading: false,
  comments: [],
  currentPage: 1,
  timeFrame: { start: -10800000, end: DateTime.now().toMillis() },
  searchingValue: "",
};

const slice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setTimeFrameStart: (state, action) => {
      state.timeFrame.start = action.payload;
    },
    setTimeFrameEnd: (state, action) => {
      state.timeFrame.end = action.payload;
    },
    setTimeFrame: (state, action) => {
      state.timeFrame = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setArticlesCollection: (state, action) => {
      state.collection = action.payload;
    },
    setShowCollection: (state, action) => {
      state.showCollection = action.payload;
    },
    setArticle: (state, action) => {
      state.article = action.payload;
    },
    setComments: (state, action) => {
      state.comments = action.payload;
    },
    setSearchingValue: (state, action) => {
      state.searchingValue = action.payload;
    },
    setBlackList: (state, action) => {
      state.blackList.push(action.payload);
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});
export const {
  setArticlesCollection,
  setArticle,
  setComments,
  setSearchingValue,
  setShowCollection,
  setBlackList,
  setLoading,
  setCurrentPage,
  setTimeFrame,
  setTimeFrameStart,
  setTimeFrameEnd,
} = slice.actions;

export default slice.reducer;
