import {applyMiddleware, combineReducers, createStore} from 'redux'
import {AuthActionType, authReducer} from './auth-reducer'
import {ProfileActionType, profileReducer} from './profile-reducer'
import thunk, {ThunkAction} from 'redux-thunk'

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

//types
export type AppActionsType =
    | AuthActionType
    | ProfileActionType
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>