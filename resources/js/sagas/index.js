import { all, fork } from 'redux-saga/effects'
import { watchGetDetailAccount } from './account'
import { watchGetUsers, watchAddUser } from './user'
import { watchGetOrganisations, watchAddOrganisation } from './organisation'

export default function* saga() {
    yield all([
        fork(watchGetDetailAccount),
        fork(watchGetUsers),
        fork(watchAddUser),
        fork(watchGetOrganisations),
        fork(watchAddOrganisation),
    ])
}
