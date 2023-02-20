import { PropTypes } from "prop-types";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function BaseDatePicker({ label, startDate, date, setDate }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        closeOnSelect={true}
        disableFuture
        minDate={startDate}
        label={label}
        value={date}
        onChange={(newValue) => {
          setDate(newValue.$d.getTime());
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
BaseDatePicker.propTypes = {
  label: PropTypes.string,
  startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  date: PropTypes.number,
  setDate: PropTypes.func,
};
export default BaseDatePicker;
