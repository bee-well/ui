import "./sign-in-modal.scss"

import { useState } from 'react'

import Modal from "../../../molecules/modal"
import TextField from "../../../atoms/textfields/text"
import Password from "../../../atoms/textfields/password"
import CtaButton from "../../../atoms/buttons/cta-button"
import PrimaryHeading from "../../../atoms/headings/primary-heading"

const SignInModal = ({ open, onClose, onSignIn }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [prompt, setPrompt] = useState('')

    const onSubmit = () => {
        if (email.trim() === "" || email.search("@") === -1 || email.search(".") === -1) {
            setPrompt("Please enter a valid email address")
            return
        }

        setPrompt("")
        onSignIn(
            email.trim(),
            password.trim(),
        )
    }

    return (
        <Modal open={open} onClose={onClose}>
            <div className="sign-in-modal">
                <div className="sign-in-modal__title">
                    <PrimaryHeading>Sign in</PrimaryHeading>
                </div>
                <div className="sign-in-modal__email">
                    <TextField text={email} setText={setEmail} placeholder="Email" />
                </div>
                <div className="sign-in-modal__password">
                    <Password password={password} setPassword={setPassword} placeholder="Password" />
                </div>
                {
                    prompt !== "" ? (
                        <div className="sign-in-modal__prompt">
                            <p>{prompt}</p>
                        </div>
                    ) : null
                }
                <div className="sign-in-modal__submit-button">
                    <CtaButton onClick={onSubmit}>Sign in</CtaButton>
                </div>
            </div>
        </Modal>
    )
}

export default SignInModal