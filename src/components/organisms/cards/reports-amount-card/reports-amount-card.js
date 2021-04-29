import "./reports-amount-card.scss";
import Card from "../../../../components/molecules/card/card";
import SecondaryHeading from "../../../atoms/headings/secondary-heading/secondary-heading";

const ReportsAmountCard = ({ counter }) => {
  return (
    <Card className="reports-amount-card">
      <div className="reports-amount-card__heading">
        <SecondaryHeading>Reports</SecondaryHeading>
        <div className="reports-amount-card__data">
          <p>{counter}</p>
        </div>
      </div>
    </Card>
  );
};

export default ReportsAmountCard;
