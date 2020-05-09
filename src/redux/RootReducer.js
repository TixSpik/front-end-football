import { combineReducers } from "redux";
import playerReducer from "./players/PlayerReducer";
import statisticsReducer from "./statistics/StatisticsReducer";

export default combineReducers({
    players: playerReducer,
    statistics: statisticsReducer
})
