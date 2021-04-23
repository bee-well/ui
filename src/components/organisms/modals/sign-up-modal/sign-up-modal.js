import "./sign-up-modal.scss"

import { useState } from 'react'

import Modal from "../../../molecules/modal"
import TextField from "../../../atoms/textfields/text"
import Password from "../../../atoms/textfields/password"
import CtaButton from "../../../atoms/buttons/cta-button"
import PrimaryHeading from "../../../atoms/headings/primary-heading"

const SignUpModal = ({ open, onClose, onSignUp }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [prompt, setPrompt] = useState('')

    const onSubmit = () => {
        if (firstName.trim() === "" || lastName.trim() === "") {
            setPrompt("Please enter valid names")
            return
        }
        if (email.trim() === "" || email.search("@") === -1 || email.search(".") === -1) {
            setPrompt("Please enter a valid email address")
            return
        }
        if (password.trim().length < 8) {
            setPrompt("Please enter a password that is longer than 8 characters")
            return
        }
        if (password.trim() !== confirmPassword.trim()) {
            setPrompt("Passwords do not match")
            return
        }

        setPrompt("")
        onSignUp(
            firstName.trim(),
            lastName.trim(),
            email.trim(),
            password.trim(),
        )
    }

    return (
        <Modal open={open} onClose={onClose}>
            <div className="sign-up-modal">
                <div className="sign-up-modal__title">
                    <PrimaryHeading>Sign up</PrimaryHeading>
                </div>
                <div className="sign-up-modal__names">
                    <TextField text={firstName} setText={setFirstName} placeholder="First name" />
                    <TextField text={lastName} setText={setLastName} placeholder="Last name" />
                </div> 
                <div className="sign-up-modal__email">
                    <TextField text={email} setText={setEmail} placeholder="Email" />
                </div>
                <div className="sign-up-modal__passwords">
                    <Password password={password} setPassword={setPassword} placeholder="Password" />
                    <Password password={confirmPassword} setPassword={setConfirmPassword} placeholder="Confirm password" />
                </div>
                {
                    prompt !== "" ? (
                        <div className="sign-up-modal__prompt">
                            <p>{prompt}</p>
                        </div>
                    ) : null
                }
                <div className="sign-up-modal__submit-button">
                    <CtaButton onClick={onSubmit}>Sign up</CtaButton>
                </div>
            </div>
        </Modal>
    )
}

export default SignUpModal