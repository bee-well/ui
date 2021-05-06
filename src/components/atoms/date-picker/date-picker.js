import "./date-picker.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerr = ({ selectedDate, setSelectedDate, placeHolder }) => {
  return (
      <DatePicker
        className="date-picker"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText={placeHolder}
      />
  );
};

export default DatePickerr;
