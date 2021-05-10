import "./home.scss"

import {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"

import {useUserContext} from "../../../context/user"
import useApi from "../../../api/bee-well"

import SignUpModal from "../../organisms/modals/sign-up-modal"
import SignInModal from "../../organisms/modals/sign-in-modal"
import DiscreteButton from "../../atoms/buttons/discrete-button"
import CtaButton from "../../atoms/buttons/cta-button"
import Button from "../../atoms/buttons/button"
import HomeCard from "../../organisms/cards/home-card"

const Home = () => {
    const history = useHistory()
    const [isSignUpOpen, setIsSignUpOpen] = useState(false)
    const [isSignInOpen, setIsSignInOpen] = useState(false)
    const [user, setUser] = useUserContext()
    const [userCount, setUserCount] = useState(0)
    const { authenticate, signUp, getUserCount } = useApi()

    useEffect(() => {
        if (user) {
            history.push("/panel")
        }
        updateUserCount()
    }, [])

    const updateUserCount = async () => {
        const response = await getUserCount()
        if (response.success) {
            setUserCount(response.payload.count)
        }
    }

    const onSignUp = async (firstName, lastName, email, password) => {
        const result = await signUp(firstName, lastName, email, password)
        if (result.success) {
            setIsSignUpOpen(false)
            setTimeout(() => setIsSignInOpen(true), 500)
            updateUserCount()
        } else {
            alert("I'm sorry, it seems as if we cannot process your request right now.")
        }
    }  

    const onSignIn = async (email, password) => {
        const result = await authenticate(email, password)
        if (result.success) {
            setUser({token: result.payload.token})
            history.push("/panel")
        } else {
            alert("Wrong username or password, please try again.")
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
                        <p className="home__title--accounts">We are currently helping <b>{userCount}</b> people</p>
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
                            <HomeCard />
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