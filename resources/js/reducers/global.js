import actions from '../actions'

const initial = {
    isAuthenticated:
        'true' === localStorage.getItem('isAuthenticated') ? true : false,
    username: localStorage.getItem('username')
        ? localStorage.getItem('username')
        : '',
    usertype: localStorage.getItem('usertype')
        ? localStorage.getItem('usertype')
        : '',
}

const global = (state = initial, action) => {
    switch (action.type) {
        case actions.GLOBAL_CHANGE_STATUS:
            return {
                ...state,
                isAuthenticated: action.value,
            }
        case actions.GLOBAL_UPDATE_USER:
            return {
                ...state,
                username: action.value.username,
                usertype: action.value.usertype,
            }
        default:
            return state
    }
}

export default global
