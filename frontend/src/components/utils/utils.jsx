import { DateTime } from "luxon";
import map from "lodash/mapKeys";

const convertDate = (date) => {
  return DateTime.fromISO(date).toFormat("yyyy LLL dd");
};

function filtered(array, value) {
  if (!value) {
    return array;
  }
  const tempArray = [];
  const valueArray = value.split("");
  const bigChar = valueArray[0].toUpperCase();
  const smallChar = valueArray[0].toLowerCase();
  const bigWord = bigChar + valueArray.join("").slice(1);
  const smallWord = smallChar + valueArray.join("").slice(1);
  map(array, (element) => {
    if (element.title.includes(bigWord) || element.title.includes(smallWord)) {
      tempArray.push(element);
    }
  });
  return tempArray;
}

const getFirstSymbolForAvatar = (title) => {
  return title.slice(0, 1).toUpperCase();
};

const filterByDate = (arr, { start, end }) => {
  let temp = new Date(end);
  let currentTimeZoneOffset = temp.getTimezoneOffset() * 60 * 1000;
  start = start ? new Date(start) : null;
  end = end ? new Date(end) - currentTimeZoneOffset : null;
  return arr.filter(({ date }) => {
    date = new Date(date);
    return !((start && start > date) || (end && end < date));
  });
};

const divideItems = (array, currentPage, postOnPage) => {
  return array.slice((currentPage - 1) * postOnPage, currentPage * postOnPage);
};

const createPreview = (text) => {
  let tempArray = text.split(" ");
  return tempArray.slice(0, 13).join(" ");
};

export {
  convertDate,
  filtered,
  getFirstSymbolForAvatar,
  filterByDate,
  divideItems,
  createPreview,
};
