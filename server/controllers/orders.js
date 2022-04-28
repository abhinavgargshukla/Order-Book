import data from '../data.js';

export const getOrdersById=async(req,res)=>{
    try{
        //console.log(data);
        const {id}=req.params;

        const orders=  data.filter((d)=>d.order_id===id);
        //var ordersJson=JSON.stringify(orders);
        
       // console.log(data);
        console.log(orders);

        for(var i=0;i<orders.length;i++){
            var cat=JSON.parse(orders[i].category);
            var man=JSON.parse(orders[i].manufacturer);
            var pro=JSON.parse(orders[i].products);
            orders[i]={...orders[i],category:cat,manufacturer:man,products:pro};
        }
        res.status(200);
        res.send(orders);
    }
    catch(error)
    {
         
    }
}
export const getOrdersByEmail=async(req,res)=>{
    try{
        //console.log(data);
        const {email}=req.params;

        const orders=  data.filter((d)=>d.email===email);
        //var ordersJson=JSON.stringify(orders);
        
       // console.log(data);
        console.log(orders);

        for(var i=0;i<orders.length;i++){
            var cat=JSON.parse(orders[i].category);
            var man=JSON.parse(orders[i].manufacturer);
            var pro=JSON.parse(orders[i].products);
            orders[i]={...orders[i],category:cat,manufacturer:man,products:pro};
        }
        res.status(200);
        res.send(orders);
    }
    catch(error)
    {
         
    }
}
export const getAllOrders=async(req,res)=>{
    try{
        const orders=  data.filter((d)=>d.email!=="546");
        for(var i=0;i<orders.length;i++){
            var cat=JSON.parse(orders[i].category);
            var man=JSON.parse(orders[i].manufacturer);
            var pro=JSON.parse(orders[i].products);
            orders[i]={...orders[i],category:cat,manufacturer:man,products:pro};
        }
        res.status(200).send(orders);
    }
    catch(error){
        console.log(error);
    }
}