import './button.scss'

const button = ({ onClick, children, big }) => {
    return (
        <button 
            onClick={onClick}
            className={["button", big ? "button-big" : null].join(" ")}
        > 
            {children}
        </button>
    )
}

export default button