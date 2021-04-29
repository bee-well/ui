import "./report-mood-modal.scss"

import Modal from "../../../molecules/modal"
import CtaButton from "../../../atoms/buttons/cta-button"
import DiscreteButton from "../../../atoms/buttons/discrete-button"
import PrimaryHeading from "../../../atoms/headings/primary-heading"
import Tag from "../../../atoms/tag"
import Icon from "../../../atoms/icon"

const ReportMoodModal = ({ open, onClose, reportMood, tagOptions, onSelectMood }) => {
    const tags = tagOptions.map(tagOption => <Tag text={tagOption} />)

    return (
        <Modal open={open} onClose={onClose}>
            <div className="report-mood-modal">
                <div className="report-mood-modal__title">
                    <PrimaryHeading>Report your mood</PrimaryHeading>
                </div>
                <div className="report-mood-modal__icons">
                    <DiscreteButton onClick={() => alert("hej")}>
                        <Icon icon="icon-sad" className="report-mood-modal__icon--sad"  />
                    </DiscreteButton>
                    <DiscreteButton onClick={() => alert("hej")}>
                        <Icon icon="icon-wondering" className="report-mood-modal__icon--wondering"  />
                    </DiscreteButton>
                    <DiscreteButton onClick={() => alert("hej")}>
                        <Icon icon="icon-neutral" className="report-mood-modal__icon--neutral"  />
                    </DiscreteButton>
                    <DiscreteButton onClick={() => alert("hej")}>
                        <Icon icon="icon-smile" className="report-mood-modal__icon--smile"  />
                    </DiscreteButton>
                    <DiscreteButton onClick={() => alert("hej")}>
                        <Icon icon="icon-happy" className="report-mood-modal__icon--happy"  />
                    </DiscreteButton>
                </div>
                <div className="report-mood-modal__tags">
                    {tags}
                </div>
                <div className="report-mood-modal__send-button">
                    <CtaButton onClick={reportMood}>Send</CtaButton>
                </div>
            </div>
        </Modal>
    ) 

}

export default ReportMoodModal;

