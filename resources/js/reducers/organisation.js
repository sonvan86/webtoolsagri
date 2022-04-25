import actions from '../actions'

const initial = {
    data: [],
}

const organisation = (state = initial, action) => {
    switch (action.type) {
        case actions.ORGANISATION_GET_LIST:
            return {
                ...state,
                ...action.value,
            }
        case actions.ADD_ORGANISATION:
            return {
                ...state,
                ...action.value,
            }
        default:
            return state
    }
}

export default organisation
