import "./home.scss"

import {useState} from "react"

import SignUpModal from "../../organisms/modals/sign-up-modal"
import SignInModal from "../../organisms/modals/sign-in-modal"
import DiscreteButton from "../../atoms/buttons/discrete-button"
import CtaButton from "../../atoms/buttons/cta-button"
import Button from "../../atoms/buttons/button"
import SecondaryHeading from "../../atoms/headings/secondary-heading"
import OverviewCard from "../../organisms/cards/statistics-card"

const Home = () => {
    const [isSignUpOpen, setIsSignUpOpen] = useState(false)
    const [isSignInOpen, setIsSignInOpen] = useState(false)

    const generateSampleData = () => {
        const date = new Date()
        return {
            happiness: 65,
            dataPoints: [
                { mood: 1, reported: date },
                { mood: 2, reported: new Date(date).setDate(date.getDate() + 1) },
                { mood: 3, reported: new Date(date).setDate(date.getDate() + 2) },
                { mood: 5, reported: new Date(date).setDate(date.getDate() + 3) },
                { mood: 4, reported: new Date(date).setDate(date.getDate() + 4) },
                { mood: 5, reported: new Date(date).setDate(date.getDate() + 5) },
            ]
        }
    }

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
                            Bee-Well was created by four computer science students at Kristianstad University for the course
                            "Development for the Cloud". The task was to develop an application that includes a back-end 
                            running on the cloud as well as some kind of front-end. We decided to get creative with the back-end.
                            Bee-Well is built with a kind of microservice approach with four individually deployable services that
                            communicate through a instance of RabbitMQ. All of this is running on the Heroku Cloud and has been 
                            set up with both CI and CD functionality using GitHub Actions. 
                        </p>
                        <div className="home__splash--content--data">
                            <OverviewCard data={generateSampleData()} />
                            <a href="https://github.com/bee-well" target="_blank" className="home__splash--content--github">
                                <h3>View more on GitHub</h3>
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