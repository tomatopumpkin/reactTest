import portfolioActionTypes from "./portfoli.types";

export const fetchProfolioStart = () => ({
    type:portfolioActionTypes.FETCH_DATA_START,
});

export const fetchProfolioSucess = (portfolio_data) => ({
    type:portfolioActionTypes.FETCH_DATA_SUCCESS,
    payload:portfolio_data
});

export const fetchProfolioFailure = (error) => ({
    type:portfolioActionTypes.FETCH_DATA_FAILURE,
    payload:error,
});
