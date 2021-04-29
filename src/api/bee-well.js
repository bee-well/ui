import axios from "axios"

const inProduction = process.env.NODE_ENV === "prod"

const authApi = axios.create({
    baseURL: inProduction ? "https://bw-auth.herokuapp.com" : "http://localhost:8080"
})

const moodApi = axios.create({
    baseURL: inProduction ? "https://bw-mood.herokuapp.com" : "http://localhost:3000"
})

const statisticsApi = axios.create({
    baseURL: inProduction ? "https://bw-statistics.herokuapp.com" : "http://localhost:8081"
})

const setToken = token => {
    authApi.defaults.headers.common["Authorization"] = token
    moodApi.defaults.headers.common["Authorization"] = token
    statisticsApi.defaults.headers.common["Authorization"] = token
}

const authenticate = async (email, password) => {
    try {
        const response = await authApi.post("/sign-in", { email, password })
        const token = response.data
        setToken(token)
        return {
            success: true
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

// TODO: add offline functionality
const reportMood = async (mood, tags) => {
    let response
    try {
        response = await moodApi.post("/moods", { mood, tags })
        return {
            success: true
        }
    } catch {
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
    } catch {
        return {
            success: false
        }
    }
}

export {
    authenticate, 
    reportMood,
    getStatistics, 
    signUp 
}