import './cta-button.scss'

const CtaButton = ({ onClick, children, big }) => {
    return (
        <button 
            onClick={onClick}
            className={["cta-button", big ? "cta-button-big" : null].join(" ")}
        >
            {children}
        </button>
    )
}

export default CtaButton