

const initialState: number = 0

export const mainReducer = function (state = initialState, action: any) {
    switch (action.type) {
        case "INCREMENT":
          return state + 1;
        case "DECREMENT":
          return state - 1;
        default:
          return state;
      }
};
