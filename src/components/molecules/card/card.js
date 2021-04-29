import './card.scss'

const Card = ({children, className, style}) => {
    return (
        <div style={style} className={["card", className ? className : null].join(" ")}>
            {children}
        </div>
    )
}

export default Card