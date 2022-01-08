const reducer = (state = 0, action) => {
    switch (action.type) {
       case 'INCREMENT': return state + 1
       case 'DECREMENT': return state - 1
       case 'RESET' : return 0 
       default: return state
    }
 }
 export default reducer;
 //  action+reducer
// action define 3 methos, return to CONSTANTS
//reducer switches cases