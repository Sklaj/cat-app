import {combineReducers, createStore} from 'redux'


export interface ICount {
    count: number
}

const initialState = {
    count: 0
};

export const countReducer = function (state = initialState, action: any) {
    switch (action.type) {
        case "INCREMENT":
          return state.count + 1;
        case "DECREMENT":
          return state.count - 1;
        default:
          return state.count;
      }
};


export const mainReducer = combineReducers(
    countReducer
);
