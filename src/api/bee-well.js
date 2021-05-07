import axios from "axios"
import { useEffect } from "react"
import {useUserContext} from "../context/user"
import poller from "./offline-poller"

const inProduction = true

const authApi = axios.create({
    baseURL: inProduction ? "https://bw-auth.herokuapp.com" : "http://localhost:8080"
})

const moodApi = axios.create({
    baseURL: inProduction ? "https://bw-moods.herokuapp.com" : "http://localhost:3000"
})

const statisticsApi = axios.create({
    baseURL: inProduction ? "https://bw-statistics.herokuapp.com" : "http://localhost:8081"
})

const useApi = () => {
    const [user] = useUserContext()
    const [addToQueue, start] = poller()

    useEffect(() => {
        if (user) {
            const {token} = user
            authApi.defaults.headers.common["Authorization"] = token
            moodApi.defaults.headers.common["Authorization"] = token
            statisticsApi.defaults.headers.common["Authorization"] = token
        }
    }, [user])
    
    const authenticate = async (email, password) => {
        try {
            const response = await authApi.post("/sign-in", { email, password })
            const token = response.data
            return {
                success: true,
                payload: {
                    token
                }
            }
        } catch (err) {
            return {
                success: false,
                payload: {
                    message: err.response.data
                }
            }
        }
    }
    
    const getUserData = async () => {
        try {
            const response = await authApi.get("/me")
            return {
                success: true,
                payload: response.data
            }
        } catch (err) {
            return {
                success: false,
                code: err.response.status,
                payload: {
                    message: err.response.data
                }
            }
        }
    }
    
    const signUp = async (firstName, lastName, email, password) => {
        try {
            const response = await authApi.post("/sign-up", { email, password, firstName, lastName })
            return {
                success: response.status === 200
            }
        } catch (err) {
            return {
                success: false,
                payload: {
                    message: err.response.data
                }
            }
        }
    }

    const reportMood = async (mood, tags) => {
        let response
        try {
            response = await moodApi.post("/moods", { mood, tags })
            return {
                success: true
            }
        } catch (err) {
            if (!err.response) {
                addToQueue({
                    api: moodApi,
                    uri: "/moods",
                    method: "POST",
                    body: { mood, tags }
                })
                start()
                return {
                    success: false,
                    payload: {
                        message: "No internet connection"
                    }
                }
            }
            return {
                success: false,
                payload: {
                    message: response.data
                }
            }
        }
    }
    
    const getStatistics = async (from, to) => {
        let response 
        try {
            response = await statisticsApi.get(`/statistics?from=${from}&to=${to}`)
            return {
                success: true,
                payload: response.data
            }
        } catch (err) {
            return {
                success: false,
                code: err.response.status
            }
        }
    }
    
    return {
        authenticate,
        getUserData,
        getStatistics,
        reportMood,
        signUp,
    }
}

export default useApi