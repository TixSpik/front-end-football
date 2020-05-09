import { createSelector } from "reselect";

const selectPlayers = state => state.players

export const selectAllPlayers = createSelector(
    [selectPlayers],
    statePlayer => statePlayer.players,
)
export const selectIsPlayerFetching = createSelector(
    [selectPlayers],
    player => player.isFetching
) 