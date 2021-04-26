import "./profile-card.scss";
import Card from "../../../molecules/card/card";
import SecondaryHeading from "../../../atoms/headings/secondary-heading";
import Button from "../../../atoms/buttons/button/button";
const Background = "./assets/happyface.jpeg";

const ProfileCard = ({ email, name }) => {
  return (
    <Card className="profile-card">
      <div
        className="profile-card__data"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: 'orange',
          backgroundSize: 'cover',
          opacity: '70%'
        }}
      >
        <SecondaryHeading light>Profile</SecondaryHeading>
        <p>info@rasmusnilsson.se</p>
        <p>Erik Rasmus Nilsson</p>
        <Button>Sign Out</Button>
      </div>
    </Card>
  );
};

export default ProfileCard;
