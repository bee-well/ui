import "./profile-card.scss";
import Card from "../../../molecules/card/card";
import SecondaryHeading from "../../../atoms/headings/secondary-heading";
import Button from "../../../atoms/buttons/button/button";
import Icon from "../../../atoms/icon"

const ProfileCard = ({ email, name, onSignOut }) => {
  return (
    <Card 
      className="profile-card"
      style={{
        backgroundImage: `linear-gradient(to right bottom, rgba(243, 156, 18, .8), rgba(243, 156, 18, .9)), url(assets/happyface.jpeg)`,
      }}
    >
      <div className="profile-card__content">
        <SecondaryHeading light>Profile</SecondaryHeading>
        <div className="profile-card__email">
          <Icon icon="icon-drawer2" className="profile-card__icon"/>
          <p>{email}</p>
        </div>
        <div className="profile-card__name">
          <Icon icon="icon-user" className="profile-card__icon"/>
          <p>{name}</p>
        </div>
        <div className="profile-card__button">
          <Button onClick={onSignOut}>Sign Out</Button>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
