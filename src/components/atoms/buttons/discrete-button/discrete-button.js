import "./discrete-button.scss"

const DiscreteButton = ({children, onClick, big}) => {
    return (
        <button 
            onClick={onClick}
            className={["discrete-button", big ? "discrete-button-big" : null].join(" ")}
        > 
            {children}
        </button>
    )
}

export default DiscreteButton