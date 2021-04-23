import "./modal.scss"

const Modal = ({ children, open, onClose }) => {
    return (
        <div className={["modal", open ? null : "modal--closed"].join(" ")}>
            <div onClick={onClose} className="modal__backdrop"></div>
            <div className="modal__content">
                {children}
            </div>
        </div>
    )
}

export default Modal