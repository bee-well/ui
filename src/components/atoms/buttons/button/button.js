import './button.scss'

const button = ({ onClick, children }) => {
    return (
        <button 
            onClick={onClick}
            className="button"
        > 
            {children}
        </button>
    )
}

export default button