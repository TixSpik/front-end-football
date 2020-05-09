import { createSelector } from "reselect";

const selectStatistics = state => state.statistics

export const selectAllStatistics = createSelector(
    [selectStatistics],
    stateStatistics => stateStatistics.statistics,
)
export const selectIsStatisticsFetching = createSelector(
    [selectStatistics],
    statistics => statistics.isFetching
) 