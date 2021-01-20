import * as actionTypes from '../actions/actionTypes';

const initialState = {
    count: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                count: state.count + 1
            }
        case actionTypes.DECREMENT:
            return {
                count: state.count - 1
            }
        case actionTypes.RESET:
            return initialState
        default:
            return state;
    }
}
const initialTimerState = {
    lastUpdate: 0,
    light: false
}
const timeReducer = (state = initialTimerState, { type, payload }) => {
    switch (type) {
        case actionTypes.TICK:
            return {
                lastUpdate: payload.ts,
                light: payload.light
            }
        default:
            return state;
    }
}

export { counterReducer, timeReducer };
