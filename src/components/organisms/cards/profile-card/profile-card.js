import "./profile-card.scss";
import Card from "../../../molecules/card/card";
import SecondaryHeading from "../../../atoms/headings/secondary-heading";
import Button from "../../../atoms/buttons/button/button";

const ProfileCard = ({ email, name }) => {
  return (
    <Card 
      className="profile-card"
      style={{
        backgroundImage: `linear-gradient(to right bottom, rgba(243, 156, 18, .8), rgba(243, 156, 18, .9)), url(assets/happyface.jpeg)`,
        backgroundPosition: "center",
        backgroundSize: 'cover',
      }}
    >
      <div className="profile-card__data">
        <SecondaryHeading light>Profile</SecondaryHeading>
        <p>{email}</p>
        <p>{name}</p>
        <Button>Sign Out</Button>
      </div>
    </Card>
  );
};

export default ProfileCard;
