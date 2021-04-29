import Card from "../../../molecules/card/card";
import "./reports-card.scss";

const ReportCard = ({ reports, recommendedReports }) => {
  return (
    <Card>
      <div className="reports-card__data">
      <span className="reports-card__indicator"></span>
        <p>
           {reports} reports of {recommendedReports}
          recommended
        </p>
      </div>
    </Card>
  );
};

export default ReportCard;
