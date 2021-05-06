import "./home-card.scss"

import Card from "../../../molecules/card"
import Icon from "../../../atoms/icon"
import {useState, useEffect} from "react"
import SecondaryHeading from "../../../atoms/headings/secondary-heading"

const HomeCard = () => {
    const icons = ["icon-sad", "icon-wondering", "icon-neutral", "icon-smile", "icon-happy"]
    const [currentIcon, setCurrentIcon] = useState(0)

    const setNextIcon = () => {
        setCurrentIcon((currentIcon + 1) % icons.length)
    }

    useEffect(() => {
        const interval = setInterval(setNextIcon, 1000)
        return () => clearInterval(interval)
    })

    return (
        <Card className="home-card">
            <SecondaryHeading>How are you feeling today?</SecondaryHeading>
            <Icon icon={icons[currentIcon]} className="home-card__icon" />
        </Card>
    )
}

export default HomeCard