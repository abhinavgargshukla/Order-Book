import * as api from '../api/index.js';

export const showOrders=(navigate,formData)=>async(dispatch)=>{
    try{
        var data=null;
          if(formData.orderid!==''){
             data =await api.fetchOrdersbyId(formData.orderid);
           }
           else if(formData.email!==''){
                 data=await api.fetchOrdersbyEmail(formData.email);
           }
         

           dispatch({type:'ORDERS',data});
           //console.log('data',typeof(data));
           console.log('action',data.data[0].products);
        if(data)
           navigate('/orders');
    }
    catch(error){
        console.log(error);

        
    }
}
export const showAll=(navigate)=>async(dispatch)=>{
    try{
        
         
            const data =await api.fetchAll();
           
         

           dispatch({type:'ORDERS',data});
           //console.log('data',typeof(data));
           console.log('action',data.data[0].products);
        if(data)
           navigate('/orders');
    }
    catch(error){
        console.log(error);

        
    }
}

export const sortByDate=(datas,navigate)=>async(dispatch)=>{
   try{
    const compare=(a,b)=>{
        const str1=a.order_date.split(",");
        const str2=b.order_date.split(",");
        console.log('before',datas);

        const date1=str1[0].split(" ");
        const date2=str2[0].split(" ");
        const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
        if(date1[2]!==date2[2]){
            return date1[2]>date2[2]?1:-1;
        }
        
       else if(date1[0]!==date2[0]){
            for(var i=0;i<months.length;i++){
                if(date1[0]===months[i])
                {
                    return -1;
                }
                if(date2[0]===months[i]){
                    return 1;
                }
            }
        }
       else if(date1[1]!==date2[1]){
            return parseInt(date1[1])>parseInt(date2[1])?1:-1;

        }
        return str1[1]>str2[1]?1:-1;
    }
    datas.sort(compare);
   
    console.log('reaced',datas);
    dispatch({type:'SORTORDERS',data:datas});
    
   navigate('/orders');

   }
   catch(error){

   }
}

export const filterOrders=(navigate,filterData,datas)=>async(dispatch)=>{
    try{

             const filteredData=await datas.filter((d)=>(d.manufacturer.includes(filterData.supplier)|| filterData.supplier==="" )
             &&(d.category.includes(filterData.category)||filterData.category==="" )
             && (d.products.includes(filterData.productName)||filterData.productName==="" ));

                // d.category.includes(filterData.category) && d.manufacturer.includes(filterData.supplier) 
                // && d.geoip.country_iso_code===filterData.countryofOrder 
                // && d.products.includes(filterData.productName);
            
            console.log('filtered',filteredData);
    dispatch({type:'SORTORDERS',data:filteredData});
    
   navigate('/orders'); 
    }
    catch(error){
        console.log(error);
    }
}


