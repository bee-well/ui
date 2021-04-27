import "./statistics-card.scss"
import Card from "../../../molecules/card"
import ProgressBar from "../../../molecules/circular-progress-bar"
import Chart from "../../../molecules/chart"
import SecondaryHeading from "../../../atoms/headings/secondary-heading"

const StatisticsCard = ({ data, title }) => {
    return (
        <Card className="statistics-card">
            <div className="statistics-card__content">
                { title ?  <SecondaryHeading>{title}</SecondaryHeading> : null }
                <div className="statistics-card__data">
                    <ProgressBar 
                        percentage={data.happiness}
                        title="Happiness"
                    />
                    <Chart 
                        data={data.dataPoints}
                    />
                </div>
            </div>
        </Card>
    )
}

export default StatisticsCard