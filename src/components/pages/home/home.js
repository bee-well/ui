import "./home.scss"

import {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"

import {authenticate, signUp} from "../../../api/bee-well"

import SignUpModal from "../../organisms/modals/sign-up-modal"
import SignInModal from "../../organisms/modals/sign-in-modal"
import DiscreteButton from "../../atoms/buttons/discrete-button"
import CtaButton from "../../atoms/buttons/cta-button"
import Button from "../../atoms/buttons/button"
import OverviewCard from "../../organisms/cards/statistics-card"

const Home = () => {
    const history = useHistory()
    const [isSignUpOpen, setIsSignUpOpen] = useState(false)
    const [isSignInOpen, setIsSignInOpen] = useState(false)
    const [sampleData, setSampleData] = useState(false)

    const generateSampleData = () => {
        const date = new Date()
        return {
            happiness: Math.floor(Math.random() * 90) + 10,
            dataPoints: [
                { mood: Math.floor(Math.random() * 5) + 1, date: date },
                { mood: Math.floor(Math.random() * 5) + 1, date: new Date(date).setDate(date.getDate() + 1) },
                { mood: Math.floor(Math.random() * 5) + 1, date: new Date(date).setDate(date.getDate() + 2) },
                { mood: Math.floor(Math.random() * 5) + 1, date: new Date(date).setDate(date.getDate() + 3) },
                { mood: Math.floor(Math.random() * 5) + 1, date: new Date(date).setDate(date.getDate() + 4) },
                { mood: Math.floor(Math.random() * 5) + 1, date: new Date(date).setDate(date.getDate() + 5) },
            ]
        }
    }

    useEffect(() => {
        setSampleData(generateSampleData())
    }, [])

    const onSignUp = async (firstName, lastName, email, password) => {
        const result = await signUp(firstName, lastName, email, password)
        if (result.success) {
            alert("signed up!")
            setIsSignUpOpen(false)
            setTimeout(() => setIsSignInOpen(true), 500)
        } else {
            // TODO: print error
            console.log("ouch")
        }
    }  

    const onSignIn = async (email, password) => {
        const result = await authenticate(email, password)
        if (result.success) {
            history.push("/panel")
        } else {
            // TODO: print error
            console.log(result.payload)
        }
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
                            <Button>Learn more</Button>
                            <CtaButton onClick={() => setIsSignUpOpen(true)}>Start now</CtaButton>
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
                            This is a project for "Software Development for the Cloud". We decided to get creative with the back-end.
                            Bee-Well is built with a kind of microservice approach with four individually deployable services that
                            communicate through a instance of RabbitMQ. All of this is running on the Heroku Cloud and has been 
                            set up with both CI and CD functionality using GitHub Actions. 
                        </p>
                        <div className="home__splash--content--data">
                            <OverviewCard data={sampleData} />
                            <a href="https://github.com/bee-well" target="_blank" rel="noreferrer" className="home__splash--content--github">
                                <h3>GitHub</h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="home__contact">
                    <p className="home__contact--email">contact@bee-well.com</p>
                    <nav className="home__contact--social-media">
                        <a href="https://www.snapchat.com/l/en-gb/">SN</a>
                        <a href="https://www.instagram.com/">IG</a>
                        <a href="https://www.facebook.com/">FB</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Home