export const getOrganisations = async () => {
    try {
        const response = await fetch(`http://localhost:8000/organisations`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
        if (400 > response.status) {
            const organisations = await response.json()
            return organisations
        }

        return []
    } catch (e) {
        return false
    }
}

export const addOrganisation = async (request) => {
    try {
        const { name } = request
        const response = await fetch(`http://localhost:8000/organisation`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
            }),
        })
        if (400 > response.status) {
            const organisations = await response.json()
            return organisations
        }

        return []
    } catch (e) {
        return false
    }
}
