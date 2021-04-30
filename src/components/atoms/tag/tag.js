import './tag.scss'

const Tag = ({text, onClick, active, activeColor}) => {
    return (
        <div 
            className="tag" 
            style={
                active ? {background: activeColor, color: "white"} 
                : null
            }
            onClick={onClick}
        >
            <p className="tag__text">{text}</p>
        </div>
    )
}

export default Tag