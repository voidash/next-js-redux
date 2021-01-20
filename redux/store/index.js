import { createStore, applyMiddleware } from 'redux';
import { useMemo } from 'react';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from '../rootReducer/index';

/* 
 Compose from redux is more of a functional programming utility
 allows callling of function from left to right. 
 : Compose and pipe are bit different . pipe allows execution of first func then 2nd func
 but compose allows rightmost function to execute , its returned output is then feeded to 2nd rightmost function
 
 */

// const initStore = (initialState, options) => {
//     let composeEnhancers = compose;
//     //check if store is running in server?
//     //if then attach a redux devtools composer, instead of regular one.

//     if (!options.isServer) {
//         composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//     }

//     return createStore(rootReducer, initialState, composeEnhancers(
//         applyMiddleware(thunk)
//     ));
// }

/* new one  */

// Its not simple as in react application as store will be created on server and not on client
// global store
// create a store to init a store . should contain thunk as middleware and composer to activate react redux dev tools
// create a function to initialize a store. check if store is initialized or not.
// store is already initialized then the create a new store with its previous state
// reset our store and serve _store. a clone with everything in store + new state.
// use UseMemo for looking if component should update  
let store

function initStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    )
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState);
    //if page has initial state already then get those previous state and create a new store 

    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState
        })
        //reset current store    
        store = undefined;
    }
    // server side pages should always return a new store without changing store.
    if (typeof window === 'undefined') return _store;

    // this will work on client side only
    //reinit store for next comparison
    if (!store) store = _store;
    return _store;
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState]);
    return store;
}


