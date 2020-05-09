import gameActionType from "./GameTypes"


const INITIAL_STATE = {
    games: null,
    isFetching: false,
    errorMessage: undefined
}

const gameReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case gameActionType.FETCH_GAME_START:
            return {
                ...state,
                isFetching: true
            }
        case gameActionType.FETCH_GAME_SUCCESS:
            return {
                ...state,
                isFetching: false,
                games: action.payload
            }
        case gameActionType.FETCH_GAME_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case gameActionType.FILTER_BY_COPAMX:
            return {
                games: state.games.filter(game => game.league !== 'Ascenso MX')
            }
        case gameActionType.FILTER_BY_ASCENSOMX:
            return {
                ...state,
                games: state.games.filter(game => game.league !== 'Copa MX')
            }
        default:
            return state;
    }
}

export default gameReducer