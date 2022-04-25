import { global as globalAction } from './global'
import { user as userAction } from './user'
import { organisation as organisationAction } from './organisation'
import { addUserModal } from './add-user-modal'
import { addOrganisationModal } from './add-organisation-modal'

const actions = {
    ...globalAction,
    ...userAction,
    ...organisationAction,
    ...addUserModal,
    ...addOrganisationModal,
}

export default actions
