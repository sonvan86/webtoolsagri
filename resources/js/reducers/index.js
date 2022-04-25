import { combineReducers } from 'redux'
import globalReducer from './global'
import userReducer from './user'
import organisationReducer from './organisation'
import addUserModalReducer from './add-user-modal'
import addOrganisationModalReducer from './add-organisation-modal'

const RootReducer = combineReducers({
    global: globalReducer,
    user: userReducer,
    organisation: organisationReducer,
    addUserModal: addUserModalReducer,
    addOrganisationModal: addOrganisationModalReducer,
})

export default RootReducer
