import { takeEvery, put, call } from 'redux-saga/effects'
import { getOrganisations, addOrganisation } from '../services/organisation'
import actions from '../actions'

function* getOrganisationsAsync(routeParam) {
    const data = yield call(getOrganisations, routeParam.value)
    if (data) {
        yield put({
            type: actions.ORGANISATION_GET_LIST,
            value: {
                data: data,
            },
        })
    }
}

export function* watchGetOrganisations() {
    yield takeEvery(actions.SAGA_ORGANISATION_GET_LIST, getOrganisationsAsync)
}

function* addOrganisationAsync(routeParam) {
    const data = yield call(addOrganisation, routeParam.value)
    if (data) {
        yield put({
            type: actions.ADD_ORGANISATION,
            value: {
                data: data,
            },
        })
    }
}

export function* watchAddOrganisation() {
    yield takeEvery(actions.SAGA_ADD_ORGANISATION, addOrganisationAsync)
}
