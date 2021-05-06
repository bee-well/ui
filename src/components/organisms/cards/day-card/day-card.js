import "./day-card.scss";
import Card from "../../../molecules/card/card";
import SecondaryHeading from "../../../atoms/headings/secondary-heading/secondary-heading";

const DayCard = ({ weekday }) => {
  return (
      <Card className="day-card">
        <SecondaryHeading>Day</SecondaryHeading>
        <div className="day-card__data">
          <p>{weekday}</p>
        </div>
      </Card>
  );
};

export default DayCard;
