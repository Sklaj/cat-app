const initialState = {
    count: 0
};

export const counterReducer = function (state = initialState, action: any) {
    switch (action.type) {
        case "INCRESE_COUNT":
            return {count: state.count + 1};
        case "DECRESE_COUNT":
            return {count: state.count - 1};
        default:
            return state
    }
};
