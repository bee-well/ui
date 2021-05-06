import "./filter-card.scss";
import Card from "../../../molecules/card/card";
import SecondaryHeading from "../../../atoms/headings/secondary-heading/secondary-heading";
import DatePicker from "../../../atoms/date-picker/date-picker";
import CTAButton from "../../../atoms/buttons/cta-button/cta-button";
import React, { useState } from "react";

const FilterCard = ({ onFilter }) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const validateDates = (d1, d2) => {
    if (d1 > d2) {
      return false;
    } else {
      return true;
    }
  };

  const onSubmit = (d1, d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);

    if (validateDates(date1, date2)) {
      onFilter(date1, date2);
    } else {
      alert("Please check your dates. Date1 must be before Date2.");
    }
  };

  return (
    <Card>
      <div className="filter-card">
        <div className="filter-card__heading">
          <SecondaryHeading>Filter</SecondaryHeading>
          <div className="filter-card__data">
            <DatePicker
              placeHolder={"From"}
              selectedDate={startDate}
              setSelectedDate={setStartDate}
            ></DatePicker>
            <DatePicker
              placeHolder={"To"}
              selectedDate={endDate}
              setSelectedDate={setEndDate}
            ></DatePicker>

            <CTAButton onClick={() => onSubmit(startDate, endDate)}>
              Compile Statistics
            </CTAButton>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FilterCard;
