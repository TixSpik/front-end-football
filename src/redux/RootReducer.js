import { combineReducers } from "redux";
import playerReducer from "./players/PlayerReducer";
import statisticsReducer from "./statistics/StatisticsReducer";
import gameReducer from "./games/GamesReducer";

export default combineReducers({
    players: playerReducer,
    statistics: statisticsReducer,
    games: gameReducer
})
