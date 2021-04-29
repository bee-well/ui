import "./hour-card.scss";
import Card from "../../../molecules/card/card";
import SecondaryHeading from '../../../atoms/headings/secondary-heading/secondary-heading'

const HourCard = ({hours}) => {
  return (
    <div className="hour-card__heading">
      <Card>
        <SecondaryHeading>Hour</SecondaryHeading>
        <div className="hour-card__data">
          <p>{hours}</p>
        </div>
      </Card>
    </div>
  );
};

export default HourCard