import {createContext, useContext} from "react"
import useLocalStorage from "../hooks/useLocalStorage"

const initialState = null

const userContext = createContext({})

const UserProvider = ({children}) => {
    const [user, setUser] = useLocalStorage("user", initialState)
    return <userContext.Provider value={{ user, setUser }}>{children}</userContext.Provider>
}

const useUserContext = () => {
    const c = useContext(userContext)
    return [c.user, c.setUser]
}

export { UserProvider, useUserContext }