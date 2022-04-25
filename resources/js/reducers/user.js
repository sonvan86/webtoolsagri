import actions from '../actions'

const initial = {
    keyword: '',
    totalPage: 10,
    page: 0,
    data: [],
}

const user = (state = initial, action) => {
    switch (action.type) {
        case actions.USER_GET_LIST:
            return {
                ...state,
                ...action.value,
            }
        case actions.ADD_USER:
            return {
                ...state,
                ...action.value,
            }
        default:
            return state
    }
}

export default user
