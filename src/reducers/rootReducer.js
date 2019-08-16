const initialState = {
    count: 0
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'INCREMENT':
            console.log("Increment. State is " +state.count)
            return{
                count: state.count + 1
                
            };
        case 'DECREMENT':
            console.log("Decrement. State is " +state.count)

            return{
                
                count: state.count - 1
            };
        default:
            return state;
    }

}

export default rootReducer;