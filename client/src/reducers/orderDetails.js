const orderDetailsReducer=(state=[],action)=>{
    switch(action.type){
        case 'ORDERDETAILS':  
            return action.data;
        case 'DELETEORDER':
            return state.filter((order)=>order!==action.data);
        default:
            return state;
    }
}

export default orderDetailsReducer;