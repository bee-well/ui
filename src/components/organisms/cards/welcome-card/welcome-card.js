import "./welcome-card.scss";
import Card from "../../../molecules/card/card";
import SecondaryHeading from "../../../atoms/headings/secondary-heading";
import Button from "../../../atoms/buttons/button/button";
import CtaButton from "../../../atoms/buttons/cta-button/cta-button";

const WelcomeCard = ({ name, happiness, onReportMood, onViewStatistics }) => {
  let saying
  if (happiness < 10) {
    saying = "Remember that every day does not have to be your day!"
  } else if (happiness < 30) {
    saying = "Don't forget to give yourself a break"
  } else if (happiness < 60) {
    saying = "We are happy that you are happy!"
  } else {
    saying = "Wow, today is your day! Make the most of it"
  }

  return (
    <Card className="welcome-card">
      <div className="welcome-card__data">
        <SecondaryHeading>Welcome, {name}</SecondaryHeading>
        <p className="welcome-card__saying">{saying}</p>
        <div className="welcome-card__buttons">
        <CtaButton onClick={onReportMood}>Report mood</CtaButton>
        <Button onClick={onViewStatistics}>View statistics</Button>
        </div>
      </div>
    </Card>
  );
};

export default WelcomeCard;
