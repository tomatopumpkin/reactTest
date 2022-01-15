import { combineReducers } from "redux";

import portfoliReducer from "./portfolio/portfolio.reducer";

const rootReducer = combineReducers({
    port:portfoliReducer
})

export default rootReducer;