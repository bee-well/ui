import './card.scss'

const Card = ({children, className}) => {
    return (
        <div className={["card", className ? className : null].join(" ")}>
            {children}
        </div>
    )
}

export default Card