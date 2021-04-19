import './cta-button.scss'

const CtaButton = ({ onClick, children }) => {
    return (
        <button 
            onClick={onClick}
            className="cta-button"
        >
            {children}
        </button>
    )
}

export default CtaButton