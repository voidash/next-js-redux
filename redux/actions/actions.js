import * as actionTypes from './actionTypes'

export const serverRenderClock = () => (dispatch) => {
    dispatch({
        type: actionTypes.TICK,
        payload: { light: false, ts: Date.now() }
    })
}

export const startClock = () => (dispatch) =>
    setInterval(
        () => {
            dispatch({
                type: actionTypes.TICK,
                payload: { light: true, ts: Date.now() }
            })
        }
        , 1000);

export const incrementCount = () => ({
    type: actionTypes.INCREMENT
})

export const decrementCount = () => ({
    type: actionTypes.DECREMENT
})

export const resetCount = () => ({
    type: actionTypes.RESET
})