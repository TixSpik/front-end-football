import statisticsActionType from "./StatisticsTypes";
import Axios from "axios";

export const fetchStatisticsStart = () => ({
    type: statisticsActionType.FETCH_STATISTICS_START
})

export const fetchStatisticsSuccess = (statisticsData) => ({
    type: statisticsActionType.FETCH_STATISTICS_SUCCESS,
    payload: statisticsData
})

export const fetchStatisticsFailure = (errorMsg) => ({
    type: statisticsActionType.FETCH_STATISTICS_FAILURE,
    payload: errorMsg
})

export const fetchStatisticsAsync = () => {
    return dispatch => {
        dispatch(fetchStatisticsStart())
        Axios.get('https://cors-anywhere.herokuapp.com/venados.dacodes.mx/api/statistics', {
            headers: {
                "accept": "application/json",
            }
        }).then(reponse => {
            dispatch(fetchStatisticsSuccess(reponse.data.data))
        }).then()
            .catch(error => {
                dispatch(fetchStatisticsFailure(error))
            })
    }
}
