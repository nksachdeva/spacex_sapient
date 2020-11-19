import { combineReducers } from 'redux';
import _ from 'lodash';

const INITIAL_STATE = {
    successful: null,
    year: null
}

const successfulLaunchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FILTER_LAUNCH':
            return { ...state, successful: action.payload }
        default:
            return state
    }
}

const successfulLandReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FILTER_LAND':
            return { ...state, successful: action.payload }
        default:
            return state
    }
}

const yearReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FILTER_YEAR':
            return { ...state, year: action.payload }
        default:
            return state
    }
}

const launchReducer = (state = [], action) => {
    
    if (action.type === "FETCH_LAUNCHES") {
        return _.mapKeys(action.payload, 'flight_number');
    }

    return state;
}

export default combineReducers({
    successfulLaunch: successfulLaunchReducer,
    successfulLand: successfulLandReducer,
    year: yearReducer,
    launches: launchReducer
});