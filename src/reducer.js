export const intialState =({
    basket:[],
    user:{}
})


const reducer = (state,action)=>{
    console.log("state value ", state, action);
    switch(action.type){
        case "ADD_TO_BASCKET":
            return { ...state, basket:[...state.basket , action.item] }
        case "REMOVE_FROM_BASKET":
            return { state }
        default :
            return state;
    }
}

export default reducer;