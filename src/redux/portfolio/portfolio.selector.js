import { createSelector } from "reselect";

const selectPort = (state) => state.port;

export const selectPortfolio = createSelector(
    [selectPort],
    port => port.portfolio
);