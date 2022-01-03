const initialState = {}

export const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionType): ProfileStateType => {
    switch (action.type) {
        default:
            return state
    }
}

// action

// thunk

// types
type ProfileStateType = typeof initialState
export type ProfileActionType = {
    type: string
}