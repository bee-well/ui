import "./report-mood-modal.scss"


import Modal from "../../../molecules/modal"
import CtaButton from "../../../atoms/buttons/cta-button"
import PrimaryHeading from "../../../atoms/headings/primary-heading"
import Tags from "../../../atoms/tag"
import Icons from "../../../atoms/icon"

const ReportMoodModal = ({ open, onClose, SendMood }) => {


}

return (
    <Modal open={open} onClose={onClose}>
        <div className="report-mood-modal">
            <div className="report-mood.modal__title">
                <PrimaryHeading>Report your mood</PrimaryHeading>
            </div>
            <div className="report-mood-modal__icons">
            <Icon icon="icon-sad" />
            <Icon icon="icon-wondering" />
            <Icon icon="icon-neutral" />
            <Icon icon="icon-smile" />
            <Icon icon="icon-happy" />
            </div>
            <div className="report-mood-modal__tags">
                <Tags> tired </Tags>
                <Tags> happy </Tags>
                <Tags> miss Lisa </Tags>
                <Tags> lack of sleep </Tags>
            
            </div>
    
            <div className="report-mood-modal__send-button">
                <CtaButton onClick={onSubmit}>send</CtaButton>
            </div>
        </div>
    </Modal>
)


