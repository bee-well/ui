import "./report-mood-modal.scss"

import Modal from "../../../molecules/modal"
import CtaButton from "../../../atoms/buttons/cta-button"
import PrimaryHeading from "../../../atoms/headings/primary-heading"
import Tag from "../../../atoms/tag"
import Icon from "../../../atoms/icon"

const ReportMoodModal = ({ open, onClose, reportMood }) => {
  
    
    return (
        <Modal open={open} onClose={onClose}>
            <div className="report-mood-modal">
                <div className="report-mood-modal__title">
                    <PrimaryHeading>Report your mood</PrimaryHeading>
                </div>
                <div className="report-mood-modal__icons">
                    <Icon icon="icon-sad" className="report-mood-modal__icon--sad"  />
                    <Icon icon="icon-wondering" className="report-mood-modal__icon--wondering"  />
                    <Icon icon="icon-neutral" className="report-mood-modal__icon--neutral" />
                    <Icon icon="icon-smile" className="report-mood-modal__icon--smile" />
                    <Icon icon="icon-happy" className="report-mood-modal__icon--happy" />
                </div>
                <div className="report-mood-modal__tags">
                    <Tag text="tired"/>
                    <Tag text="happy"/>
                    <Tag text="sad"/>
                    <Tag text="horny"/> 
                </div>
                <div className="report-mood-modal__send-button">
                    <CtaButton onClick={reportMood}>send</CtaButton>
                </div>
            </div>
        </Modal>
    ) 

}


export default ReportMoodModal;

