function weatherReducer(state, action) {
    switch(action.type) {
        case "SEARCH_SUBMIT":
            return action.payload;
        default:
            return state;
    }
}

export default weatherReducer;