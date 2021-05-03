import "./statistics-card.scss"
import Card from "../../../molecules/card"
import ProgressBar from "../../../molecules/circular-progress-bar"
import Chart from "../../../molecules/chart"
import SecondaryHeading from "../../../atoms/headings/secondary-heading"
import Tag from "../../../atoms/tag"

const StatisticsCard = ({ data, title }) => {
    const statistics = data && data.happiness && data.dataPoints ? (
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

    const tags = data && data.mostCommonTags ? data.mostCommonTags.map(tag => tag !== "" ? <Tag text={tag} onClick={() => {}} /> : null) : null

    return (
        <Card className="statistics-card">
            <div className="statistics-card__content">
                { title ?  <SecondaryHeading>{title}</SecondaryHeading> : null }
                { statistics }
                <div className="statistics-card__tags">
                    {tags}
                </div>
            </div>
        </Card>
    )
}

export default StatisticsCard