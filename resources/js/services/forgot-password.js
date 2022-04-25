export const resetPassword = async (request) => {
    try {
        const response = await fetch(`http://localhost:8000/password/reset`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        })

        if (200 === response.status) {
            return true
        }
    } catch (e) {
        return false
    }
}

export const requestResetPasswordLink = async (request) => {
    try {
        const response = await fetch(`http://localhost:8000/password/email`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        })

        if (200 === response.status) {
            return true
        }
    } catch (e) {
        return false
    }
}
