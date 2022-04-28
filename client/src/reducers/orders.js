const ordersReducer=(state=[],action)=>{
    switch(action.type){
        case 'ORDERS': 
            console.log('raj',action.data);
            
            return action.data.data;
        case 'SORTORDERS':
            console.log('sortoders reducer',action.data);
            return action.data;
        default:
            return state;
    }
}

export default ordersReducer;