import playerActionType from "./PlayerTypes";
import Axios from 'axios'

export const fetchPlayerStart = () => ({
    type: playerActionType.FETCH_PLAYERS_START
})

export const fetchPlayerSuccess = (playerData) => ({
    type: playerActionType.FETCH_PLAYERS_SUCCESS,
    payload: playerData
})

export const fetchPlayerFailure = (errorMsg) => ({
    type: playerActionType.FETCH_PLAYERS_FAILURE,
    payload: errorMsg
})

export const fetchPlayerAsync = () => {
    return dispatch => {
        dispatch(fetchPlayerStart())
        Axios.get('https://cors-anywhere.herokuapp.com/venados.dacodes.mx/api/players', {
            headers: {
                "accept": "application/json",
            }
        }).then(reponse => {
            dispatch(fetchPlayerSuccess(reponse.data.data))
        }).then()
            .catch(error => {
                dispatch(fetchPlayerFailure(error))
            })
    }
}