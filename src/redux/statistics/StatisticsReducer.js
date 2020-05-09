import statisticsActionType from "./StatisticsTypes";

const INITIAL_STATE = {
    statistics: null,
    isFetching: false,
    errorMessage: undefined
}

const statisticsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case statisticsActionType.FETCH_STATISTICS_START:
            return {
                ...state,
                isFetching: true
            }
        case statisticsActionType.FETCH_STATISTICS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                statistics: action.payload
            }
        case statisticsActionType.FETCH_STATISTICS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default statisticsReducer


