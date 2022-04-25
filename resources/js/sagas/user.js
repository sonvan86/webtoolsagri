import { takeEvery, put, call } from 'redux-saga/effects'
import { getUsers, addUser } from '../services/user'
import actions from '../actions'

function* getUsersAsync(routeParam) {
    const data = yield call(getUsers, routeParam.value)
    if (data) {
        yield put({
            type: actions.USER_GET_LIST,
            value: { ...routeParam.value, ...data },
        })
    }
}

export function* watchGetUsers() {
    yield takeEvery(actions.SAGA_USER_GET_LIST, getUsersAsync)
}

function* addUserAsync(routeParam) {
    const data = yield call(addUser, routeParam.value)
    if (data) {
        yield put({
            type: actions.ADD_USER,
            value: {
                ...{
                    page: routeParam.value.page,
                    keyword: routeParam.value.keyword,
                },
                ...data,
            },
        })
    }
}

export function* watchAddUser() {
    yield takeEvery(actions.SAGA_ADD_USER, addUserAsync)
}
