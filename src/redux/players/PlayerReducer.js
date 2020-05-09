import playerActionType from "./PlayerTypes";

const INITIAL_STATE = {
    players: null,
    isFetching: false,
    errorMessage: undefined
}

const playerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case playerActionType.FETCH_PLAYERS_START:
            return {
                ...state,
                isFetching: true
            }
        case playerActionType.FETCH_PLAYERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                players: action.payload
            }
        case playerActionType.FETCH_PLAYERS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default playerReducer