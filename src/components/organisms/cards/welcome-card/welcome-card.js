import "./welcome-card.scss";
import Card from "../../../molecules/card/card";
import SecondaryHeading from "../../../atoms/headings/secondary-heading";
import Button from "../../../atoms/buttons/button/button";
import CtaButton from "../../../atoms/buttons/cta-button/cta-button";
const WelcomeCard = ({ name, onReportMood, onViewStatistics }) => {
  return (
    <Card className="welcome-card">
      <div className="welcome-card__data">
        <SecondaryHeading>Welcome, {name}</SecondaryHeading>
        <CtaButton onClick={onReportMood}>Report mood</CtaButton>
        <Button onClick={onViewStatistics}>View statistics</Button>
      </div>
    </Card>
  );
};

export default WelcomeCard;
