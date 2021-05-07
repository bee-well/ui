
const POLLER_COOLDOWN = 5000

const Poller = () => {
    const queue = []
    let running = false

    const addToQueue = request => {
        queue.push(request)
    }

    const start = () => {
        if (queue.length > 0 && !running) {
            running = true
            const interval = setInterval(async () => {
                const allRequestsHandled = await poll()
                if (allRequestsHandled) {
                    clearInterval(interval)
                    running = false
                }
            }, POLLER_COOLDOWN)
        }
    }

    const poll = async () => {
        for (let i = queue.length - 1; i >= 0; i--) {
            const request = queue[i]
            const { api, method, uri, body } = request

            let success = false
            switch (method) {
                case "POST": 
                    success = await attemptPostRequest({ api, uri, body })
                    break
            }
            if (success) {
                queue.pop()
            }
        }
        return queue.length === 0
    }

    const attemptPostRequest = async ({ api, uri, body }) => {
        try {
            await api.post(uri, body)
        } catch (err) {
            return !!err.response
        }
        return true
    }

    return [addToQueue, start]
}

export default Poller

