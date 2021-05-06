import "./date-picker.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";

const DatePickerr = ({ selectedDate, setSelectedDate, placeHolder }) => {
  return (
    <div className="container">
      <DatePicker
        className="date-picker"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText={placeHolder}
      />
    </div>
  );
};

export default DatePickerr;
