import gameActionType from "./GameTypes";
import Axios from "axios";

export const fetchGamesStart = () => ({
    type: gameActionType.FETCH_GAME_START
})

export const fetchGamesSuccess = (gameData) => ({
    type: gameActionType.FETCH_GAME_SUCCESS,
    payload: gameData
})

export const fetchGamesFailure = (errorMsg) => ({
    type: gameActionType.FETCH_GAME_FAILURE,
    payload: errorMsg
})

export const filterByCopaMx = () => ({
    type: gameActionType.FILTER_BY_COPAMX,
})

export const filterByAscensoMx = () => ({
    type: gameActionType.FILTER_BY_ASCENSOMX,
})

export const fetchGamesAsync = () => {
    return dispatch => {
        dispatch(fetchGamesStart())
        Axios.get('https://cors-anywhere.herokuapp.com/venados.dacodes.mx/api/games', {
            headers: {
                "accept": "application/json",
            }
        }).then(reponse => {
            dispatch(fetchGamesSuccess(reponse.data.data.games))
            dispatch(filterByCopaMx())
        }).then()
            .catch(error => {
                dispatch(fetchGamesFailure(error))
            })
    }
}
export const fetchGamesAsyncAscensoMx = () => {
    return dispatch => {
        dispatch(fetchGamesStart())
        Axios.get('https://cors-anywhere.herokuapp.com/venados.dacodes.mx/api/games', {
            headers: {
                "accept": "application/json",
            }
        }).then(reponse => {
            dispatch(fetchGamesSuccess(reponse.data.data.games))
            dispatch(filterByAscensoMx())
        }).then()
            .catch(error => {
                dispatch(fetchGamesFailure(error))
            })
    }
}