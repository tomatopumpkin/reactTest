import portfolioActionTypes from "./portfoli.types";

import PORTFOLIO_DATA from '../../assets/data/portfolio.data';

const INITIAL_STATE = {
    portfolio:PORTFOLIO_DATA,
    isFetching:false,
    error:null
}
// state , action
const portfoliReducer = (state = INITIAL_STATE , action) => {
    switch (action.type){

        case portfolioActionTypes.FETCH_DATA_START:
        return{
            ...state,
            isFetching:true
        }
        case portfolioActionTypes.FETCH_DATA_SUCCESS:
            return{
                ...state,
                portfolio:action.payload,
                isFetching:false
            }
        case portfolioActionTypes.FETCH_DATA_FAILURE:
            return{
                ...state,
                error:action.payload,
                isFetching:false
            }


        default: 
        return { ...state };
    }
}

export default portfoliReducer;