import "./statistics-card.scss"
import Card from "../../../molecules/card"
import ProgressBar from "../../../molecules/circular-progress-bar"
import Chart from "../../../molecules/chart"
import SecondaryHeading from "../../../atoms/headings/secondary-heading"

const StatisticsCard = ({ data, title }) => {
    return (
        <Card className="statistics-card">
            <SecondaryHeading>{title}</SecondaryHeading>
            <div className="statistics-card__data">
                <ProgressBar 
                    percentage={data.happiness}
                    title="Happiness"
                />
                <Chart 
                    data={data.dataPoints}
                />
            </div>
        </Card>
    )
}

export default StatisticsCard