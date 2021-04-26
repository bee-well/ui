import "./home.scss"

import {useState} from "react"

import SignUpModal from "../../organisms/modals/sign-up-modal"
import SignInModal from "../../organisms/modals/sign-in-modal"
import DiscreteButton from "../../atoms/buttons/discrete-button"
import CtaButton from "../../atoms/buttons/cta-button"
import Button from "../../atoms/buttons/button"
import SecondaryHeading from "../../atoms/headings/secondary-heading"

const Home = () => {
    const [isSignUpOpen, setIsSignUpOpen] = useState(false)
    const [isSignInOpen, setIsSignInOpen] = useState(false)

    const onSignUp = (firstName, lastName, email, password) => {

    }

    const onSignIn = (email, password) => {

    }

    return (
        <div className="home">
            <SignInModal
                open={isSignInOpen}
                onClose={() => setIsSignInOpen(false)}
                onSignIn={onSignIn}
            />
            <SignUpModal
                open={isSignUpOpen}
                onClose={() => setIsSignUpOpen(false)}
                onSignUp={onSignUp}
            />
            <div className="home__content">
                <div className="home__introduction">
                    <nav className="home__user-controls">
                        <DiscreteButton big onClick={() => setIsSignInOpen(true)}>Sign in</DiscreteButton>
                        <DiscreteButton big onClick={() => setIsSignUpOpen(true)}>Sign up</DiscreteButton>
                    </nav>
                    <div className="home__title">
                        <p className="home__title--accounts">We are currently helping <b>1244</b> people</p>
                        <h1 className="home__title--title">bee happy, <span className="home__title--underlined">bee-well</span></h1>
                        <div className="home__title--buttons">
                            <Button big>Learn more</Button>
                            <CtaButton big onClick={() => setIsSignUpOpen(true)}>Start now</CtaButton>
                        </div>
                    </div>
                </div>
                <div className="home__splash">
                    <div 
                        className="home__splash--image"
                        style={{backgroundImage: "linear-gradient(to right bottom, rgba(243, 156, 18, .2), rgba(102, 67, 13, .5)), url(assets/happy-man.jpg)"}}
                    ></div>
                    <div className="home__splash--content">
                        <h2 className="home__splash--content--title">The Bee-Well Saga</h2>
                        <p className="home__splash--content--text">
                            Bee-Well was created by four computer science student at Kristianstad University for the course
                            "Development for the Cloud". The task was to develop an application that includes a back-end 
                            running on the cloud as well as some kind of front-end. We decided to get creative with the back-end.
                            Bee-Well is built with a kind of microservice approach with four individually deployable services that
                            communicate through a instance of RabbitMQ. All of this is running on the Heroku Cloud and has been 
                            set up with both CI and CD functionality using GitHub Actions. 
                        </p>
                        <div className="home__splash--content--repos">
                            <a href="https://github.com/bee-well/docs" className="home__splash--repo-link" target="_blank">
                                <h3>docs</h3>
                                <p>We used this repo to host our initial design thoughts, PlantUML-style!</p>
                            </a>
                            <a href="https://github.com/bee-well/ui" target="_blank" className="home__splash--repo-link">
                                <h3>ui</h3>
                                <p>The React application we created as a front-end</p>
                            </a>
                        </div>
                        <div className="home__splash--content--repos">
                            <a href="https://github.com/bee-well/auth" className="home__splash--repo-link" target="_blank">
                                <h3>auth</h3>
                                <p>We gotta know who is logged in somehow, and Golang with JWT did the trick!</p>
                            </a>
                            <a href="https://github.com/bee-well/mood" className="home__splash--repo-link" target="_blank">
                                <h3>mood</h3>
                                <p>A service made with Node.js + Express that reports your mood</p>
                            </a>
                        </div>
                        <div className="home__splash--content--repos">
                            <a href="https://github.com/bee-well/statistics" className="home__splash--repo-link" target="_blank">
                                <h3>statistics</h3>
                                <p>This is the money-shot! This service collects mood data and gives it back to you, nice and processed</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="home__contact">
                    <p className="home__contact--email">contact@bee-well.com</p>
                    <nav className="home__contact--social-media">
                        <a href="#">SN</a>
                        <a href="#">IG</a>
                        <a href="#">FB</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Home