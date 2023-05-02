// The initialState tell intial UI for our React app.

const initialState = {
    user: null,
    isLoggedIn: false,
    interviews: [],
    counter: 0
}


// This function will return new state based on type of actions.
function reducers (state=initialState, action) {

    switch (action.type) {
        case "INC_BY":
            return { ...state, counter: state.counter + action.data  }
        case "DEC_BY":
            return { ...state, counter: state.counter - action.data  }
    
        default:
            return state
    }

}

export default reducers;