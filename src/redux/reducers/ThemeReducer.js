const ThemeReducer = (state = false, action) => {
    switch(action.type){
        case "TOGGLE_THEME": {
            let newState = action.payload;
            return newState;
        }

        default: {
            return state;
        }
    }
}

export default ThemeReducer