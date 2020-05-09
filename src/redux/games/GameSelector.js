import { createSelector } from "reselect";

const selectGames = state => state.games

export const selectAllGames = createSelector(
    [selectGames],
    stateGames => stateGames.games,
)
export const selectIsGamesFetching = createSelector(
    [selectGames],
    games => games.isFetching
)
