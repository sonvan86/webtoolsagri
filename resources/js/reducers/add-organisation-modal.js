import actions from '../actions'

const initial = {
    status: 0,
}

const addOrganisationModal = (state = initial, action) => {
    switch (action.type) {
        case actions.CLOSE_ADD_ORGANISATION_MODAL:
            return {
                ...state,
                status: 0,
            }
        case actions.OPEN_ADD_ORGANISATION_MODAL:
            return {
                ...state,
                status: 1,
            }
        default:
            return state
    }
}

export default addOrganisationModal
