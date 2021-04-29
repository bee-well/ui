import "./reports-amount-card.scss";
import Card from "../../../../components/molecules/card/card";
import SecondaryHeading from "../../../atoms/headings/secondary-heading/secondary-heading";

const ReportsAmountCard = ({ counter }) => {
  return (
    <div className="reports-amount-card__heading">
      <Card>
        <SecondaryHeading>Reports</SecondaryHeading>
        <div className="reports-amount-card__data">
          <p>{counter}</p>
        </div>
      </Card>
    </div>
  );
};

export default ReportsAmountCard;
