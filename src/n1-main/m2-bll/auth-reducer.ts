const initialState = {}

export const authReducer = (state: AuthStateType = initialState, action: AuthActionType): AuthStateType => {
    switch (action.type) {
        default:
            return state
    }
}

// action

// thunk

// types
type AuthStateType = typeof initialState
export type AuthActionType = {
    type: string
}