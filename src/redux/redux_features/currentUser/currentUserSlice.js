

export function currentUserReducer(state = {}, action) {
    if (action.type === "ADD_CUSTOMER") {
        return {
            ...state,
            first_name: action.payload.first_name,
            last_name: action.payload.last_name,
            token: action.payload.token,
        }
    }
    return state;
}

export const initialCurrentUser={

}

export function selectName(state){
    return state.currentUser.first_name
}