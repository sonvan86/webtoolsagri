import actions from '../actions'

const initial = {
    status: 0,
}

const addUserModal = (state = initial, action) => {
    switch (action.type) {
        case actions.CLOSE_ADD_USER_MODAL:
            return {
                ...state,
                status: 0,
            }
        case actions.OPEN_ADD_USER_MODAL:
            return {
                ...state,
                status: 1,
            }
        default:
            return state
    }
}

export default addUserModal
