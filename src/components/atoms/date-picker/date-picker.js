import React, { useState } from "react";
import datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ selectedDate, setSelectedDate }) => {
  
  return (
    <div className="date-picker">
      <datepicker
        placeholderText="Pick your date"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
    </div>
  );
}

export default DatePicker;
