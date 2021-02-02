import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { allUsersReducer } from './allUsersReducer'
import { potentialContactsReducer } from './potentialContactsReducer'

export const rootReducer = combineReducers({
    user: userReducer,
    potentialContacts: potentialContactsReducer,
    allUsers: allUsersReducer
})
