export const login = async (request) => {
    try {
        const response = await fetch(`http://localhost:8000/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        })
        if (400 > response.status) {
            return true
        }

        return false
    } catch (e) {
        localStorage.setItem('isAuthenticated', false)

        return false
    }
}

export const logout = async () => {
    try {
        await fetch(`http://localhost:8000/logout`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        })

        return true
    } catch (e) {
        localStorage.setItem('isAuthenticated', false)

        return false
    }
}

export const getAuthorizedUser = async () => {
    try {
        const response = await fetch(`http://localhost:8000/authorize`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })

        const data = await response.json()
        if (200 === response.status) {
            return data
        }
    } catch (e) {
        localStorage.setItem('isAuthenticated', false)

        return false
    }
}
