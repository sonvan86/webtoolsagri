export const createUser = async (request) => {
    try {
        const response = await fetch(`http://localhost:8000/register`, {
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

        return true
    } catch (e) {
        localStorage.setItem('isAuthenticated', false)

        return false
    }
}

export const getUsers = async (request) => {
    try {
        const { page, keyword } = request
        const response = await fetch(
            `http://localhost:8000/users?page=${page}&keyword=${keyword}`,
            {
                method: 'GET',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        )
        if (400 > response.status) {
            const users = await response.json()
            return users
        }

        return []
    } catch (e) {
        localStorage.setItem('isAuthenticated', false)

        return false
    }
}

export const addUser = async (request) => {
    try {
        const {
            name,
            email,
            organisation,
            type,
            contract_start,
            page,
            keyword,
        } = request
        const response = await fetch(`http://localhost:8000/users`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                type: type,
                organisation: organisation,
                contract_start: contract_start,
                page: page,
                keyword: keyword,
            }),
        })
        if (400 > response.status) {
            const users = await response.json()
            return users
        }

        return []
    } catch (e) {
        localStorage.setItem('isAuthenticated', false)

        return false
    }
}
