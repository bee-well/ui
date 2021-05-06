import "./average-mood-card.scss"

import Card from "../../../molecules/card"
import Icon from "../../../atoms/icon"
import SecondaryHeading from "../../../atoms/headings/secondary-heading"

const AverageMoodCard = ({averageMood}) => {
    const moodToIcon = (mood) => {
        switch (mood) {
            case 1:
                return "icon-sad"
            case 2:
                return "icon-wondering"
            case 3: 
                return "icon-neutral"
            case 4: 
                return "icon-smile"
            case 5: 
                return "icon-happy"            
        }
    }
    
    return (
        <Card className="average-mood-card">
            <SecondaryHeading>Average mood</SecondaryHeading>
            <Icon className="average-mood-card__icon" icon={moodToIcon(averageMood)} />
        </Card>
    )
} 

export default AverageMoodCard