import "./report-mood-modal.scss"

import {useState, useEffect} from "react"

import Modal from "../../../molecules/modal"
import CtaButton from "../../../atoms/buttons/cta-button"
import DiscreteButton from "../../../atoms/buttons/discrete-button"
import PrimaryHeading from "../../../atoms/headings/primary-heading"
import Tag from "../../../atoms/tag"
import Icon from "../../../atoms/icon"

const ReportMoodModal = ({ open, onClose, onReportMood, tagOptions }) => {
    const [selectedMood, setSelectedMood] = useState(0)
    const [tags, setTags] = useState([])
    const [selectedTags, setSelectedTags] = useState([])
    const [prompt, setPrompt] = useState('')

    useEffect(() => {
        if (tagOptions.has(selectedMood)) {
            setTags(
                tagOptions.get(selectedMood).map(tag => {
                    if (selectedTags && selectedTags.length > 0) {
                        const selected = !!selectedTags.find(selectedTag => selectedTag === tag)
                        return { tag, selected }
                    } else {
                        return { tag, selected: false }
                    }
                })
            )
        }
    }, [selectedMood, selectedTags])

    useEffect(() => {
        setSelectedTags([])
        setPrompt("")
    }, [selectedMood])

    const toggleTagSelection = tag => {
        if (!!selectedTags.find(selectedTag => selectedTag === tag.tag)) {
            setSelectedTags(selectedTags.filter(selectedTag => selectedTag !== tag.tag))
        } else {
            setSelectedTags([...selectedTags, tag.tag])
        }
    }

    const generateTags = () => {
        if (tags && tags.length > 0) {
            return tags.map(tag => (
                    <Tag 
                        text={tag.tag} 
                        key={tag.tag} 
                        active={tag.selected} 
                        activeColor="#2980B9"
                        onClick={() => toggleTagSelection(tag)}
                    />
                )
            )
        }
    }

    const onSubmit = () => {
        if (selectedMood < 1 || selectedMood > 5) {
            setPrompt("Please select a mood")
            return
        }

        setPrompt("")
        onReportMood(selectedMood, selectedTags)
    }

    return (
        <Modal open={open} onClose={onClose}>
            <div className="report-mood-modal">
                <div className="report-mood-modal__title">
                    <PrimaryHeading>Report your mood</PrimaryHeading>
                </div>
                <div className="report-mood-modal__icons">
                    <DiscreteButton onClick={() => setSelectedMood(1)}>
                        <Icon icon="icon-sad" className="report-mood-modal__icon--sad"  />
                    </DiscreteButton>
                    <DiscreteButton onClick={() => setSelectedMood(2)}>
                        <Icon icon="icon-wondering" className="report-mood-modal__icon--wondering"  />
                    </DiscreteButton>
                    <DiscreteButton onClick={() => setSelectedMood(3)}>
                        <Icon icon="icon-neutral" className="report-mood-modal__icon--neutral"  />
                    </DiscreteButton>
                    <DiscreteButton onClick={() => setSelectedMood(4)}>
                        <Icon icon="icon-smile" className="report-mood-modal__icon--smile"  />
                    </DiscreteButton>
                    <DiscreteButton onClick={() => setSelectedMood(5)}>
                        <Icon icon="icon-happy" className="report-mood-modal__icon--happy"  />
                    </DiscreteButton>
                </div>
                <div className="report-mood-modal__tags">
                    {generateTags()}
                </div>
                {
                    prompt !== "" ? (
                        <div className="report-mood-modal__prompt">
                            <p>{prompt}</p>
                        </div>
                    ) : null
                }
                <div className="report-mood-modal__send-button">
                    <CtaButton onClick={onSubmit}>Send</CtaButton>
                </div>
            </div>
        </Modal>
    ) 
}
export default ReportMoodModal;