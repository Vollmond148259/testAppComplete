import { useState, memo } from "react";
import BaseDatePicker from "./datePicker";
import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setTimeFrameStart,
  setTimeFrameEnd,
  setCurrentPage,
} from "../../../redux/slices/articlesSlice";
function FilterSection() {
  const dispatch = useDispatch();
  const [fromDefaultDate, setFromDefaultDate] = useState(null);
  const fromDate = useSelector((state) => state.articles.timeFrame.start);
  const toDate = useSelector((state) => state.articles.timeFrame.end);
  const setEndDate = (endDate) => {
    dispatch(setTimeFrameEnd(endDate));
    dispatch(setCurrentPage(1));
  };
  const setStartDate = (startDate) => {
    setFromDefaultDate(startDate);
    dispatch(setTimeFrameStart(startDate));
    dispatch(setCurrentPage(1));
  };
  return (
    <>
      <Stack
        paddingX={1}
        direction="row"
        justifyContent={{ sm: "space-between", md: "flex-start" }}
        spacing={2}>
        <BaseDatePicker
          startDate={""}
          date={fromDefaultDate}
          setDate={setStartDate}
          label="filter from"
        />
        <BaseDatePicker
          startDate={fromDate}
          date={toDate}
          setDate={setEndDate}
          label="filter to"
        />
      </Stack>
    </>
  );
}
export default memo(FilterSection);
