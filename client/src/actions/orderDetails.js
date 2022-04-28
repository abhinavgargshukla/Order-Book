import * as api from '../api/index.js';

export const showProducts=(navigate,data)=>async(dispatch)=>{
    try{
        
           dispatch({type:'ORDERDETAILS',data});
           console.log('data',typeof(data));
           console.log('orderDetails',data);
           navigate('/orders/products');
    }
    catch(error){
        console.log(error);

        
    }
}

export const deleteOrder=(data)=>async(dispatch)=>{
    try{
                 dispatch({type:'DELETEORDER',data});
                 console.log('deleteOrder',data);
    }
    catch(error)
    {
        console.log(error);
        console.log('shukla');
    }
}