import "./statistics-card.scss"
import Card from "../../../molecules/card"
import ProgressBar from "../../../molecules/circular-progress-bar"
import Chart from "../../../molecules/chart"
import SecondaryHeading from "../../../atoms/headings/secondary-heading"

const StatisticsCard = ({ data, title }) => {
    const statistics = data ? (
        <div className="statistics-card__data">
            <ProgressBar 
                percentage={data.happiness}
                title="Happiness"
            />
            <Chart 
                data={data.dataPoints}
            />
        </div>
    ) : <p>Loading...</p>

    return (
        <Card className="statistics-card">
            <div className="statistics-card__content">
                { title ?  <SecondaryHeading>{title}</SecondaryHeading> : null }
                { statistics }
            </div>
        </Card>
    )
}

export default StatisticsCard