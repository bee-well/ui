import "./hour-card.scss";
import Card from "../../../molecules/card/card";
import SecondaryHeading from '../../../atoms/headings/secondary-heading/secondary-heading'

const HourCard = ({hours}) => {
  return (
    <Card className="hour-card">
      <SecondaryHeading>Hour</SecondaryHeading>
      <div className="hour-card__data">
        <p>{hours}</p>
      </div>
    </Card>
  );
};

export default HourCard