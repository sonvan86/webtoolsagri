import { takeEvery, put, call } from 'redux-saga/effects'
import { getAuthorizedUser } from '../services/auth'
import actions from '../actions'

function* getDetailAccountAsync() {
    const data = yield call(getAuthorizedUser)
    yield put({
        type: actions.GLOBAL_UPDATE_USER,
        value: data ? data : { username: '', usertype: '' },
    })
}

export function* watchGetDetailAccount() {
    yield takeEvery(actions.SAGA_GLOBAL_UPDATE_USER, getDetailAccountAsync)
}
