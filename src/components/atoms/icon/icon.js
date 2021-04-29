/*
    icon possible values: 
        icon-drawer2 (email icon)
        icon-user (user icon)
        icon-happy (mood 5)
        icon-smile (mood 4)
        icon-neutral (mood 3)
        icon-wondering (mood 2)
        icon-sad (mood 1)
        icon-github
        icon-facebook
        icon-instagram
*/
const Icon = ({icon, className}) => {
    return (
        <svg className={ className }>
            <use xlinkHref={`${process.env.PUBLIC_URL}/assets/icons.svg#${icon}`}></use>
        </svg>
    );
}

export default Icon