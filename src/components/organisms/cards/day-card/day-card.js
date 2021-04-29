import "./day-card.scss";
import Card from "../../../molecules/card/card";
import SecondaryHeading from "../../../atoms/headings/secondary-heading/secondary-heading";

const DayCard = ({ weekday }) => {
  return (
    <div className="day-card__heading">
      <Card>
        <SecondaryHeading>Day</SecondaryHeading>
        <div className="day-card__data">
          <p>Monday</p>
        </div>
      </Card>
    </div>
  );
};

export default DayCard;
